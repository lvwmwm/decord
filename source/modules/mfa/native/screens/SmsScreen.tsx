// Module ID: 14697
// Function ID: 111938
// Name: SmsScreen
// Dependencies: [5, 57, 31, 27, 653, 33, 9233, 14690, 1212, 507, 14694, 14689, 7574, 4543, 14692, 2]
// Exports: default

// Module 14697 (SmsScreen)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { Endpoints } from "ME";
import jsxProd from "jsxProd";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const result = require("result").fileFinishedImporting("modules/mfa/native/screens/SmsScreen.tsx");

export default function SmsScreen(mfaChallenge) {
  let c3;
  let c6;
  let c7;
  let tmp10;
  let tmp5;
  let tmp8;
  mfaChallenge = mfaChallenge.mfaChallenge;
  const finish = mfaChallenge.finish;
  let dependencyMap;
  c3 = undefined;
  let React;
  c6 = undefined;
  c7 = undefined;
  function handleChange(Button, arg1) {
    return _handleChange(...arguments);
  }
  function _handleChange(c6, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    return obj(...arguments);
  }
  function _handleResend() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    return obj(...arguments);
  }
  let obj = finish(14690);
  const screenStyles = obj.useScreenStyles(finish(9233)());
  const tmp3 = first(React.useState(null), 2);
  dependencyMap = tmp3[1];
  const tmp = finish(9233)();
  [tmp5, c3] = first(React.useState(false), 2);
  const tmp6 = first(React.useState(""), 2);
  first = tmp6[0];
  React = tmp6[1];
  let intl = mfaChallenge(1212).intl;
  const tmp4 = first(React.useState(false), 2);
  [tmp8, c6] = first(React.useState(intl.string(mfaChallenge(1212).t.LQdCQE)), 2);
  const tmp7 = first(React.useState(intl.string(mfaChallenge(1212).t.LQdCQE)), 2);
  [tmp10, c7] = first(React.useState(false), 2);
  const items = [mfaChallenge.ticket];
  const effect = React.useEffect(() => {
    dependencyMap(null);
    const HTTP = mfaChallenge(507).HTTP;
    obj = { url: _undefined2.LOGIN_SMS_SEND, body: obj, oldFormErrors: true, rejectWithError: false };
    obj = { ticket: mfaChallenge.ticket };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      const intl = mfaChallenge(1212).intl;
      outer1_6(intl.formatToPlainString(mfaChallenge(1212).t["8r6h7+"], { phoneNumber: body.body.phone }));
    }).catch((body) => {
      body = body.body;
      let message;
      if (null != body) {
        message = body.message;
      }
      if (null == message) {
        message = body.message;
      }
      outer1_2(message);
      outer1_6(undefined);
    });
  }, items);
  obj = {};
  const tmp9 = first(React.useState(false), 2);
  const intl2 = mfaChallenge(1212).intl;
  obj.headerText = intl2.string(mfaChallenge(1212).t.o4JNrO);
  obj.subtitle = tmp8;
  obj = { style: screenStyles.inputContainer };
  const obj1 = { autoFocus: true, autoCapitalize: "characters", maxLength: mfaChallenge(14694).SMS_CODE_LENGTH, autoComplete: "sms-otp", textContentType: "oneTimeCode", keyboardType: "number-pad", onChange: handleChange };
  const intl3 = mfaChallenge(1212).intl;
  obj1.label = intl3.string(mfaChallenge(1212).t["/sHnXc"]);
  const intl4 = mfaChallenge(1212).intl;
  obj1.accessibilityLabel = intl4.string(mfaChallenge(1212).t.HZPBOd);
  const intl5 = mfaChallenge(1212).intl;
  obj1.placeholder = intl5.string(mfaChallenge(1212).t.tARzgo);
  obj1.errorMessage = tmp3[0];
  const items1 = [handleChange(mfaChallenge(7574).TextInput, obj1), ];
  const obj2 = { text: null, variant: "secondary", size: "sm" };
  const intl6 = mfaChallenge(1212).intl;
  obj2.text = intl6.string(mfaChallenge(1212).t.WbaP3r);
  obj2.onPress = function handleResend() {
    return _handleResend(...arguments);
  };
  items1[1] = handleChange(mfaChallenge(4543).Button, obj2);
  obj.children = items1;
  obj.input = _handleChange(c6, obj);
  const obj3 = { variant: "primary" };
  const tmp13 = finish(14689);
  const intl7 = mfaChallenge(1212).intl;
  obj3.text = intl7.string(mfaChallenge(1212).t.geKm7t);
  let tmp15 = tmp5;
  if (!tmp5) {
    tmp15 = tmp10;
  }
  obj3.loading = tmp15;
  obj3.onPress = function onPress() {
    handleChange(first);
  };
  if (!tmp5) {
    tmp5 = tmp10;
  }
  if (!tmp5) {
    tmp5 = first.length !== mfaChallenge(14694).SMS_CODE_LENGTH;
  }
  obj3.disabled = tmp5;
  obj.submit = handleChange(finish(14692), obj3);
  obj.screenProps = { mfaChallenge, finish };
  obj.mfaMethod = "sms";
  return handleChange(tmp13, obj);
};
