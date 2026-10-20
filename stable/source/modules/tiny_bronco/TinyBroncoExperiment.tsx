// Module ID: 5928
// Function ID: 5929
// Name: TinyBroncoExperiment
// Dependencies: [1453, 558, 576, 2]
// Exports: isTinyBroncoEnabled

// Module 5928 (TinyBroncoExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-tiny-bronco", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsTinyBroncoEnabled(location) {
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
}) : (function useIsTinyBroncoEnabled(location) {
  const obj = { location };
  return closure_2.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoExperiment.tsx");

export const useIsTinyBroncoEnabled = tmp2;
export const isTinyBroncoEnabled = function isTinyBroncoEnabled(location) {
  const obj = { location };
  return closure_2.getConfig(obj).enabled;
};
