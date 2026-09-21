// Module ID: 7753
// Function ID: 7754
// Name: PlayStationVoiceExperiment
// Dependencies: [1439, 2]

// Module 7753 (PlayStationVoiceExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const obj = { kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { allowPlayStationStaging: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = apex_ApexExperimentDefault(obj);
