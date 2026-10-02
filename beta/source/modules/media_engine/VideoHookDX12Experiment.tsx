// Module ID: 13553
// Function ID: 13554
// Name: VideoHookDX12Experiment
// Dependencies: [1441, 2]

// Module 13553 (VideoHookDX12Experiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-video-hook-dx12", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoHookDX12Experiment.tsx");

export const VideoHookDX12Experiment = apexExperiment;
