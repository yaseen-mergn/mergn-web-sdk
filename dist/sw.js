const _0xef19bc=_0x23e6;function _0x23e6(_0x2d531f,_0x24a0ae){const _0x977e4f=_0x977e();return _0x23e6=function(_0x23e6e3,_0x2aee50){_0x23e6e3=_0x23e6e3-0xf1;let _0x49f907=_0x977e4f[_0x23e6e3];return _0x49f907;},_0x23e6(_0x2d531f,_0x24a0ae);}(function(_0x1ae7bd,_0x57f5c5){const _0x3b59f9=_0x23e6,_0x4cc7a5=_0x1ae7bd();while(!![]){try{const _0x14d476=parseInt(_0x3b59f9(0x10b))/0x1*(parseInt(_0x3b59f9(0x10f))/0x2)+-parseInt(_0x3b59f9(0x103))/0x3+parseInt(_0x3b59f9(0xf8))/0x4*(-parseInt(_0x3b59f9(0x11b))/0x5)+parseInt(_0x3b59f9(0x116))/0x6*(parseInt(_0x3b59f9(0xf6))/0x7)+-parseInt(_0x3b59f9(0x102))/0x8+-parseInt(_0x3b59f9(0xf7))/0x9*(parseInt(_0x3b59f9(0x100))/0xa)+-parseInt(_0x3b59f9(0xfa))/0xb*(-parseInt(_0x3b59f9(0xfd))/0xc);if(_0x14d476===_0x57f5c5)break;else _0x4cc7a5['push'](_0x4cc7a5['shift']());}catch(_0x1de2d2){_0x4cc7a5['push'](_0x4cc7a5['shift']());}}}(_0x977e,0x7b70d));let API_KEY='';const API_BASE_URL='https://95sidwa5jk.execute-api.ap-southeast-1.amazonaws.com/Prod/sdk-management/api',EVENT_BASE_URL='/event',EVENT_RECORD_EVENT_URL=_0xef19bc(0x112);let events={},campaignCustomerInstanceId='',operatingSystem='',osVersion='',Platform='',customerId='';const recordEvent=({eventName:_0x5c0b77,name:_0x259745})=>{const _0x1b8a7a=_0xef19bc;fetch(API_BASE_URL+'/v2'+EVENT_BASE_URL+EVENT_RECORD_EVENT_URL,{'body':JSON['stringify']({'customerId':customerId,'campaignCustomerInstanceId':campaignCustomerInstanceId,'events':[{'eventId':events[_0x5c0b77]?.['id']||'','eventProperties':[{'eventPropertyId':events[_0x5c0b77]?.['eventProperty']?.[_0x1b8a7a(0x11f)]?.['id'],'value':Platform},{'eventPropertyId':events[_0x5c0b77]?.[_0x1b8a7a(0x105)]?.[_0x1b8a7a(0xff)]?.['id'],'value':operatingSystem},{'eventPropertyId':events[_0x5c0b77]?.[_0x1b8a7a(0x105)]?.[_0x1b8a7a(0x101)]?.['id'],'value':osVersion}],'name':_0x259745,'sessionId':_0x1b8a7a(0x106)}]}),'headers':{'Authorization':API_KEY,'Content-Type':_0x1b8a7a(0x11e)},'method':'POST'});};self[_0xef19bc(0xf4)](_0xef19bc(0xf1),_0x374d3b=>{const _0x896cb4=_0xef19bc;try{const _0x469288=_0x374d3b[_0x896cb4(0x114)]?JSON['parse'](_0x374d3b[_0x896cb4(0x114)]):null;console[_0x896cb4(0x10e)]('🚀\x20~\x20data:',_0x469288),_0x469288&&(_0x469288&&_0x469288[_0x896cb4(0xfb)]&&(API_KEY=_0x469288[_0x896cb4(0xfb)]),_0x469288&&_0x469288['events']&&(events=_0x469288[_0x896cb4(0x113)]),_0x469288&&_0x469288[_0x896cb4(0x119)]&&(operatingSystem=_0x469288['operatingSystem']),_0x469288&&_0x469288[_0x896cb4(0xf2)]&&(osVersion=_0x469288['osVersion']),_0x469288&&_0x469288[_0x896cb4(0x11f)]&&(Platform=_0x469288['Platform']),_0x469288&&_0x469288['customerId']&&(customerId=_0x469288['customerId']));}catch(_0x3b2171){}}),self[_0xef19bc(0xf4)](_0xef19bc(0xfc),async function(_0xa6fcb){const _0x1e3584=_0xef19bc;try{if(_0xa6fcb[_0x1e3584(0x114)]){const _0x2a3453=_0xa6fcb['data'][_0x1e3584(0x10d)]();_0xa6fcb[_0x1e3584(0x11d)](self[_0x1e3584(0x111)][_0x1e3584(0x108)](_0x2a3453[_0x1e3584(0x11c)],_0x2a3453[_0x1e3584(0xf5)])),campaignCustomerInstanceId=_0x2a3453['extras']?.[_0x1e3584(0x11a)]||'',recordEvent({'eventName':'Web\x20Push\x20Notification\x20Viewed','name':_0x1e3584(0xfe)});}}catch(_0x56228b){}}),self[_0xef19bc(0xf4)]('notificationclick',function(_0x55c4fb){const _0x467812=_0xef19bc;try{console[_0x467812(0x10e)](_0x467812(0x10c),_0x55c4fb),_0x55c4fb[_0x467812(0x104)][_0x467812(0xf9)]();if(_0x55c4fb[_0x467812(0x10a)]===_0x467812(0x121)){}else{if(_0x55c4fb['action']===_0x467812(0x118)){}else{var _0x101286=_0x55c4fb['notification'][_0x467812(0x114)]['url'];_0x55c4fb[_0x467812(0x11d)](clients[_0x467812(0x110)]({'includeUncontrolled':!![],'type':_0x467812(0x115)})['then'](function(_0x118a39){const _0x45e4c3=_0x467812;var _0x35fbd0=null;for(var _0x49da55=0x0;_0x49da55<_0x118a39[_0x45e4c3(0x117)];_0x49da55++){var _0x37ba56=_0x118a39[_0x49da55];if(_0x37ba56[_0x45e4c3(0x107)]===_0x101286){_0x35fbd0=_0x37ba56;break;}}return _0x35fbd0?_0x35fbd0[_0x45e4c3(0xf3)]():clients[_0x45e4c3(0x109)](_0x101286);})),recordEvent({'eventName':'Web\x20Push\x20Notification\x20Clicked','name':'click'});}}}catch(_0x1fa2f0){}}),self[_0xef19bc(0xf4)](_0xef19bc(0x120),function(_0x1487ec){const _0x311b1d=_0xef19bc;try{recordEvent({'eventName':'Web\x20Push\x20Notification\x20Closed','name':_0x311b1d(0xf9)});}catch(_0x510360){}}),self[_0xef19bc(0xf4)](_0xef19bc(0x122),function(_0xceb63a){const _0x401b05=_0xef19bc;_0xceb63a[_0x401b05(0x11d)](self['skipWaiting']());});function _0x977e(){const _0x3910e9=['22zDroom','API_KEY','push','6635388ZXWvmY','view','operating-system','515090nVwXZx','os-version','6841688JgYkIh','492837TBIVpM','notification','eventProperty','abcd','url','showNotification','openWindow','action','1591kLKkwk','🚀\x20~\x20event:','json','log','698YQBaqn','matchAll','registration','/record-event','events','data','window','3126rpyHnZ','length','action2','operatingSystem','campaignCustomerInstanceId','25905cHgWyq','title','waitUntil','application/json','Platform','notificationclose','action1','install','message','osVersion','focus','addEventListener','options','1022XgltHt','9lCCvhL','124QxsDhS','close'];_0x977e=function(){return _0x3910e9;};return _0x977e();}