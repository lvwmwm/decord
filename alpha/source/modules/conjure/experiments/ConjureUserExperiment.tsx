// Module ID: 6874
// Function ID: 6875
// Name: ConjureUserExperiment
// Dependencies: [1448, 2]
// Exports: isConjureUserEnabled, useIsConjureUserEnabled

// Module 6874 (ConjureUserExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-vibegrations-user", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureUserExperiment.tsx");

export function useIsConjureUserEnabled(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
export function isConjureUserEnabled(location, arg1) {
  let obj = arg1;
  const _location = location.location;
  if (arg1 === undefined) {
    obj = {};
  }
  let autoTrackExposure = obj.autoTrackExposure;
  if (autoTrackExposure === undefined) {
    autoTrackExposure = true;
  }
  return closure_0.getConfig({ location: _location }, { autoTrackExposure }).enabled;
}
