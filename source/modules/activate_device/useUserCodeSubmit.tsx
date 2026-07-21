// Module ID: 12767
// Function ID: 97859
// Name: useUserCodeSubmit
// Dependencies: []
// Exports: useUserCodeSubmit

// Module 12767 (useUserCodeSubmit)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
const OAuthConstants = arg1(dependencyMap[3]).OAuthConstants;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activate_device/useUserCodeSubmit.tsx");

export const useUserCodeSubmit = function useUserCodeSubmit(first, onUserCodeAccepted, onClose) {
  onUserCodeAccepted = first;
  const dependencyMap = onUserCodeAccepted;
  const callback = onClose;
  const submitting = callback2(React.useState(false), 2);
  const callback2 = submitting[1];
  const error = callback2(React.useState(null), 2);
  const React = error[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [first, onUserCodeAccepted, onClose];
  const manualSubmit = React.useCallback(callback(tmp), items);
  const OAuthConstants = manualSubmit;
  const items1 = [first, manualSubmit];
  const effect = React.useEffect(() => {
    if (arg0.length === manualSubmit.USER_CODE_LENGTH) {
      manualSubmit();
    } else {
      callback(null);
    }
  }, items1);
  return { manualSubmit, error: error[0], submitting: submitting[0] };
};
