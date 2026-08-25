// Module ID: 13409
// Function ID: 13410
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 13409 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-friend-request-message", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;
