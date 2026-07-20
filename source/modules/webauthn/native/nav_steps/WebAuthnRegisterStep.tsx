// Module ID: 13511
// Function ID: 102542
// Name: AndroidPasskeyRadioGroup
// Dependencies: []
// Exports: default

// Module 13511 (AndroidPasskeyRadioGroup)
let OTHER_AND_ANDROID_NONDISCOVERABLE;
let PASSKEY_CREDENTIAL_MANAGER;
let PASSKEY_DEVICE;
function AndroidPasskeyRadioGroup(onChange) {
  let authenticatorSelection;
  let registering;
  const arg1 = onChange.onChange;
  ({ authenticatorSelection, registering } = onChange);
  let obj = { value: obj1.PASSKEY_CREDENTIAL_MANAGER };
  const intl = arg1(dependencyMap[8]).intl;
  obj.name = intl.string(arg1(dependencyMap[8]).t.JQbo8L);
  const items = [obj, , ];
  obj = { value: obj1.PASSKEY_DEVICE };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.name = intl2.string(arg1(dependencyMap[8]).t.GjBNMg);
  items[1] = obj;
  obj = { value: obj1.OTHER_AND_ANDROID_NONDISCOVERABLE };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.name = intl3.string(arg1(dependencyMap[8]).t.OhC77+);
  items[2] = obj;
  const obj1 = {
    style: callback3().radioItem,
    options: items,
    onChange(value) {
      return onChange(value.value);
    },
    value: authenticatorSelection,
    disabled: registering,
    size: arg1(dependencyMap[9]).RadioGroup.Sizes.LARGE,
    withSpacing: true
  };
  return callback2(arg1(dependencyMap[9]).RadioGroup, obj1);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const WebAuthnScreens = arg1(dependencyMap[3]).WebAuthnScreens;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { flexContainer: {}, centerFlex: { "Bool(true)": true, "Bool(true)": true }, margin: { accessible: "center", id: "center" } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.md };
obj.radioItem = obj;
let closure_9 = obj.createStyles(obj);
const obj1 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
const obj2 = { [PASSKEY_CREDENTIAL_MANAGER]: importDefault(dependencyMap[7]).registerPasskey, [PASSKEY_DEVICE]: importDefault(dependencyMap[7]).registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: importDefault(dependencyMap[7]).registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj1);
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default function WebAuthnRegisterStep() {
  let tmp7;
  let tmp8;
  let obj = arg1(dependencyMap[10]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp2 = callback3();
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  const importDefault = tmp5;
  [tmp7, tmp8] = callback(React.useState(""), 2);
  const dependencyMap = tmp8;
  let obj1 = arg1(dependencyMap[11]);
  const tmp10 = callback(React.useState(obj1.isAndroid() ? obj1.PASSKEY_CREDENTIAL_MANAGER : obj1.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  const first1 = tmp10[0];
  let callback = first1;
  const items = [navigation];
  callback = React.useCallback((arg0) => {
    navigation.push(constants.NAME, arg0);
  }, items);
  const React = callback;
  const items1 = [first1];
  let closure_5 = React.useMemo(() => closure_11[closure_3], items1);
  const items2 = [callback, tmp8, tmp3[1]];
  let closure_6 = React.useMemo(() => ({ onRegisterSuccess: callback, setError: tmp8, setRegistering: tmp5 }), items2);
  obj = { style: tmp2.flexContainer };
  obj = { style: tmp2.centerFlex };
  const items3 = [callback2(arg1(dependencyMap[13]).KeyImage, {}), , ];
  obj1 = { style: tmp2.margin, variant: "text-md/normal" };
  const intl = arg1(dependencyMap[8]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[8]).t;
  if (first) {
    let stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  obj1.children = stringResult;
  items3[1] = callback2(arg1(dependencyMap[14]).Text, obj1);
  let tmp17 = null != tmp7;
  if (tmp17) {
    const obj2 = { children: tmp7 };
    tmp17 = callback2(arg1(dependencyMap[14]).Text, obj2);
  }
  items3[2] = tmp17;
  obj.children = items3;
  const items4 = [closure_8(closure_5, obj), , ];
  let shouldDisplayAndroidFidoSelector = importDefault(dependencyMap[7]).shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj3 = { authenticatorSelection: first1, registering: first, onChange: tmp10[1] };
    shouldDisplayAndroidFidoSelector = callback2(AndroidPasskeyRadioGroup, obj3);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const obj4 = {};
  const obj5 = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  const string2 = intl2.string;
  const t2 = arg1(dependencyMap[8]).t;
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
  obj4.children = callback2(arg1(dependencyMap[16]).Button, obj5);
  items4[2] = callback2(arg1(dependencyMap[15]).ButtonGroup, obj4);
  obj.children = items4;
  return closure_8(arg1(dependencyMap[12]).SafeAreaPaddingView, obj);
};
