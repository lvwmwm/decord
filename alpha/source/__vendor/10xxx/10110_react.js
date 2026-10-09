// Module ID: 10110
// Function ID: 10111
// Name: react
// Dependencies: [19]
// Exports: useUpdateGestureConfig

// Module 10110 (react)
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
