// Module ID: 1823
// Function ID: 1824
// Name: ReducedMotionConfig
// Dependencies: [19, 1660, 1697, 1681]
// Exports: ReducedMotionConfig

// Module 1823 (ReducedMotionConfig)
import react from "react" /* 19 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1681 */;
import _mod1697 from "module_1697" /* 1697 */;

const useEffect = react.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  const tmp = useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1697.ReducedMotionManager.jsValue;
    if (LayoutAnimationType.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = tmp(1697).ReducedMotionManager;
      const setEnabled = ReducedMotionManager3.setEnabled;
      const tmpResult = _mod1697;
      setEnabled(tmpResult.isReducedMotionEnabledInSystem());
    } else if (LayoutAnimationType.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = tmp(1697).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (LayoutAnimationType.ReduceMotion.Never === mode) {
      let ReducedMotionManager = tmp(1697).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(closure_2_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
