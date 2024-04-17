const _0x4eeaf4 = _0x538e;
function _0x538e(_0x3f14f2, _0xac0afb) {
  const _0x519666 = _0x5196();
  return (
    (_0x538e = function (_0x538ec1, _0x15feb3) {
      _0x538ec1 = _0x538ec1 - 0x72;
      let _0x113cb9 = _0x519666[_0x538ec1];
      return _0x113cb9;
    }),
    _0x538e(_0x3f14f2, _0xac0afb)
  );
}
(function (_0x203072, _0xb27463) {
  const _0x18cd11 = _0x538e,
    _0x3f2fbc = _0x203072();
  while (!![]) {
    try {
      const _0x32e6d7 =
        (-parseInt(_0x18cd11(0xa1)) / 0x1) * (parseInt(_0x18cd11(0xa5)) / 0x2) +
        -parseInt(_0x18cd11(0x77)) / 0x3 +
        (-parseInt(_0x18cd11(0x8b)) / 0x4) * (parseInt(_0x18cd11(0x97)) / 0x5) +
        -parseInt(_0x18cd11(0x9e)) / 0x6 +
        (parseInt(_0x18cd11(0x99)) / 0x7) * (parseInt(_0x18cd11(0x78)) / 0x8) +
        -parseInt(_0x18cd11(0xa6)) / 0x9 +
        (parseInt(_0x18cd11(0x76)) / 0xa) * (parseInt(_0x18cd11(0x95)) / 0xb);
      if (_0x32e6d7 === _0xb27463) break;
      else _0x3f2fbc["push"](_0x3f2fbc["shift"]());
    } catch (_0xb0d6bd) {
      _0x3f2fbc["push"](_0x3f2fbc["shift"]());
    }
  }
})(_0x5196, 0x1c953);
let API_KEY = "";
function _0x5196() {
  const _0x13e48e = [
    "close",
    "osVersion",
    "message",
    "https://u23z4zsda8.execute-api.ap-southeast-1.amazonaws.com/Prod/sdk-management/api",
    "notificationclick",
    "customerId",
    "Web\x20Push\x20Notification\x20Viewed",
    "/v2",
    "options",
    "eventProperty",
    "campaignCustomerInstanceId",
    "parse",
    "24Cnfxap",
    "stringify",
    "showNotification",
    "abcd",
    "url",
    "action1",
    "waitUntil",
    "API_KEY",
    "Web\x20Push\x20Notification\x20Clicked",
    "install",
    "2021877hAJmxe",
    "action2",
    "11805qslgKj",
    "window",
    "35YDRsqh",
    "os-version",
    "action",
    "title",
    "notification",
    "1212414fmkaJm",
    "POST",
    "Platform",
    "37zWqYKX",
    "Web\x20Push\x20Notification\x20Closed",
    "click",
    "addEventListener",
    "5872kexslU",
    "649863NaSczN",
    "events",
    "operatingSystem",
    "focus",
    "json",
    "skipWaiting",
    "30wiLcxn",
    "495156JMIHZu",
    "204448eyMbqn",
    "matchAll",
    "data",
    "push",
    "operating-system",
    "application/json",
    "then",
  ];
  _0x5196 = function () {
    return _0x13e48e;
  };
  return _0x5196();
}
const API_BASE_URL = _0x4eeaf4(0x82),
  EVENT_BASE_URL = "/event",
  EVENT_RECORD_EVENT_URL = "/record-event";
let events = {},
  operatingSystem = "",
  osVersion = "",
  Platform = "",
  customerId = "";
const recordEvent = ({
  campaignCustomerInstanceId: _0x44fb3f,
  eventName: _0x5971c3,
  name: _0xb6bb4f,
}) => {
  const _0x223b5b = _0x4eeaf4;
  fetch(
    API_BASE_URL + _0x223b5b(0x86) + EVENT_BASE_URL + EVENT_RECORD_EVENT_URL,
    {
      body: JSON[_0x223b5b(0x8c)]({
        customerId: customerId,
        events: [
          {
            campaignCustomerInstanceId: _0x44fb3f,
            eventId: events[_0x5971c3]?.["id"] || "",
            eventProperties: [
              {
                eventPropertyId:
                  events[_0x5971c3]?.[_0x223b5b(0x88)]?.[_0x223b5b(0xa0)]?.[
                    "id"
                  ],
                value: Platform,
              },
              {
                eventPropertyId:
                  events[_0x5971c3]?.["eventProperty"]?.[_0x223b5b(0x7c)]?.[
                    "id"
                  ],
                value: operatingSystem,
              },
              {
                eventPropertyId:
                  events[_0x5971c3]?.[_0x223b5b(0x88)]?.[_0x223b5b(0x9a)]?.[
                    "id"
                  ],
                value: osVersion,
              },
            ],
            name: _0xb6bb4f,
            sessionId: _0x223b5b(0x8e),
          },
        ],
      }),
      headers: { Authorization: API_KEY, "Content-Type": _0x223b5b(0x7d) },
      method: _0x223b5b(0x9f),
    }
  );
};
self[_0x4eeaf4(0xa4)](_0x4eeaf4(0x81), (_0x22af82) => {
  const _0x3185ab = _0x4eeaf4;
  try {
    const _0x36bc29 = _0x22af82[_0x3185ab(0x7a)]
      ? JSON[_0x3185ab(0x8a)](_0x22af82[_0x3185ab(0x7a)])
      : null;
    _0x36bc29 &&
      (_0x36bc29 &&
        _0x36bc29[_0x3185ab(0x92)] &&
        (API_KEY = _0x36bc29[_0x3185ab(0x92)]),
      _0x36bc29 && _0x36bc29[_0x3185ab(0xa7)] && (events = _0x36bc29["events"]),
      _0x36bc29 &&
        _0x36bc29[_0x3185ab(0x72)] &&
        (operatingSystem = _0x36bc29[_0x3185ab(0x72)]),
      _0x36bc29 &&
        _0x36bc29[_0x3185ab(0x80)] &&
        (osVersion = _0x36bc29[_0x3185ab(0x80)]),
      _0x36bc29 &&
        _0x36bc29[_0x3185ab(0xa0)] &&
        (Platform = _0x36bc29["Platform"]),
      _0x36bc29 &&
        _0x36bc29["customerId"] &&
        (customerId = _0x36bc29[_0x3185ab(0x84)]));
  } catch (_0x2271d1) {}
}),
  self["addEventListener"](_0x4eeaf4(0x7b), async function (_0x9ef153) {
    const _0x5595f9 = _0x4eeaf4;
    try {
      if (_0x9ef153[_0x5595f9(0x7a)]) {
        const _0x39bb82 = _0x9ef153[_0x5595f9(0x7a)][_0x5595f9(0x74)]();
        _0x9ef153[_0x5595f9(0x91)](
          self["registration"][_0x5595f9(0x8d)](
            _0x39bb82[_0x5595f9(0x9c)],
            _0x39bb82["options"]
          )
        ),
          recordEvent({
            campaignCustomerInstanceId:
              _0x39bb82[_0x5595f9(0x87)]["data"][_0x5595f9(0x89)] || "",
            eventName: _0x5595f9(0x85),
            name: "view",
          });
      }
    } catch (_0x402727) {}
  }),
  self[_0x4eeaf4(0xa4)](_0x4eeaf4(0x83), function (_0x470dc2) {
    const _0x157152 = _0x4eeaf4;
    try {
      _0x470dc2[_0x157152(0x9d)][_0x157152(0x7f)]();
      if (_0x470dc2[_0x157152(0x9b)] === _0x157152(0x90)) {
      } else {
        if (_0x470dc2[_0x157152(0x9b)] === _0x157152(0x96)) {
        } else {
          var _0x4c300f = _0x470dc2["notification"]["data"][_0x157152(0x8f)];
          _0x470dc2[_0x157152(0x91)](
            clients[_0x157152(0x79)]({
              includeUncontrolled: !![],
              type: _0x157152(0x98),
            })[_0x157152(0x7e)](function (_0x5de409) {
              const _0x318b33 = _0x157152;
              var _0x53c968 = null;
              for (
                var _0x559486 = 0x0;
                _0x559486 < _0x5de409["length"];
                _0x559486++
              ) {
                var _0xfdefc1 = _0x5de409[_0x559486];
                if (_0xfdefc1[_0x318b33(0x8f)] === _0x4c300f) {
                  _0x53c968 = _0xfdefc1;
                  break;
                }
              }
              return _0x53c968
                ? _0x53c968[_0x318b33(0x73)]()
                : clients["openWindow"](_0x4c300f);
            })
          ),
            recordEvent({
              campaignCustomerInstanceId:
                _0x470dc2[_0x157152(0x9d)][_0x157152(0x7a)][
                  "campaignCustomerInstanceId"
                ] || "",
              eventName: _0x157152(0x93),
              name: _0x157152(0xa3),
            });
        }
      }
    } catch (_0x989869) {}
  }),
  self[_0x4eeaf4(0xa4)]("notificationclose", function (_0x1f8a78) {
    const _0x49680d = _0x4eeaf4;
    try {
      recordEvent({
        campaignCustomerInstanceId:
          event[_0x49680d(0x9d)][_0x49680d(0x7a)][_0x49680d(0x89)] || "",
        eventName: _0x49680d(0xa2),
        name: "close",
      });
    } catch (_0x322add) {}
  }),
  self["addEventListener"](_0x4eeaf4(0x94), function (_0x3f8f07) {
    const _0xa90115 = _0x4eeaf4;
    _0x3f8f07["waitUntil"](self[_0xa90115(0x75)]());
  });
