// Module ID: 14272
// Function ID: 14273
// Name: GoLiveHdrExperiment
// Dependencies: [1438, 2]
// Exports: getGoLiveHdrConfig

// Module 14272 (GoLiveHdrExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { Never: "never", Always: "always", PermittedDevicesOnly: "permittedDevicesOnly" };
const obj2 = { name: "2026-02-go-live-hdr", kind: "user", defaultConfig: { hdrCaptureMode: obj.Never }, variations: null };
const obj3 = { 1: null, 2: { hdrCaptureMode: obj.Always } };
obj3[2] = { hdrCaptureMode: obj.PermittedDevicesOnly };
obj2.variations = obj3;
const config = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/media_engine/GoLiveHdrExperiment.tsx");

export const HdrCaptureMode = obj;
export const getGoLiveHdrConfig = function getGoLiveHdrConfig(location) {
  return config.getConfig({ location: location.location });
};
