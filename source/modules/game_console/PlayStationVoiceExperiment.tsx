// Module ID: 5744
// Function ID: 49684
// Name: PlayStationVoiceExperiment
// Dependencies: [1325, 2]

// Module 5744 (PlayStationVoiceExperiment)
const obj = { kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: { [1]: { allowPlayStationStaging: true } } };
const tmp2 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = tmp2;
