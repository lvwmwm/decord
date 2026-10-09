// Module ID: 11035
// Function ID: 11036
// Name: MobileAudioOutputExperiment
// Dependencies: [1453, 2]

// Module 11035 (MobileAudioOutputExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-02-mobile-volume-output-slider-removal", kind: "user", defaultConfig: { audioOutputPresent: true, nonContextualStreamOutputPresent: true, showTileVolumeIndicator: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { audioOutputPresent: false, nonContextualStreamOutputPresent: false, showTileVolumeIndicator: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/MobileAudioOutputExperiment.tsx");

export default apexExperiment;
