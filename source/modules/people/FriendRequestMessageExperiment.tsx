// Module ID: 13856
// Function ID: 13857
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 13856 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-friend-request-message", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;
