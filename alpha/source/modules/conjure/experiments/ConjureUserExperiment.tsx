// Module ID: 6844
// Function ID: 6845
// Name: ConjureUserExperiment
// Dependencies: [1452, 558, 576, 2]
// Exports: isConjureUserEnabled

// Module 6844 (ConjureUserExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-vibegrations-user", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureUserEnabled(location) {
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
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsConjureUserEnabled(location) {
  const obj = { location: location.location };
  return closure_2.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureUserExperiment.tsx");

export const useIsConjureUserEnabled = tmp2;
export const isConjureUserEnabled = function isConjureUserEnabled(location, arg1) {
  let obj = arg1;
  const _location = location.location;
  if (arg1 === undefined) {
    obj = {};
  }
  let autoTrackExposure = obj.autoTrackExposure;
  if (autoTrackExposure === undefined) {
    autoTrackExposure = true;
  }
  return closure_2.getConfig({ location: _location }, { autoTrackExposure }).enabled;
};
