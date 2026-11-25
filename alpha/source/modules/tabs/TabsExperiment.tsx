// Module ID: 11482
// Function ID: 11483
// Name: TabsExperiment
// Dependencies: [1450, 2]

// Module 11482 (TabsExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-07-desktop-channel-tabs", kind: "user", defaultConfig: { enabled: false, newTabExperience: "popout" }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, newTabExperience: "popout" }, 3: { enabled: true, newTabExperience: "friends" } };
obj2[3] = { enabled: true, newTabExperience: "quickswitcher" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
