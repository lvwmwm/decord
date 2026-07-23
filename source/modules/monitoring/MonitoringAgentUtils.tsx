// Module ID: 6841
// Function ID: 54033
// Name: addGlobalTag
// Dependencies: [650, 2]
// Exports: addGlobalTag, getGlobalTagsArray

// Module 6841 (addGlobalTag)
const obj = { design_id: require("DesignIds").DesignIds.DESIGN_TABS_IA };
const result = require("set").fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((arg0) => "" + arg0 + ":" + outer1_0[arg0]);
};
