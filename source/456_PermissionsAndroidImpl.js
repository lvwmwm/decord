// Module ID: 456
// Function ID: 6081
// Name: PermissionsAndroidImpl
// Dependencies: [5, 6, 7, 44, 457, 232]

// Module 456 (PermissionsAndroidImpl)
import DialogManagerAndroid from "DialogManagerAndroid";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let closure_5 = Object.freeze({ GRANTED: "granted", DENIED: "denied", NEVER_ASK_AGAIN: "never_ask_again" });
let closure_6 = Object.freeze({ READ_CALENDAR: "android.permission.READ_CALENDAR", WRITE_CALENDAR: "android.permission.WRITE_CALENDAR", CAMERA: "android.permission.CAMERA", READ_CONTACTS: "android.permission.READ_CONTACTS", WRITE_CONTACTS: "android.permission.WRITE_CONTACTS", GET_ACCOUNTS: "android.permission.GET_ACCOUNTS", ACCESS_FINE_LOCATION: "android.permission.ACCESS_FINE_LOCATION", ACCESS_COARSE_LOCATION: "android.permission.ACCESS_COARSE_LOCATION", ACCESS_BACKGROUND_LOCATION: "android.permission.ACCESS_BACKGROUND_LOCATION", RECORD_AUDIO: "android.permission.RECORD_AUDIO", READ_PHONE_STATE: "android.permission.READ_PHONE_STATE", CALL_PHONE: "android.permission.CALL_PHONE", READ_CALL_LOG: "android.permission.READ_CALL_LOG", WRITE_CALL_LOG: "android.permission.WRITE_CALL_LOG", ADD_VOICEMAIL: "com.android.voicemail.permission.ADD_VOICEMAIL", READ_VOICEMAIL: "com.android.voicemail.permission.READ_VOICEMAIL", WRITE_VOICEMAIL: "com.android.voicemail.permission.WRITE_VOICEMAIL", USE_SIP: "android.permission.USE_SIP", PROCESS_OUTGOING_CALLS: "android.permission.PROCESS_OUTGOING_CALLS", BODY_SENSORS: "android.permission.BODY_SENSORS", BODY_SENSORS_BACKGROUND: "android.permission.BODY_SENSORS_BACKGROUND", SEND_SMS: "android.permission.SEND_SMS", RECEIVE_SMS: "android.permission.RECEIVE_SMS", READ_SMS: "android.permission.READ_SMS", RECEIVE_WAP_PUSH: "android.permission.RECEIVE_WAP_PUSH", RECEIVE_MMS: "android.permission.RECEIVE_MMS", READ_EXTERNAL_STORAGE: "android.permission.READ_EXTERNAL_STORAGE", READ_MEDIA_IMAGES: "android.permission.READ_MEDIA_IMAGES", READ_MEDIA_VIDEO: "android.permission.READ_MEDIA_VIDEO", READ_MEDIA_AUDIO: "android.permission.READ_MEDIA_AUDIO", READ_MEDIA_VISUAL_USER_SELECTED: "android.permission.READ_MEDIA_VISUAL_USER_SELECTED", WRITE_EXTERNAL_STORAGE: "android.permission.WRITE_EXTERNAL_STORAGE", BLUETOOTH_CONNECT: "android.permission.BLUETOOTH_CONNECT", BLUETOOTH_SCAN: "android.permission.BLUETOOTH_SCAN", BLUETOOTH_ADVERTISE: "android.permission.BLUETOOTH_ADVERTISE", ACCESS_MEDIA_LOCATION: "android.permission.ACCESS_MEDIA_LOCATION", ACCEPT_HANDOVER: "android.permission.ACCEPT_HANDOVER", ACTIVITY_RECOGNITION: "android.permission.ACTIVITY_RECOGNITION", ANSWER_PHONE_CALLS: "android.permission.ANSWER_PHONE_CALLS", READ_PHONE_NUMBERS: "android.permission.READ_PHONE_NUMBERS", UWB_RANGING: "android.permission.UWB_RANGING", POST_NOTIFICATIONS: "android.permission.POST_NOTIFICATIONS", NEARBY_WIFI_DEVICES: "android.permission.NEARBY_WIFI_DEVICES" });
let tmp2 = (() => {
  class PermissionsAndroidImpl {
    constructor() {
      tmp = outer1_3(this, PermissionsAndroidImpl);
      this.PERMISSIONS = outer1_6;
      this.RESULTS = outer1_5;
      return;
    }
  }
  let obj = {
    key: "checkPermission",
    value: function checkPermission(arg0) {
      console.warn("\"PermissionsAndroid.checkPermission\" is deprecated. Use \"PermissionsAndroid.check\" instead");
      callback(44)(callback(457), "PermissionsAndroid is not installed correctly.");
      const tmp2 = callback(44);
      return callback(457).checkPermission(arg0);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "check",
    value: function check(arg0) {
      callback(44)(callback(457), "PermissionsAndroid is not installed correctly.");
      const tmp = callback(44);
      return callback(457).checkPermission(arg0);
    }
  };
  items[1] = obj;
  obj = { key: "requestPermission" };
  let closure_1 = PermissionsAndroidImpl(async function(arg0, arg1) {
    const self = this;
    console.warn("\"PermissionsAndroid.requestPermission\" is deprecated. Use \"PermissionsAndroid.request\" instead");
    return (yield self.request(arg0, arg1)) === self.RESULTS.GRANTED;
  });
  obj.value = function requestPermission(arg0, arg1) {
    return dependencyMap(...arguments);
  };
  items[2] = obj;
  const obj1 = { key: "request" };
  let closure_0 = PermissionsAndroidImpl(async (arg0, arg1) => {
    let callback = arg0;
    const dependencyMap = arg1;
    callback(44)(callback(457), "PermissionsAndroid is not installed correctly.");
    if (arg1) {
      if (yield obj.shouldShowRequestPermissionRationale(arg0)) {
        if (callback(232)) {
          let permission = new Promise((arg0, arg1) => {
            const callback = arg0;
            const table = arg1;
            const merged = Object.assign({}, table);
            callback(table[5]).showAlert(merged, () => {
              const error = new Error("Error showing rationale");
              return dependencyMap(error);
            }, () => callback(callback(457).requestPermission(callback)));
          });
        }
        return permission;
      }
      obj = callback(457);
    }
    const tmp = callback(44);
    permission = callback(457).requestPermission(arg0);
  });
  obj1.value = function request(arg0, arg1) {
    return callback(...arguments);
  };
  items[3] = obj1;
  items[4] = {
    key: "requestMultiple",
    value: function requestMultiple(arg0) {
      callback(44)(callback(457), "PermissionsAndroid is not installed correctly.");
      const tmp = callback(44);
      return callback(457).requestMultiplePermissions(arg0);
    }
  };
  return callback(PermissionsAndroidImpl, items);
})();
tmp2 = new tmp2();

export default tmp2;
