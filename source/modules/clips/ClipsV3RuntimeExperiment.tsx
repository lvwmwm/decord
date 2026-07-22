// Module ID: 4666
// Function ID: 40521
// Name: isClipsV3Enabled
// Dependencies: []
// Exports: getClipsRuntime, isClipsV3MLEnabled, setActiveClipsRuntime, useIsClipsV3Enabled, useIsClipsV3MLEnabled

// Module 4666 (isClipsV3Enabled)
function isClipsV3Enabled(location) {
  return apexExperiment.getConfig({ location }).enableClipsV3;
}
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { "Bool(false)": true, "Bool(false)": true }, variations: { [1]: { "Bool(false)": "<string:1040334421>", "Bool(false)": "<string:1040334338>" }, [2]: { "Bool(false)": null, "Bool(false)": null } } });
let closure_1 = null;
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/clips/ClipsV3RuntimeExperiment.tsx");

export const ClipsV3RuntimeExperiment = apexExperiment;
export { isClipsV3Enabled };
export const useIsClipsV3Enabled = function useIsClipsV3Enabled(location) {
  return apexExperiment.useConfig({ location }).enableClipsV3;
};
export function setActiveClipsRuntime(arg0) {
  let closure_1 = arg0;
}
export const getClipsRuntime = function getClipsRuntime(classifyHardwareAndTrack) {
  if (null != closure_1) {
    let str = closure_1;
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
