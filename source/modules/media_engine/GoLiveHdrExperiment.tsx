// Module ID: 12823
// Function ID: 99908
// Name: HdrCaptureMode
// Dependencies: [1428, 2]
// Exports: getGoLiveHdrConfig

// Module 12823 (HdrCaptureMode)
import ApexExperiment from "ApexExperiment";

let obj = { Never: "never", Always: "always", PermittedDevicesOnly: "permittedDevicesOnly" };
obj = { name: "2026-02-go-live-hdr", kind: "user" };
obj.defaultConfig = { hdrCaptureMode: obj.Never };
obj = { hdrCaptureMode: obj.Always };
obj.variations = { [1]: obj, [2]: { hdrCaptureMode: obj.PermittedDevicesOnly } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/GoLiveHdrExperiment.tsx");

export const HdrCaptureMode = obj;
export const getGoLiveHdrConfig = function getGoLiveHdrConfig(location) {
  return config.getConfig({ location: location.location });
};
