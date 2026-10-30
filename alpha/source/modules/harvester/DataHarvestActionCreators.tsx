// Module ID: 16712
// Function ID: 16713
// Name: DataHarvestActionCreators
// Dependencies: [1072, 572, 1283, 7146, 2]
// Exports: getDataHarvestStatus, requestDataHarvest

// Module 16712 (DataHarvestActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7146 */;
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
