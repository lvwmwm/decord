// Module ID: 16042
// Function ID: 16043
// Name: DataHarvestActionCreators
// Dependencies: [1071, 572, 1284, 7282, 2]
// Exports: getDataHarvestStatus, requestDataHarvest

// Module 16042 (DataHarvestActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7282 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export function getDataHarvestStatus() {
  let obj = DispatcherDefault;
  obj.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = HTTPUtils.HTTP;
  let obj2 = { url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj2);
  const nextPromise = value.then((body) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
    obj.dispatch(obj2);
  });
  return nextPromise.catch((error) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error };
    obj.dispatch(obj2);
  });
}
export function requestDataHarvest(mapped) {
  let obj = UserSettingsAccountActionCreators;
  const harvest = obj.requestHarvest(mapped);
  return harvest.then((body) => {
    const tmp = null != body && null != body.body;
    if (tmp) {
      const obj2 = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
    return body;
  });
}
