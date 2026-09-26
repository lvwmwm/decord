// Module ID: 1804
// Function ID: 1805
// Name: ReducedMotionConfig
// Dependencies: [19, 1641, 1678, 1662]
// Exports: ReducedMotionConfig

// Module 1804 (ReducedMotionConfig)
import _mod19 from "module_19" /* 19 */;
import _mod1662 from "module_1662" /* 1662 */;
import _mod1678 from "module_1678" /* 1678 */;

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1678.ReducedMotionManager.jsValue;
    if (_mod1662.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = tmp(1678).ReducedMotionManager;
      ReducedMotionManager3.setEnabled(tmp(1678).isReducedMotionEnabledInSystem());
      const tmpResult = tmp(1678);
    } else if (tmp(1662).ReduceMotion.Always === tmp3) {
      const ReducedMotionManager2 = tmp(1678).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (tmp(1662).ReduceMotion.Never === tmp3) {
      let ReducedMotionManager = tmp(1678).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
