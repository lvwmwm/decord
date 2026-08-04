// Module ID: 13111
// Function ID: 13112
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 13111 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-friend-request-message", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;
