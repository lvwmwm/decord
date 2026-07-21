// Module ID: 9254
// Function ID: 72297
// Name: VerifyPhone
// Dependencies: []
// Exports: default

// Module 9254 (VerifyPhone)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/verification/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  let backgroundStyle;
  let disableKeyboardAvoidingView;
  let error;
  let onCodeEnteredIntercept;
  let tmp4;
  phone = phone.phone;
  const arg1 = phone;
  let flag = phone.loading;
  if (flag === undefined) {
    flag = false;
  }
  ({ error, onCodeEnteredIntercept } = phone);
  const importDefault = onCodeEnteredIntercept;
  const onVerified = phone.onVerified;
  const dependencyMap = onVerified;
  let closure_3;
  let callback;
  let React;
  ({ backgroundStyle, disableKeyboardAvoidingView } = phone);
  const tmp = callback(React.useState(null), 2);
  let first = tmp[0];
  closure_3 = tmp[1];
  [tmp4, closure_4] = callback(React.useState(false), 2);
  const items = [onCodeEnteredIntercept, onVerified, phone];
  callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
  React = callback;
  const items1 = [callback];
  const callback1 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  importDefault(dependencyMap[5])(callback1);
  const obj = {};
  const tmp3 = callback(React.useState(false), 2);
  const tmp8 = jsx;
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.Xclkxp);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.description = intl2.string(arg1(dependencyMap[7]).t.4qMI6A);
  if (null != error) {
    first = error;
  }
  obj.error = first;
  obj.backgroundStyle = backgroundStyle;
  obj.loading = flag;
  obj.onCodeEntered = callback;
  obj.codeType = arg1(dependencyMap[6]).CodeType.NUMERIC;
  obj.disabled = tmp4;
  obj.disableKeyboardAvoidingView = disableKeyboardAvoidingView;
  return tmp8(importDefault(dependencyMap[6]), obj);
};
