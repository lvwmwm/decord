// Module ID: 1749
// Function ID: 19566
// Name: ReducedMotionConfig
// Dependencies: [31, 1586, 1623, 1607]
// Exports: ReducedMotionConfig

// Module 1749 (ReducedMotionConfig)
import { useEffect } from "result";


export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = mode(outer1_1[2]).ReducedMotionManager.jsValue;
    if (mode(outer1_1[3]).ReduceMotion.System === jsValue) {
      const ReducedMotionManager2 = mode(outer1_1[2]).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(mode(outer1_1[2]).isReducedMotionEnabledInSystem());
      const obj = mode(outer1_1[2]);
    } else if (mode(outer1_1[3]).ReduceMotion.Always === tmp) {
      let ReducedMotionManager = mode(outer1_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(true);
    } else if (mode(outer1_1[3]).ReduceMotion.Never === tmp) {
      const ReducedMotionManager3 = mode(outer1_1[2]).ReducedMotionManager;
      ReducedMotionManager3.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(outer2_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
