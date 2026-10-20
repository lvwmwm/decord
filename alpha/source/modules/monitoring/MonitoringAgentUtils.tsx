// Module ID: 6429
// Function ID: 6430
// Name: MonitoringAgentUtils
// Dependencies: [1370, 2]
// Exports: addGlobalTag, getGlobalTagsArray

// Module 6429 (MonitoringAgentUtils)
import DesignIds from "DesignIds" /* 1370 */;
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
