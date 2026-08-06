// Module ID: 12492
// Function ID: 12493
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 12492 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-dice-roll-slash-command", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;
