// Module ID: 4665
// Function ID: 40465
// Name: isClipsV3Enabled
// Dependencies: []
// Exports: getClipsRuntime, isClipsV3MLEnabled, setActiveClipsRuntime, useIsClipsV3MLEnabled

// Module 4665 (isClipsV3Enabled)
function isClipsV3Enabled(location) {
  return apexExperiment.getConfig({ location }).enableClipsV3;
}
const _module = require(dependencyMap[0]);
const obj = { "Null": true, "Null": true, defaultConfig: {}, variations: { [1]: { "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 }, [2]: { "Bool(true)": null, "Bool(true)": null } } };
const apexExperiment = _module.createApexExperiment(obj);
let closure_1 = null;
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/clips/ClipsV3RuntimeExperiment.tsx");

export const ClipsV3RuntimeExperiment = apexExperiment;
export { isClipsV3Enabled };
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
