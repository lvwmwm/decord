// Module ID: 15140
// Function ID: 15141
// Name: DataHarvestActionCreators
// Dependencies: [1078, 577, 1275, 7262, 2]
// Exports: getDataHarvestStatus, requestDataHarvest

// Module 15140 (DataHarvestActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7262 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  DispatcherDefault.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false });
  const obj2 = { url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false };
  return value.then((body) => {
    DispatcherDefault.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body });
  }).catch((error) => {
    DispatcherDefault.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error });
  });
};
export const requestDataHarvest = function requestDataHarvest(mapped) {
  const harvest = UserSettingsAccountActionCreators.requestHarvest(mapped);
  return harvest.then((body) => {
    if (tmp) {
      const obj2 = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
      DispatcherDefault.dispatch(obj2);
    }
    return body;
  });
};
