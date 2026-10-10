// Module ID: 12892
// Function ID: 12893
// Name: DiceRollExperiment
// Dependencies: [1453, 2]

// Module 12892 (DiceRollExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-05-dice-roll-slash-command", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;
