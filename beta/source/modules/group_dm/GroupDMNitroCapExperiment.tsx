// Module ID: 10957
// Function ID: 10958
// Name: GroupDMNitroCapExperiment
// Dependencies: [1442, 2]
// Exports: getGroupDMNitroCapConfig

// Module 10957 (GroupDMNitroCapExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1442 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-06-nitro-gdm-cap-increase", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
const config = tmp2;
const result = size.fileFinishedImporting("modules/group_dm/GroupDMNitroCapExperiment.tsx");

export default tmp2;
export const getGroupDMNitroCapConfig = function getGroupDMNitroCapConfig(getGroupDMRecipientLimit) {
  const obj = { location: getGroupDMRecipientLimit };
  return config.getConfig(obj);
};
