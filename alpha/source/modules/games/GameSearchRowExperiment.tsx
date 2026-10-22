// Module ID: 13219
// Function ID: 13220
// Name: GameSearchRowExperiment
// Dependencies: [1455, 2]

// Module 13219 (GameSearchRowExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-game-search-row", kind: "user", defaultConfig: { extraChromeEnabled: false }, variations: { 0: { extraChromeEnabled: false }, 1: { extraChromeEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/games/GameSearchRowExperiment.tsx");

export default apexExperiment;
