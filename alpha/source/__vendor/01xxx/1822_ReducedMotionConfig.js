// Module ID: 1822
// Function ID: 1823
// Name: ReducedMotionConfig
// Dependencies: [19, 1659, 1696, 1680]
// Exports: ReducedMotionConfig

// Module 1822 (ReducedMotionConfig)
import react from "react" /* 19 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1680 */;
import _mod1696 from "module_1696" /* 1696 */;

const useEffect = react.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  const tmp = useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1696.ReducedMotionManager.jsValue;
    if (LayoutAnimationType.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = tmp(1696).ReducedMotionManager;
      const setEnabled = ReducedMotionManager3.setEnabled;
      const tmpResult = _mod1696;
      setEnabled(tmpResult.isReducedMotionEnabledInSystem());
    } else if (LayoutAnimationType.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = tmp(1696).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (LayoutAnimationType.ReduceMotion.Never === mode) {
      let ReducedMotionManager = tmp(1696).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(closure_2_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
