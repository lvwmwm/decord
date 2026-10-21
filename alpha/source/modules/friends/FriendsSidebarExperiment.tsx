// Module ID: 6773
// Function ID: 6774
// Name: FriendsSidebarExperiment
// Dependencies: [1455, 2]

// Module 6773 (FriendsSidebarExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-friends-sidebar", kind: "user", defaultConfig: { sidebarEnabled: false, appBarToggleEnabled: false }, variations: { 0: { sidebarEnabled: false, appBarToggleEnabled: false }, 1: { sidebarEnabled: true, appBarToggleEnabled: false }, 2: { sidebarEnabled: true, appBarToggleEnabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/friends/FriendsSidebarExperiment.tsx");

export default apexExperiment;
