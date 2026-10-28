// Module ID: 15339
// Function ID: 15340
// Name: GoLiveHdrExperiment
// Dependencies: [1455, 2]
// Exports: getGoLiveHdrConfig

// Module 15339 (GoLiveHdrExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj3;
let obj = { Never: "never", Always: "always", PermittedDevicesOnly: "permittedDevicesOnly" };
const obj2 = { name: "2026-02-go-live-hdr", kind: "user", defaultConfig: { hdrCaptureMode: obj.Never }, variations: obj3 };
obj3 = { 1: null, 2: { hdrCaptureMode: obj.Always } };
obj3[2] = { hdrCaptureMode: obj.PermittedDevicesOnly };
const config = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/media_engine/GoLiveHdrExperiment.tsx");

export const HdrCaptureMode = obj;
export const getGoLiveHdrConfig = function getGoLiveHdrConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
