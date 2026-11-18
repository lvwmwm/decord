// Module ID: 9983
// Function ID: 9984
// Name: TabsExperiment
// Dependencies: [1452, 2]

// Module 9983 (TabsExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-07-desktop-channel-tabs", kind: "user", defaultConfig: { enabled: false, newTabExperience: "popout" }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, newTabExperience: "popout" } };
obj2[2] = { enabled: true, newTabExperience: "friends" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
