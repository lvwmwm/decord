// Module ID: 13641
// Function ID: 104776
// Name: AndroidPasskeyRadioGroup
// Dependencies: [57, 31, 27, 13624, 33, 4130, 689, 9201, 1212, 1273, 1456, 477, 5121, 13642, 4126, 4965, 4543, 2]
// Exports: default

// Module 13641 (AndroidPasskeyRadioGroup)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { WebAuthnScreens } from "WebAuthnScreens";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let OTHER_AND_ANDROID_NONDISCOVERABLE;
let PASSKEY_CREDENTIAL_MANAGER;
let PASSKEY_DEVICE;
let closure_7;
let closure_8;
const require = arg1;
function AndroidPasskeyRadioGroup(onChange) {
  let authenticatorSelection;
  let registering;
  onChange = onChange.onChange;
  ({ authenticatorSelection, registering } = onChange);
  let obj = { value: obj1.PASSKEY_CREDENTIAL_MANAGER };
  const intl = onChange(1212).intl;
  obj.name = intl.string(onChange(1212).t.JQbo8L);
  const items = [obj, , ];
  obj = { value: obj1.PASSKEY_DEVICE };
  const intl2 = onChange(1212).intl;
  obj.name = intl2.string(onChange(1212).t.GjBNMg);
  items[1] = obj;
  obj = { value: obj1.OTHER_AND_ANDROID_NONDISCOVERABLE };
  const intl3 = onChange(1212).intl;
  obj.name = intl3.string(onChange(1212).t["OhC77+"]);
  items[2] = obj;
  obj1 = {
    style: _createForOfIteratorHelperLoose().radioItem,
    options: items,
    onChange(value) {
      return onChange(value.value);
    },
    value: authenticatorSelection,
    disabled: registering,
    size: onChange(1273).RadioGroup.Sizes.LARGE,
    withSpacing: true
  };
  return callback(onChange(1273).RadioGroup, obj1);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { flexContainer: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16 }, centerFlex: { display: "flex", alignItems: "center" }, margin: { marginTop: 16, textAlign: "center" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.radioItem = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
let obj2 = { [PASSKEY_CREDENTIAL_MANAGER]: require("_promptForRegisterCredential").registerPasskey, [PASSKEY_DEVICE]: require("_promptForRegisterCredential").registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: require("_promptForRegisterCredential").registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj1);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default function WebAuthnRegisterStep() {
  let tmp7;
  let tmp8;
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const tmp2 = _createForOfIteratorHelperLoose();
  const tmp3 = first1(callback.useState(false), 2);
  const first = tmp3[0];
  const importDefault = tmp5;
  [tmp7, tmp8] = first1(callback.useState(""), 2);
  const dependencyMap = tmp8;
  let obj1 = navigation(477);
  const tmp10 = first1(callback.useState(obj1.isAndroid() ? obj1.PASSKEY_CREDENTIAL_MANAGER : obj1.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  first1 = tmp10[0];
  const items = [navigation];
  callback = callback.useCallback((arg0) => {
    navigation.push(constants.NAME, arg0);
  }, items);
  const items1 = [first1];
  let closure_5 = callback.useMemo(() => outer1_11[first1], items1);
  const items2 = [callback, tmp8, tmp3[1]];
  let closure_6 = callback.useMemo(() => ({ onRegisterSuccess: callback, setError: closure_2, setRegistering: closure_1 }), items2);
  obj = { bottom: true, left: true, right: true, style: tmp2.flexContainer };
  obj = { style: tmp2.centerFlex };
  const items3 = [callback(navigation(13642).KeyImage, {}), , ];
  obj1 = { style: tmp2.margin, variant: "text-md/normal" };
  const intl = navigation(1212).intl;
  const string = intl.string;
  const t = navigation(1212).t;
  if (first) {
    let stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  obj1.children = stringResult;
  items3[1] = callback(navigation(4126).Text, obj1);
  let tmp17 = null != tmp7;
  if (tmp17) {
    const obj2 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp7 };
    tmp17 = callback(navigation(4126).Text, obj2);
  }
  items3[2] = tmp17;
  obj.children = items3;
  const items4 = [closure_8(closure_5, obj), , ];
  let shouldDisplayAndroidFidoSelector = importDefault(9201).shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj3 = { authenticatorSelection: first1, registering: first, onChange: tmp10[1] };
    shouldDisplayAndroidFidoSelector = callback(AndroidPasskeyRadioGroup, obj3);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const obj4 = {};
  const obj5 = {};
  const intl2 = navigation(1212).intl;
  const string2 = intl2.string;
  const t2 = navigation(1212).t;
  if (first) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  obj5.text = string2Result;
  obj5.disabled = first;
  obj5.loading = first;
  obj5.onPress = function onPress() {
    return callback(closure_6);
  };
  obj5.size = "lg";
  obj4.children = callback(navigation(4543).Button, obj5);
  items4[2] = callback(navigation(4965).ButtonGroup, obj4);
  obj.children = items4;
  return closure_8(navigation(5121).SafeAreaPaddingView, obj);
};
