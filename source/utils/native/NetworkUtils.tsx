// Module ID: 1431
// Function ID: 16703
// Name: ensureChangeListenerCreated
// Dependencies: [31, 3, 2, 1455]

// Module 1431 (ensureChangeListenerCreated)
import { NetworkConnectionTypes } from "module_31";
import importDefaultResult from "timestamp";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";

function ensureChangeListenerCreated() {
  if (null == closure_7) {
    closure_7 = importDefault(dependencyMap[2]).addEventListener(notifyListeners);
    const obj = importDefault(dependencyMap[2]);
  }
}
function cleanupChangeListener() {
  let tmp = null != _null;
  if (tmp) {
    tmp = 0 === length.length;
  }
  if (tmp) {
    tmp = 0 === length2.length;
  }
  if (tmp) {
    tmp = 0 === arr.length;
  }
  if (tmp) {
    _null();
    const _null = null;
  }
}
function convertNetInfo(isConnected) {
  let details;
  let type;
  ({ type, details } = isConnected);
  const obj = { type };
  let cellularGeneration = null;
  if (type === NetworkConnectionTypes.CELLULAR) {
    cellularGeneration = details.cellularGeneration;
  }
  obj.effectiveSpeed = cellularGeneration;
  let carrier = null;
  if (type === NetworkConnectionTypes.CELLULAR) {
    carrier = details.carrier;
  }
  obj.serviceProvider = carrier;
  return obj;
}
function notifyListeners(isConnected) {
  isConnected = isConnected.isConnected;
  const importDefault = isConnected;
  const tmp = convertNetInfo(isConnected);
  const dependencyMap = tmp;
  const arr = isConnected ? closure_4 : closure_5;
  let closure_8 = null != isConnected && isConnected;
  importDefaultResult.log("Network status changed: isConnected:" + isConnected + " type:" + isConnected.type + " speed:" + tmp.cellularGeneration);
  const item = arr.forEach((arg0) => arg0(null != isConnected && isConnected, null != isConnected && isConnected));
  const item1 = arr.forEach((arg0) => arg0(tmp));
}
function addCallback(arg0, _handleNetworkOffline) {
  let arr = arg0 ? closure_4 : closure_5;
  arr = arr.push(_handleNetworkOffline);
  ensureChangeListenerCreated();
}
function removeCallback(arg0, _handleNetworkOffline) {
  const arr = arg0 ? closure_4 : closure_5;
  const index = arr.indexOf(_handleNetworkOffline);
  if (-1 !== index) {
    arr.splice(index, 1);
    cleanupChangeListener();
  }
}
importDefaultResult = new importDefaultResult("NetworkUtils");
importDefaultResult.enableNativeLogger(true);
let closure_4 = [];
let closure_5 = [];
let closure_6 = [];
let closure_7 = null;
let closure_8 = false;
const response = require("result2").fetch();
response.then((isConnected) => {
  isConnected = isConnected.isConnected;
  let closure_8 = null != isConnected && isConnected;
});
const result = APP_LAUNCHER_BUILT_IN_SECTION_ICON.fileFinishedImporting("utils/native/NetworkUtils.tsx");

export default {
  addOnlineCallback(_handleNetworkOnline) {
    addCallback(true, _handleNetworkOnline);
  },
  removeOnlineCallback(_handleNetworkOnline) {
    removeCallback(true, _handleNetworkOnline);
  },
  addOfflineCallback(_handleNetworkOffline) {
    addCallback(false, _handleNetworkOffline);
  },
  removeOfflineCallback(_handleNetworkOffline) {
    removeCallback(false, _handleNetworkOffline);
  },
  addChangeCallback(closure_14) {
    ensureChangeListenerCreated();
  },
  removeChangeCallback(arg0) {
    const index = arr.indexOf(arg0);
    if (-1 !== index) {
      arr.splice(index, 1);
      cleanupChangeListener();
    }
  },
  getNetworkInformation() {
    const response = importDefault(dependencyMap[2]).fetch();
    return response.then((arg0) => callback(arg0));
  },
  isOnline() {
    return closure_8;
  }
};
