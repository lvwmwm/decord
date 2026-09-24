// Module ID: 16181
// Function ID: 16182
// Name: AdTopicOptOutClientExperiment
// Dependencies: [1438, 558, 568, 2]
// Exports: isAdTopicOptOutClientEnabled

// Module 16181 (AdTopicOptOutClientExperiment)
import c from "c" /* 568 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-08-ad-topic-opt-out-client", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null, 2: { enabled: false }, 3: { enabled: true }, 4: { enabled: true }, 5: { enabled: true } };
obj2[5] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/ads/AdTopicOptOutClientExperiment.tsx");

export const AdTopicOptOutClientExperiment = apexExperiment;
export const useIsAdTopicOptOutClientEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useIsAdTopicOptOutClientEnabled" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return apexExperiment.useConfig(first).enabled;
}) : (() => apexExperiment.useConfig({ location: "useIsAdTopicOptOutClientEnabled" }).enabled);
export const isAdTopicOptOutClientEnabled = function isAdTopicOptOutClientEnabled() {
  return apexExperiment.getConfig({ location: "isAdTopicOptOutClientEnabled" }).enabled;
};
