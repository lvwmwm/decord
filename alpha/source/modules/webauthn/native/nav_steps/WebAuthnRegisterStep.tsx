// Module ID: 17032
// Function ID: 17033
// Name: WebAuthnRegisterStep
// Dependencies: [32, 19, 17, 1072, 21, 5142, 575, 7190, 1113, 1187, 1499, 1377, 17033, 7358, 17034, 5753, 6825, 5760, 2]
// Exports: default

// Module 17032 (WebAuthnRegisterStep)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 7190 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, navigation;

let OTHER_AND_ANDROID_NONDISCOVERABLE;
let PASSKEY_CREDENTIAL_MANAGER;
let PASSKEY_DEVICE;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
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
  const tmp = closure_10();
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
  return metroImportAll(RadioGroup, obj4);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { scrollContent: { flexGrow: 1 }, flexContainer: { flexGrow: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16 }, centerFlex: { display: "flex", alignItems: "center" }, margin: { marginTop: 16, textAlign: "center" }, radioItem: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
let closure_10 = createStyles.createStyles(obj);
let obj3 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
let obj4 = { [PASSKEY_CREDENTIAL_MANAGER]: NativeCeremoniesDefault.registerPasskey, [PASSKEY_DEVICE]: NativeCeremoniesDefault.registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: NativeCeremoniesDefault.registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj3);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default function WebAuthnRegisterStep() {
  let SafeAreaPaddingView;
  let authenticatorSelection;
  let items3;
  let items4;
  let obj10;
  let onRegisterSuccess;
  let rect;
  let setError;
  let setRegistering;
  let string2Result;
  let stringResult;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  const obj = navigation(1499);
  navigation = obj.useNavigation();
  const tmp4 = closure_10();
  [tmp7, tmp8] = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  importDefault = tmp8;
  authenticatorSelection(onRegisterSuccess.useState(false), 2);
  [tmp10, tmp11] = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  dependencyMap = tmp11;
  authenticatorSelection(onRegisterSuccess.useState(""), 2);
  obj3 = navigation(1377);
  const tmp5Result = authenticatorSelection(onRegisterSuccess.useState(obj3.isAndroid() ? obj3.PASSKEY_CREDENTIAL_MANAGER : obj3.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  authenticatorSelection = tmp5Result[0];
  const items = [navigation];
  const tmp15 = tmp5Result[1];
  onRegisterSuccess = obj2.useCallback((arg0) => {
    const replaced = navigation.replace(UserSettingsSections.WEBAUTHN_NAME, arg0);
  }, items);
  const items1 = [authenticatorSelection];
  let closure_5 = obj2.useMemo(() => obj4[first], items1);
  const items2 = [onRegisterSuccess, tmp11, tmp8];
  let closure_6 = obj2.useMemo(() => ({ onRegisterSuccess, setError: dependencyMap, setRegistering: importDefault }), items2);
  const tmpResult = navigation(17033);
  const announceError = tmpResult.useAnnounceError(tmp10);
  obj4 = { contentContainerStyle: tmp4.scrollContent, alwaysBounceVertical: false, children: closure_9(SafeAreaPaddingView, rect) };
  rect = { bottom: true, left: true, right: true, style: tmp4.flexContainer, children: items4 };
  const obj5 = { style: tmp4.centerFlex, children: items3 };
  SafeAreaPaddingView = tmp(7358).SafeAreaPaddingView;
  items3 = [closure_8(navigation(17034).KeyImage, {}), , ];
  const obj6 = { style: tmp4.margin, variant: "body-md/normal", children: stringResult };
  const Text = tmp(5753).Text;
  const intl = tmp(1113).intl;
  const string = intl.string;
  const t = tmp(1113).t;
  const tmp19 = closure_5;
  const tmp21 = closure_6;
  if (tmp7) {
    stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  items3[1] = closure_8(Text, obj6);
  let tmp18Result = "" !== tmp10;
  if (tmp18Result) {
    const obj7 = { variant: "body-md/normal", color: "text-feedback-critical", children: tmp10 };
    tmp18Result = tmp18(tmp(5753).Text, obj7);
  }
  items3[2] = tmp18Result;
  items4 = [closure_9(tmp21, obj5), , ];
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj8 = { authenticatorSelection, registering: tmp7, onChange: tmp15 };
    shouldDisplayAndroidFidoSelector = tmp18(AndroidPasskeyRadioGroup, obj8);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const ButtonGroup = tmp(6825).ButtonGroup;
  const Button = tmp(5760).Button;
  const intl2 = tmp(1113).intl;
  const string2 = intl2.string;
  const t2 = tmp(1113).t;
  if (tmp7) {
    string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  const obj9 = { children: closure_8(Button, obj10) };
  obj10 = {
    text: string2Result,
    disabled: tmp7,
    loading: tmp7,
    onPress() {
      return closure_5(closure_6);
    },
    size: "lg"
  };
  items4[2] = closure_8(ButtonGroup, obj9);
  return closure_8(tmp19, obj4);
};
