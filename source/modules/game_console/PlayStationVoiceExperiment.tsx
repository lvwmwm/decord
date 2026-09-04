// Module ID: 7439
// Function ID: 7440
// Name: PlayStationVoiceExperiment
// Dependencies: [1469, 2]

// Module 7439 (PlayStationVoiceExperiment)
import getUnitIdDefault from "getUnitId" /* 1469 */;

const obj = { 1: null };
obj[1] = { allowPlayStationStaging: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-03-churro", defaultConfig: { allowPlayStationStaging: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/game_console/PlayStationVoiceExperiment.tsx");

export const PlayStationVoiceExperiment = tmp2;
