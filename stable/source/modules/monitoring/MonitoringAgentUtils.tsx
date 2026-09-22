// Module ID: 7708
// Function ID: 7709
// Name: MonitoringAgentUtils
// Dependencies: [1343, 2]
// Exports: addGlobalTag, getGlobalTagsArray

// Module 7708 (MonitoringAgentUtils)
import DesignIds from "DesignIds" /* 1343 */;
import size from "module_2" /* 2 */;

const obj = { design_id: DesignIds.DesignIds.DESIGN_TABS_IA };
const result = size.fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((item) => "" + item + ":" + obj[item]);
};
