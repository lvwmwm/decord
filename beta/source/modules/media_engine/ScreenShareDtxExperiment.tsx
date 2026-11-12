// Module ID: 6072
// Function ID: 6073
// Name: ScreenShareDtxExperiment
// Dependencies: [1449, 2]
// Exports: getIsScreenShareDtxEnabled

// Module 6072 (ScreenShareDtxExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-11-screen-share-dtx", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ScreenShareDtxExperiment.tsx");

export function getIsScreenShareDtxEnabled(RTCConnection) {
  const obj = { location: RTCConnection };
  return config.getConfig(obj).enabled;
}
