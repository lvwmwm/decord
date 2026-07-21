// Module ID: 9710
// Function ID: 75516
// Name: useUpdateGestureConfig
// Dependencies: []
// Exports: useUpdateGestureConfig

// Module 9710 (useUpdateGestureConfig)
const useEffect = require(dependencyMap[0]).useEffect;

export const useUpdateGestureConfig = function useUpdateGestureConfig(arg0, options) {
  const useEffect = arg0;
  const enabled = options.enabled;
  const items = [enabled, arg0];
  useEffect(() => {
    if (undefined !== enabled) {
      arg0.enabled(enabled);
    }
  }, items);
};
