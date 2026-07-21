// Module ID: 11603
// Function ID: 90156
// Name: useExpiringBoostsEnabled
// Dependencies: []
// Exports: useExpiringBoostsEnabled

// Module 11603 (useExpiringBoostsEnabled)
const obj = { 9223372036854775807: "2f876cc58ec4f702ded646dd5a7d0ecf", 0: "no_mutual_friends_light", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/experiments/ExpiringBoostsExperiment.tsx");

export default tmp2;
export const useExpiringBoostsEnabled = function useExpiringBoostsEnabled(GuildPowerupsRecentActivity) {
  return tmp2.useConfig({ location: GuildPowerupsRecentActivity }).enabled;
};
