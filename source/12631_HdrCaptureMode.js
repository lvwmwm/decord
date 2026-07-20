// Module ID: 12631
// Function ID: 97226
// Name: HdrCaptureMode
// Dependencies: []
// Exports: getGoLiveHdrConfig

// Module 12631 (HdrCaptureMode)
let obj = { Never: "never", Always: "always", PermittedDevicesOnly: "permittedDevicesOnly" };
const _module = require(dependencyMap[0]);
obj = { hdrCaptureMode: obj.Never };
obj = { hdrCaptureMode: obj.Always };
let closure_0 = _module.createApexExperiment({ defaultConfig: obj, variations: { [1]: obj, [2]: { hdrCaptureMode: obj.PermittedDevicesOnly } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/GoLiveHdrExperiment.tsx");

export const HdrCaptureMode = obj;
export const getGoLiveHdrConfig = function getGoLiveHdrConfig(location) {
  return config.getConfig({ location: location.location });
};
