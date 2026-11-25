// Module ID: 19843
// Function ID: 19844
// Name: SoundboardMobileCreationExperiment
// Dependencies: [1450, 2]

// Module 19843 (SoundboardMobileCreationExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "guild", name: "2026-11-mobile-soundboard-sound-creation", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardMobileCreationExperiment.tsx");

export default apexExperiment;
