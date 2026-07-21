// Module ID: 13645
// Function ID: 103394
// Name: getDataHarvestStatus
// Dependencies: []
// Exports: getDataHarvestStatus, requestDataHarvest

// Module 13645 (getDataHarvestStatus)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  let obj = importDefault(dependencyMap[1]);
  obj.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = require(dependencyMap[2]).HTTP;
  obj = { disabled: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003076984559, accessibilityHint: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000636598737303, legacyCompat_selected: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971384466157509, url: Endpoints.USER_HARVEST };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = callback(closure_2[1]);
    obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
    obj.dispatch(obj);
  }).catch((error) => {
    let obj = callback(closure_2[1]);
    obj = { type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error };
    obj.dispatch(obj);
  });
};
export const requestDataHarvest = function requestDataHarvest(mapped) {
  const harvest = require(dependencyMap[3]).requestHarvest(mapped);
  return harvest.then((body) => {
    if (tmp) {
      let obj = callback(closure_2[1]);
      obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
      obj.dispatch(obj);
    }
    return body;
  });
};
