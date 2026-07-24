// Module ID: 12870
// Function ID: 99968
// Name: getAV1EncodeExperimentLinuxConfig
// Dependencies: [1428, 2]
// Exports: getAV1EncodeExperimentLinuxConfig

// Module 12870 (getAV1EncodeExperimentLinuxConfig)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-av1-encode-linux", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/AV1EncodeExperimentLinux.tsx");

export const getAV1EncodeExperimentLinuxConfig = function getAV1EncodeExperimentLinuxConfig(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
