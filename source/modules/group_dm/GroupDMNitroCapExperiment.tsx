// Module ID: 11526
// Function ID: 11527
// Name: getGroupDMNitroCapConfig
// Dependencies: [1469, 2]
// Exports: getGroupDMNitroCapConfig

// Module 11526 (getGroupDMNitroCapConfig)
import getUnitIdDefault from "getUnitId" /* 1469 */;

const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-06-nitro-gdm-cap-increase", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/group_dm/GroupDMNitroCapExperiment.tsx");

export default tmp2;
export const getGroupDMNitroCapConfig = function getGroupDMNitroCapConfig(getGroupDMRecipientLimit) {
  return config.getConfig({ location: getGroupDMRecipientLimit });
};
