// Module ID: 10388
// Function ID: 10389
// Name: useAnnounceAsyncCompletion
// Dependencies: [19, 17, 4685, 1364, 5266, 2]
// Exports: default

// Module 10388 (useAnnounceAsyncCompletion)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AccessibilityInfo = react_native.AccessibilityInfo;
const result = size.fileFinishedImporting("modules/a11y/native/useAnnounceAsyncCompletion.native.tsx");

export default function useAnnounceAsyncCompletion() {
  let ref = react.useRef(null);
  const effect = react.useEffect(() => () => {
    const current = ref.current;
    const tmp = ref;
    if (current != null) {
      current();
    }
    tmp.current = null;
  }, []);
  return react.useCallback(function(intl, polite) {
    ref = intl;
    let str = polite;
    if (polite === undefined) {
      str = "assertive";
    }
    let tmp = ref;
    const AccessibilityAnnouncer = ref(dependencyMap[2]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl, str);
    const obj = ref(dependencyMap[3]);
    const tmp2 = dependencyMap;
    if (obj.isIOS()) {
      let resolved;
      const tmpResult = tmp(tmp2[4]);
      if (tmpResult.getIsScreenReaderEnabled()) {
        let current = ref.current;
        if (current != null) {
          let currentResult = current();
        }
        const self = this;
        const self2 = this;
        resolved = new Promise((arg0) => {
          let closure_1;
          ref = arg0;
          const timeout = setTimeout(() => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          }, 1800);
          let closure_2 = AccessibilityInfo.addEventListener("announcementFinished", (event) => {
            const tmp = event.announcement === ref && event.success;
            if (tmp) {
              const current = ref.current;
              if (current != null) {
                current();
              }
            }
          });
          ref.current = () => {
            clearTimeout(closure_1);
            closure_2.remove();
            ref.current = null;
            ref();
          };
        });
      }
      return resolved;
    }
    resolved = Promise.resolve();
  }, []);
};
