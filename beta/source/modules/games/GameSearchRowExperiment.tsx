// Module ID: 11877
// Function ID: 11878
// Name: GameSearchRowExperiment
// Dependencies: [1435, 2]

// Module 11877 (GameSearchRowExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-game-search-row", kind: "user", defaultConfig: { extraChromeEnabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { extraChromeEnabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/games/GameSearchRowExperiment.tsx");

export default apexExperiment;
