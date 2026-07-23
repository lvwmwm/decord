// Module ID: 14483
// Function ID: 110643
// Name: useCollectiblesCoachmarkScrollDismissContext
// Dependencies: [31, 482, 33, 2]
// Exports: CollectiblesCoachmarkScrollDismissProvider, useCollectiblesCoachmarkScrollDismissContext

// Module 14483 (useCollectiblesCoachmarkScrollDismissContext)
import importAllResult from "result";
import { NOOP } from "sum";
import { jsx } from "jsxProd";

const context = importAllResult.createContext({
  registerDismiss(arg0) {
    return NOOP;
  },
  handleDismissCoachmarkOnScroll: undefined
});
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx");

export const useCollectiblesCoachmarkScrollDismissContext = function useCollectiblesCoachmarkScrollDismissContext() {
  return importAllResult.useContext(closure_3);
};
export const CollectiblesCoachmarkScrollDismissProvider = function CollectiblesCoachmarkScrollDismissProvider(children) {
  importAllResult = importAllResult.useRef(null);
  let closure_1 = importAllResult.useRef(null);
  const callback = importAllResult.useCallback((current) => {
    let closure_0 = current;
    closure_0.current = current;
    closure_1.current = null;
    return () => {
      if (ref.current === ref) {
        ref.current = null;
        outer1_1.current = null;
      }
    };
  }, []);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    const current = ref.current;
    if (null != current) {
      const contentOffset = nativeEvent.nativeEvent.contentOffset;
      if (null != ref2.current) {
        const _Math = Math;
        if (Math.abs(contentOffset.x - ref2.current) >= 16) {
          ref.current = null;
          ref2.current = null;
          current();
        }
      } else {
        ref2.current = contentOffset.x;
      }
    }
  }, []);
  const items = [callback, callback1];
  return callback(callback1.Provider, { value: importAllResult.useMemo(() => ({ registerDismiss: callback, handleDismissCoachmarkOnScroll: callback1 }), items), children: children.children });
};
