// Module ID: 14165
// Function ID: 14166
// Name: GameSearchRowExperiment
// Dependencies: [1449, 2]

// Module 14165 (GameSearchRowExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-game-search-row", kind: "user", defaultConfig: { extraChromeEnabled: false }, variations: { 0: { extraChromeEnabled: false }, 1: { extraChromeEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/games/GameSearchRowExperiment.tsx");

export default apexExperiment;
