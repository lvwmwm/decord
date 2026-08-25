// Module ID: 11247
// Function ID: 11248
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 11247 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { CONTROL: 0, [0]: "CONTROL", ENABLED: 1, [1]: "ENABLED" };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-desktop-channel-tabs", kind: "user", defaultConfig: { enabled: false }, variations: { [obj.ENABLED]: { enabled: true } } });
const result = set.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
export const TabsVariant = obj;
