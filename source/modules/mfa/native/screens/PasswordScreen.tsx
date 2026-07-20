// Module ID: 14519
// Function ID: 109374
// Name: PasswordScreen
// Dependencies: [402653205, 4177526810, 2969567236, 3154116610, 503316507, 318767120]
// Exports: default

// Module 14519 (PasswordScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default function PasswordScreen(finish) {
  let tmp6;
  let tmp8;
  finish = finish.finish;
  const arg1 = finish;
  let importDefault;
  let dependencyMap;
  let closure_3;
  let callback;
  function sendPassword() {
    return _sendPassword(...arguments);
  }
  function _sendPassword() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    const _sendPassword = obj;
    return obj(...arguments);
  }
  let obj = importDefault(dependencyMap[6]);
  const screenStyles = obj.useScreenStyles(importDefault(dependencyMap[5])());
  const tmp3 = callback(_sendPassword.useState(null), 2);
  importDefault = tmp3[1];
  const tmp4 = callback(_sendPassword.useState(""), 2);
  const first = tmp4[0];
  dependencyMap = first;
  const tmp = importDefault(dependencyMap[5])();
  [tmp6, closure_3] = callback(_sendPassword.useState(false), 2);
  const tmp5 = callback(_sendPassword.useState(false), 2);
  [tmp8, closure_4] = callback(_sendPassword.useState(false), 2);
  obj = {};
  const tmp7 = callback(_sendPassword.useState(false), 2);
  const intl = arg1(dependencyMap[8]).intl;
  obj.headerText = intl.string(arg1(dependencyMap[8]).t.Rw1XuM);
  obj = { style: screenStyles.inputContainer };
  const obj1 = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[8]).t.CIGa+7);
  const intl3 = arg1(dependencyMap[8]).intl;
  obj1.placeholder = intl3.string(arg1(dependencyMap[8]).t.CIGa+7);
  obj1.errorMessage = tmp3[0];
  obj1.onChange = tmp4[1];
  obj1.onSubmitEditing = sendPassword;
  let tmp12 = tmp6;
  if (!tmp6) {
    tmp12 = tmp8;
  }
  obj1.isDisabled = tmp12;
  obj1.isClearable = true;
  obj1.secureTextEntry = true;
  obj.children = jsx(arg1(dependencyMap[9]).TextInput, obj1);
  obj.input = <View {...obj} />;
  const obj2 = {};
  const tmp10 = importDefault(dependencyMap[7]);
  const tmp11 = View;
  const tmp13 = jsx;
  const intl4 = arg1(dependencyMap[8]).intl;
  obj2.text = intl4.string(arg1(dependencyMap[8]).t.geKm7t);
  let tmp15 = tmp6;
  if (!tmp6) {
    tmp15 = tmp8;
  }
  if (!tmp15) {
    tmp15 = 0 === first.length;
  }
  obj2.disabled = tmp15;
  obj2.loading = tmp6;
  obj2.onPress = sendPassword;
  obj.submit = tmp13(importDefault(dependencyMap[10]), obj2);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  obj.mfaMethod = "password";
  return <tmp10 {...obj} />;
};
