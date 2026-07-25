// Module ID: 12545
// Function ID: 97067
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12545 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-05-dice-roll-slash-command", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;
