// Module ID: 9262
// Function ID: 72362
// Name: VerifyPhone
// Dependencies: [5, 57, 31, 33, 9239, 9263, 9264, 1212, 2]
// Exports: default

// Module 9262 (VerifyPhone)
import SmsAutofillManager from "SmsAutofillManager";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/verification/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  let backgroundStyle;
  let c4;
  let disableKeyboardAvoidingView;
  let error;
  let onCodeEnteredIntercept;
  let tmp4;
  phone = phone.phone;
  let flag = phone.loading;
  if (flag === undefined) {
    flag = false;
  }
  ({ error, onCodeEnteredIntercept } = phone);
  const onVerified = phone.onVerified;
  let SmsAutofillManager;
  let callback;
  callback = undefined;
  ({ backgroundStyle, disableKeyboardAvoidingView } = phone);
  const tmp = callback(callback.useState(null), 2);
  let first = tmp[0];
  SmsAutofillManager = tmp[1];
  [tmp4, c4] = callback(callback.useState(false), 2);
  const items = [onCodeEnteredIntercept, onVerified, phone];
  callback = callback.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
  const items1 = [callback];
  const callback1 = callback.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  onCodeEnteredIntercept(onVerified[5])(callback1);
  const obj = {};
  const tmp3 = callback(callback.useState(false), 2);
  const tmp8 = jsx;
  const intl = phone(onVerified[7]).intl;
  obj.title = intl.string(phone(onVerified[7]).t.Xclkxp);
  const intl2 = phone(onVerified[7]).intl;
  obj.description = intl2.string(phone(onVerified[7]).t["4qMI6A"]);
  if (null != error) {
    first = error;
  }
  obj.error = first;
  obj.backgroundStyle = backgroundStyle;
  obj.loading = flag;
  obj.onCodeEntered = callback;
  obj.codeType = phone(onVerified[6]).CodeType.NUMERIC;
  obj.disabled = tmp4;
  obj.disableKeyboardAvoidingView = disableKeyboardAvoidingView;
  return tmp8(onCodeEnteredIntercept(onVerified[6]), obj);
};
