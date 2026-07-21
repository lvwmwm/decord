// Module ID: 10320
// Function ID: 79664
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10320 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function showNotification(uri) {
  function _getAndroidScreenshot() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _getAndroidScreenshot = obj;
    return obj(...arguments);
  }
  uri = undefined;
  if (null != uri) {
    uri = uri.uri;
  }
  const arg1 = uri;
  // CreateGeneratorClosureLongIndex (0x67)
  const timerId = setTimeout(callback3(tmp), 1200);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[6]);
const NativeModules = tmp2.NativeModules;
let closure_10 = importDefault(dependencyMap[7]);
const NativePermissionStatus = arg1(dependencyMap[8]).NativePermissionStatus;
const nativeEventEmitter = new tmp2.NativeEventEmitter(NativeModules.ScreenshotHelper);
let tmp4 = (arg0) => {
  class BugReportManager {
    constructor() {
      self = this;
      tmp = closure_3(this, BugReportManager);
      obj = closure_6(BugReportManager);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = BugReportManager;
  callback2(BugReportManager, arg0);
  let obj = {
    key: "_initialize",
    value: function _initialize() {
      const bugReporter = this.initBugReporter();
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_terminate",
    value: function _terminate() {
      if (null != closure_12) {
        closure_12.remove();
      }
      closure_12 = undefined;
    }
  };
  items[1] = obj;
  obj = { key: "initBugReporter" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback3(tmp);
  obj.value = function initBugReporter() {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback(BugReportManager, items);
}(importDefault(dependencyMap[13]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/bug_reporter/native/BugReportManager.tsx");

export default tmp4;
