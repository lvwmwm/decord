// Module ID: 8438
// Function ID: 8439
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 8438 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-dice-roll-slash-command", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;
