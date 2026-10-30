// Module ID: 1818
// Function ID: 1819
// Name: ReducedMotionConfig
// Dependencies: [19, 1655, 1692, 1676]
// Exports: ReducedMotionConfig

// Module 1818 (ReducedMotionConfig)
import react from "react" /* 19 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1676 */;
import _mod1692 from "module_1692" /* 1692 */;

const useEffect = react.useEffect;

export function ReducedMotionConfig(mode) {
  mode = mode.mode;
  const tmp = useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1692.ReducedMotionManager.jsValue;
    if (LayoutAnimationType.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = tmp(1692).ReducedMotionManager;
      const setEnabled = ReducedMotionManager3.setEnabled;
      const tmpResult = _mod1692;
      setEnabled(tmpResult.isReducedMotionEnabledInSystem());
    } else if (LayoutAnimationType.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = tmp(1692).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (LayoutAnimationType.ReduceMotion.Never === mode) {
      let ReducedMotionManager = tmp(1692).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(closure_2_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
}
