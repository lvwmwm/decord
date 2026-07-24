// Module ID: 12934
// Function ID: 100358
// Name: ActivateDevice
// Dependencies: [57, 31, 27, 33, 4130, 689, 12935, 12937, 10861, 9018, 12938, 8994, 12939, 5085, 12940, 12944, 12945, 1392, 12946, 5121, 2]
// Exports: ActivateDevice

// Module 12934 (ActivateDevice)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_5, ImageBackground: closure_6, ActivityIndicator: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = { background: { flex: 1 } };
_createForOfIteratorHelperLoose = { marginVertical: 0, resizeMode: "cover", backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
_createForOfIteratorHelperLoose.imageStyle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.safeArea = { flex: 1, justifyContent: "center", alignItems: "center" };
let obj1 = { maxWidth: 480, backgroundColor: require("_createForOfIteratorHelperLoose").colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
_createForOfIteratorHelperLoose.content = obj1;
_createForOfIteratorHelperLoose.scroller = { alignSelf: "stretch", flexGrow: 0 };
_createForOfIteratorHelperLoose.scrollerContent = { flexDirection: "column", gap: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = (onClose) => {
  onClose = onClose.onClose;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(deviceCodeAuthorizeCallback.useState({ type: "user-code-input", usePrefilledCode: true }), 2);
  const first = tmp2[0];
  const importDefault = tmp4;
  const tmp5 = callback(deviceCodeAuthorizeCallback.useState(null), 2);
  const first1 = tmp5[0];
  callback = tmp5[1];
  let obj = first(first1[6]);
  const activateDeviceStepTracking = obj.useActivateDeviceStepTracking(first);
  let items = [tmp2[1]];
  callback = deviceCodeAuthorizeCallback.useCallback(() => {
    tmp4({ type: "user-code-input" });
  }, items);
  const items1 = [tmp2[1]];
  const items2 = [tmp2[1]];
  const callback1 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    tmp4({ type: "success", userCodeData });
  }, items1);
  const callback2 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    tmp4({ type: "error", userCodeData });
  }, items2);
  let obj1 = first(first1[7]);
  deviceCodeAuthorizeCallback = obj1.useDeviceCodeAuthorizeCallback(callback, callback2, callback1);
  const items3 = [deviceCodeAuthorizeCallback];
  const items4 = [first];
  const callback3 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    let closure_0 = userCodeData;
    let obj = { type: "authorization", userCodeData };
    tmp4(obj);
    obj = { clientId: null, scopes: null, responseType: "code", isTrustedName: true, isEmbeddedFlow: true, withBackPressHandler: false };
    ({ clientId: obj3.clientId, scopes: obj3.scopes } = userCodeData);
    obj.callbackWithoutPost = function callbackWithoutPost(arg0) {
      return outer1_4(closure_0, arg0);
    };
    first(first1[8]).openOAuth2Modal(obj);
  }, items3);
  const effect = deviceCodeAuthorizeCallback.useEffect(() => {
    if ("userCodeData" in first) {
      const userCodeData = first.userCodeData;
      const items = [first(first1[9]).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, first(first1[9]).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID];
      if (items.includes(userCodeData.clientId)) {
        callback(tmp4(first1[10]));
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((arg0) => first(first1[11]).isSocialLayerUmbrellaScope(arg0))) {
          callback(callback(first1[12]));
        }
      }
    }
  }, items4);
  const items5 = [first1];
  const effect1 = deviceCodeAuthorizeCallback.useEffect(() => {
    if (null != first1) {
      tmp4(first1[13]).preload(first1);
      const obj = tmp4(first1[13]);
    }
  }, items5);
  const type = first.type;
  if ("user-code-input" === type) {
    obj = {};
    let prefilledUserCode;
    if (first.usePrefilledCode) {
      prefilledUserCode = onClose.prefilledUserCode;
    }
    obj.prefilledUserCode = prefilledUserCode;
    obj.onUserCodeAccepted = callback3;
    obj.onClose = onClose;
    let tmp21Result = jsx(first(first1[14]).UserCodeInput, {});
    const tmp21 = jsx;
  } else if ("authorization" === type) {
    obj = { animating: true };
    tmp21Result = <closure_7 animating />;
  } else if ("success" === type) {
    obj1 = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
    tmp21Result = jsx(first(first1[15]).ActivateDeviceSuccess, { onComplete: onClose, data: first.userCodeData, successImage: first1 });
  } else {
    tmp21Result = null;
    if ("error" === type) {
      const obj2 = { onRetry: callback };
      tmp21Result = jsx(first(first1[16]).ActivateDeviceError, { onRetry: callback });
    }
  }
  const obj3 = {};
  let obj6 = first(first1[17]);
  obj3.source = obj6.makeSource(importDefault(first1[18]));
  obj3.imageStyle = tmp.imageStyle;
  const items6 = [tmp.background];
  obj3.style = items6;
  const obj4 = { bottom: true, top: true, style: tmp.safeArea };
  const obj5 = { style: tmp.content };
  obj6 = { bounces: false, style: tmp.scroller, contentContainerStyle: tmp.scrollerContent, children: tmp21Result };
  obj5.children = <closure_8 bounces={false} style={tmp.scroller} contentContainerStyle={tmp.scrollerContent}>{tmp21Result}</closure_8>;
  obj4.children = <closure_5 style={tmp.content} />;
  obj3.children = jsx(first(first1[19]).SafeAreaPaddingView, { bottom: true, top: true, style: tmp.safeArea });
  return <closure_6 />;
};
