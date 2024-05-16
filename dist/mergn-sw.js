const openDatabase = () => {
    return new Promise((resolve, reject) => {
      let open = indexedDB.open('MyMergnDatabase', 1);
      open.onupgradeneeded = function () {
        let db = open.result;
        if (!db.objectStoreNames.contains('MergnObjectStore')) {
          db.createObjectStore('MergnObjectStore', { keyPath: 'id' });
        }
      };
      open.onsuccess = () => resolve(open.result);
      open.onerror = () => reject(open.error);
    });
  };
  
  const getConfig = async () => {
    let db = await openDatabase();
    return new Promise((resolve, reject) => {
      let tx = db.transaction('MergnObjectStore', 'readonly');
      let store = tx.objectStore('MergnObjectStore');
      let getRequest = store.get('config');
      getRequest.onsuccess = () => resolve(getRequest.result);
      getRequest.onerror = () => reject(getRequest.error);
    });
  };
  
  const logDebug = async (LogLevel, message) => {
    try {
      let config = await getConfig();
      if (!config || !config.debugLevel) return;
  
      if (config.debugLevel <= 3) {
        if (LogLevel === 1) {
          console.info(`INFO: ${new Date().toISOString()}`, message);
        } else if (LogLevel === 2) {
          console.error(`ERROR: ${new Date().toISOString()}`, message);
        }
      }
    } catch (error) {
      console.error(error?.message || 'Error in logging debug');
    }
  };
  
  const toFullPath = url => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      // Prepend 'http://' or 'https://' to url
      // Change to 'https://' if you want secure protocol
      return `http://${url}`;
    }
    return url;
  };
  
  const recordEvent = async ({ campaignCustomerInstanceId, eventName, name }) => {
    try {
      let config = await getConfig();
      const data = {
        customerId: config.customer,
        events: [
          {
            campaignCustomerInstanceId,
            eventId: config.events[eventName]?.id || '',
            eventProperties: [
              {
                eventPropertyId: config.events[eventName]?.eventProperty?.['Platform']?.id,
                value: config.Platform,
              },
              {
                eventPropertyId: config.events[eventName]?.eventProperty?.['operating-system']?.id,
                value: config.operatingSystem,
              },
              {
                eventPropertyId: config.events[eventName]?.eventProperty?.['os-version']?.id,
                value: config.osVersion,
              },
            ],
            name,
            sessionId: 'abcd',
          },
        ],
      };
  
      try {
        const API_BASE_URL = 'https://95sidwa5jk.execute-api.ap-southeast-1.amazonaws.com/Prod/sdk-management/api';
  
        const EVENT_BASE_URL = '/event';
        const EVENT_RECORD_EVENT_URL = '/record-event';
  
        fetch(`${API_BASE_URL}/v2${EVENT_BASE_URL}${EVENT_RECORD_EVENT_URL}`, {
          body: JSON.stringify(data),
          headers: {
            Authorization: config.API_KEY,
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
      } catch (error) {
        logDebug(2, error?.message || 'Error in recording event');
      }
  
      const { API_KEY, events, ...rest } = config;
  
      logDebug(1, `Recording event config: ${rest}`);
      logDebug(1, `Recording event: ${data}`);
    } catch (error) {
      logDebug(2, error?.message || 'Error in recording event');
    }
  };
  
  self.addEventListener('message', async event => {
    try {
      console.log('🚀 ~ message: received on SW');
  
      let config = await getConfig();
  
      const data = event.data ? JSON.parse(event.data) : null;
  
      if (data) {
        let db = await openDatabase();
        let tx = db.transaction('MergnObjectStore', 'readwrite');
        let store = tx.objectStore('MergnObjectStore');
        let updatedConfig = {
          id: 'config', // Ensure the object has the property 'id' with value 'config'
          ...(config || {}),
          ...data,
        };
        store.put(updatedConfig);
      }
  
      if (data.events) {
        const { API_KEY, events, ...rest } = data;
        logDebug(1, `Message event received: ${JSON.stringify(rest)}`);
      } else {
        logDebug(1, `Message event received: ${JSON.stringify(data)}`);
      }
  
      const { API_KEY, events, ...rest } = config;
      logDebug(1, `Message event config: ${JSON.stringify(rest)}`);
    } catch (error) {
      logDebug(2, error?.message || 'Error in message event');
    }
  });
  
  self.addEventListener('push', async function (event) {
    try {
      if (event.data) {
        const data = event.data.json();
  
        logDebug(1, `Push event data received: ${JSON.stringify(event.data)}`);
  
        event.waitUntil(self.registration.showNotification(data.title, data.options));
  
        recordEvent({
          campaignCustomerInstanceId: data.options.data.campaignCustomerInstanceId || '',
          eventName: 'Web Push Notification Viewed',
          name: 'view',
        });
      }
    } catch (error) {
      logDebug(2, error?.message || 'Error in push event');
      //
    }
  });
  
  self.addEventListener('notificationclick', async function (event) {
    try {
      logDebug(1, `Notification click event received: ${JSON.stringify(event?.notification?.data)}`);
  
      event.notification.close();
  
      if (event.action === 'action1') {
        // Handle action 1
      } else if (event.action === 'action2') {
        // Handle action 2
      } else {
        // Handle notification click
  
        // Get the URL from the notification data
        var urlToOpen = event.notification.data.url;
  
        event.waitUntil(
          // eslint-disable-next-line no-undef
          clients
            .matchAll({
              includeUncontrolled: true,
              type: 'window',
            })
            .then(function (windowClients) {
              var matchingClient = null;
  
              for (var i = 0; i < windowClients.length; i++) {
                var windowClient = windowClients[i];
                if (windowClient.url === urlToOpen) {
                  matchingClient = windowClient;
                  break;
                }
              }
  
              if (matchingClient) {
                return matchingClient.focus();
              } else {
                // eslint-disable-next-line no-undef
                return clients.openWindow(toFullPath(urlToOpen));
              }
            })
        );
  
        recordEvent({
          campaignCustomerInstanceId: event.notification.data.campaignCustomerInstanceId || '',
          eventName: 'Web Push Notification Clicked',
          name: 'click',
        });
      }
    } catch (error) {
      logDebug(2, error?.message || 'Error in notification click event');
      //
    }
  });
  
  self.addEventListener('notificationclose', async function (event) {
    try {
      logDebug(1, `Notification close event received: ${JSON.stringify(event?.notification?.data)}`);
  
      recordEvent({
        campaignCustomerInstanceId: event.notification.data.campaignCustomerInstanceId || '',
        eventName: 'Web Push Notification Closed',
        name: 'close',
      });
    } catch (error) {
      logDebug(2, error?.message || 'Error in notification close event');
      //
    }
  });
  
  self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting()); // Force waiting service worker to become active
  });
  
  self.addEventListener('pushsubscriptionchange', async event => {
    try {
      logDebug(1, `Push subscription change event received: ${JSON.stringify(event)}`);
  
      let config = await getConfig();
  
      const API_BASE_URL = 'https://95sidwa5jk.execute-api.ap-southeast-1.amazonaws.com/Prod/sdk-management/api';
  
      event.waitUntil(
        fetch(`${API_BASE_URL}/device/add-device-token`, {
          body: JSON.stringify({
            device_id: config.device_id,
            is_web_push_subscribed: true,
            web_push_subscription_page_url: '/',
            web_push_token: {
              token: {
                endpoint: event.newSubscription ? event.newSubscription.endpoint : null,
                expirationTime: null,
                keys: {
                  auth: event.newSubscription ? event.newSubscription.toJSON().keys.auth : null,
                  p256dh: event.newSubscription ? event.newSubscription.toJSON().keys.p256dh : null,
                },
              },
            },
          }),
          headers: {
            Authorization: config.API_KEY,
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })
      );
    } catch (error) {
      logDebug(2, error?.message || 'Error in push subscription change event');
    }
  });
  