// Module ID: 7936
// Function ID: 7937
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 7936 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-mobile-friendship-anniversary", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/gifting/native/MobileFriendAnniversaryExperiment.tsx");

export default apexExperiment;
