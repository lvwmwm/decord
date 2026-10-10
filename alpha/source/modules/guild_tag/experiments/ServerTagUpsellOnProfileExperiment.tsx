// Module ID: 14880
// Function ID: 14881
// Name: ServerTagUpsellOnProfileExperiment
// Dependencies: [1453, 558, 576, 2]

// Module 14880 (ServerTagUpsellOnProfileExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-server-tag-upsell-on-profile", kind: "user", defaultConfig: { enabled: false, ignoreSubscriptionPlatform: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, ignoreSubscriptionPlatform: false } };
obj2[2] = { enabled: true, ignoreSubscriptionPlatform: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useServerTagUpsellOnProfileConfig(location) {
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
  return apexExperiment.useConfig(tmp2);
}) : (function useServerTagUpsellOnProfileConfig(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj);
});
const result = size.fileFinishedImporting("modules/guild_tag/experiments/ServerTagUpsellOnProfileExperiment.tsx");

export default apexExperiment;
export const useServerTagUpsellOnProfileConfig = tmp3;
