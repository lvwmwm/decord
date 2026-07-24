// Module ID: 8348
// Function ID: 65830
// Name: getKey
// Dependencies: [27]

// Module 8348 (getKey)
import { Platform } from "get ActivityIndicator";
import { DeviceEventEmitter } from "get ActivityIndicator";

function getKey(arg0) {
  if (!arg0.hasOwnProperty(__listener_id)) {
    const _Object = Object;
    if (Object.isExtensible(arg0)) {
      const _Object2 = Object;
      const obj = {};
      const sum = c3 + 1;
      c3 = sum;
      obj.value = `L${tmp4}`;
      Object.defineProperty(arg0, __listener_id, obj);
    } else {
      return "F";
    }
  }
  return arg0[__listener_id];
}
let Orientation = require("get ActivityIndicator").NativeModules.Orientation;
let closure_2 = {};
let c3 = 0;
const __listener_id = "__listener_id";

export default {
  getOrientation(arg0) {
    const Orientation = arg0;
    const orientation = Orientation.getOrientation((arg0, arg1) => {
      callback(arg0, arg1);
    });
  },
  getSpecificOrientation(arg0) {
    const Orientation = arg0;
    const specificOrientation = Orientation.getSpecificOrientation((arg0, arg1) => {
      callback(arg0, arg1);
    });
  },
  ignoreAutoRotate(arg0) {
    Orientation.ignoreAutoRotate(arg0);
  },
  lockToPortrait() {
    Orientation.lockToPortrait();
  },
  lockToLandscape() {
    Orientation.lockToLandscape();
  },
  lockToLandscapeRight() {
    Orientation.lockToLandscapeRight();
  },
  lockToLandscapeLeft() {
    Orientation.lockToLandscapeLeft();
  },
  unlockAllOrientations() {
    const result = Orientation.unlockAllOrientations();
  },
  addOrientationListener(handleOrientationChange) {
    let closure_0 = handleOrientationChange;
    closure_2[getKey(handleOrientationChange)] = DeviceEventEmitter.addListener("orientationDidChange", (orientation) => {
      handleOrientationChange(orientation.orientation);
    });
  },
  addOrientationDegreesChangeListener(arg0) {
    let closure_0 = arg0;
    closure_2[getKey(arg0)] = DeviceEventEmitter.addListener("orientationDegreesDidChange", (orientationDegrees) => {
      callback(orientationDegrees.orientationDegrees);
    });
  },
  removeOrientationListener(arg0) {
    const tmp = getKey(arg0);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].remove();
      dependencyMap[tmp] = null;
      const obj = dependencyMap[tmp];
    }
  },
  addSpecificOrientationListener(arg0) {
    let closure_0 = arg0;
    closure_2[getKey(arg0)] = DeviceEventEmitter.addListener("specificOrientationDidChange", (specificOrientation) => {
      callback(specificOrientation.specificOrientation);
    });
  },
  removeSpecificOrientationListener(arg0) {
    const tmp = getKey(arg0);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].remove();
      dependencyMap[tmp] = null;
      const obj = dependencyMap[tmp];
    }
  },
  getInitialOrientation() {
    return Orientation.initialOrientation;
  }
};
