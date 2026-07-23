// Module ID: 12890
// Function ID: 100070
// Name: useUserCodeSubmit
// Dependencies: [5, 57, 31, 12889, 1212, 8961, 2]
// Exports: useUserCodeSubmit

// Module 12890 (useUserCodeSubmit)
import getLocationContextServer from "getLocationContextServer";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { OAuthConstants } from "OAuthConstants";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/activate_device/useUserCodeSubmit.tsx");

export const useUserCodeSubmit = function useUserCodeSubmit(first, onUserCodeAccepted, onClose) {
  let closure_0 = first;
  let closure_1 = onUserCodeAccepted;
  const callback = onClose;
  const submitting = callback2(React.useState(false), 2);
  callback2 = submitting[1];
  const error = callback2(React.useState(null), 2);
  React = error[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [first, onUserCodeAccepted, onClose];
  const manualSubmit = React.useCallback(callback(tmp), items);
  const items1 = [first, manualSubmit];
  const effect = React.useEffect(() => {
    if (length.length === manualSubmit.USER_CODE_LENGTH) {
      manualSubmit();
    } else {
      callback(null);
    }
  }, items1);
  return { manualSubmit, error: error[0], submitting: submitting[0] };
};
