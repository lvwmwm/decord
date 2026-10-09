// Module ID: 6408
// Function ID: 6409
// Dependencies: [19, 6407, 6377]
// Exports: useGestureRelationsUpdater

// Module 6408
import traverseAndConfigureRelations from "traverseAndConfigureRelations" /* 6407 */;
import react from "react" /* 19 */;

let c2;
let c3;
({ useEffect: c2, useMemo: c3 } = react);

export const useGestureRelationsUpdater = function useGestureRelationsUpdater(gesture) {
  let closure_0 = gesture;
  const items = [gesture];
  const tmp = closure_3(() => {
    let configureRelationsResult = null;
    if (gesture) {
      const obj = traverseAndConfigureRelations;
      configureRelationsResult = obj.configureRelations(tmp);
    }
    return configureRelationsResult;
  }, items);
  let closure_1 = tmp;
  const items1 = [tmp];
  closure_2(() => {
    if (closure_1) {
      const _requestAnimationFrame = requestAnimationFrame;
      let closure_0 = requestAnimationFrame(() => {
        const item = closure_1_1.forEach((item, index) => {
          const NativeProxy = closure_1_0(closure_1_1[2]).NativeProxy;
          NativeProxy.configureRelations(index, item);
        });
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
};
