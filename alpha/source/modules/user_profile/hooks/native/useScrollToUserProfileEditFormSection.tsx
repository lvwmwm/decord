// Module ID: 16458
// Function ID: 16459
// Name: useScrollToUserProfileEditFormSection
// Dependencies: [19, 17, 5015, 11458, 504, 2]
// Exports: default

// Module 16458 (useScrollToUserProfileEditFormSection)
import react_native from "react-native" /* 17 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11458 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, ref;

let react = react_mod;
const findNodeHandle = react_native.findNodeHandle;
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default function useScrollToUserProfileEditFormSection(arg0, arg1) {
  let closure_0;
  let closure_1;
  let stateFromStores;
  _require = arg0;
  dependencyMap = arg1;
  react = react.useRef({});
  const ref2 = react.useRef(false);
  const items = [stateFromStores];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  const items1 = [arg0, stateFromStores];
  const callback = react.useCallback((arg0) => {
    ref = arg0;
    let current = ref2.current;
    let tmp = ref2;
    if (!current) {
      current = null == ref.current[arg0];
    }
    if (!current) {
      tmp.current = true;
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_3.current = false;
        const tmp = findNodeHandle(ref.current);
        if (null != tmp) {
          if (ref2.current[ref] != null) {
            ref2.current[ref].measureLayout(tmp, (x, y) => {
              const current = ref.current;
              if (current != null) {
                const point = { x, y, animated: !closure_1_4 };
                current.scrollTo(point);
              }
            });
          }
          ProfileCustomizationNavigationStore.setState({ scrollPosition: null });
        }
      }, 0);
    }
  }, items1);
  const effect = react.useEffect(() => {
    if (null != closure_1) {
      callback(tmp);
    }
  });
  const items2 = [arg1, callback];
  return react.useCallback((arg0, arg1) => {
    if (null != arg1) {
      ref.current[arg0] = arg1;
      if (arg0 === closure_1) {
        callback(arg0);
      }
    }
  }, items2);
};
