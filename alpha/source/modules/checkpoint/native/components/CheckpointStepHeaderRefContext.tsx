// Module ID: 14156
// Function ID: 14157
// Name: CheckpointStepHeaderRefContext
// Dependencies: [32, 19, 21, 5505, 6268, 2]
// Exports: CheckpointStepFocusProvider

// Module 14156 (CheckpointStepHeaderRefContext)
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const context = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStepHeaderRefContext.tsx");

export default context;
export function CheckpointStepFocusProvider(arg0) {
  let children;
  let closure_1;
  let route;
  let isScreenReaderEnabled;
  ({ route, children } = arg0);
  let tmp = isScreenReaderEnabled(react.useState(null), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const value = react.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = closure_1(arg0);
    return () => closure_1((arg0) => {
      let tmp = null;
      if (arg0 !== closure_1_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  let obj = first(5505);
  isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [route, first, isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    let current;
    const tmp = isScreenReaderEnabled;
    if (tmp) {
      if (null != current) {
        const _setTimeout = setTimeout;
        current = setTimeout(() => {
          let obj3;
          const obj2 = { ref: obj3 };
          obj3 = { current };
          const obj = first(closure_1[4]);
          return obj.setAccessibilityFocus(obj2);
        }, 100);
        return () => clearTimeout(current);
      }
    }
  }, items);
  return <context.Provider value={value}>{children}</context.Provider>;
}
