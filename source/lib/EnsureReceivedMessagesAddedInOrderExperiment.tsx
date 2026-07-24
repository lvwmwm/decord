// Module ID: 4804
// Function ID: 41873
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 4804 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-ensure-received-messages-added-in-order", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;
