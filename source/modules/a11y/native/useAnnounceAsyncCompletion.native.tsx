// Module ID: 10163
// Function ID: 78559
// Name: useAnnounceAsyncCompletion
// Dependencies: [31, 27, 3976, 477, 4528, 2]
// Exports: default

// Module 10163 (useAnnounceAsyncCompletion)
import result from "result";
import { AccessibilityInfo } from "get ActivityIndicator";

const require = arg1;
const result = require("AccessibilityAnnouncer").fileFinishedImporting("modules/a11y/native/useAnnounceAsyncCompletion.native.tsx");

export default function useAnnounceAsyncCompletion() {
  let closure_0 = React.useRef(null);
  const effect = React.useEffect(() => () => {
    if (null != outer1_0.current) {
      outer1_0.current();
    }
    outer1_0.current = null;
  }, []);
  return React.useCallback((intl, polite) => {
    let str = polite;
    if (polite === undefined) {
      str = "assertive";
    }
    const AccessibilityAnnouncer = ref(outer1_1[2]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl, str);
    if (obj.isIOS()) {
      if (obj2.getIsScreenReaderEnabled()) {
        if (null != ref.current) {
          ref.current();
        }
        let resolved = new Promise((arg0) => {
          let closure_0 = arg0;
          const timeout = setTimeout(() => {
            let currentResult;
            if (null != lib.current) {
              currentResult = lib.current();
            }
            return currentResult;
          }, 1800);
          let result = outer2_3.addEventListener("announcementFinished", (announcement) => {
            if (tmp) {
              if (null != lib.current) {
                lib.current();
              }
            }
          });
          closure_0.current = () => {
            clearTimeout(closure_1);
            result.remove();
            lib.current = null;
            lib();
          };
        });
      }
      return resolved;
    }
    resolved = Promise.resolve();
  }, []);
};
