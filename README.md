# Mergn Web SDK

[![npm version](https://img.shields.io/npm/v/mergn-webapp-sdk)](https://www.npmjs.com/package/mergn-webapp-sdk)
[![npm downloads](https://img.shields.io/npm/dm/mergn-webapp-sdk.svg)](https://www.npmjs.com/package/mergn-webapp-sdk)

## Installation

Mergn Web SDK is available as an npm package.

### Use a package manager

`npm install mergn-webapp-sdk --save`

## Initialization

#### Add your Mergn account credentials

```javascript
import mergn from 'mergn-webapp-sdk';

mergn.init('Api_Key'); // Replace with values applicable to you. Refer below
```

`Api_Key` (mandatory): This value is given by Mergn Team.

### Event Record

Events monitor specific user actions within your app or website, such as app launch, product view, song play, photo share, purchase, or item favoring.

```javascript
// event without properties
mergn.recordEvent('Product viewed');

// event with properties
mergn.recordEvent('Product viewed', [{ eventProperty: 'Mens Accessories', value: 59.99 }]);
```

### Attribute Record

Records or updates the attributes of user such as name, age or address.

```javascript
mergn.recordAttribute('Age', 35);
```

### User Login

Use this method where user is logged in successfully to record login event.

```javascript
mergn.login('Unique_Identity');
```

`Unique_Identity` (mandatory): This value is the customer's unique identity in your database like `Id` or `Email`.

### User Logout

Use this method where user is logged out successfully to record logout event.

```javascript
mergn.logout();
```

### Offline Mode

`mergn-webapp-sdk` automatically queue events in case of internet disruption, and sends them once internet is restored while the user is on the website

max event queue limit is 50, after which events are ignored

### Debugging

! MUST DISABLE ON PRODUCTION

To show logs while debugging

```javascript
mergn.setDebugLevel(LOG_LEVEL);
```

`LOG_LEVEL` (mandatory): Enter corresponding value:

`NONE = 0,
  INFO = 1,
  ERROR = 2,
  ALL = 3,`

Default is 0
