// Module ID: 5586
// Function ID: 5587
// Name: EnsureReceivedMessagesAddedInOrderExperiment
// Dependencies: [1441, 2]

// Module 5586 (EnsureReceivedMessagesAddedInOrderExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-ensure-received-messages-added-in-order", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;
