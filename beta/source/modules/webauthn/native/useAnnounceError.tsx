// Module ID: 14234
// Function ID: 14235
// Name: useAnnounceError
// Dependencies: [19, 4541, 2]
// Exports: useAnnounceError

// Module 14234 (useAnnounceError)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/native/useAnnounceError.tsx");

export const useAnnounceError = function useAnnounceError(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_0 && "" !== tmp;
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(closure_0);
    }
  }, items);
};
