// Module ID: 7221
// Function ID: 7222
// Name: PlayStationVoiceExperiment
// Dependencies: [1454, 2]

// Module 7221 (PlayStationVoiceExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { allowPlayStationStaging: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = tmp2;
