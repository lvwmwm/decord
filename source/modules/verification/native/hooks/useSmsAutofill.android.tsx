// Module ID: 9299
// Function ID: 72581
// Name: SmsAutofillManager
// Dependencies: [31, 27, 2]
// Exports: default

// Module 9299 (SmsAutofillManager)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

const SmsAutofillManager = get_ActivityIndicator.NativeModules.SmsAutofillManager;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(SmsAutofillManager);
const result = require("set").fileFinishedImporting("modules/verification/native/hooks/useSmsAutofill.android.tsx");

export default function useSmsAutofill(arg0) {
  const React = arg0;
  const items = [arg0];
  const callback = React.useCallback((code) => callback(code.code), items);
  const items1 = [callback];
  return React.useEffect(() => {
    let result = outer1_2.addListener("verificationCodeReceived", callback);
    callback.startSmsRetriever();
    return () => {
      result.remove();
    };
  }, items1);
};
