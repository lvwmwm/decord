// Module ID: 4181
// Function ID: 35916
// Name: constants
// Dependencies: [27, 4182, 2]

// Module 4181 (constants)
import importDefaultResult from "enforcing";

const constants = require("enforcing").getConstants();
let closure_3 = ["getConstants", "setInputDevice", "setInputDeviceById", "setOutputDevice", "setOutputDeviceById", "setVideoInputDevice", "setVideoInputDeviceById", "addListener", "removeListeners"];
let obj = {};
const merged = Object.assign(constants);
obj["getConstants"] = function getConstants() {
  return constants;
};
obj["setInputDevice"] = function setInputDevice(arg0) {
  if ("string" === typeof arg0) {
    let setInputDeviceByIdResult = importDefault(4182).setInputDeviceById(arg0);
    const obj2 = importDefault(4182);
  } else {
    setInputDeviceByIdResult = importDefault(4182).setInputDevice(arg0);
    const obj = importDefault(4182);
  }
  return setInputDeviceByIdResult;
};
obj["setOutputDevice"] = function setOutputDevice(arg0) {
  if ("string" === typeof arg0) {
    let setOutputDeviceByIdResult = importDefault(4182).setOutputDeviceById(arg0);
    const obj2 = importDefault(4182);
  } else {
    setOutputDeviceByIdResult = importDefault(4182).setOutputDevice(arg0);
    const obj = importDefault(4182);
  }
  return setOutputDeviceByIdResult;
};
obj["setVideoInputDevice"] = function setVideoInputDevice(arg0) {
  if ("string" === typeof arg0) {
    let result = importDefault(4182).setVideoInputDeviceById(arg0);
    const obj2 = importDefault(4182);
  } else {
    result = importDefault(4182).setVideoInputDevice(arg0);
    const obj = importDefault(4182);
  }
  return result;
};
const keys = Object.keys(Object.getPrototypeOf(require("enforcing")));
const found = keys.filter((arg0) => !closure_3.includes(arg0));
const merged1 = Object.assign(Object.fromEntries(found.map((arg0) => {
  let closure_0 = arg0;
  let items = [
    arg0,
    (arg0) => {
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
