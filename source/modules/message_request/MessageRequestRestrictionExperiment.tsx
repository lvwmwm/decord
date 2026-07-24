// Module ID: 11504
// Function ID: 89612
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 11504 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-non-friend-messages-requests-in-uk", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/message_request/MessageRequestRestrictionExperiment.tsx");

export default apexExperiment;
