// Module ID: 6276
// Function ID: 6277
// Name: MonitoringAgentUtils
// Dependencies: [1359, 2]
// Exports: addGlobalTag, getGlobalTagsArray

// Module 6276 (MonitoringAgentUtils)
import DesignIds from "DesignIds" /* 1359 */;
import size from "module_2" /* 2 */;

const obj = { design_id: DesignIds.DesignIds.DESIGN_TABS_IA };
const result = size.fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
}
export function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((item) => "" + item + ":" + obj[item]);
}
