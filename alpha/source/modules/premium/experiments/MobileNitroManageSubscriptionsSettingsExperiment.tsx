// Module ID: 13613
// Function ID: 13614
// Name: MobileNitroManageSubscriptionsSettingsExperiment
// Dependencies: [1453, 558, 576, 2]
// Exports: getMobileNitroManageSubscriptionsSettingsExperiment

// Module 13613 (MobileNitroManageSubscriptionsSettingsExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-macaron", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileNitroManageSubscriptionsSettingsExperiment(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useMobileNitroManageSubscriptionsSettingsExperiment(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx");

export default apexExperiment;
export const useMobileNitroManageSubscriptionsSettingsExperiment = tmp3;
export const getMobileNitroManageSubscriptionsSettingsExperiment = function getMobileNitroManageSubscriptionsSettingsExperiment(location) {
  const obj = { location: location.location };
  return apexExperiment.getConfig(obj).enabled;
};
