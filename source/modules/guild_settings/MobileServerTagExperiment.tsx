// Module ID: 9754
// Function ID: 9755
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 9754 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-mobile-server-tag", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/guild_settings/MobileServerTagExperiment.tsx");

export default apexExperiment;
