// Module ID: 12971
// Function ID: 100581
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12971 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-03-friend-request-message", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;
