// Module ID: 11528
// Function ID: 89813
// Name: useExpiringPowerupCoachmarkEnabled
// Dependencies: []
// Exports: useExpiringPowerupCoachmarkEnabled

// Module 11528 (useExpiringPowerupCoachmarkEnabled)
const obj = { 844175713: 16777216, 1387159956: 113, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx");

export default tmp2;
export const useExpiringPowerupCoachmarkEnabled = function useExpiringPowerupCoachmarkEnabled(useFeaturedExpiringPowerup) {
  return tmp2.useConfig({ location: useFeaturedExpiringPowerup }).enabled;
};
