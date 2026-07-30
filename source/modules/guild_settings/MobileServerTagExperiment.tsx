// Module ID: 8305
// Function ID: 8306
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 8305 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-mobile-server-tag", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/guild_settings/MobileServerTagExperiment.tsx");

export default apexExperiment;
