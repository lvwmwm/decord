// Module ID: 13667
// Function ID: 13668
// Name: FriendRequestMessageExperiment
// Dependencies: [1440, 2]

// Module 13667 (FriendRequestMessageExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-03-friend-request-message", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;
