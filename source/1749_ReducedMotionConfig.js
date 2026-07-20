// Module ID: 1749
// Function ID: 19559
// Name: ReducedMotionConfig
// Dependencies: []
// Exports: ReducedMotionConfig

// Module 1749 (ReducedMotionConfig)
const useEffect = require(dependencyMap[0]).useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  const require = mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const mode = mode(closure_1[2]).ReducedMotionManager.jsValue;
    if (mode(closure_1[3]).ReduceMotion.System === mode) {
      const ReducedMotionManager2 = mode(closure_1[2]).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(mode(closure_1[2]).isReducedMotionEnabledInSystem());
      const obj = mode(closure_1[2]);
    } else if (mode(closure_1[3]).ReduceMotion.Always === tmp) {
      const ReducedMotionManager = mode(closure_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(true);
    } else if (mode(closure_1[3]).ReduceMotion.Never === tmp) {
      const ReducedMotionManager3 = mode(closure_1[2]).ReducedMotionManager;
      ReducedMotionManager3.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = jsValue(closure_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
