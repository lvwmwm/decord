// Module ID: 10773
// Function ID: 10774
// Name: EmbeddedAppFramePolicyExperiment
// Dependencies: [1455, 558, 576, 2]
// Exports: getIsEmbeddedAppFramePolicyEnabled

// Module 10773 (EmbeddedAppFramePolicyExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-embedded-app-frame-policy", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsEmbeddedAppFramePolicyEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsEmbeddedAppFramePolicyEnabled(location) {
  const obj = { location };
  return closure_2.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppFramePolicyExperiment.tsx");

export const EMBEDDED_APP_FRAME_POLICY_EXPERIMENT = "2026-10-embedded-app-frame-policy";
export const useIsEmbeddedAppFramePolicyEnabled = tmp2;
export const getIsEmbeddedAppFramePolicyEnabled = function getIsEmbeddedAppFramePolicyEnabled(loadEmbeddedAppCSPForLaunch) {
  const obj = { location: loadEmbeddedAppCSPForLaunch };
  return closure_2.getConfig(obj).enabled;
};
