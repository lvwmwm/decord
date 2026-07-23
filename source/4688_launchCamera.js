// Module ID: 4688
// Function ID: 40834
// Name: launchCamera
// Dependencies: [27, 4689]
// Exports: launchCamera, launchImageLibrary

// Module 4688 (launchCamera)
import { NativeModules } from "get ActivityIndicator";

let closure_1 = { mediaType: "photo", videoQuality: "high", quality: 1, maxWidth: 0, maxHeight: 0, includeBase64: false, cameraType: "back", selectionLimit: 1, saveToPhotos: false, durationLimit: 0, includeExtra: false };
for (const key10020 in require("module_4689")) {
  let tmp2 = key10020;
  arg5[key10020] = require("module_4689")[key10020];
  continue;
}

export const launchCamera = function launchCamera(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return new Promise((arg0) => {
    let ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    ImagePickerManager.launchCamera(Object.assign({}, closure_1, ImagePickerManager), (arg0) => {
      if (outer1_1) {
        outer1_1(arg0);
      }
      callback(arg0);
    });
  });
};
export const launchImageLibrary = function launchImageLibrary(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return new Promise((arg0) => {
    let ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    ImagePickerManager.launchImageLibrary(Object.assign({}, closure_1, ImagePickerManager), (arg0) => {
      if (outer1_1) {
        outer1_1(arg0);
      }
      callback(arg0);
    });
  });
};
