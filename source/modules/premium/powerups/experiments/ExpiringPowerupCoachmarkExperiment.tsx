// Module ID: 11529
// Function ID: 89826
// Name: useExpiringPowerupCoachmarkEnabled
// Dependencies: []
// Exports: useExpiringPowerupCoachmarkEnabled

// Module 11529 (useExpiringPowerupCoachmarkEnabled)
const obj = { y: 16777216, DateToSystemTimezoneSetter: 113, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx");

export default tmp2;
export const useExpiringPowerupCoachmarkEnabled = function useExpiringPowerupCoachmarkEnabled(useFeaturedExpiringPowerup) {
  return tmp2.useConfig({ location: useFeaturedExpiringPowerup }).enabled;
};
