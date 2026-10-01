// Module ID: 6500
// Function ID: 6501
// Name: useSmsAutofill
// Dependencies: [19, 17, 2]
// Exports: default

// Module 6500 (useSmsAutofill)
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let closure_0;

let react = react_mod;
const SmsAutofillManager = react_native.NativeModules.SmsAutofillManager;
const nativeEventEmitter = new react_native.NativeEventEmitter(SmsAutofillManager);
const result = size.fileFinishedImporting("modules/verification/native/hooks/useSmsAutofill.android.tsx");

export default function useSmsAutofill(arg0) {
  react = arg0;
  const items = [arg0];
  const callback = react.useCallback((code) => closure_0(code.code), items);
  const items1 = [callback];
  return react.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("verificationCodeReceived", callback);
    SmsAutofillManager.startSmsRetriever();
    return () => {
      closure_0.remove();
    };
  }, items1);
};
