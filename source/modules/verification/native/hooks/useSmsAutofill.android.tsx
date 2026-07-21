// Module ID: 9255
// Function ID: 72318
// Name: SmsAutofillManager
// Dependencies: []
// Exports: default

// Module 9255 (SmsAutofillManager)
let closure_0 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const SmsAutofillManager = tmp2.NativeModules.SmsAutofillManager;
const nativeEventEmitter = new tmp2.NativeEventEmitter(SmsAutofillManager);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/verification/native/hooks/useSmsAutofill.android.tsx");

export default function useSmsAutofill(arg0) {
  const React = arg0;
  const items = [arg0];
  const callback = React.useCallback((code) => code(code.code), items);
  const SmsAutofillManager = callback;
  const items1 = [callback];
  return React.useEffect(() => {
    let closure_0 = closure_2.addListener("verificationCodeReceived", callback);
    callback.startSmsRetriever();
    return () => {
      closure_0.remove();
    };
  }, items1);
};
