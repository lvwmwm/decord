// Module ID: 5932
// Function ID: 5933
// Name: VoiceQualityScoringExperiment
// Dependencies: [1450, 2]

// Module 5932 (VoiceQualityScoringExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-voice-quality-scoring", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VoiceQualityScoringExperiment.tsx");

export const VoiceQualityScoringExperiment = apexExperiment;
