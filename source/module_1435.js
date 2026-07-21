// Module ID: 1435
// Function ID: 16764
// Dependencies: []

// Module 1435
const NativeEventEmitter = require(dependencyMap[0]).NativeEventEmitter;
if (importDefault(dependencyMap[1])) {
  let closure_3 = null;
  const _Object = Object;
  const obj = {};
  Object.defineProperty(obj, "eventEmitter", {
    get: () => {
        if (!closure_3) {
          const prototype = NativeEventEmitter.prototype;
          const tmp6 = new NativeEventEmitter(importDefault(dependencyMap[1]));
          closure_3 = tmp6;
        }
        return closure_3;
      },
    set: undefined
  });
  exports.default = Object.assign(importDefault(dependencyMap[1]), obj);
} else {
  const _Error = Error;
  const error = new Error("@react-native-community/netinfo: NativeModule.RNCNetInfo is null. To fix this issue try these steps:\n\n\u2022 Run `react-native link @react-native-community/netinfo` in the project root.\n\u2022 Rebuild and re-run the app.\n\u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n\u2022 Check that the library was linked correctly when you used the link command by running through the manual installation instructions in the README.\n* If you are getting this error while unit testing you need to mock the native module. Follow the guide in the README.\n\nIf none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-netinfo");
  throw error;
}
