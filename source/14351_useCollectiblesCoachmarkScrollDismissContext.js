// Module ID: 14351
// Function ID: 108392
// Name: useCollectiblesCoachmarkScrollDismissContext
// Dependencies: []
// Exports: CollectiblesCoachmarkScrollDismissProvider, useCollectiblesCoachmarkScrollDismissContext

// Module 14351 (useCollectiblesCoachmarkScrollDismissContext)
const importAllResult = importAll(dependencyMap[0]);
const NOOP = arg1(dependencyMap[1]).NOOP;
const jsx = arg1(dependencyMap[2]).jsx;
const context = importAllResult.createContext({
  registerDismiss(arg0) {
    return NOOP;
  },
  handleDismissCoachmarkOnScroll: undefined
});
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx");

export const useCollectiblesCoachmarkScrollDismissContext = function useCollectiblesCoachmarkScrollDismissContext() {
  return importAllResult.useContext(closure_3);
};
export const CollectiblesCoachmarkScrollDismissProvider = function CollectiblesCoachmarkScrollDismissProvider(children) {
  const React = React.useRef(null);
  let closure_1 = React.useRef(null);
  const callback = React.useCallback((current) => {
    let closure_0 = current;
    closure_0.current = current;
    closure_1.current = null;
    return () => {
      if (arg0.current === arg0) {
        arg0.current = null;
        closure_1.current = null;
      }
    };
  }, []);
  const jsx = callback;
  const callback1 = React.useCallback((nativeEvent) => {
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
  const redux = callback1;
  const items = [callback, callback1];
  return <redux.Provider value={React.useMemo(() => ({ registerDismiss: callback, handleDismissCoachmarkOnScroll: callback1 }), items)}>{arg0.children}</redux.Provider>;
};
