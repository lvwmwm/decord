// Module ID: 13614
// Function ID: 13615
// Name: CheckpointStepHeaderRefContext
// Dependencies: [19, 21, 5274, 6021, 2]
// Exports: CheckpointStepFocusProvider

// Module 13614 (CheckpointStepHeaderRefContext)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const context = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStepHeaderRefContext.tsx");

export default context;
export function CheckpointStepFocusProvider(arg0) {
  let children;
  let closure_0;
  let route;
  let isScreenReaderEnabled;
  ({ route, children } = arg0);
  _require = react.useRef(null);
  const value = react.useCallback((current) => {
    closure_0.current = current;
  }, []);
  let obj = require("useIsScreenReaderEnabled");
  isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [route, isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    if (isScreenReaderEnabled) {
      const _setTimeout = setTimeout;
      const ref = setTimeout(() => {
        const obj = ref(isScreenReaderEnabled[3]);
        const obj2 = { ref };
        return obj.setAccessibilityFocus(obj2);
      }, 100);
      return () => clearTimeout(ref);
    }
  }, items);
  return <context.Provider value={value}>{children}</context.Provider>;
}
