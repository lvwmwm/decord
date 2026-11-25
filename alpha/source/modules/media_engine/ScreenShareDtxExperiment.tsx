// Module ID: 5958
// Function ID: 5959
// Name: ScreenShareDtxExperiment
// Dependencies: [1450, 2]
// Exports: getIsScreenShareDtxEnabled

// Module 5958 (ScreenShareDtxExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-11-screen-share-dtx", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ScreenShareDtxExperiment.tsx");

export function getIsScreenShareDtxEnabled(RTCConnection) {
  const obj = { location: RTCConnection };
  return config.getConfig(obj).enabled;
}
