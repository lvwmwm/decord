// Module ID: 8024
// Function ID: 8025
// Name: AndroidStopAndPauseVideoExperiment
// Dependencies: [1449, 2]

// Module 8024 (AndroidStopAndPauseVideoExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-android-stop-and-pause-video", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/go_live/native/AndroidStopAndPauseVideoExperiment.tsx");

export default apexExperiment;
