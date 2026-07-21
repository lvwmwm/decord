// Module ID: 6836
// Function ID: 53990
// Name: addGlobalTag
// Dependencies: []
// Exports: addGlobalTag, getGlobalTagsArray

// Module 6836 (addGlobalTag)
const obj = { design_id: require(dependencyMap[0]).DesignIds.DESIGN_TABS_IA };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((arg0) => "" + arg0 + ":" + closure_0[arg0]);
};
