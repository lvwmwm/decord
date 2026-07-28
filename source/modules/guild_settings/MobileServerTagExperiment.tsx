// Module ID: 8284
// Function ID: 66362
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 8284 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-mobile-server-tag", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/guild_settings/MobileServerTagExperiment.tsx");

export default apexExperiment;
