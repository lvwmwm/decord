// Module ID: 1431
// Function ID: 16710
// Name: ensureChangeListenerCreated
// Dependencies: [653, 3, 1432, 2]

// Module 1431 (ensureChangeListenerCreated)
import { NetworkConnectionTypes } from "ME";
import importDefaultResult from "set";
import importDefaultResult1 from "configure";

function ensureChangeListenerCreated() {
  if (null == closure_7) {
    closure_7 = importDefault(1432).addEventListener(notifyListeners);
    const obj = importDefault(1432);
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
    _null = null;
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
  const tmp = convertNetInfo(isConnected);
  const dependencyMap = tmp;
  const arr = isConnected ? closure_4 : closure_5;
  let closure_8 = null != isConnected && isConnected;
  importDefaultResult.log("Network status changed: isConnected:" + isConnected + " type:" + isConnected.type + " speed:" + tmp.cellularGeneration);
  const item = arr.forEach((arg0) => arg0(null != isConnected && isConnected, closure_1));
  const item1 = arr.forEach((arg0) => arg0(closure_1));
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
let c7 = null;
let c8 = false;
let response = require("configure").fetch();
response.then((isConnected) => {
  isConnected = isConnected.isConnected;
  let closure_8 = null != isConnected && isConnected;
});
let obj = {
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
  addChangeCallback(outer1_14) {
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
    const response = importDefault(1432).fetch();
    return response.then((arg0) => outer1_11(arg0));
  },
  isOnline() {
    return c8;
  }
};
const result = require("configure").fileFinishedImporting("utils/native/NetworkUtils.tsx");

export default obj;
