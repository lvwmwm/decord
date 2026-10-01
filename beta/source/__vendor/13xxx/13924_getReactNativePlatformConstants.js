// Module ID: 13924
// Function ID: 13925
// Name: getReactNativePlatformConstants
// Dependencies: [17]
// Exports: default

// Module 13924 (getReactNativePlatformConstants)
import react_native from "react-native" /* 17 */;

let constants;


export default function getReactNativePlatformConstants() {
  const obj = { osRelease: "", model: "", serverHost: "", uiMode: "", serial: "", forceTouch: false, interfaceIdiom: "", systemName: "" };
  if ("android" === react_native.Platform.OS) {
    const constants2 = tmp.Platform.constants;
    const obj5 = {};
    const merged = Object.assign(obj);
    ({ Release: obj3.osRelease, Model: obj3.model, ServerHost: obj3.serverHost, uiMode: obj3.uiMode, Serial: obj3.serial } = constants2);
    return obj5;
  } else if ("ios" === react_native.Platform.OS) {
    constants = tmp.Platform.constants;
    const obj6 = { forceTouch: constants.forceTouchAvailable || false };
    const merged1 = Object.assign(obj);
    ({ interfaceIdiom: obj2.interfaceIdiom, systemName: obj2.systemName } = constants);
    return obj6;
  } else {
    return obj;
  }
};
