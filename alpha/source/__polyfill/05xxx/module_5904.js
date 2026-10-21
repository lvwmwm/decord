// Module ID: 5904
// Function ID: 5905
// Dependencies: [19, 17, 5902]
// Exports: useRenderDebugInfo

// Module 5904
import react_native from "react-native" /* 17 */;
import _mod5902 from "module_5902" /* 5902 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require;

const findNodeHandle = react_native.findNodeHandle;

export const useRenderDebugInfo = function useRenderDebugInfo(arg0) {
  let closure_0;
  let ref1;
  _require = arg0;
  const ref = ref1.useRef(null);
  ref1 = ref1.useRef(-1);
  let closure_3 = ref1.useEffectEvent((arg0) => {
    const current = ref1.current;
    const RNSLog = _mod5902.RNSLog;
    RNSLog.log("" + closure_0 + " [" + current + "] " + arg0);
  });
  const effect = ref1.useEffect(() => {
    if (null != ref.current) {
      let num = findNodeHandle(tmp.current);
      if (num == null) {
        num = -1;
      }
      ref1.current = num;
      if (-1 === ref1.current) {
        closure_3("failed to find node handle");
      }
    }
    closure_3("mounted");
    return () => {
      closure_1_3("unmounted");
    };
  }, []);
  let current = ref1.current;
  let RNSLog = require("module_5902").RNSLog;
  RNSLog.log("" + arg0 + " [" + current + "] " + "rendered");
  return ref;
};
