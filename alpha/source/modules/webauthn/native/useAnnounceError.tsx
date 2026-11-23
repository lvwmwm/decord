// Module ID: 16086
// Function ID: 16087
// Name: useAnnounceError
// Dependencies: [19, 4922, 2]
// Exports: useAnnounceError

// Module 16086 (useAnnounceError)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4922 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/native/useAnnounceError.tsx");

export function useAnnounceError(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_0 && "" !== tmp;
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(closure_0);
    }
  }, items);
}
