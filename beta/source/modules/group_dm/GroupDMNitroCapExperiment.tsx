// Module ID: 11750
// Function ID: 11751
// Name: GroupDMNitroCapExperiment
// Dependencies: [1439, 2]
// Exports: getGroupDMNitroCapConfig

// Module 11750 (GroupDMNitroCapExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const tmp2 = apex_ApexExperimentDefault({ kind: "user", name: "2026-06-nitro-gdm-cap-increase", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const config = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/GroupDMNitroCapExperiment.tsx");

export default tmp2;
export const getGroupDMNitroCapConfig = function getGroupDMNitroCapConfig(getGroupDMRecipientLimit) {
  return config.getConfig({ location: getGroupDMRecipientLimit });
};
