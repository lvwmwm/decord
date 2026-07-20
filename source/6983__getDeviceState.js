// Module ID: 6983
// Function ID: 55865
// Name: _getDeviceState
// Dependencies: []
// Exports: getDeviceState

// Module 6983 (_getDeviceState)
async function _getDeviceState() {
  const fn = function*() {
    let tmp = arg0;
    if (tmp === undefined) {
      const obj = { fallback: true };
      tmp = obj;
    }
    yield undefined;
    const MediaManager = MediaManager.MediaManager;
    return yield MediaManager.getDeviceStateInfo();
  };
  fn.next();
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("native/DeviceState.tsx");
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/device/native/DeviceState.tsx");

export const logger = importDefaultResult;
export const getDeviceState = function getDeviceState(arg0) {
  return _getDeviceState(...arguments);
};
