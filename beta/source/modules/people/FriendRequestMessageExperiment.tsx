// Module ID: 14165
// Function ID: 14166
// Name: FriendRequestMessageExperiment
// Dependencies: [1438, 2]

// Module 14165 (FriendRequestMessageExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-03-friend-request-message", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;
