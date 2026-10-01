// Module ID: 15432
// Function ID: 15433
// Name: CollectiblesCoachmarkScrollDismissContext
// Dependencies: [19, 1085, 21, 2]
// Exports: CollectiblesCoachmarkScrollDismissProvider, useCollectiblesCoachmarkScrollDismissContext

// Module 15432 (CollectiblesCoachmarkScrollDismissContext)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
const obj = {
  registerDismiss() {
    return NOOP;
  },
  handleDismissCoachmarkOnScroll: "a"
};
const redux = react.createContext(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx");

export const useCollectiblesCoachmarkScrollDismissContext = function useCollectiblesCoachmarkScrollDismissContext() {
  return react.useContext(redux);
};
export const CollectiblesCoachmarkScrollDismissProvider = function CollectiblesCoachmarkScrollDismissProvider(children) {
  children = children.children;
  let closure_0 = react.useRef(null);
  let closure_1 = react.useRef(null);
  const callback = react.useCallback((current) => {
    current.current = current;
    closure_1.current = null;
    return () => {
      if (current.current === current) {
        tmp.current = null;
        ref2.current = null;
      }
    };
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    const current = ref.current;
    if (null != current) {
      const contentOffset = nativeEvent.nativeEvent.contentOffset;
      if (null != ref2.current) {
        const _Math = Math;
        if (Math.abs(contentOffset.x - ref2.current) >= 16) {
          tmp.current = null;
          ref2.current = null;
          current();
        }
      } else {
        ref2.current = contentOffset.x;
      }
    }
  }, []);
  const items = [callback, callback1];
  return <redux.Provider value={react.useMemo(() => ({ registerDismiss, handleDismissCoachmarkOnScroll: callback1 }), items)}>{children}</redux.Provider>;
};
