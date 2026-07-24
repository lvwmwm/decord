// Module ID: 4680
// Function ID: 40779
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4344, 653, 686, 675, 566, 2]

// Module 4680 (_isNativeReflectConstruct)
import ME from "ME";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { NativePermissionStates } from "NativePermissionStatus";
import { AnalyticEvents } from "ME";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_9 = { permissionStates: {} };
let tmp2 = ((DeviceSettingsStore) => {
  class NativePermissionStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, apply);
      items = [, ];
      items[0] = NativePermissionStore(outer1_1[7]);
      items[1] = {
        SET_NATIVE_PERMISSION(arg0) {
              return tmp2Result.handleSetNativePermission(arg0);
            }
      };
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      return tmp2Result;
    }
  }
  callback2(NativePermissionStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = outer1_9;
      }
      outer1_9 = tmp;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPermission",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = tmp === outer1_7.ACCEPTED;
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
      const permissionStates = outer1_9.permissionStates;
      let NONE = permissionStates[permissionType];
      permissionStates[permissionType] = state;
      if (NONE !== state) {
        let obj = NativePermissionStore(outer1_1[8]);
        obj = { type: permissionType, action: state };
        if (null == NONE) {
          NONE = outer1_7.NONE;
        }
        obj.previous_action = NONE;
        obj.track(outer1_8.PERMISSIONS_ACKED, obj);
      }
    }
  };
  return callback(NativePermissionStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "NativePermissionStore";
tmp2.persistKey = "NativePermissionsStore";
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/native_permissions/NativePermissionStore.tsx");

export default tmp2;
