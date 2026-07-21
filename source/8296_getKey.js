// Module ID: 8296
// Function ID: 65540
// Name: getKey
// Dependencies: []

// Module 8296 (getKey)
function getKey(arg0) {
  if (!arg0.hasOwnProperty(closure_4)) {
    const _Object = Object;
    if (Object.isExtensible(arg0)) {
      const _Object2 = Object;
      const obj = {};
      const sum = closure_3 + 1;
      closure_3 = sum;
      obj.value = `L${tmp4}`;
      Object.defineProperty(arg0, closure_4, obj);
    } else {
      return "F";
    }
  }
  return arg0[closure_4];
}
const Orientation = require(dependencyMap[0]).NativeModules.Orientation;
const Platform = require(dependencyMap[0]).Platform;
const DeviceEventEmitter = require(dependencyMap[0]).DeviceEventEmitter;
let closure_2 = {};
let closure_3 = 0;
let closure_4 = "__listener_id";

export default {
  getOrientation(arg0) {
    const Orientation = arg0;
    const orientation = Orientation.getOrientation((arg0, arg1) => {
      arg0(arg0, arg1);
    });
  },
  getSpecificOrientation(arg0) {
    const Orientation = arg0;
    const specificOrientation = Orientation.getSpecificOrientation((arg0, arg1) => {
      arg0(arg0, arg1);
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
    const Orientation = handleOrientationChange;
    closure_2[getKey(handleOrientationChange)] = DeviceEventEmitter.addListener("orientationDidChange", (orientation) => {
      orientation(orientation.orientation);
    });
  },
  addOrientationDegreesChangeListener(arg0) {
    const Orientation = arg0;
    closure_2[getKey(arg0)] = DeviceEventEmitter.addListener("orientationDegreesDidChange", (orientationDegrees) => {
      orientationDegrees(orientationDegrees.orientationDegrees);
    });
  },
  removeOrientationListener(arg0) {
    const tmp = getKey(arg0);
    if (closure_2[tmp]) {
      closure_2[tmp].remove();
      closure_2[tmp] = null;
      const obj = closure_2[tmp];
    }
  },
  addSpecificOrientationListener(arg0) {
    const Orientation = arg0;
    closure_2[getKey(arg0)] = DeviceEventEmitter.addListener("specificOrientationDidChange", (specificOrientation) => {
      specificOrientation(specificOrientation.specificOrientation);
    });
  },
  removeSpecificOrientationListener(arg0) {
    const tmp = getKey(arg0);
    if (closure_2[tmp]) {
      closure_2[tmp].remove();
      closure_2[tmp] = null;
      const obj = closure_2[tmp];
    }
  },
  getInitialOrientation() {
    return Orientation.initialOrientation;
  }
};
