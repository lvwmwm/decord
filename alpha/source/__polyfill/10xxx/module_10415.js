// Module ID: 10415
// Function ID: 10416
// Dependencies: [19]
// Exports: useUpdateGestureConfig

// Module 10415
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
