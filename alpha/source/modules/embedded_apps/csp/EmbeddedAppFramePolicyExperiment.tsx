// Module ID: 6948
// Function ID: 6949
// Name: EmbeddedAppFramePolicyExperiment
// Dependencies: [1450, 2]
// Exports: getIsEmbeddedAppFramePolicyEnabled, useIsEmbeddedAppFramePolicyEnabled

// Module 6948 (EmbeddedAppFramePolicyExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-embedded-app-frame-policy", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppFramePolicyExperiment.tsx");

export const EMBEDDED_APP_FRAME_POLICY_EXPERIMENT = "2026-10-embedded-app-frame-policy";
export function useIsEmbeddedAppFramePolicyEnabled(useEmbeddedAppCSP) {
  const obj = { location: useEmbeddedAppCSP };
  return closure_0.useConfig(obj).enabled;
}
export function getIsEmbeddedAppFramePolicyEnabled(loadEmbeddedAppCSPForLaunch) {
  const obj = { location: loadEmbeddedAppCSPForLaunch };
  return closure_0.getConfig(obj).enabled;
}
