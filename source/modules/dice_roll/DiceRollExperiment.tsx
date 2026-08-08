// Module ID: 12577
// Function ID: 12578
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 12577 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-dice-roll-slash-command", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;
