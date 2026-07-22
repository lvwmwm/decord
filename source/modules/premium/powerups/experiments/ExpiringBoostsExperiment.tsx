// Module ID: 11604
// Function ID: 90181
// Name: useExpiringBoostsEnabled
// Dependencies: []
// Exports: useExpiringBoostsEnabled

// Module 11604 (useExpiringBoostsEnabled)
const obj = { y: "2f876cc58ec4f702ded646dd5a7d0ecf", DateToSystemTimezoneSetter: "no_mutual_friends_light", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/experiments/ExpiringBoostsExperiment.tsx");

export default tmp2;
export const useExpiringBoostsEnabled = function useExpiringBoostsEnabled(GuildPowerupsRecentActivity) {
  return tmp2.useConfig({ location: GuildPowerupsRecentActivity }).enabled;
};
