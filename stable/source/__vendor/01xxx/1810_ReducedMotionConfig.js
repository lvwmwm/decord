// Module ID: 1810
// Function ID: 1811
// Name: ReducedMotionConfig
// Dependencies: [19, 1647, 1684, 1668]
// Exports: ReducedMotionConfig

// Module 1810 (ReducedMotionConfig)
import react from "react" /* 19 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1668 */;
import _mod1684 from "module_1684" /* 1684 */;

const useEffect = react.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  const tmp = useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1684.ReducedMotionManager.jsValue;
    if (LayoutAnimationType.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = tmp(1684).ReducedMotionManager;
      const setEnabled = ReducedMotionManager3.setEnabled;
      const tmpResult = _mod1684;
      setEnabled(tmpResult.isReducedMotionEnabledInSystem());
    } else if (LayoutAnimationType.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = tmp(1684).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (LayoutAnimationType.ReduceMotion.Never === mode) {
      let ReducedMotionManager = tmp(1684).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(closure_2_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
