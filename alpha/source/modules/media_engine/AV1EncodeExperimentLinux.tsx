// Module ID: 15940
// Function ID: 15941
// Name: AV1EncodeExperimentLinux
// Dependencies: [1447, 2]
// Exports: getAV1EncodeExperimentLinuxConfig

// Module 15940 (AV1EncodeExperimentLinux)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-av1-encode-linux", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AV1EncodeExperimentLinux.tsx");

export function getAV1EncodeExperimentLinuxConfig(MediaEngineStore) {
  const obj = { location: MediaEngineStore };
  return config.getConfig(obj);
}
