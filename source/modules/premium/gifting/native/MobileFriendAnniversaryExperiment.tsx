// Module ID: 7850
// Function ID: 61963
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 7850 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-mobile-friendship-anniversary", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/MobileFriendAnniversaryExperiment.tsx");

export default apexExperiment;
