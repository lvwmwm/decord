// Module ID: 13351
// Function ID: 13352
// Name: PersonalWidgetExpandCollapseContext
// Dependencies: [32, 19, 21, 558, 576, 2]
// Exports: usePersonalWidgetExpandCollapse

// Module 13351 (PersonalWidgetExpandCollapseContext)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

const jsx = Fragment.jsx;
let obj = {
  isAnyFieldClipped: false,
  isExpanded: false,
  setAnyFieldClipped() {

  },
  setIsExpanded() {

  }
};
const redux = react.createContext(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PersonalWidgetExpandCollapseProvider(arg0) {
  let closure_129_0;
  let first;
  let tmp4;
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(10);
  let tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, tmp5] = tmp3;
  [tmp7, closure_129_0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj2 = react;
  const tmp2 = _slicedToArray;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      set = new Set();
      return set;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const first1 = tmp2(obj2.useState(first), 1)[0];
  if (cResult[1] !== first1) {
    class S {
      constructor(arg0, arg1) {
        let tmp3;
        const tmp = arg1;
        if (tmp) {
          first1.add(arg0);
          tmp3 = obj;
        } else {
          first1.delete(arg0);
          tmp3 = obj;
        }
        closure_1_0(tmp3.size > 0);
      }
    }
    cResult[1] = first1;
    cResult[2] = S;
  } else {
    class S {
      constructor(arg0, arg1) {
        let tmp3;
        const tmp = arg1;
        if (tmp) {
          first1.add(arg0);
          tmp3 = obj;
        } else {
          first1.delete(arg0);
          tmp3 = obj;
        }
        closure_1_0(tmp3.size > 0);
      }
    }
  }
  if (cResult[3] === tmp7) {
    class S {
      constructor(arg0, arg1) {
        let tmp3;
        const tmp = arg1;
        if (tmp) {
          first1.add(arg0);
          tmp3 = obj;
        } else {
          first1.delete(arg0);
          tmp3 = obj;
        }
        closure_1_0(tmp3.size > 0);
      }
    }
  }
  const obj3 = { isExpanded: tmp4, setIsExpanded: tmp5, isAnyFieldClipped: tmp7, setAnyFieldClipped: tmp10 };
  cResult[3] = tmp7;
  cResult[4] = tmp4;
  cResult[5] = tmp10;
  cResult[6] = obj3;
}) : (function PersonalWidgetExpandCollapseProvider(children) {
  let closure_1;
  let closure_3;
  let first;
  let first1;
  first = undefined;
  closure_1 = undefined;
  first1 = undefined;
  closure_3 = undefined;
  children = children.children;
  [first, closure_1] = react.useState(false);
  [first1, closure_3] = react.useState(false);
  const first2 = _slicedToArray(react.useState(() => {
    set = new Set();
    return set;
  }), 1)[0];
  const items = [first2];
  const callback = react.useCallback((arg0, arg1) => {
    let tmp3;
    const tmp = arg1;
    if (tmp) {
      first2.add(arg0);
      tmp3 = obj;
    } else {
      first2.delete(arg0);
      tmp3 = obj;
    }
    closure_3(tmp3.size > 0);
  }, items);
  const items1 = [first, first1, callback];
  return <redux.Provider value={react.useMemo(() => ({ isExpanded, setIsExpanded, isAnyFieldClipped: first1, setAnyFieldClipped }), items1)}>{children}</redux.Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePersonalWidgetFieldClamp(arg0, arg1) {
  let closure_5;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(13);
  const context = react.useContext(closure_5);
  const setAnyFieldClipped = context.setAnyFieldClipped;
  const isExpanded = context.isExpanded;
  const id = react.useId();
  [first, closure_5] = react.useState(null);
  const obj2 = react;
  if (cResult[0] === id) {
    if (cResult[1] === arg0) {
      if (cResult[2] === first) {
        if (cResult[3] === setAnyFieldClipped) {
          let tmp6;
          if (cResult[4] === arg1) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === id) {
            let tmp7;
            let tmp8;
            if (cResult[7] === setAnyFieldClipped) {
              tmp7 = cResult[8];
              tmp8 = cResult[9];
            }
            const effect = obj2.useEffect(tmp7, tmp8);
            class F {
              constructor() {
                return () => setAnyFieldClipped(id, false);
              }
            }
            if (cResult[10] === tmp6) {
              let tmp11;
              if (cResult[11] === tmp10) {
                tmp11 = cResult[12];
              }
              return tmp11;
            }
            const obj3 = { onTextLayout: tmp6, lineClamp: tmp10 };
            cResult[10] = tmp6;
            cResult[11] = tmp10;
            cResult[12] = obj3;
            tmp11 = obj3;
          }
          class F {
            constructor() {
              return () => setAnyFieldClipped(id, false);
            }
          }
          const items = [id, setAnyFieldClipped];
          cResult[6] = id;
          cResult[7] = setAnyFieldClipped;
          cResult[8] = F;
          cResult[9] = items;
          tmp8 = items;
          tmp7 = F;
        }
      }
    }
  }
  const fn = function p(nativeEvent) {
    if (first !== closure_1) {
      closure_5(tmp);
      setAnyFieldClipped(id, nativeEvent.nativeEvent.lines.length > closure_0);
    }
  };
  cResult[0] = id;
  cResult[1] = arg0;
  cResult[2] = first;
  cResult[3] = setAnyFieldClipped;
  cResult[4] = arg1;
  cResult[5] = fn;
  tmp6 = fn;
}) : (function usePersonalWidgetFieldClamp(arg0, arg1) {
  let closure_5;
  let first;
  let tmp7;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const context = react.useContext(closure_5);
  const setAnyFieldClipped = context.setAnyFieldClipped;
  const isExpanded = context.isExpanded;
  const id = react.useId();
  [first, closure_5] = react.useState(null);
  const items = [first, arg1, id, arg0, setAnyFieldClipped];
  const items1 = [id, setAnyFieldClipped];
  const callback = react.useCallback((nativeEvent) => {
    if (first !== closure_1) {
      closure_5(tmp);
      setAnyFieldClipped(id, nativeEvent.nativeEvent.lines.length > closure_0);
    }
  }, items);
  const effect = react.useEffect(() => () => setAnyFieldClipped(id, false), items1);
  const obj = { onTextLayout: callback, lineClamp: tmp7 };
  tmp7 = undefined;
  if (first === arg1) {
    if (!isExpanded) {
      tmp7 = arg0;
    }
  }
  return obj;
});
function usePersonalWidgetExpandCollapse() {
  return react.useContext(redux);
}
const result1 = size.fileFinishedImporting("modules/user_profile/native/PersonalWidgetExpandCollapseContext.tsx");

export const PersonalWidgetExpandCollapseProvider = tmp2;
export { usePersonalWidgetExpandCollapse };
export const usePersonalWidgetFieldClamp = tmp4;
