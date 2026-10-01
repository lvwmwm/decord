// Module ID: 14233
// Function ID: 14234
// Name: WebAuthnRegisterStep
// Dependencies: [32, 19, 17, 14215, 21, 4836, 576, 6368, 1115, 1177, 1485, 1364, 14234, 6544, 14235, 4832, 5745, 5281, 2]
// Exports: default

// Module 14233 (WebAuthnRegisterStep)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6368 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14215 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, navigation;

let OTHER_AND_ANDROID_NONDISCOVERABLE;
let PASSKEY_CREDENTIAL_MANAGER;
let PASSKEY_DEVICE;
let metroImportAll;
let metroImportDefault;
let obj2;
function AndroidPasskeyRadioGroup(onChange) {
  let authenticatorSelection;
  let intl;
  let intl2;
  let intl3;
  let registering;
  onChange = onChange.onChange;
  ({ authenticatorSelection, registering } = onChange);
  const obj = { value: obj3.PASSKEY_CREDENTIAL_MANAGER, name: intl.string(intl4.t.JQbo8L) };
  const tmp = closure_9();
  intl = intl4.intl;
  const items = [obj, , ];
  const obj2 = { value: obj3.PASSKEY_DEVICE, name: intl2.string(intl4.t.GjBNMg) };
  intl2 = intl4.intl;
  items[1] = obj2;
  obj3 = { value: obj3.OTHER_AND_ANDROID_NONDISCOVERABLE, name: intl3.string(intl4.t["OhC77+"]) };
  intl3 = intl4.intl;
  items[2] = obj3;
  obj4 = {
    style: tmp.radioItem,
    options: items,
    onChange(value) {
      return onChange(value.value);
    },
    value: authenticatorSelection,
    disabled: registering,
    size: native.RadioGroup.Sizes.LARGE,
    withSpacing: true
  };
  const RadioGroup = native.RadioGroup;
  return metroImportDefault(RadioGroup, obj4);
}
const View = react_native.View;
const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { flexContainer: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16 }, centerFlex: { display: "flex", alignItems: "center" }, margin: { marginTop: 16, textAlign: "center" }, radioItem: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
let obj4 = { [PASSKEY_CREDENTIAL_MANAGER]: NativeCeremoniesDefault.registerPasskey, [PASSKEY_DEVICE]: NativeCeremoniesDefault.registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: NativeCeremoniesDefault.registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj3);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default function WebAuthnRegisterStep() {
  let authenticatorSelection;
  let items3;
  let items4;
  let obj9;
  let onRegisterSuccess;
  let setError;
  let setRegistering;
  let string2Result;
  let stringResult;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  const obj = navigation(1485);
  navigation = obj.useNavigation();
  const tmp4 = closure_9();
  [tmp7, tmp8] = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  importDefault = tmp8;
  authenticatorSelection(onRegisterSuccess.useState(false), 2);
  [tmp10, tmp11] = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  dependencyMap = tmp11;
  authenticatorSelection(onRegisterSuccess.useState(""), 2);
  obj3 = navigation(1364);
  const tmp5Result = authenticatorSelection(onRegisterSuccess.useState(obj3.isAndroid() ? obj3.PASSKEY_CREDENTIAL_MANAGER : obj3.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  authenticatorSelection = tmp5Result[0];
  const items = [navigation];
  const tmp15 = tmp5Result[1];
  onRegisterSuccess = obj2.useCallback((arg0) => {
    navigation.push(WebAuthnScreens.NAME, arg0);
  }, items);
  const items1 = [authenticatorSelection];
  let closure_5 = obj2.useMemo(() => obj4[first], items1);
  const items2 = [onRegisterSuccess, tmp11, tmp8];
  let closure_6 = obj2.useMemo(() => ({ onRegisterSuccess, setError: dependencyMap, setRegistering: importDefault }), items2);
  const tmpResult = navigation(14234);
  const announceError = tmpResult.useAnnounceError(tmp10);
  const rect = { bottom: true, left: true, right: true, style: tmp4.flexContainer, children: items4 };
  obj4 = { style: tmp4.centerFlex, children: items3 };
  const SafeAreaPaddingView = tmp(6544).SafeAreaPaddingView;
  items3 = [closure_7(navigation(14235).KeyImage, {}), , ];
  const obj5 = { style: tmp4.margin, variant: "text-md/normal", children: stringResult };
  const Text = tmp(4832).Text;
  const intl = tmp(1115).intl;
  const string = intl.string;
  const t = tmp(1115).t;
  const tmp19 = closure_5;
  if (tmp7) {
    stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  items3[1] = closure_7(Text, obj5);
  let tmp20Result = "" !== tmp10;
  if (tmp20Result) {
    const obj6 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp10 };
    tmp20Result = tmp20(tmp(4832).Text, obj6);
  }
  items3[2] = tmp20Result;
  items4 = [closure_8(tmp19, obj4), , ];
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj7 = { authenticatorSelection, registering: tmp7, onChange: tmp15 };
    shouldDisplayAndroidFidoSelector = tmp20(AndroidPasskeyRadioGroup, obj7);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const ButtonGroup = tmp(5745).ButtonGroup;
  const Button = tmp(5281).Button;
  const intl2 = tmp(1115).intl;
  const string2 = intl2.string;
  const t2 = tmp(1115).t;
  if (tmp7) {
    string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  const obj8 = { children: closure_7(Button, obj9) };
  obj9 = {
    text: string2Result,
    disabled: tmp7,
    loading: tmp7,
    onPress() {
      return closure_5(closure_6);
    },
    size: "lg"
  };
  items4[2] = closure_7(ButtonGroup, obj8);
  return closure_8(SafeAreaPaddingView, rect);
};
