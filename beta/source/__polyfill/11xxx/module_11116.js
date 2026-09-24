// Module ID: 11116
// Function ID: 11117
// Dependencies: [19]
// Exports: useUpdateGestureConfig

// Module 11116
import _mod19 from "module_19" /* 19 */;

const useEffect = _mod19.useEffect;

export const useUpdateGestureConfig = (arg0, enabled) => {
  closure_0 = arg0;
  enabled = enabled.enabled;
  const items = [enabled, arg0];
  useEffect(() => {
    if (undefined !== enabled) {
      closure_0.enabled(tmp);
    }
  }, items);
};
