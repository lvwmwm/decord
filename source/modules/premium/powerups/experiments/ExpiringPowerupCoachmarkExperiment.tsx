// Module ID: 12439
// Function ID: 12440
// Name: useExpiringPowerupCoachmarkEnabled
// Dependencies: [1469, 2]
// Exports: useExpiringPowerupCoachmarkEnabled

// Module 12439 (useExpiringPowerupCoachmarkEnabled)
import getUnitIdDefault from "getUnitId" /* 1469 */;

const tmp2 = getUnitIdDefault({ name: "2026-02-expiring-powerup-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx");

export default tmp2;
export const useExpiringPowerupCoachmarkEnabled = function useExpiringPowerupCoachmarkEnabled(useFeaturedExpiringPowerup) {
  return closure_0.useConfig({ location: useFeaturedExpiringPowerup }).enabled;
};
