// Module ID: 4685
// Function ID: 40807
// Name: launchCamera
// Dependencies: []
// Exports: launchCamera, launchImageLibrary

// Module 4685 (launchCamera)
const NativeModules = require(dependencyMap[0]).NativeModules;
let closure_1 = { <string:1402859834>: "favorite_emojis", <string:1680741042>: "message", <string:4199756461>: 7, <string:651109841>: "application_command_frecency", <string:1036987599>: "message", <string:1653660367>: null, <string:3290348494>: "\u{1F44F}\u{1F3FE}", <string:2324749638>: true, <string:399093966>: null, <string:3364107822>: 8, <string:1911964082>: "row" };
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
