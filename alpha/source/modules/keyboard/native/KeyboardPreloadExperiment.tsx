// Module ID: 12039
// Function ID: 12040
// Name: KeyboardPreloadExperiment
// Dependencies: [1448, 2]

// Module 12039 (KeyboardPreloadExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-mobile-keyboard-preload", kind: "user", defaultConfig: { disablePreload: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { disablePreload: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/keyboard/native/KeyboardPreloadExperiment.tsx");

export const KeyboardPreloadExperiment = apexExperiment;
