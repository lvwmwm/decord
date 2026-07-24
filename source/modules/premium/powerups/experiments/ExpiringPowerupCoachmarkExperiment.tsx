// Module ID: 11569
// Function ID: 90120
// Name: useExpiringPowerupCoachmarkEnabled
// Dependencies: [1325, 2]
// Exports: useExpiringPowerupCoachmarkEnabled

// Module 11569 (useExpiringPowerupCoachmarkEnabled)
const obj = { name: "2026-02-expiring-powerup-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const tmp2 = require("getUnitId")(obj);
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx");

export default tmp2;
export const useExpiringPowerupCoachmarkEnabled = function useExpiringPowerupCoachmarkEnabled(useFeaturedExpiringPowerup) {
  return tmp2.useConfig({ location: useFeaturedExpiringPowerup }).enabled;
};
