// Module ID: 13361
// Function ID: 13362
// Name: GameSearchRowExperiment
// Dependencies: [1451, 2]

// Module 13361 (GameSearchRowExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-game-search-row", kind: "user", defaultConfig: { extraChromeEnabled: false }, variations: { 0: { extraChromeEnabled: false }, 1: { extraChromeEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/games/GameSearchRowExperiment.tsx");

export default apexExperiment;
