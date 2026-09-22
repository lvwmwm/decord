// Module ID: 11263
// Function ID: 11264
// Name: TabsExperiment
// Dependencies: [1434, 2]

// Module 11263 (TabsExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { CONTROL: 0, [0]: "CONTROL", ENABLED: 1, [1]: "ENABLED" };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-desktop-channel-tabs", kind: "user", defaultConfig: { enabled: false }, variations: { [obj.ENABLED]: { enabled: true } } });
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
export const TabsVariant = obj;
