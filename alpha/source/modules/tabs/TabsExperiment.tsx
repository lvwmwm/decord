// Module ID: 11594
// Function ID: 11595
// Name: TabsExperiment
// Dependencies: [1452, 2]

// Module 11594 (TabsExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { CONTROL: 0, [0]: "CONTROL", ENABLED: 1, [1]: "ENABLED" };
const obj2 = { name: "2026-07-desktop-channel-tabs", kind: "user", defaultConfig: { enabled: false }, variations: { [obj.ENABLED]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
export const TabsVariant = obj;
