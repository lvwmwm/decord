// Module ID: 10518
// Function ID: 10519
// Name: useUpdateGestureConfig
// Dependencies: [19]
// Exports: useUpdateGestureConfig

// Module 10518 (useUpdateGestureConfig)
import noop from "noop" /* 19 */;

let useEffect = noop.useEffect;

export const useUpdateGestureConfig = (arg0, enabled) => {
  useEffect = arg0;
  enabled = enabled.enabled;
  const items = [enabled, arg0];
  useEffect(() => {
    if (undefined !== enabled) {
      closure_0.enabled(tmp);
    }
  }, items);
};
