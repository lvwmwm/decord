// Module ID: 12980
// Function ID: 12981
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 12980 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-video-hook-dx12", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/VideoHookDX12Experiment.tsx");

export const VideoHookDX12Experiment = apexExperiment;
