// Module ID: 13817
// Function ID: 105907
// Name: getDataHarvestStatus
// Dependencies: [653, 686, 507, 9266, 2]
// Exports: getDataHarvestStatus, requestDataHarvest

// Module 13817 (getDataHarvestStatus)
import { Endpoints } from "ME";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  let obj = importDefault(686);
  obj.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = outer1_1(outer1_2[1]);
    obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
    obj.dispatch(obj);
  }).catch((error) => {
    let obj = outer1_1(outer1_2[1]);
    obj = { type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error };
    obj.dispatch(obj);
  });
};
export const requestDataHarvest = function requestDataHarvest(mapped) {
  const harvest = require(9266) /* saveProfileAndAccountRequest */.requestHarvest(mapped);
  return harvest.then((body) => {
    if (tmp) {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
      obj.dispatch(obj);
    }
    return body;
  });
};
