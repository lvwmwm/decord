// Module ID: 8212
// Function ID: 8213
// Name: launchCamera
// Dependencies: [17, 8213]
// Exports: canUseAndroidPhotoPicker, launchCamera, launchImageLibrary

// Module 8212 (launchCamera)
import _mod8213 from "module_8213" /* 8213 */;
import react_native from "react-native" /* 17 */;

let ImagePickerManager;

let Platform;
let _window;
({ NativeModules: _window, Platform } = react_native);
let closure_1 = { mediaType: "photo", videoQuality: "high", quality: 1, maxWidth: 0, maxHeight: 0, includeBase64: false, cameraType: "back", selectionLimit: 1, saveToPhotos: false, durationLimit: 0, includeExtra: false };
for (const key10018 in _mod8213) {
  let tmp3 = key10018;
  exports[key10018] = _mod8213[key10018];
  continue;
}

export function launchCamera(arg0, arg1) {
  ImagePickerManager = arg0;
  closure_1 = arg1;
  const promise = new Promise((arg0) => {
    let closure_0;
    ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    const launchCamera = ImagePickerManager.launchCamera;
    const obj = {};
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(ImagePickerManager);
    launchCamera(obj, (arg0) => {
      if (closure_1) {
        tmp(arg0);
      }
      closure_0(arg0);
    });
  });
  return promise;
}
export function launchImageLibrary(arg0, arg1) {
  ImagePickerManager = arg0;
  closure_1 = arg1;
  const promise = new Promise((arg0) => {
    let closure_0;
    ImagePickerManager = arg0;
    ImagePickerManager = ImagePickerManager.ImagePickerManager;
    const launchImageLibrary = ImagePickerManager.launchImageLibrary;
    const obj = {};
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(ImagePickerManager);
    launchImageLibrary(obj, (arg0) => {
      if (closure_1) {
        tmp(arg0);
      }
      closure_0(arg0);
    });
  });
  return promise;
}
export function canUseAndroidPhotoPicker(arg0) {
  const obj = {};
  const merged = Object.assign(closure_1);
  const merged1 = Object.assign(arg0);
  let tmp3 = true === obj.enableAndroidPhotoPicker;
  const mediaType = obj.mediaType;
  if (tmp3) {
    tmp3 = true !== obj.forceGetContent;
  }
  if (tmp3) {
    tmp3 = "any" !== mediaType;
  }
  if (tmp3) {
    tmp3 = true === _window.ImagePickerManager.isPhotoPickerAvailable;
  }
  return tmp3;
}
