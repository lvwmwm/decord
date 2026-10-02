// Module ID: 7528
// Function ID: 7529
// Name: MobileFriendAnniversaryExperiment
// Dependencies: [1441, 2]

// Module 7528 (MobileFriendAnniversaryExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-06-mobile-friendship-anniversary", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/native/MobileFriendAnniversaryExperiment.tsx");

export default apexExperiment;
