// Module ID: 13718
// Function ID: 13719
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 13718 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-video-hook-dx12", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/VideoHookDX12Experiment.tsx");

export const VideoHookDX12Experiment = apexExperiment;
