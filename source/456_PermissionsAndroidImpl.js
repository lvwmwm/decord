// Module ID: 456
// Function ID: 6081
// Name: PermissionsAndroidImpl
// Dependencies: [37093376, 131072, 2573271040, 1859516754, 123765, 123904]

// Module 456 (PermissionsAndroidImpl)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = Object.freeze({});
let closure_6 = Object.freeze({});
let tmp2 = () => {
  class PermissionsAndroidImpl {
    constructor() {
      tmp = closure_3(this, PermissionsAndroidImpl);
      this.PERMISSIONS = closure_6;
      this.RESULTS = closure_5;
      return;
    }
  }
  const callback = PermissionsAndroidImpl;
  let obj = {
    key: "checkPermission",
    value: function checkPermission(arg0) {
      console.warn("\"PermissionsAndroid.checkPermission\" is deprecated. Use \"PermissionsAndroid.check\" instead");
      callback(closure_1[3])(callback(closure_1[4]), "PermissionsAndroid is not installed correctly.");
      const tmp2 = callback(closure_1[3]);
      return callback(closure_1[4]).checkPermission(arg0);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "check",
    value: function check(arg0) {
      callback(closure_1[3])(callback(closure_1[4]), "PermissionsAndroid is not installed correctly.");
      const tmp = callback(closure_1[3]);
      return callback(closure_1[4]).checkPermission(arg0);
    }
  };
  items[1] = obj;
  obj = { key: "requestPermission" };
  let closure_1 = callback(async function(arg0, arg1) {
    const self = this;
    console.warn("\"PermissionsAndroid.requestPermission\" is deprecated. Use \"PermissionsAndroid.request\" instead");
    return yield self.request(arg0, arg1) === self.RESULTS.GRANTED;
  });
  obj.value = function requestPermission(arg0, arg1) {
    return callback2(...arguments);
  };
  items[2] = obj;
  const obj1 = { key: "request" };
  let closure_0 = callback(async (arg0, arg1) => {
    arg0(arg1[3])(arg0(arg1[4]), "PermissionsAndroid is not installed correctly.");
    if (arg1) {
      if (yield obj.shouldShowRequestPermissionRationale(arg0)) {
        if (arg0(arg1[5])) {
          let permission = new Promise((arg0, arg1) => {
            const merged = Object.assign({}, arg1);
            arg0(arg1[5]).showAlert(merged, () => {
              const error = new Error("Error showing rationale");
              return arg1(error);
            }, () => arg0(arg0(arg1[4]).requestPermission(arg0)));
          });
        }
        return permission;
      }
      const obj = arg0(arg1[4]);
    }
    const tmp = arg0(arg1[3]);
    permission = arg0(arg1[4]).requestPermission(arg0);
  });
  obj1.value = function request(arg0, arg1) {
    return callback(...arguments);
  };
  items[3] = obj1;
  items[4] = {
    key: "requestMultiple",
    value: function requestMultiple(arg0) {
      callback(closure_1[3])(callback(closure_1[4]), "PermissionsAndroid is not installed correctly.");
      const tmp = callback(closure_1[3]);
      return callback(closure_1[4]).requestMultiplePermissions(arg0);
    }
  };
  return callback2(PermissionsAndroidImpl, items);
}();
tmp2 = new tmp2();

export default tmp2;
