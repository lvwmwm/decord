// Module ID: 8939
// Function ID: 70439
// Name: TwoWayLinkDiscordConsent
// Dependencies: []
// Exports: TwoWayLinkDiscordConsent

// Module 8939 (TwoWayLinkDiscordConsent)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsxs: closure_8, jsx: closure_9 } = arg1(dependencyMap[4]));
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("TwoWayLinkDiscordConsentNative");
const tmp3 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[6]).createStyles({ scroller: { "Null": 500, "Null": 16 }, flex: { flex: 1 } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkDiscordConsent.tsx");

export const TwoWayLinkDiscordConsent = function TwoWayLinkDiscordConsent(callbackCode) {
  let appDetails;
  let body;
  let clientId;
  let header;
  let redirectUri;
  let scopes;
  let tmp4;
  callbackCode = callbackCode.callbackCode;
  const arg1 = callbackCode;
  const callbackState = callbackCode.callbackState;
  const importDefault = callbackState;
  const platformType = callbackCode.platformType;
  const dependencyMap = platformType;
  const onNext = callbackCode.onNext;
  let closure_3 = onNext;
  const onError = callbackCode.onError;
  let callback = onError;
  ({ clientId, scopes, redirectUri } = callbackCode);
  const tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  [tmp4, closure_5] = callback(React.useState(false), 2);
  const items = [callbackCode, callbackState, platformType, onNext, onError];
  callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onNext(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
  const tmp6 = importDefault(dependencyMap[9])({ clientId, scopes, callback, redirectUri, withBackPressHandler: false });
  const sendAuthorize = tmp6.sendAuthorize;
  const items1 = [sendAuthorize];
  ({ header, body, appDetails } = tmp6);
  obj = { style: twoWayLinkStyles.container };
  const callback1 = React.useCallback(() => {
    callbackState(platformType[10])(null != sendAuthorize, "sendAuthorize not available");
    callback(true);
    sendAuthorize({ isAuthorized: true });
  }, items1);
  obj = { style: tmp.flex };
  const obj1 = { style: tmp.scroller };
  const obj2 = { style: twoWayLinkStyles.body };
  const items2 = [header, ];
  const items3 = [body, appDetails];
  const obj3 = { style: twoWayLinkStyles.bodyContent, children: items3 };
  const tmp3 = callback(React.useState(false), 2);
  const tmp9 = sendAuthorize;
  items2[1] = callback2(sendAuthorize, obj3);
  obj2.children = items2;
  const items4 = [callback2(sendAuthorize, obj2), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  let tmp13 = null != sendAuthorize;
  if (tmp13) {
    const obj5 = { style: twoWayLinkStyles.footerButton };
    const obj6 = {};
    const intl = arg1(dependencyMap[14]).intl;
    obj6.text = intl.string(arg1(dependencyMap[14]).t.ZN4hkc);
    obj6.onPress = callback1;
    obj6.loading = tmp4;
    obj5.children = callback3(arg1(dependencyMap[13]).Button, obj6);
    tmp13 = callback3(sendAuthorize, obj5);
  }
  obj4.children = tmp13;
  items4[1] = callback3(arg1(dependencyMap[12]).SafeAreaPaddingView, obj4);
  obj1.children = items4;
  obj.children = callback2(closure_7, obj1);
  obj.children = callback3(importDefault(dependencyMap[11]), obj);
  return callback3(tmp9, obj);
};
