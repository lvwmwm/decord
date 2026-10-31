// Module ID: 15699
// Function ID: 15700
// Name: ActivateDevice
// Dependencies: [32, 19, 17, 21, 5014, 575, 15700, 15702, 10909, 14159, 15703, 9743, 15704, 1893, 15705, 15709, 15710, 5717, 1409, 15711, 7292, 2]
// Exports: ActivateDevice

// Module 15699 (ActivateDevice)
import nativeDefault from "native" /* 575 */;
import react_nativeDefault from "react-native" /* 1893 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 14159 */;
import _modDef15703 from "module_15703" /* 15703 */;
import _modDef15704 from "module_15704" /* 15704 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: { flex: 1 }, imageStyle: obj2, safeArea: { flex: 1, justifyContent: "center", alignItems: "center" }, content: obj3, scroller: { alignSelf: "stretch", flexGrow: 0 }, scrollerContent: { flexDirection: "column", gap: 16 } };
obj2 = { width: undefined, height: undefined, marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { maxWidth: 480, backgroundColor: nativeDefault.colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = (onClose) => {
  let closure_1;
  let closure_3;
  let first;
  let first1;
  let items6;
  let obj8;
  let obj9;
  let tmp21Result;
  let tmp4;
  let tmp7Result;
  onClose = onClose.onClose;
  first = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  let deviceCodeAuthorizeCallback;
  const prefilledUserCode = onClose.prefilledUserCode;
  const tmp = closure_10();
  [first, tmp4] = deviceCodeAuthorizeCallback.useState({ type: "user-code-input", usePrefilledCode: true });
  importDefault = tmp4;
  [first1, _slicedToArray] = deviceCodeAuthorizeCallback.useState(null);
  let obj = first(first1[6]);
  const activateDeviceStepTracking = obj.useActivateDeviceStepTracking(first);
  let items = [tmp4];
  const callback = deviceCodeAuthorizeCallback.useCallback(() => {
    closure_1({ type: "user-code-input" });
  }, items);
  const items1 = [tmp4];
  const items2 = [tmp4];
  const callback1 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    const obj = { type: "success", userCodeData };
    closure_1(obj);
  }, items1);
  const callback2 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    const obj = { type: "error", userCodeData };
    closure_1(obj);
  }, items2);
  let obj2 = first(first1[7]);
  deviceCodeAuthorizeCallback = obj2.useDeviceCodeAuthorizeCallback(callback, callback2, callback1);
  const items3 = [deviceCodeAuthorizeCallback];
  const items4 = [first];
  const callback3 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    let closure_0 = userCodeData;
    const obj = { type: "authorization", userCodeData };
    closure_1(obj);
    const obj2 = first(first1[8]);
    const obj3 = {
      clientId: userCodeData.clientId,
      scopes: userCodeData.scopes,
      responseType: "code",
      isTrustedName: true,
      isEmbeddedFlow: true,
      withBackPressHandler: false,
      callbackWithoutPost(arg0) {
        return deviceCodeAuthorizeCallback(userCodeData, arg0);
      }
    };
    obj2.openOAuth2Modal(obj3);
  }, items3);
  const effect = deviceCodeAuthorizeCallback.useEffect(() => {
    if ("userCodeData" in first) {
      const userCodeData = first.userCodeData;
      const items = [ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID];
      if (items.includes(userCodeData.clientId)) {
        closure_3(_modDef15703);
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((item) => {
          const obj = first(first1[11]);
          return obj.isSocialLayerUmbrellaScope(item);
        })) {
          closure_3(_modDef15704);
        }
      }
    }
  }, items4);
  const items5 = [first1];
  const effect1 = deviceCodeAuthorizeCallback.useEffect(() => {
    if (null != first1) {
      const obj2 = { uri: tmp };
      const obj = react_nativeDefault;
      obj.preload(obj2);
    }
  }, items5);
  const type = first.type;
  if ("user-code-input" === type) {
    let tmp22;
    const UserCodeInput = tmp7(tmp8[14]).UserCodeInput;
    const tmp21 = closure_8;
    if (first.usePrefilledCode) {
      tmp22 = prefilledUserCode;
    }
    let obj3 = { prefilledUserCode: tmp22, onUserCodeAccepted: callback3, onClose };
    tmp21Result = tmp21(UserCodeInput, obj3);
  } else if ("authorization" === type) {
    tmp21Result = closure_8(closure_6, { animating: true });
  } else if ("success" === type) {
    const obj4 = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
    tmp21Result = closure_8(tmp7(tmp8[15]).ActivateDeviceSuccess, obj4);
  } else {
    tmp21Result = null;
    if ("error" === type) {
      const obj5 = { onRetry: callback };
      tmp21Result = closure_8(tmp7(tmp8[16]).ActivateDeviceError, obj5);
    }
  }
  const obj6 = { style: tmp.background, children: items6 };
  const obj7 = { source: tmp7Result.makeSource(require("module_15711")), style: tmp.imageStyle };
  const tmp23 = require("FastImage");
  tmp7Result = first(first1[18]);
  items6 = [closure_8(tmp23, obj7), ];
  const rect = { bottom: true, top: true, style: tmp.safeArea, children: closure_8(closure_5, obj8) };
  obj8 = { style: tmp.content, children: closure_8(closure_7, obj9) };
  obj9 = { bounces: false, style: tmp.scroller, contentContainerStyle: tmp.scrollerContent, children: tmp21Result };
  const SafeAreaPaddingView = tmp7(tmp8[20]).SafeAreaPaddingView;
  items6[1] = closure_8(SafeAreaPaddingView, rect);
  return closure_9(closure_5, obj6);
};
