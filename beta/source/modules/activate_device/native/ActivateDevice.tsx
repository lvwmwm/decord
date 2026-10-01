// Module ID: 13419
// Function ID: 13420
// Name: ActivateDevice
// Dependencies: [32, 19, 17, 21, 4836, 576, 13420, 13422, 8506, 8547, 13423, 8517, 13424, 5899, 13425, 13429, 13430, 1397, 13431, 6544, 2]
// Exports: ActivateDevice

// Module 13419 (ActivateDevice)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 8547 */;
import _modDef13423 from "module_13423" /* 13423 */;
import _modDef13424 from "module_13424" /* 13424 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ImageBackground: metroRequire, ActivityIndicator: metroImportDefault, ScrollView: metroImportAll } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { background: { flex: 1 }, imageStyle: obj2, safeArea: { flex: 1, justifyContent: "center", alignItems: "center" }, content: obj3, scroller: { alignSelf: "stretch", flexGrow: 0 }, scrollerContent: { flexDirection: "column", gap: 16 } };
obj2 = { marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND };
createStyles = createStyles.createStyles;
obj3 = { maxWidth: 480, backgroundColor: nativeDefault.colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = (onClose) => {
  let closure_1;
  let closure_3;
  let first;
  let first1;
  let tmp4;
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
        closure_3(_modDef13423);
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((item) => {
          const obj = first(first1[11]);
          return obj.isSocialLayerUmbrellaScope(item);
        })) {
          closure_3(_modDef13424);
        }
      }
    }
  }, items4);
  const items5 = [first1];
  const effect1 = deviceCodeAuthorizeCallback.useEffect(() => {
    if (null != first1) {
      const obj = FastImageDefault;
      obj.preload(tmp);
    }
  }, items5);
  const type = first.type;
  if ("user-code-input" === type) {
    let tmp22;
    const UserCodeInput = tmp7(tmp8[14]).UserCodeInput;
    const tmp21 = jsx;
    if (first.usePrefilledCode) {
      tmp22 = prefilledUserCode;
    }
    let obj3 = { prefilledUserCode: tmp22, onUserCodeAccepted: callback3, onClose };
    let tmp21Result = tmp21(UserCodeInput, obj3);
  } else if ("authorization" === type) {
    tmp21Result = <closure_7 animating />;
  } else if ("success" === type) {
    tmp21Result = jsx(tmp7(tmp8[15]).ActivateDeviceSuccess, { onComplete: onClose, data: first.userCodeData, successImage: first1 });
  } else {
    tmp21Result = null;
    if ("error" === type) {
      tmp21Result = jsx(tmp7(tmp8[16]).ActivateDeviceError, { onRetry: callback });
    }
  }
  const items6 = [tmp.background];
  const rect = { bottom: true, top: true, style: tmp.safeArea, children: null };
  const tmp7Result = first(first1[17]);
  const SafeAreaPaddingView = tmp7(tmp8[19]).SafeAreaPaddingView;
  return <closure_6 source={tmp7Result.makeSource(require("module_13431"))} imageStyle={tmp.imageStyle} style={items6}>{null}</closure_6>;
};
