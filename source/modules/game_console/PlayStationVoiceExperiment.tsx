// Module ID: 5230
// Function ID: 5231
// Name: PlayStationVoiceExperiment
// Dependencies: [1368, 2]

// Module 5230 (PlayStationVoiceExperiment)
const obj = { 1: null };
obj[1] = { allowPlayStationStaging: true };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = tmp2;
