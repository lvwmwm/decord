// Module ID: 1805
// Function ID: 1806
// Name: ReducedMotionConfig
// Dependencies: [19, 1642, 1679, 1663]
// Exports: ReducedMotionConfig

// Module 1805 (ReducedMotionConfig)
import _mod19 from "module_19" /* 19 */;
import _mod1663 from "module_1663" /* 1663 */;
import _mod1679 from "module_1679" /* 1679 */;

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1679.ReducedMotionManager.jsValue;
    if (_mod1663.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = tmp(1679).ReducedMotionManager;
      ReducedMotionManager3.setEnabled(tmp(1679).isReducedMotionEnabledInSystem());
      const tmpResult = tmp(1679);
    } else if (tmp(1663).ReduceMotion.Always === tmp3) {
      const ReducedMotionManager2 = tmp(1679).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (tmp(1663).ReduceMotion.Never === tmp3) {
      let ReducedMotionManager = tmp(1679).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
