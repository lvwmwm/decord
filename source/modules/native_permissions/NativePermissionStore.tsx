// Module ID: 4677
// Function ID: 40757
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4677 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const NativePermissionStates = arg1(dependencyMap[5]).NativePermissionStates;
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
let closure_9 = { permissionStates: {} };
const tmp2 = (DeviceSettingsStore) => {
  class NativePermissionStore {
    constructor() {
      self = this;
      tmp = closure_2(this, NativePermissionStore);
      items = [, ];
      items[0] = NativePermissionStore(closure_1[7]);
      items[1] = {
        SET_NATIVE_PERMISSION(arg0) {
              return tmp2Result.handleSetNativePermission(arg0);
            }
      };
      obj = closure_5(NativePermissionStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      NativePermissionStore = tmp2Result;
      return tmp2Result;
    }
  }
  const importDefault = NativePermissionStore;
  callback2(NativePermissionStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const tmp = arg0;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPermission",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp === constants.ACCEPTED;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleSetNativePermission",
    value(arg0) {
      let permissionType;
      let state;
      ({ state, permissionType } = arg0);
      const permissionStates = closure_9.permissionStates;
      let NONE = permissionStates[permissionType];
      permissionStates[permissionType] = state;
      if (NONE !== state) {
        let obj = NativePermissionStore(closure_1[8]);
        obj = { type: permissionType, action: state };
        if (null == NONE) {
          NONE = constants.NONE;
        }
        obj.previous_action = NONE;
        obj.track(constants2.PERMISSIONS_ACKED, obj);
      }
    }
  };
  return callback(NativePermissionStore, items);
}(importDefault(dependencyMap[9]).DeviceSettingsStore);
tmp2.displayName = "NativePermissionStore";
tmp2.persistKey = "NativePermissionsStore";
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/native_permissions/NativePermissionStore.tsx");

export default tmp2;
