// Module ID: 14698
// Function ID: 111952
// Name: PasswordScreen
// Dependencies: [5, 57, 31, 27, 33, 9233, 14690, 14689, 1212, 7574, 14692, 2]
// Exports: default

// Module 14698 (PasswordScreen)
import useWideAuthView from "useWideAuthView";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default function PasswordScreen(finish) {
  let c3;
  let c4;
  let tmp6;
  let tmp8;
  finish = finish.finish;
  let importDefault;
  let first;
  c3 = undefined;
  let callback;
  function sendPassword() {
    return _sendPassword(...arguments);
  }
  function _sendPassword() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    return obj(...arguments);
  }
  let obj = importDefault(first[6]);
  const screenStyles = obj.useScreenStyles(importDefault(first[5])());
  const tmp3 = callback(_sendPassword.useState(null), 2);
  importDefault = tmp3[1];
  const tmp4 = callback(_sendPassword.useState(""), 2);
  first = tmp4[0];
  const tmp = importDefault(first[5])();
  [tmp6, c3] = callback(_sendPassword.useState(false), 2);
  const tmp5 = callback(_sendPassword.useState(false), 2);
  [tmp8, c4] = callback(_sendPassword.useState(false), 2);
  obj = {};
  const tmp7 = callback(_sendPassword.useState(false), 2);
  const intl = finish(first[8]).intl;
  obj.headerText = intl.string(finish(first[8]).t.Rw1XuM);
  obj = { style: screenStyles.inputContainer };
  const obj1 = { autoFocus: true, required: true, textContentType: "password", label: null, placeholder: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done" };
  const intl2 = finish(first[8]).intl;
  obj1.label = intl2.string(finish(first[8]).t["CIGa+7"]);
  const intl3 = finish(first[8]).intl;
  obj1.placeholder = intl3.string(finish(first[8]).t["CIGa+7"]);
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
  obj.children = jsx(finish(first[9]).TextInput, { autoFocus: true, required: true, textContentType: "password", label: null, placeholder: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done" });
  obj.input = <View style={screenStyles.inputContainer} />;
  const obj2 = {};
  const tmp10 = importDefault(first[7]);
  const tmp11 = View;
  const tmp13 = jsx;
  const intl4 = finish(first[8]).intl;
  obj2.text = intl4.string(finish(first[8]).t.geKm7t);
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
  obj.submit = tmp13(importDefault(first[10]), obj2);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  obj.mfaMethod = "password";
  return <tmp10 style={screenStyles.inputContainer} />;
};
