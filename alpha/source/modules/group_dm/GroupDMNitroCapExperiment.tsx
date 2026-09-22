// Module ID: 11849
// Function ID: 11850
// Name: GroupDMNitroCapExperiment
// Dependencies: [1435, 2]
// Exports: getGroupDMNitroCapConfig

// Module 11849 (GroupDMNitroCapExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const tmp2 = apex_ApexExperimentDefault({ kind: "user", name: "2026-06-nitro-gdm-cap-increase", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const config = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/GroupDMNitroCapExperiment.tsx");

export default tmp2;
export const getGroupDMNitroCapConfig = function getGroupDMNitroCapConfig(getGroupDMRecipientLimit) {
  return config.getConfig({ location: getGroupDMRecipientLimit });
};
