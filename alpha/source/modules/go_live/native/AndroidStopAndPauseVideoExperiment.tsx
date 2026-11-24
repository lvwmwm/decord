// Module ID: 8277
// Function ID: 8278
// Name: AndroidStopAndPauseVideoExperiment
// Dependencies: [1450, 2]

// Module 8277 (AndroidStopAndPauseVideoExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-android-stop-and-pause-video", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/go_live/native/AndroidStopAndPauseVideoExperiment.tsx");

export default apexExperiment;
