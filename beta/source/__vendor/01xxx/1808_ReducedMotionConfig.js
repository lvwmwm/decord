// Module ID: 1808
// Function ID: 1809
// Name: ReducedMotionConfig
// Dependencies: [19, 1645, 1682, 1666]
// Exports: ReducedMotionConfig

// Module 1808 (ReducedMotionConfig)
import _mod19 from "module_19" /* 19 */;
import _mod1666 from "module_1666" /* 1666 */;
import _mod1682 from "module_1682" /* 1682 */;

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1682.ReducedMotionManager.jsValue;
    if (_mod1666.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = tmp(1682).ReducedMotionManager;
      ReducedMotionManager3.setEnabled(tmp(1682).isReducedMotionEnabledInSystem());
      const tmpResult = tmp(1682);
    } else if (tmp(1666).ReduceMotion.Always === tmp3) {
      const ReducedMotionManager2 = tmp(1682).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (tmp(1666).ReduceMotion.Never === tmp3) {
      let ReducedMotionManager = tmp(1682).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
