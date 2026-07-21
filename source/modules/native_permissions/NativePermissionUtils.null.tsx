// Module ID: 4676
// Function ID: 40719
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4676 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let tmp2 = (NativePermissionBaseUtils) => {
  class NativePermissionDesktopNullUtils {
    constructor() {
      self = this;
      tmp = NativePermissionDesktopNullUtils(this, NativePermissionDesktopNullUtils);
      obj = closure_3(NativePermissionDesktopNullUtils);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = NativePermissionDesktopNullUtils;
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
}(arg1(dependencyMap[5]).NativePermissionBaseUtils);
tmp2 = new tmp2();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/native_permissions/NativePermissionUtils.null.tsx");

export default tmp2;
