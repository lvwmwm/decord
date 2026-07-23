// Module ID: 13365
// Function ID: 102691
// Name: getReactNativePlatformConstants
// Dependencies: [27]
// Exports: default

// Module 13365 (getReactNativePlatformConstants)
import get_ActivityIndicator from "get ActivityIndicator";


export default function getReactNativePlatformConstants() {
  let obj = { osRelease: "", model: "", serverHost: "", uiMode: "", serial: "", forceTouch: false, interfaceIdiom: "", systemName: "" };
  if ("android" === get_ActivityIndicator.Platform.OS) {
    const _Object = Object;
    obj = {};
    ({ Release: obj3.osRelease, Model: obj3.model, ServerHost: obj3.serverHost, uiMode: obj3.uiMode, Serial: obj3.serial } = get_ActivityIndicator.Platform.constants);
    return Object.assign({}, obj, obj);
  } else if ("ios" === get_ActivityIndicator.Platform.OS) {
    const constants = get_ActivityIndicator.Platform.constants;
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
