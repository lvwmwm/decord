// Module ID: 9433
// Function ID: 9434
// Name: MobileAudioOutputExperiment
// Dependencies: [1441, 2]

// Module 9433 (MobileAudioOutputExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-02-mobile-volume-output-slider-removal", kind: "user", defaultConfig: { audioOutputPresent: true, nonContextualStreamOutputPresent: true, showTileVolumeIndicator: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { audioOutputPresent: false, nonContextualStreamOutputPresent: false, showTileVolumeIndicator: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/MobileAudioOutputExperiment.tsx");

export default apexExperiment;
