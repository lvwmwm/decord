// Module ID: 4805
// Function ID: 41885
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 4805 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-ensure-received-messages-added-in-order", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;
