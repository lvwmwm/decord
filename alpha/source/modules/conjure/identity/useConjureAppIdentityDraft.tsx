// Module ID: 11579
// Function ID: 11580
// Name: useConjureAppIdentityDraft
// Dependencies: [32, 19, 558, 576, 11580, 2]

// Module 11579 (useConjureAppIdentityDraft)
import react2 from "react" /* 576 */;
import useConjureAppIdentityDefault from "useConjureAppIdentity" /* 11580 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppIdentityDraft(arg0) {
  let str;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(18);
  const tmp2 = useConjureAppIdentityDefault(arg0);
  [tmp4, tmp5] = react.useState(null);
  _require = tmp5;
  _slicedToArray(react.useState(null), 2);
  [str, tmp7] = react.useState(null);
  importDefault = tmp7;
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] !== str) {
    const trimmed = str.trim();
    cResult[0] = str;
    cResult[1] = trimmed;
    tmp8 = trimmed;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp2.description) {
    let tmp10;
    let tmp12;
    let tmp13;
    if (cResult[3] === tmp8) {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp4) {
      let obj3;
      if (null != tmp4) {
        obj3 = { icon: tmp4 };
        const obj2 = { icon: tmp4 };
      } else {
        obj3 = {};
      }
      cResult[5] = tmp4;
      cResult[6] = obj3;
      tmp12 = obj3;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== tmp10) {
      let obj5;
      if (null != tmp10) {
        obj5 = { description: tmp10 };
        const obj4 = { description: tmp10 };
      } else {
        obj5 = {};
      }
      cResult[7] = tmp10;
      cResult[8] = obj5;
      tmp13 = obj5;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp12) {
      let tmp14;
      let tmp22;
      if (cResult[10] === tmp13) {
        tmp14 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            tmp = closure_0(null);
            tmp2 = closure_1(null);
            return;
          }
        }
        cResult[12] = U;
        tmp22 = U;
      } else {
        class U {
          constructor() {
            tmp = closure_0(null);
            tmp2 = closure_1(null);
            return;
          }
        }
      }
      if (tmp4 == null) {
        class U {
          constructor() {
            tmp = closure_0(null);
            tmp2 = closure_1(null);
            return;
          }
        }
      }
      if (cResult[13] === tmp14) {
        class U {
          constructor() {
            tmp = closure_0(null);
            tmp2 = closure_1(null);
            return;
          }
        }
      }
      const obj6 = { iconURL: tmp4, setIcon: tmp5, description: str, setDescription: tmp7, changes: tmp14, changed: null != tmp4 || null != tmp10, commit: tmp22 };
      cResult[13] = tmp14;
      cResult[14] = str;
      cResult[15] = tmp4;
      cResult[16] = null != tmp4 || null != tmp10;
      cResult[17] = obj6;
    }
    const obj7 = {};
    const merged = Object.assign(tmp12);
    const merged1 = Object.assign(tmp13);
    cResult[9] = tmp12;
    cResult[10] = tmp13;
    cResult[11] = obj7;
    tmp14 = obj7;
  }
  const str2 = tmp2.description;
  if (tmp8 !== str2.trim()) {
    class U {
      constructor() {
        tmp = closure_0(null);
        tmp2 = closure_1(null);
        return;
      }
    }
  }
  cResult[2] = tmp2.description;
  cResult[3] = tmp8;
  cResult[4] = null;
  tmp10 = tmp11;
}) : (function useConjureAppIdentityDraft(arg0) {
  let first;
  let str;
  let tmp6;
  const tmp = useConjureAppIdentityDefault(arg0);
  let obj = react;
  [first] = react.useState(null);
  let closure_1 = tmp4;
  [str, tmp6] = react.useState(null);
  let closure_2 = tmp6;
  _slicedToArray(react.useState(null), 2);
  let trimmed = str.trim();
  let tmp8 = null;
  const str2 = tmp.description;
  if (trimmed !== str2.trim()) {
    tmp8 = trimmed;
  }
  trimmed = tmp8;
  const items = [first, tmp8];
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
  }, items);
  let iconURL = first;
  const callback = obj.useCallback(() => {
    closure_1(null);
    tmp6(null);
  }, []);
  if (first == null) {
    iconURL = tmp.iconURL;
  }
  let obj2 = { iconURL, setIcon: tmp4, description: str, setDescription: tmp6, changes: memo, changed: null != first || null != tmp8, commit: callback };
  return obj2;
});
const result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentityDraft.tsx");

export default tmp2;
