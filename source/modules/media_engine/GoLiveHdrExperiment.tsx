// Module ID: 12761
// Function ID: 99460
// Name: HdrCaptureMode
// Dependencies: [1428, 2]
// Exports: getGoLiveHdrConfig

// Module 12761 (HdrCaptureMode)
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
