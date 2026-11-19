// Module ID: 5130
// Function ID: 5131
// Dependencies: [19, 5129, 5098]
// Exports: useGestureRelationsUpdater

// Module 5130
import traverseAndConfigureRelations from "traverseAndConfigureRelations" /* 5129 */;
import react from "react" /* 19 */;

let c2;
let c3;
({ useEffect: c2, useMemo: c3 } = react);

export function useGestureRelationsUpdater(gesture) {
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
}
