// Module ID: 10862
// Function ID: 10863
// Name: MobileAudioOutputExperiment
// Dependencies: [1452, 2]

// Module 10862 (MobileAudioOutputExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-02-mobile-volume-output-slider-removal", kind: "user", defaultConfig: { audioOutputPresent: true, nonContextualStreamOutputPresent: true, showTileVolumeIndicator: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { audioOutputPresent: false, nonContextualStreamOutputPresent: false, showTileVolumeIndicator: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/MobileAudioOutputExperiment.tsx");

export default apexExperiment;
