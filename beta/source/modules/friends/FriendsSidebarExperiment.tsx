// Module ID: 7525
// Function ID: 7526
// Name: FriendsSidebarExperiment
// Dependencies: [1434, 2]

// Module 7525 (FriendsSidebarExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-friends-sidebar", kind: "user", defaultConfig: { sidebarEnabled: false, appBarToggleEnabled: false }, variations: { 0: { sidebarEnabled: false, appBarToggleEnabled: false }, 1: { sidebarEnabled: true, appBarToggleEnabled: false }, 2: { sidebarEnabled: true, appBarToggleEnabled: true } } });
const result = size.fileFinishedImporting("modules/friends/FriendsSidebarExperiment.tsx");

export default apexExperiment;
