// Module ID: 4108
// Function ID: 33988
// Name: getSystemVersion
// Dependencies: []
// Exports: getDeviceBrand, getDeviceInfo, getDeviceManufacturer, getDeviceMediaPerformanceClass, getDeviceModel, getDeviceProduct, getIsRunningOnSimulator, getMaxCpuFreq, getRamSize, getSmallestScreenWidthDp, getSocName, getSystemVersionMajor, getSystemVersionMinor, getTimeZone, isGestureNavigationEnabled, isIpadOS

// Module 4108 (getSystemVersion)
function getSystemVersion() {
  return DCDDeviceManager.systemVersion;
}
function getDevice() {
  return DCDDeviceManager.device;
}
const _module = require(dependencyMap[1]);
if (_module.isAndroid()) {
  let constants;
  if (null != importDefault(dependencyMap[2])) {
    constants = importDefault(dependencyMap[2]).getConstants();
    const importDefaultResult = importDefault(dependencyMap[2]);
  }
  let DCDDeviceManager = constants;
} else {
  DCDDeviceManager = require(dependencyMap[0]).NativeModules.DCDDeviceManager;
}
let closure_4 = null;
let closure_5 = "mediaPerformanceClass";
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("utils/native/DeviceUtils.tsx");

export const isIpadOS = function isIpadOS() {
  return "iPad" === DCDDeviceManager.deviceModel;
};
export const isGestureNavigationEnabled = function isGestureNavigationEnabled() {
  return DCDDeviceManager.isGestureNavigationEnabled;
};
export { getSystemVersion };
export const getSystemVersionMajor = function getSystemVersionMajor() {
  const match = getSystemVersion().match(/\d+/);
  if (null == match) {
    return 0;
  } else {
    const _Number = Number;
    let num = 0;
    const parsed = Number.parseInt(match[0], 10);
    const _Number2 = Number;
    if (!Number.isNaN(parsed)) {
      num = parsed;
    }
    return num;
  }
  const str = getSystemVersion();
};
export const getSystemVersionMinor = function getSystemVersionMinor() {
  const match = getSystemVersion().match(/\d+/g);
  if (null != match) {
    if (match.length >= 2) {
      const _Number = Number;
      const parsed = Number.parseInt(match[1], 10);
      const _Number2 = Number;
      let num4 = 0;
      if (!Number.isNaN(parsed)) {
        num4 = parsed;
      }
      return num4;
    }
  }
  return 0;
};
export { getDevice };
export const getDeviceInfo = function getDeviceInfo() {
  const obj = require(dependencyMap[1]);
  const tmp2 = getDevice();
  if (isAndroidResult) {
    let text = `${tmp2 + " (" + closure_3.deviceModel})`;
  } else {
    text = tmp2;
  }
  return text;
};
export const getDeviceMediaPerformanceClass = function getDeviceMediaPerformanceClass() {
  let tmp = null;
  if (obj.isAndroid()) {
    let tmp3 = null == mediaPerformanceClass;
    if (tmp3) {
      const Storage = require(dependencyMap[3]).Storage;
      const value = Storage.get(closure_5);
      let mediaPerformanceClass = value;
      tmp3 = null == value;
    }
    if (tmp3) {
      mediaPerformanceClass = importDefault(dependencyMap[2]).getMediaPerformanceClass();
      const Storage2 = require(dependencyMap[3]).Storage;
      const result = Storage2.set(closure_5, mediaPerformanceClass);
      const obj2 = importDefault(dependencyMap[2]);
    }
    tmp = mediaPerformanceClass;
  }
  return tmp;
};
export const getDeviceModel = function getDeviceModel() {
  return DCDDeviceManager.deviceModel;
};
export const getDeviceBrand = function getDeviceBrand() {
  return DCDDeviceManager.deviceBrand;
};
export const getDeviceProduct = function getDeviceProduct() {
  return DCDDeviceManager.deviceProduct;
};
export const getDeviceManufacturer = function getDeviceManufacturer() {
  return DCDDeviceManager.deviceManufacturer;
};
export const getSmallestScreenWidthDp = function getSmallestScreenWidthDp() {
  return DCDDeviceManager.smallestScreenWidth;
};
export const getSocName = function getSocName() {
  return DCDDeviceManager.socName;
};
export const getRamSize = function getRamSize() {
  const ramSize = DCDDeviceManager.ramSize;
  let parsed;
  if ("" !== ramSize) {
    const _parseFloat = parseFloat;
    parsed = parseFloat(ramSize);
  }
  return parsed;
};
export const getMaxCpuFreq = function getMaxCpuFreq() {
  const maxCpuFreq = DCDDeviceManager.maxCpuFreq;
  let parsed;
  if ("" !== maxCpuFreq) {
    const _parseFloat = parseFloat;
    parsed = parseFloat(maxCpuFreq);
  }
  return parsed;
};
export const getTimeZone = function getTimeZone() {
  return DCDDeviceManager.timeZone;
};
export const getIsRunningOnSimulator = function getIsRunningOnSimulator() {
  return DCDDeviceManager.isRunningOnSimulator;
};
