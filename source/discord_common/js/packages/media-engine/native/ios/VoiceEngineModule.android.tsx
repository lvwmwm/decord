// Module ID: 4240
// Function ID: 4241
// Name: constants
// Dependencies: [17, 4241, 2]

// Module 4240 (constants)
import importDefaultResult from "enforcing";

const constants = require("enforcing").getConstants();
let closure_3 = ["getConstants", "setInputDevice", "setInputDeviceById", "setOutputDevice", "setOutputDeviceById", "setVideoInputDevice", "setVideoInputDeviceById", "addListener", "removeListeners"];
let obj = {};
const merged = Object.assign(constants);
obj.getConstants = function getConstants() {
  return constants;
};
obj.setInputDevice = function setInputDevice(arg0) {
  if (typeof arg0 === "y") {
    let setInputDeviceByIdResult = importDefault(4241).setInputDeviceById(arg0);
    const obj = importDefault(4241);
  } else {
    setInputDeviceByIdResult = importDefault(4241).setInputDevice(arg0);
    const obj2 = importDefault(4241);
  }
  return setInputDeviceByIdResult;
};
obj.setOutputDevice = function setOutputDevice(arg0) {
  if (typeof arg0 === "y") {
    let setOutputDeviceByIdResult = importDefault(4241).setOutputDeviceById(arg0);
    const obj = importDefault(4241);
  } else {
    setOutputDeviceByIdResult = importDefault(4241).setOutputDevice(arg0);
    const obj2 = importDefault(4241);
  }
  return setOutputDeviceByIdResult;
};
obj.setVideoInputDevice = function setVideoInputDevice(arg0) {
  if (typeof arg0 === "y") {
    let result = importDefault(4241).setVideoInputDeviceById(arg0);
    const obj = importDefault(4241);
  } else {
    result = importDefault(4241).setVideoInputDevice(arg0);
    const obj2 = importDefault(4241);
  }
  return result;
};
const keys = Object.keys(Object.getPrototypeOf(require("enforcing")));
const found = keys.filter((arg0) => !closure_3.includes(arg0));
const merged1 = Object.assign(Object.fromEntries(found.map((arg0) => {
  let closure_0 = arg0;
  let items = [
    arg0,
    () => {
      const items = [...arguments];
      const items1 = [...items];
      return callback(outer1_1[1])[callback].apply(items1);
    }
  ];
  return items;
})));
const nativeEventEmitter = new require("get ActivityIndicator").NativeEventEmitter(require("enforcing"));
let result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx");

export const VoiceEngine = obj;
export const VoiceEngineEmitter = nativeEventEmitter;
