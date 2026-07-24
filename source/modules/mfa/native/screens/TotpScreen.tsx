// Module ID: 14693
// Function ID: 111895
// Name: isValidClipboardCode
// Dependencies: [5, 57, 31, 33, 14694, 14689, 1212, 14695, 14692, 2]
// Exports: default

// Module 14693 (isValidClipboardCode)
import MFAOptionScreen from "MFAOptionScreen";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function isValidClipboardCode(arg0) {
  let isMatch = arg0.length === require(14694) /* finishMFACheck */.TOTP_CODE_LENGTH;
  if (isMatch) {
    isMatch = /^\d+$/.test(arg0);
    const obj = /^\d+$/;
  }
  return isMatch;
}
const result = require("result").fileFinishedImporting("modules/mfa/native/screens/TotpScreen.tsx");

export default function TotpScreen(finish) {
  let _slicedToArray;
  let result;
  let tmp5;
  let tmp7;
  finish = finish.finish;
  const tmp = callback(React.useState(false), 2);
  let first = tmp[0];
  const importDefault = tmp[1];
  const tmp3 = callback(React.useState(""), 2);
  const first1 = tmp3[0];
  let MFAOptionScreen = tmp3[1];
  [tmp5, _slicedToArray] = callback(React.useState(undefined), 2);
  const tmp4 = callback(React.useState(undefined), 2);
  [tmp7, result] = callback(React.useState(false), 2);
  const items = [finish];
  callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
  let obj = {};
  const tmp6 = callback(React.useState(false), 2);
  const intl = finish(first1[6]).intl;
  obj.headerText = intl.string(finish(first1[6]).t.uc00u5);
  obj = {};
  const tmp10 = importDefault(first1[5]);
  const intl2 = finish(first1[6]).intl;
  obj.label = intl2.string(finish(first1[6]).t.HZPBOd);
  const intl3 = finish(first1[6]).intl;
  obj.placeholder = intl3.string(finish(first1[6]).t.tARzgo);
  obj.isValidClipboardCode = isValidClipboardCode;
  obj.maxLength = finish(first1[4]).TOTP_CODE_LENGTH;
  obj.onChangeCode = callback;
  obj.error = tmp5;
  let tmp12 = first;
  if (!first) {
    tmp12 = tmp7;
  }
  obj.isDisabled = tmp12;
  obj.textContentType = "oneTimeCode";
  obj.autoComplete = "one-time-code";
  obj.keyboardType = "number-pad";
  obj.input = callback(importDefault(first1[7]), obj);
  obj = { variant: "primary" };
  const tmp11 = importDefault(first1[7]);
  const tmp13 = callback;
  const intl4 = finish(first1[6]).intl;
  obj.text = intl4.string(finish(first1[6]).t.geKm7t);
  let tmp15 = first;
  if (!first) {
    tmp15 = tmp7;
  }
  obj.loading = tmp15;
  obj.onPress = function onPress() {
    callback(first1);
  };
  if (!first) {
    first = tmp7;
  }
  if (!first) {
    first = first1.length !== finish(first1[4]).TOTP_CODE_LENGTH;
  }
  obj.disabled = first;
  obj.submit = tmp13(importDefault(first1[8]), obj);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  obj.mfaMethod = "totp";
  return callback(tmp10, obj);
};
