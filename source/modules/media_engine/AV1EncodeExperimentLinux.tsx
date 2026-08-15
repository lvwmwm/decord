// Module ID: 13166
// Function ID: 13167
// Name: getAV1EncodeExperimentLinuxConfig
// Dependencies: [1472, 2]
// Exports: getAV1EncodeExperimentLinuxConfig

// Module 13166 (getAV1EncodeExperimentLinuxConfig)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-06-av1-encode-linux", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/AV1EncodeExperimentLinux.tsx");

export const getAV1EncodeExperimentLinuxConfig = function getAV1EncodeExperimentLinuxConfig(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
