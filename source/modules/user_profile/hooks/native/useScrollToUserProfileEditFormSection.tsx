// Module ID: 13629
// Function ID: 104701
// Name: useScrollToUserProfileEditFormSection
// Dependencies: [31, 27, 4122, 9815, 566, 2]
// Exports: default

// Module 13629 (useScrollToUserProfileEditFormSection)
import result from "result";
import { findNodeHandle } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import zustandStore from "zustandStore";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default function useScrollToUserProfileEditFormSection(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  ref = ref.useRef({});
  const items = [_isNativeReflectConstruct];
  let closure_3 = _require(566).useStateFromStores(items, () => outer1_4.useReducedMotion);
  const effect = ref.useEffect(() => {
    let tmp = null != closure_1;
    if (tmp) {
      let current = ref.current;
      let tmp3;
      if (null != current) {
        tmp3 = current[closure_1];
      }
      tmp = null != tmp3;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj = outer1_2.current[outer1_1];
        const tmp = callback(outer1_0.current);
        if (null != tmp) {
          if (null != obj) {
            obj.measureLayout(tmp, (arg0, arg1) => {
              const current = outer2_0.current;
              if (null != current) {
                const obj = { x: arg0, y: arg1, animated: !outer2_3 };
                current.scrollTo(obj);
              }
            });
          }
          obj = { scrollPosition: null };
          outer2_5.setState(obj);
        }
      }, 0);
    }
  });
  return ref;
};
