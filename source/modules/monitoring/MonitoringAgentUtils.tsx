// Module ID: 6959
// Function ID: 6960
// Name: addGlobalTag
// Dependencies: [673, 2]
// Exports: addGlobalTag, getGlobalTagsArray

// Module 6959 (addGlobalTag)
const obj = { design_id: require("DesignIds").DesignIds.DESIGN_TABS_IA };
const result = require("set").fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((arg0) => "" + arg0 + ":" + table[arg0]);
};
