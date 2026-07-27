// Module ID: 9676
// Function ID: 75378
// Name: useUpdateGestureConfig
// Dependencies: [31]
// Exports: useUpdateGestureConfig

// Module 9676 (useUpdateGestureConfig)
import { useEffect } from "result";


export const useUpdateGestureConfig = function useUpdateGestureConfig(arg0, options) {
  const useEffect = arg0;
  const enabled = options.enabled;
  const items = [enabled, arg0];
  useEffect(() => {
    if (undefined !== enabled) {
      closure_0.enabled(enabled);
    }
  }, items);
};
