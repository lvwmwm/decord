// Module ID: 7784
// Function ID: 7785
// Name: PlayStationVoiceExperiment
// Dependencies: [1450, 2]

// Module 7784 (PlayStationVoiceExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { allowPlayStationStaging: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = tmp2;
