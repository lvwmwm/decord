// Module ID: 6490
// Function ID: 6491
// Name: EnsureReceivedMessagesAddedInOrderExperiment
// Dependencies: [1455, 2]

// Module 6490 (EnsureReceivedMessagesAddedInOrderExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-ensure-received-messages-added-in-order", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;
