// Module ID: 10907
// Function ID: 10908
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 10907 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { audioOutputPresent: false, nonContextualStreamOutputPresent: false, showTileVolumeIndicator: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-mobile-volume-output-slider-removal", kind: "user", defaultConfig: { audioOutputPresent: true, nonContextualStreamOutputPresent: true, showTileVolumeIndicator: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/MobileAudioOutputExperiment.tsx");

export default apexExperiment;
