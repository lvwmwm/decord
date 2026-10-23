// Module ID: 15833
// Function ID: 15834
// Name: useScrollToUserProfileEditFormSection
// Dependencies: [19, 17, 4970, 11120, 558, 576, 504, 2]

// Module 15833 (useScrollToUserProfileEditFormSection)
import react_native from "react-native" /* 17 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import ProfileCustomizationNavigationStore_mod from "ProfileCustomizationNavigationStore" /* 11120 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, flag, num, ref, tmp3, tmp4;

let react = react_mod;
let findNodeHandle = react_native.findNodeHandle;
let ProfileCustomizationNavigationStore = ProfileCustomizationNavigationStore_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScrollToUserProfileEditFormSection(arg0, arg1) {
  let closure_0;
  let closure_1;
  let closure_5;
  let first;
  let ref2;
  let stateFromStores;
  let tmp5;
  let tmp6;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const obj3 = react;
  react = react.useRef(first);
  findNodeHandle = react.useRef(false);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores];
    const fn = function v() {
      return stateFromStores.useReducedMotion;
    };
    cResult[1] = items;
    cResult[2] = fn;
    tmp6 = fn;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[3] === arg0) {
    let tmp9;
    if (cResult[4] === stateFromStores) {
      tmp9 = cResult[5];
    }
    ProfileCustomizationNavigationStore = tmp9;
    if (cResult[6] === arg1) {
      let tmp10;
      if (cResult[7] === tmp9) {
        tmp10 = cResult[8];
      }
      const effect = obj3.useEffect(tmp10);
      if (cResult[9] === arg1) {
        let tmp13;
        if (cResult[10] === tmp9) {
          tmp13 = cResult[11];
        }
        return tmp13;
      }
      class E {
        constructor(arg0, arg1) {
          if (null != arg1) {
            ref.current[arg0] = arg1;
            if (arg0 === closure_1) {
              closure_5(arg0);
            }
          }
        }
      }
      cResult[9] = arg1;
      cResult[10] = tmp9;
      cResult[11] = E;
      tmp13 = E;
    }
    cResult[6] = arg1;
    cResult[7] = tmp9;
    cResult[8] = tmp11;
    tmp10 = tmp11;
  }
  class R {
    constructor(arg0) {
      closure_0 = arg0;
      current = closure_3.current;
      tmp = closure_3;
      if (!current) {
        tmp2 = closure_2;
        tmp3 = null;
        current = null == closure_2.current[arg0];
      }
      if (!current) {
        flag = true;
        tmp.current = true;
        tmp4 = globalThis;
        _setTimeout = setTimeout;
        num = 0;
        timerId = setTimeout(() => {
          closure_3.current = false;
          const tmp = findNodeHandle(ref.current);
          if (null != tmp) {
            if (ref2.current[ref] != null) {
              ref2.current[ref].measureLayout(tmp, () => { /* body not rendered: F160506 */ });
            }
            ProfileCustomizationNavigationStore.setState({ scrollPosition: null });
          }
        }, 0);
      }
      return;
    }
  }
  cResult[3] = arg0;
  cResult[4] = stateFromStores;
  cResult[5] = R;
  tmp9 = R;
}) : (function useScrollToUserProfileEditFormSection(arg0, arg1) {
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
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default tmp2;
