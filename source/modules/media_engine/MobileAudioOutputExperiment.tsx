// Module ID: 10705
// Function ID: 83263
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10705 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-mobile-volume-output-slider-removal", kind: "user", defaultConfig: { audioOutputPresent: true, nonContextualStreamOutputPresent: true, showTileVolumeIndicator: false }, variations: { [1]: { audioOutputPresent: false, nonContextualStreamOutputPresent: false, showTileVolumeIndicator: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/MobileAudioOutputExperiment.tsx");

export default apexExperiment;
