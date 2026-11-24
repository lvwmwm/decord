// Module ID: 11383
// Function ID: 11384
// Name: TabsExperiment
// Dependencies: [1450, 2]

// Module 11383 (TabsExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-07-desktop-channel-tabs", kind: "user", defaultConfig: { enabled: false, newTabExperience: "popout" }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, newTabExperience: "popout" } };
obj2[2] = { enabled: true, newTabExperience: "friends" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
