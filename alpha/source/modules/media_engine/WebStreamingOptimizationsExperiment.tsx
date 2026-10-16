// Module ID: 5292
// Function ID: 5293
// Name: WebStreamingOptimizationsExperiment
// Dependencies: [1455, 2]

// Module 5292 (WebStreamingOptimizationsExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-web-streaming-optimizations", kind: "user", defaultConfig: { degradationPreference: "default", motionContentHint: false }, variations: obj2 };
obj2 = { 1: null, 2: { degradationPreference: "maintain-framerate", motionContentHint: false }, 3: { degradationPreference: "default", motionContentHint: true }, 4: { degradationPreference: "maintain-framerate", motionContentHint: true } };
obj2[4] = { degradationPreference: "balanced", motionContentHint: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WebStreamingOptimizationsExperiment.tsx");

export const WebStreamingOptimizationsExperiment = apexExperiment;
