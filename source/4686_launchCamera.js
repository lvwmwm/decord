// Module ID: 4686
// Function ID: 40800
// Name: launchCamera
// Dependencies: []
// Exports: launchCamera, launchImageLibrary

// Module 4686 (launchCamera)
const NativeModules = require(dependencyMap[0]).NativeModules;
let closure_1 = {};
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
