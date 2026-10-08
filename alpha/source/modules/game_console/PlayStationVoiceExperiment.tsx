// Module ID: 7216
// Function ID: 7217
// Name: PlayStationVoiceExperiment
// Dependencies: [1453, 2]

// Module 7216 (PlayStationVoiceExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { allowPlayStationStaging: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = tmp2;
