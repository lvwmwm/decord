// Module ID: 14164
// Function ID: 14165
// Name: useScrollToUserProfileEditFormSection
// Dependencies: [19, 17, 4825, 9227, 504, 2]
// Exports: default

// Module 14164 (useScrollToUserProfileEditFormSection)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9227 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const findNodeHandle = react_native.findNodeHandle;
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default function useScrollToUserProfileEditFormSection(arg0, arg1) {
  let closure_0;
  let closure_1;
  let ref;
  let state;
  let useReducedMotion;
  _require = arg0;
  dependencyMap = arg1;
  ref = ref.useRef({});
  const items = [AccessibilityStore];
  const obj = require("get initialized");
  let closure_3 = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = ref.useEffect(() => {
    let ref2;
    let tmp;
    let tmp2 = null != closure_1;
    if (tmp2) {
      let current = ref.current;
      let tmp4;
      if (current != null) {
        tmp4 = current[tmp];
      }
      tmp2 = null != tmp4;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const tmp = closure_3(ref.current);
        if (null != tmp) {
          if (ref2.current[closure_1_1] != null) {
            ref2.current[closure_1_1].measureLayout(tmp, (x, y) => {
              const current = ref.current;
              if (current != null) {
                const point = { x, y, animated: !closure_1_3 };
                current.scrollTo(point);
              }
            });
          }
          state.setState({ scrollPosition: null });
        }
      }, 0);
    }
  });
  return ref;
};
