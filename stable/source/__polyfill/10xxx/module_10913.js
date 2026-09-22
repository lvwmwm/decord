// Module ID: 10913
// Function ID: 10914
// Dependencies: [19]
// Exports: useUpdateGestureConfig

// Module 10913
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
