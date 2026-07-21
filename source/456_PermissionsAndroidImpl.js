// Module ID: 456
// Function ID: 6081
// Name: PermissionsAndroidImpl
// Dependencies: []

// Module 456 (PermissionsAndroidImpl)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = Object.freeze({ paddingHorizontal: "\u00B7", paddingHorizontal: "\u00A0\u00B7\u00A0", Text: "\u30FB" });
let closure_6 = Object.freeze({ confused: 191288, confused_face: 1107288657, slight_frown: 191289, slightly_frowning_face: 84317013, frowning2: -301991425, white_frowning_face: -1140855553, frowning_face: 0, persevere: 1, confounded: 2, tired_face: 3, weary: 4, weary_face: 5, pleading_face: 6, cry: 7, crying_face: 8, sob: 9, triumph: 10, angry: 10, angry_face: 11, rage: 12, pouting_face: 13, face_with_symbols_over_mouth: 14, exploding_head: 15, flushed: 16, flushed_face: 17, hot_face: 18, cold_face: 19, face_in_clouds: 20, scream: 21, fearful: 22, fearful_face: 23, cold_sweat: 24, disappointed_relieved: 25, sweat: 26, hugging: 27, hugging_face: 28, thinking: 29, thinking_face: 30, face_with_peeking_eye: 31, face_with_hand_over_mouth: 32, face_with_open_eyes_and_hand_over_mouth: 33, saluting_face: 34, shushing_face: 35 });
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
