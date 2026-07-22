// Module ID: 10155
// Function ID: 78519
// Name: useAnnounceAsyncCompletion
// Dependencies: []
// Exports: default

// Module 10155 (useAnnounceAsyncCompletion)
let closure_2 = importAll(dependencyMap[0]);
const AccessibilityInfo = arg1(dependencyMap[1]).AccessibilityInfo;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/a11y/native/useAnnounceAsyncCompletion.native.tsx");

export default function useAnnounceAsyncCompletion() {
  let closure_0 = React.useRef(null);
  const effect = React.useEffect(() => () => {
    if (null != ref.current) {
      ref.current();
    }
    ref.current = null;
  }, []);
  return React.useCallback((intl, polite) => {
    let str = polite;
    if (polite === undefined) {
      str = "assertive";
    }
    const AccessibilityAnnouncer = ref(closure_1[2]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl, str);
    if (obj.isIOS()) {
      if (obj2.getIsScreenReaderEnabled()) {
        if (null != ref.current) {
          ref.current();
        }
        let resolved = new Promise((arg0) => {
          const timeout = setTimeout(() => {
            let currentResult;
            if (null != arg0.current) {
              currentResult = arg0.current();
            }
            return currentResult;
          }, 1800);
          let closure_2 = closure_3.addEventListener("announcementFinished", (announcement) => {
            if (tmp) {
              if (null != announcement.current) {
                announcement.current();
              }
            }
          });
          arg0.current = () => {
            clearTimeout(closure_1);
            closure_2.remove();
            arg0.current = null;
            arg0();
          };
        });
      }
      return resolved;
    }
    resolved = Promise.resolve();
  }, []);
};
