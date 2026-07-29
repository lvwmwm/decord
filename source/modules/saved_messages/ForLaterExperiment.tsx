// Module ID: 9556
// Function ID: 9557
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 9556 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enabled: true } };
obj[2] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-message-bookmarks", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/saved_messages/ForLaterExperiment.tsx");

export default apexExperiment;
