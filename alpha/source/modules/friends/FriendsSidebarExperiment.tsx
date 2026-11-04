// Module ID: 7000
// Function ID: 7001
// Name: FriendsSidebarExperiment
// Dependencies: [1449, 2]

// Module 7000 (FriendsSidebarExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-friends-sidebar", kind: "user", defaultConfig: { sidebarEnabled: false, appBarToggleEnabled: false }, variations: { 0: { sidebarEnabled: false, appBarToggleEnabled: false }, 1: { sidebarEnabled: true, appBarToggleEnabled: false }, 2: { sidebarEnabled: true, appBarToggleEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/friends/FriendsSidebarExperiment.tsx");

export default apexExperiment;
