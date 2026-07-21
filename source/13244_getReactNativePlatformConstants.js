// Module ID: 13244
// Function ID: 100502
// Name: getReactNativePlatformConstants
// Dependencies: []
// Exports: default

// Module 13244 (getReactNativePlatformConstants)
let closure_0 = require(dependencyMap[0]);

export default function getReactNativePlatformConstants() {
  let obj = {};
  if ("android" === Platform.Platform.OS) {
    const _Object = Object;
    obj = {};
    ({ Release: obj3.osRelease, Model: obj3.model, ServerHost: obj3.serverHost, uiMode: obj3.uiMode, Serial: obj3.serial } = Platform.Platform.constants);
    return Object.assign({}, obj, obj);
  } else if ("ios" === Platform.Platform.OS) {
    const constants = Platform.Platform.constants;
    obj = {};
    let flag = constants.forceTouchAvailable;
    if (!flag) {
      flag = false;
    }
    obj.forceTouch = flag;
    ({ interfaceIdiom: obj2.interfaceIdiom, systemName: obj2.systemName } = constants);
    return Object.assign({}, obj, obj);
  } else {
    return obj;
  }
};
