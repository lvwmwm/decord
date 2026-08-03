// Module ID: 7979
// Function ID: 7980
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 7979 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-mobile-friendship-anniversary", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/MobileFriendAnniversaryExperiment.tsx");

export default apexExperiment;
