// Module ID: 16139
// Function ID: 16140
// Name: CollectiblesCoachmarkScrollDismissContext
// Dependencies: [19, 1089, 21, 558, 568, 2]
// Exports: useCollectiblesCoachmarkScrollDismissContext

// Module 16139 (CollectiblesCoachmarkScrollDismissContext)
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;

require = fn;
const NOOP = fn(1089).NOOP;
const jsx = fn(21).jsx;
const redux = noop.createContext({
  registerDismiss() {
    return NOOP;
  },
  handleDismissCoachmarkOnScroll: "Array"
});
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
fn = () => noop.useContext(closure_5);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx");

export const useCollectiblesCoachmarkScrollDismissContext = fn;
export const CollectiblesCoachmarkScrollDismissProvider = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(5);
  children = children.children;
  noop.useRef(null);
  noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(current) {
      current.current = current;
      closure_1.current = null;
      return () => {
        if (ref.current === ref) {
          tmp.current = null;
          closure_1.current = null;
        }
      };
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h(nativeEvent) {
      const current = ref.current;
      if (null != current) {
        const contentOffset = nativeEvent.nativeEvent.contentOffset;
        if (null != ref2.current) {
          const _Math = Math;
          if (Math.abs(contentOffset.x - tmp3.current) >= 16) {
            tmp.current = null;
            tmp3.current = null;
            current();
          }
        } else {
          tmp3.current = contentOffset.x;
        }
      }
    };
    cResult[1] = fn2;
    let tmp3 = fn2;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { registerDismiss: first, handleDismissCoachmarkOnScroll: tmp3 };
    cResult[2] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[2];
  }
  if (cResult[3] !== children) {
    const obj3 = { value: tmp4, children };
    const tmp8 = <redux.Provider value={tmp4}>{children}</redux.Provider>;
    cResult[3] = children;
    cResult[4] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[4];
  }
  return tmp5;
}) : ((children) => {
  noop.useRef(null);
  noop.useRef(null);
  const registerDismiss = noop.useCallback((current) => {
    current.current = current;
    closure_1.current = null;
    return () => {
      if (ref.current === ref) {
        tmp.current = null;
        closure_1.current = null;
      }
    };
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    const current = ref.current;
    if (null != current) {
      const contentOffset = nativeEvent.nativeEvent.contentOffset;
      if (null != ref2.current) {
        const _Math = Math;
        if (Math.abs(contentOffset.x - tmp3.current) >= 16) {
          tmp.current = null;
          tmp3.current = null;
          current();
        }
      } else {
        tmp3.current = contentOffset.x;
      }
    }
  }, []);
  const items = [registerDismiss, callback1];
  return <redux.Provider value={noop.useMemo(() => ({ registerDismiss, handleDismissCoachmarkOnScroll: callback1 }), items)}>{arg0.children}</redux.Provider>;
});
