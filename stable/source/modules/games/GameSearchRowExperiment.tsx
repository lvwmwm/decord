// Module ID: 13947
// Function ID: 13948
// Name: GameSearchRowExperiment
// Dependencies: [1447, 2]

// Module 13947 (GameSearchRowExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-game-search-row", kind: "user", defaultConfig: { extraChromeEnabled: false }, variations: { 0: { extraChromeEnabled: false }, 1: { extraChromeEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/games/GameSearchRowExperiment.tsx");

export default apexExperiment;
