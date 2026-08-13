// Module ID: 11931
// Function ID: 11932
// Name: useExpiringPowerupCoachmarkEnabled
// Dependencies: [1368, 2]
// Exports: useExpiringPowerupCoachmarkEnabled

// Module 11931 (useExpiringPowerupCoachmarkEnabled)
const tmp2 = require("getUnitId")({ name: "2026-02-expiring-powerup-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let c0 = tmp2;
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx");

export default tmp2;
export const useExpiringPowerupCoachmarkEnabled = function useExpiringPowerupCoachmarkEnabled(useFeaturedExpiringPowerup) {
  return tmp2.useConfig({ location: useFeaturedExpiringPowerup }).enabled;
};
