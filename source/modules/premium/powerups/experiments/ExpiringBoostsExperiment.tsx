// Module ID: 11596
// Function ID: 90133
// Name: useExpiringBoostsEnabled
// Dependencies: []
// Exports: useExpiringBoostsEnabled

// Module 11596 (useExpiringBoostsEnabled)
const obj = { -1269606814: "2f876cc58ec4f702ded646dd5a7d0ecf", -1845285747: "no_mutual_friends_light", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/experiments/ExpiringBoostsExperiment.tsx");

export default tmp2;
export const useExpiringBoostsEnabled = function useExpiringBoostsEnabled(GuildPowerupsRecentActivity) {
  return tmp2.useConfig({ location: GuildPowerupsRecentActivity }).enabled;
};
