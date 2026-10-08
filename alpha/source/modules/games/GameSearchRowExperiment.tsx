// Module ID: 12114
// Function ID: 12115
// Name: GameSearchRowExperiment
// Dependencies: [1452, 2]

// Module 12114 (GameSearchRowExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-game-search-row", kind: "user", defaultConfig: { extraChromeEnabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { extraChromeEnabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/games/GameSearchRowExperiment.tsx");

export default apexExperiment;
