// Module ID: 11521
// Function ID: 89778
// Name: useExpiringPowerupCoachmarkEnabled
// Dependencies: []
// Exports: useExpiringPowerupCoachmarkEnabled

// Module 11521 (useExpiringPowerupCoachmarkEnabled)
const obj = { -1269606814: 16777216, -1845285747: 113, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx");

export default tmp2;
export const useExpiringPowerupCoachmarkEnabled = function useExpiringPowerupCoachmarkEnabled(useFeaturedExpiringPowerup) {
  return tmp2.useConfig({ location: useFeaturedExpiringPowerup }).enabled;
};
