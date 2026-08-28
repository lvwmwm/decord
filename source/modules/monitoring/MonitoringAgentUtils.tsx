// Module ID: 7298
// Function ID: 7299
// Name: addGlobalTag
// Dependencies: [673, 2]
// Exports: addGlobalTag, getGlobalTagsArray

// Module 7298 (addGlobalTag)
import set from "set" /* 2 */;
import DesignIds from "DesignIds" /* 673 */;

const obj = { design_id: DesignIds.DesignIds.DESIGN_TABS_IA };
const result = set.fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((arg0) => "" + arg0 + ":" + table[arg0]);
};
