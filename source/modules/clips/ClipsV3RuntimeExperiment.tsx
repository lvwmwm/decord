// Module ID: 4669
// Function ID: 40539
// Name: isClipsV3Enabled
// Dependencies: [1428, 2]
// Exports: getClipsRuntime, isClipsV3MLEnabled, setActiveClipsRuntime, useIsClipsV3Enabled, useIsClipsV3MLEnabled

// Module 4669 (isClipsV3Enabled)
import ApexExperiment from "ApexExperiment";

function isClipsV3Enabled(location) {
  return apexExperiment.getConfig({ location }).enableClipsV3;
}
const obj = { kind: "user", name: "2026-04-clips-v3-runtime", defaultConfig: { enableClipsV3: false, enableClipsV3ML: false }, variations: { [1]: { enableClipsV3: true, enableClipsV3ML: false }, [2]: { enableClipsV3: true, enableClipsV3ML: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let c1 = null;
const result = require("set").fileFinishedImporting("modules/clips/ClipsV3RuntimeExperiment.tsx");

export const ClipsV3RuntimeExperiment = apexExperiment;
export { isClipsV3Enabled };
export const useIsClipsV3Enabled = function useIsClipsV3Enabled(location) {
  return apexExperiment.useConfig({ location }).enableClipsV3;
};
export function setActiveClipsRuntime(arg0) {
  let closure_1 = arg0;
}
export const getClipsRuntime = function getClipsRuntime(classifyHardwareAndTrack) {
  if (null != c1) {
    let str = c1;
  } else {
    str = "v1";
    if (isClipsV3Enabled(classifyHardwareAndTrack)) {
      str = "v3";
    }
  }
  return str;
};
export const isClipsV3MLEnabled = function isClipsV3MLEnabled(location) {
  const config = apexExperiment.getConfig({ location });
  return config.enableClipsV3 && config.enableClipsV3ML;
};
export const useIsClipsV3MLEnabled = function useIsClipsV3MLEnabled(location) {
  const config = apexExperiment.useConfig({ location });
  return config.enableClipsV3 && config.enableClipsV3ML;
};
