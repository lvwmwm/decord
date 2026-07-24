// Module ID: 12795
// Function ID: 99572
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12795 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-av1-bitrate-tuning", kind: "user", defaultConfig: { bitrate: 3500000 }, variations: { [1]: { bitrate: 3000000 }, [2]: { bitrate: 2500000 } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/AV1BitrateTuningExperiment.tsx");

export const AV1StreamBitrateReductionExperiment = apexExperiment;
