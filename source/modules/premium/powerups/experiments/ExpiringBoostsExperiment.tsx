// Module ID: 11641
// Function ID: 90468
// Name: useExpiringBoostsEnabled
// Dependencies: [1325, 2]
// Exports: useExpiringBoostsEnabled

// Module 11641 (useExpiringBoostsEnabled)
const obj = { name: "2026-05-expiring-boosts", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = require("getUnitId")(obj);
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ExpiringBoostsExperiment.tsx");

export default tmp2;
export const useExpiringBoostsEnabled = function useExpiringBoostsEnabled(GuildPowerupsRecentActivity) {
  return tmp2.useConfig({ location: GuildPowerupsRecentActivity }).enabled;
};
