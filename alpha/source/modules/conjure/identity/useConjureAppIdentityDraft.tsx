// Module ID: 11808
// Function ID: 11809
// Name: useConjureAppIdentityDraft
// Dependencies: [32, 19, 558, 576, 11809, 10720, 2]

// Module 11808 (useConjureAppIdentityDraft)
import ConjureActionCreators from "ConjureActionCreators" /* 10720 */;
import useConjureAppIdentityDefault from "useConjureAppIdentity" /* 11809 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let _slicedToArray = _slicedToArray_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppIdentityDraft(arg0) {
  let closure_0;
  let closure_1;
  let closure_2;
  let str;
  let tmp10;
  let tmp11;
  let tmp3;
  let tmp4;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(21);
  const tmp2 = useConjureAppIdentityDefault(arg0);
  if (cResult[0] !== arg0) {
    const fn = function c() {
      const obj = ConjureActionCreators;
      const result = obj.refreshPreviewApplication(closure_0);
      result.catch(() => {

      });
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
  [tmp7, tmp8] = react.useState(null);
  importDefault = tmp8;
  _slicedToArray(react.useState(null), 2);
  [str, tmp10] = react.useState(null);
  dependencyMap = tmp10;
  _slicedToArray(react.useState(null), 2);
  if (cResult[3] !== str) {
    const trimmed = str.trim();
    cResult[3] = str;
    cResult[4] = trimmed;
    tmp11 = trimmed;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp2.description) {
    let tmp13;
    let tmp15;
    let tmp16;
    if (cResult[6] === tmp11) {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== tmp7) {
      let obj3;
      if (null != tmp7) {
        obj3 = { icon: tmp7 };
        const obj2 = { icon: tmp7 };
      } else {
        obj3 = {};
      }
      cResult[8] = tmp7;
      cResult[9] = obj3;
      tmp15 = obj3;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] !== tmp13) {
      let obj5;
      if (null != tmp13) {
        obj5 = { description: tmp13 };
        const obj4 = { description: tmp13 };
      } else {
        obj5 = {};
      }
      cResult[10] = tmp13;
      cResult[11] = obj5;
      tmp16 = obj5;
    } else {
      tmp16 = cResult[11];
    }
    if (cResult[12] === tmp15) {
      let tmp17;
      let tmp25;
      if (cResult[13] === tmp16) {
        tmp17 = cResult[14];
      }
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            tmp8(null);
            tmp10(null);
          }
        }
        cResult[15] = E;
        tmp25 = E;
      } else {
        class E {
          constructor() {
            tmp8(null);
            tmp10(null);
          }
        }
      }
      if (tmp7 == null) {
        class E {
          constructor() {
            tmp8(null);
            tmp10(null);
          }
        }
      }
      if (cResult[16] === tmp17) {
        class E {
          constructor() {
            tmp8(null);
            tmp10(null);
          }
        }
      }
      const obj6 = { iconURL: tmp7, setIcon: tmp8, description: str, setDescription: tmp10, changes: tmp17, changed: null != tmp7 || null != tmp13, commit: tmp25 };
      cResult[16] = tmp17;
      cResult[17] = str;
      cResult[18] = tmp7;
      cResult[19] = null != tmp7 || null != tmp13;
      cResult[20] = obj6;
    }
    const obj7 = {};
    const merged = Object.assign(tmp15);
    const merged1 = Object.assign(tmp16);
    cResult[12] = tmp15;
    cResult[13] = tmp16;
    cResult[14] = obj7;
    tmp17 = obj7;
  }
  const str2 = tmp2.description;
  if (tmp11 !== str2.trim()) {
    class E {
      constructor() {
        tmp8(null);
        tmp10(null);
      }
    }
  }
  cResult[5] = tmp2.description;
  cResult[6] = tmp11;
  cResult[7] = null;
  tmp13 = tmp14;
}) : (function useConjureAppIdentityDraft(arg0) {
  let closure_2;
  let closure_3;
  let first;
  let str;
  let tmp7;
  let trimmed;
  let closure_0 = arg0;
  const tmp = first(11809)(arg0);
  let obj = trimmed;
  const items = [arg0];
  const effect = trimmed.useEffect(() => {
    const obj = ConjureActionCreators;
    const result = obj.refreshPreviewApplication(closure_0);
    result.catch(() => {

    });
  }, items);
  [first] = trimmed.useState(null);
  dependencyMap = tmp5;
  [str, tmp7] = trimmed.useState(null);
  _slicedToArray(trimmed.useState(null), 2);
  _slicedToArray = tmp7;
  trimmed = str.trim();
  let tmp9 = null;
  const str2 = tmp.description;
  if (trimmed !== str2.trim()) {
    tmp9 = trimmed;
  }
  trimmed = tmp9;
  const items1 = [first, tmp9];
  const memo = obj.useMemo(() => {
    let obj;
    let obj5;
    if (null != first) {
      obj = { icon: tmp };
      const obj2 = { icon: tmp };
    } else {
      obj = {};
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    if (null != trimmed) {
      obj5 = { description: tmp3 };
      const obj4 = { description: tmp3 };
    } else {
      obj5 = {};
    }
    const merged1 = Object.assign(obj5);
    return obj3;
  }, items1);
  let iconURL = first;
  const callback = obj.useCallback(() => {
    closure_2(null);
    tmp7(null);
  }, []);
  if (first == null) {
    iconURL = tmp.iconURL;
  }
  let obj2 = { iconURL, setIcon: tmp5, description: str, setDescription: tmp7, changes: memo, changed: null != first || null != tmp9, commit: callback };
  return obj2;
});
let result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentityDraft.tsx");

export default tmp2;
