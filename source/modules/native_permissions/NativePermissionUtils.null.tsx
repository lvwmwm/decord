// Module ID: 4678
// Function ID: 40753
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4679, 2]

// Module 4678 (_isNativeReflectConstruct)
import set from "set";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let set = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return set;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((NativePermissionBaseUtils) => {
  class NativePermissionDesktopNullUtils {
    constructor() {
      self = this;
      tmp = NativePermissionDesktopNullUtils(this, NativePermissionDesktopNullUtils);
      obj = outer1_3(NativePermissionDesktopNullUtils);
      tmp2 = outer1_2;
      if (outer1_5()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(NativePermissionDesktopNullUtils, NativePermissionBaseUtils);
  let obj = {
    key: "requestPermissionCore",
    value() {
      return Promise.resolve(true);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "hasPermissionCore",
    value() {
      return Promise.resolve(true);
    }
  };
  items[1] = obj;
  obj = {
    key: "openSettings",
    value() {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "didHavePermission",
    value() {
      return true;
    }
  };
  items[4] = {
    key: "openAlertModal",
    value() {

    }
  };
  return callback(NativePermissionDesktopNullUtils, items);
})(require("NativePermissionBaseUtils").NativePermissionBaseUtils);
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/native_permissions/NativePermissionUtils.null.tsx");

export default tmp2;
