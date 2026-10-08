// Module ID: 14144
// Function ID: 14145
// Name: VideoHookDX12Experiment
// Dependencies: [1452, 2]

// Module 14144 (VideoHookDX12Experiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-video-hook-dx12", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoHookDX12Experiment.tsx");

export const VideoHookDX12Experiment = apexExperiment;
