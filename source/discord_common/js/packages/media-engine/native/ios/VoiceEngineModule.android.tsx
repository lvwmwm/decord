// Module ID: 4353
// Function ID: 4354
// Name: constants
// Dependencies: [17, 4354, 2]

// Module 4353 (constants)
import importDefaultResult from "enforcing";

const constants = require("enforcing").getConstants();
let closure_3 = ["getConstants", "setInputDevice", "setInputDeviceById", "setOutputDevice", "setOutputDeviceById", "setVideoInputDevice", "setVideoInputDeviceById", "addListener", "removeListeners"];
let obj = {};
const merged = Object.assign(constants);
obj.getConstants = function getConstants() {
  return constants;
};
obj.setInputDevice = function setInputDevice(str) {
  if (typeof str === "string") {
    let setInputDeviceByIdResult = importDefault(4354).setInputDeviceById(str);
    const obj = importDefault(4354);
  } else {
    setInputDeviceByIdResult = importDefault(4354).setInputDevice(str);
    const obj2 = importDefault(4354);
  }
  return setInputDeviceByIdResult;
};
obj.setOutputDevice = function setOutputDevice(str) {
  if (typeof str === "string") {
    let setOutputDeviceByIdResult = importDefault(4354).setOutputDeviceById(str);
    const obj = importDefault(4354);
  } else {
    setOutputDeviceByIdResult = importDefault(4354).setOutputDevice(str);
    const obj2 = importDefault(4354);
  }
  return setOutputDeviceByIdResult;
};
obj.setVideoInputDevice = function setVideoInputDevice(str) {
  if (typeof str === "string") {
    let result = importDefault(4354).setVideoInputDeviceById(str);
    const obj = importDefault(4354);
  } else {
    result = importDefault(4354).setVideoInputDevice(str);
    const obj2 = importDefault(4354);
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
