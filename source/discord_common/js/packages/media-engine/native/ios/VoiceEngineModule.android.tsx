// Module ID: 4177
// Function ID: 35877
// Name: constants
// Dependencies: []

// Module 4177 (constants)
const constants = importDefault(dependencyMap[1]).getConstants();
let closure_3 = [null, null, null, 3887084218602982000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 2.0018885433677793, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001637061480741114, 281209495531209100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001093338440065791, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018034590500550834];
const obj = {};
const merged = Object.assign(constants);
obj["getConstants"] = function getConstants() {
  return constants;
};
obj["setInputDevice"] = function setInputDevice(arg0) {
  if ("string" === typeof arg0) {
    let setInputDeviceByIdResult = importDefault(dependencyMap[1]).setInputDeviceById(arg0);
    const obj2 = importDefault(dependencyMap[1]);
  } else {
    setInputDeviceByIdResult = importDefault(dependencyMap[1]).setInputDevice(arg0);
    const obj = importDefault(dependencyMap[1]);
  }
  return setInputDeviceByIdResult;
};
obj["setOutputDevice"] = function setOutputDevice(arg0) {
  if ("string" === typeof arg0) {
    let setOutputDeviceByIdResult = importDefault(dependencyMap[1]).setOutputDeviceById(arg0);
    const obj2 = importDefault(dependencyMap[1]);
  } else {
    setOutputDeviceByIdResult = importDefault(dependencyMap[1]).setOutputDevice(arg0);
    const obj = importDefault(dependencyMap[1]);
  }
  return setOutputDeviceByIdResult;
};
obj["setVideoInputDevice"] = function setVideoInputDevice(arg0) {
  if ("string" === typeof arg0) {
    let result = importDefault(dependencyMap[1]).setVideoInputDeviceById(arg0);
    const obj2 = importDefault(dependencyMap[1]);
  } else {
    result = importDefault(dependencyMap[1]).setVideoInputDevice(arg0);
    const obj = importDefault(dependencyMap[1]);
  }
  return result;
};
const keys = Object.keys(Object.getPrototypeOf(importDefault(dependencyMap[1])));
const found = keys.filter((arg0) => !closure_3.includes(arg0));
const merged1 = Object.assign(Object.fromEntries(found.map((arg0) => {
  const importDefault = arg0;
  const items = [
    arg0,
    (arg0) => {
      const items = [...arguments];
      const items1 = [...items];
      return arg0(closure_1[1])[closure_0].apply(items1);
    }
  ];
  return items;
})));
const nativeEventEmitter = new arg1(dependencyMap[0]).NativeEventEmitter(importDefault(dependencyMap[1]));
const importDefaultResult = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngineModule.android.tsx");

export const VoiceEngine = obj;
export const VoiceEngineEmitter = nativeEventEmitter;
