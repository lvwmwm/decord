// Module ID: 4684
// Function ID: 40759
// Name: launchCamera
// Dependencies: []
// Exports: launchCamera, launchImageLibrary

// Module 4684 (launchCamera)
const NativeModules = require(dependencyMap[0]).NativeModules;
let closure_1 = { "Null": "favorite_emojis", "Null": "message", "Null": 7, "Null": "application_command_frecency", "Null": "message", "Null": null, height: "\u{1F44F}\u{1F3FE}", alignItems: true, "Bool(true)": null, "Bool(true)": 8, "Bool(true)": "row" };
for (const key10020 in arg1(arg6[1])) {
  let tmp2 = key10020;
  arg5[key10020] = arg1(arg6[1])[key10020];
}

export const launchCamera = function launchCamera(arg0, arg1) {
  const NativeModules = arg0;
  let closure_1 = arg1;
  return new Promise((arg0) => {
    const ImagePickerManager = arg0.ImagePickerManager;
    ImagePickerManager.launchCamera(Object.assign({}, arg1, arg0), (arg0) => {
      if (callback) {
        callback(arg0);
      }
      arg0(arg0);
    });
  });
};
export const launchImageLibrary = function launchImageLibrary(arg0, arg1) {
  const NativeModules = arg0;
  let closure_1 = arg1;
  return new Promise((arg0) => {
    const ImagePickerManager = arg0.ImagePickerManager;
    ImagePickerManager.launchImageLibrary(Object.assign({}, arg1, arg0), (arg0) => {
      if (callback) {
        callback(arg0);
      }
      arg0(arg0);
    });
  });
};
