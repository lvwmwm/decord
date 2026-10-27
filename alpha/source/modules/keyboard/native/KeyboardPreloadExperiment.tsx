// Module ID: 11756
// Function ID: 11757
// Name: KeyboardPreloadExperiment
// Dependencies: [1452, 2]

// Module 11756 (KeyboardPreloadExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-mobile-keyboard-preload", kind: "user", defaultConfig: { disablePreload: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { disablePreload: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/keyboard/native/KeyboardPreloadExperiment.tsx");

export const KeyboardPreloadExperiment = apexExperiment;
