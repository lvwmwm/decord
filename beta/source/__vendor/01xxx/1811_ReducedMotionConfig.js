// Module ID: 1811
// Function ID: 1812
// Name: ReducedMotionConfig
// Dependencies: [19, 1648, 1685, 1669]
// Exports: ReducedMotionConfig

// Module 1811 (ReducedMotionConfig)
import react from "react" /* 19 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1669 */;
import _mod1685 from "module_1685" /* 1685 */;

const useEffect = react.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  const tmp = useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1685.ReducedMotionManager.jsValue;
    if (LayoutAnimationType.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = tmp(1685).ReducedMotionManager;
      const setEnabled = ReducedMotionManager3.setEnabled;
      const tmpResult = _mod1685;
      setEnabled(tmpResult.isReducedMotionEnabledInSystem());
    } else if (LayoutAnimationType.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = tmp(1685).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (LayoutAnimationType.ReduceMotion.Never === mode) {
      let ReducedMotionManager = tmp(1685).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(closure_2_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
