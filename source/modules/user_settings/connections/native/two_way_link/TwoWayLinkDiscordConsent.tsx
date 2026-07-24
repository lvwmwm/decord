// Module ID: 8990
// Function ID: 70731
// Name: TwoWayLinkDiscordConsent
// Dependencies: [5, 57, 31, 27, 33, 3, 4130, 8982, 4938, 8991, 44, 5585, 5121, 4543, 1212, 2]
// Exports: TwoWayLinkDiscordConsent

// Module 8990 (TwoWayLinkDiscordConsent)
import timestamp from "timestamp";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsxs: closure_8, jsx: closure_9 } = jsxProd);
importDefaultResult = new importDefaultResult("TwoWayLinkDiscordConsentNative");
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ scroller: { alignSelf: "stretch", flexShrink: 1 }, flex: { flex: 1 } });
const result = require("result").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkDiscordConsent.tsx");

export const TwoWayLinkDiscordConsent = function TwoWayLinkDiscordConsent(callbackCode) {
  let appDetails;
  let body;
  let clientId;
  let result;
  let header;
  let redirectUri;
  let scopes;
  let tmp4;
  callbackCode = callbackCode.callbackCode;
  const callbackState = callbackCode.callbackState;
  const platformType = callbackCode.platformType;
  const onNext = callbackCode.onNext;
  const onError = callbackCode.onError;
  ({ clientId, scopes, redirectUri } = callbackCode);
  const tmp = callback3();
  let obj = callbackCode(platformType[7]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  [tmp4, result] = onError(React.useState(false), 2);
  const items = [callbackCode, callbackState, platformType, onNext, onError];
  const callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onNext(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
  obj = { clientId, scopes, responseType: "code", callback, isTrustedName: true, isEmbeddedFlow: true, redirectUri, withBackPressHandler: false };
  const tmp6 = callbackState(platformType[9])(obj);
  const sendAuthorize = tmp6.sendAuthorize;
  const items1 = [sendAuthorize];
  ({ header, body, appDetails } = tmp6);
  obj = { style: twoWayLinkStyles.container };
  const callback1 = React.useCallback(() => {
    callbackState(platformType[10])(null != sendAuthorize, "sendAuthorize not available");
    callback(true);
    sendAuthorize({ isAuthorized: true });
  }, items1);
  const obj1 = { style: tmp.flex };
  const obj2 = { style: tmp.scroller };
  const obj3 = { style: twoWayLinkStyles.body };
  const items2 = [header, ];
  const items3 = [body, appDetails];
  const obj4 = { style: twoWayLinkStyles.bodyContent, children: items3 };
  const tmp3 = onError(React.useState(false), 2);
  const tmp9 = sendAuthorize;
  items2[1] = callback(sendAuthorize, obj4);
  obj3.children = items2;
  const items4 = [callback(sendAuthorize, obj3), ];
  const obj5 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  let tmp13 = null != sendAuthorize;
  if (tmp13) {
    const obj6 = { style: twoWayLinkStyles.footerButton };
    const obj7 = { size: "lg", variant: "primary" };
    const intl = callbackCode(platformType[14]).intl;
    obj7.text = intl.string(callbackCode(platformType[14]).t.ZN4hkc);
    obj7.onPress = callback1;
    obj7.loading = tmp4;
    obj6.children = callback2(callbackCode(platformType[13]).Button, obj7);
    tmp13 = callback2(sendAuthorize, obj6);
  }
  obj5.children = tmp13;
  items4[1] = callback2(callbackCode(platformType[12]).SafeAreaPaddingView, obj5);
  obj2.children = items4;
  obj1.children = callback(closure_7, obj2);
  obj.children = callback2(callbackState(platformType[11]), obj1);
  return callback2(tmp9, obj);
};
