// Module ID: 6144
// Function ID: 54820
// Name: GameProfileInQuickswitcherExperiment
// Dependencies: [1325, 2]

// Module 6144 (GameProfileInQuickswitcherExperiment)
const obj = { kind: "user", name: "2026-06-game-profile-in-quickswitcher", defaultConfig: { enabled: false, alternatePosition: false }, variations: { [0]: { enabled: false, alternatePosition: false }, [1]: { enabled: true, alternatePosition: false }, [2]: { enabled: true, alternatePosition: true } } };
const tmp2 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/quickswitcher/GameProfileInQuickswitcherExperiment.tsx");

export const GameProfileInQuickswitcherExperiment = tmp2;
