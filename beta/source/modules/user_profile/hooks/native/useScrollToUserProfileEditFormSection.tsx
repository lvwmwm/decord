// Module ID: 15858
// Function ID: 15859
// Name: useScrollToUserProfileEditFormSection
// Dependencies: [19, 4914, 9425, 504, 2]
// Exports: default

// Module 15858 (useScrollToUserProfileEditFormSection)
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9425 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default function useScrollToUserProfileEditFormSection(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg1;
  react = arg2;
  let ref = react.useRef({});
  const ref2 = react.useRef(false);
  let obj = require("get initialized");
  const items = [ref];
  const stateFromStores = obj.useStateFromStores(items, () => ref.useReducedMotion);
  const items1 = [arg0, stateFromStores, arg2];
  const callback = react.useCallback((arg0) => {
    ref = arg0;
    let current = ref2.current;
    const tmp = ref2;
    if (!current) {
      current = null == ref.current[arg0];
    }
    if (!current) {
      tmp.current = true;
      const _setTimeout = setTimeout;
      let num = 0;
      const timerId = setTimeout(() => {
        closure_4.current = false;
        let obj = ref2.current[ref];
        let current = ref.current;
        let innerViewRef;
        if (current != null) {
          innerViewRef = current.getInnerViewRef();
        }
        if (null != innerViewRef) {
          if (obj != null) {
            obj.measureLayout(innerViewRef, (arg0, arg1) => {
              let num;
              const obj = closure_1_2;
              if (closure_1_2 != null) {
                num = obj.get();
              }
              if (num == null) {
                num = 0;
              }
              const current = ref.current;
              if (current != null) {
                const obj2 = { y: tmp, animated: !closure_1_5 };
                current.scrollTo(obj2);
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
