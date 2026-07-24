// Module ID: 8458
// Function ID: 67231
// Name: _updatePermission
// Dependencies: [5, 8459, 686, 4140, 2]
// Exports: init, savePermissionUpdates, selectPermission, setAdvancedMode, updatePermission

// Module 8458 (_updatePermission)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function _updatePermission() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function saveAndClearPermissionUpdates(id, items, arg2, arg3) {
  let closure_0 = id;
  const importDefault = items;
  const dependencyMap = arg2;
  let asyncGeneratorStep = arg3;
  importDefault(686).dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  let obj = importDefault(686);
  return new Promise((arg0) => {
    let closure_0 = arg0;
    function chain() {
      if (0 === chain.length) {
        if (0 === outer1_2.length) {
          return callback();
        }
      }
      if (chain.length > 0) {
        let arr = chain.pop();
        if (null == arr) {
          return chain();
        } else {
          const result = chain(4140).updatePermissionOverwrite(callback, arr);
          result.then(chain, chain);
          const obj2 = chain(4140);
        }
      } else {
        arr = outer1_2.pop();
        if (null == arr) {
          return chain();
        } else {
          const result1 = chain(4140).clearPermissionOverwrite(callback, arr);
          result1.then(chain, chain);
          const obj = chain(4140);
        }
      }
    }
    !chain();
  }).then(() => {
    let obj = items(table[2]);
    obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent: asyncGeneratorStep };
    obj.dispatch(obj);
  });
}
let result = require("dispatcher").fileFinishedImporting("actions/ChannelSettingsPermissionsActionCreators.tsx");

export const updatePermission = function updatePermission(id, id, addResult, deny) {
  return _updatePermission(...arguments);
};
export const selectPermission = function selectPermission(id) {
  let obj = importDefault(686);
  obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION", id };
  obj.dispatch(obj);
};
export const setAdvancedMode = function setAdvancedMode(advancedMode) {
  let obj = importDefault(686);
  obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE", advancedMode };
  obj.dispatch(obj);
};
export const init = function init() {
  importDefault(686).dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_INIT" });
};
export const savePermissionUpdates = function savePermissionUpdates(id, items, arg2) {
  return saveAndClearPermissionUpdates(id, items, [], arg2);
};
export { saveAndClearPermissionUpdates };
