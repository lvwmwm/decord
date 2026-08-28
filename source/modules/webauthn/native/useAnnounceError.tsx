// Module ID: 14262
// Function ID: 14263
// Name: useAnnounceError
// Dependencies: [19, 1351, 2]
// Exports: useAnnounceError

// Module 14262 (useAnnounceError)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/webauthn/native/useAnnounceError.tsx");

export const useAnnounceError = function useAnnounceError(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let tmp2 = null != callback;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = callback(closure_1_1[1]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp);
    }
  }, items);
};
