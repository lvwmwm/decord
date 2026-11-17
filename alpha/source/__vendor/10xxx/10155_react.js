// Module ID: 10155
// Function ID: 10156
// Name: react
// Dependencies: [19]
// Exports: useUpdateGestureConfig

// Module 10155 (react)
import react from "react" /* 19 */;

const useEffect = react.useEffect;

export const useUpdateGestureConfig = (arg0, enabled) => {
  let closure_0 = arg0;
  enabled = enabled.enabled;
  const items = [enabled, arg0];
  const tmp = useEffect(() => {
    if (undefined !== enabled) {
      closure_0.enabled(tmp);
    }
  }, items);
};
