// Module ID: 12820
// Function ID: 99796
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12820 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-video-hook-dx12", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/VideoHookDX12Experiment.tsx");

export const VideoHookDX12Experiment = apexExperiment;
