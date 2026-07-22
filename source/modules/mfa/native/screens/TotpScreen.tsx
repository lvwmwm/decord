// Module ID: 14532
// Function ID: 109414
// Name: isValidClipboardCode
// Dependencies: []
// Exports: default

// Module 14532 (isValidClipboardCode)
function isValidClipboardCode(arg0) {
  let isMatch = arg0.length === arg1(dependencyMap[4]).TOTP_CODE_LENGTH;
  if (isMatch) {
    isMatch = /^\d+$/.test(arg0);
    const obj = /^\d+$/;
  }
  return isMatch;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/mfa/native/screens/TotpScreen.tsx");

export default function TotpScreen(finish) {
  let tmp5;
  let tmp7;
  finish = finish.finish;
  const arg1 = finish;
  const tmp = callback(React.useState(false), 2);
  let first = tmp[0];
  const importDefault = tmp[1];
  const tmp3 = callback(React.useState(""), 2);
  const first1 = tmp3[0];
  const dependencyMap = first1;
  let closure_3 = tmp3[1];
  [tmp5, closure_4] = callback(React.useState(undefined), 2);
  const tmp4 = callback(React.useState(undefined), 2);
  [tmp7, closure_5] = callback(React.useState(false), 2);
  const items = [finish];
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
  const jsx = callback;
  let obj = {};
  const tmp6 = callback(React.useState(false), 2);
  const intl = arg1(dependencyMap[6]).intl;
  obj.headerText = intl.string(arg1(dependencyMap[6]).t.uc00u5);
  obj = {};
  const tmp10 = importDefault(dependencyMap[5]);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.label = intl2.string(arg1(dependencyMap[6]).t.HZPBOd);
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.placeholder = intl3.string(arg1(dependencyMap[6]).t.tARzgo);
  obj.isValidClipboardCode = isValidClipboardCode;
  obj.maxLength = arg1(dependencyMap[4]).TOTP_CODE_LENGTH;
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
  obj.input = jsx(importDefault(dependencyMap[7]), obj);
  obj = { variant: "primary" };
  const tmp11 = importDefault(dependencyMap[7]);
  const tmp13 = jsx;
  const intl4 = arg1(dependencyMap[6]).intl;
  obj.text = intl4.string(arg1(dependencyMap[6]).t.geKm7t);
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
    first = first1.length !== arg1(dependencyMap[4]).TOTP_CODE_LENGTH;
  }
  obj.disabled = first;
  obj.submit = tmp13(importDefault(dependencyMap[8]), obj);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  obj.mfaMethod = "totp";
  return <tmp10 {...obj} />;
};
