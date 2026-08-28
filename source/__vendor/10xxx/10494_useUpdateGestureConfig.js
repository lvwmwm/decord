// Module ID: 10494
// Function ID: 10495
// Name: useUpdateGestureConfig
// Dependencies: [19]
// Exports: useUpdateGestureConfig

// Module 10494 (useUpdateGestureConfig)
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
