// Module ID: 6162
// Function ID: 6163
// Name: GameProfileInQuickswitcherExperiment
// Dependencies: [1349, 2]

// Module 6162 (GameProfileInQuickswitcherExperiment)
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-06-game-profile-in-quickswitcher", defaultConfig: { enabled: false, alternatePosition: false }, variations: { 0: { enabled: false, alternatePosition: false }, 1: { enabled: true, alternatePosition: false }, 2: { enabled: true, alternatePosition: true } } });
const result = require("set").fileFinishedImporting("modules/quickswitcher/GameProfileInQuickswitcherExperiment.tsx");

export const GameProfileInQuickswitcherExperiment = tmp2;
