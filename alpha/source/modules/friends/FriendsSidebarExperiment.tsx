// Module ID: 6522
// Function ID: 6523
// Name: FriendsSidebarExperiment
// Dependencies: [1452, 2]

// Module 6522 (FriendsSidebarExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-friends-sidebar", kind: "user", defaultConfig: { sidebarEnabled: false, appBarToggleEnabled: false }, variations: { 0: { sidebarEnabled: false, appBarToggleEnabled: false }, 1: { sidebarEnabled: true, appBarToggleEnabled: false }, 2: { sidebarEnabled: true, appBarToggleEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/friends/FriendsSidebarExperiment.tsx");

export default apexExperiment;
