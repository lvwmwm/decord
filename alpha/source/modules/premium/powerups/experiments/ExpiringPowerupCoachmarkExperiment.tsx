// Module ID: 14068
// Function ID: 14069
// Name: ExpiringPowerupCoachmarkExperiment
// Dependencies: [1448, 2]
// Exports: useExpiringPowerupCoachmarkEnabled

// Module 14068 (ExpiringPowerupCoachmarkExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-02-expiring-powerup-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
let closure_0 = tmp2;
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ExpiringPowerupCoachmarkExperiment.tsx");

export default tmp2;
export function useExpiringPowerupCoachmarkEnabled(useFeaturedExpiringPowerup) {
  const obj = { location: useFeaturedExpiringPowerup };
  return closure_0.useConfig(obj).enabled;
}
