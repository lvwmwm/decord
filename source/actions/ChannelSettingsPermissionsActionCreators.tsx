// Module ID: 8403
// Function ID: 66931
// Name: _updatePermission
// Dependencies: []
// Exports: init, savePermissionUpdates, selectPermission, setAdvancedMode, updatePermission

// Module 8403 (_updatePermission)
function _updatePermission() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updatePermission = obj;
  return obj(...arguments);
}
function saveAndClearPermissionUpdates(id, items, arg2, arg3) {
  items = id;
  const importDefault = items;
  const dependencyMap = arg2;
  let closure_3 = arg3;
  importDefault(dependencyMap[2]).dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  const obj = importDefault(dependencyMap[2]);
  return new Promise((arg0) => {
    function chain() {
      if (0 === chain.length) {
        if (0 === arr.length) {
          return arg0();
        }
      }
      if (chain.length > 0) {
        let arr = chain.pop();
        if (null == arr) {
          return chain();
        } else {
          const result = chain(arr[3]).updatePermissionOverwrite(arg0, arr);
          result.then(chain, chain);
          const obj2 = chain(arr[3]);
        }
      } else {
        arr = arr.pop();
        if (null == arr) {
          return chain();
        } else {
          const result1 = chain(arr[3]).clearPermissionOverwrite(arg0, arr);
          result1.then(chain, chain);
          const obj = chain(arr[3]);
        }
      }
    }
    const arg1 = chain;
    !chain();
  }).then(() => {
    let obj = arg1(arg2[2]);
    obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent: arg3 };
    obj.dispatch(obj);
  });
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("actions/ChannelSettingsPermissionsActionCreators.tsx");

export const updatePermission = function updatePermission(id, id, addResult, deny) {
  return _updatePermission(...arguments);
};
export const selectPermission = function selectPermission(id) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION", id };
  obj.dispatch(obj);
};
export const setAdvancedMode = function setAdvancedMode(advancedMode) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE", advancedMode };
  obj.dispatch(obj);
};
export const init = function init() {
  importDefault(dependencyMap[2]).dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_INIT" });
};
export const savePermissionUpdates = function savePermissionUpdates(id, items, arg2) {
  return saveAndClearPermissionUpdates(id, items, [], arg2);
};
export { saveAndClearPermissionUpdates };
