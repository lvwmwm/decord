// Module ID: 11390
// Function ID: 11391
// Name: GroupDMNitroCapExperiment
// Dependencies: [1454, 2]
// Exports: getGroupDMNitroCapConfig

// Module 11390 (GroupDMNitroCapExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-06-nitro-gdm-cap-increase", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
const config = tmp2;
const result = size.fileFinishedImporting("modules/group_dm/GroupDMNitroCapExperiment.tsx");

export default tmp2;
export function getGroupDMNitroCapConfig(getGroupDMRecipientLimit) {
  const obj = { location: getGroupDMRecipientLimit };
  return config.getConfig(obj);
}
