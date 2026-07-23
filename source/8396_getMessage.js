// Module ID: 8396
// Function ID: 66817
// Name: getMessage
// Dependencies: [65, 27]
// Exports: getInstallationErrorMessage

// Module 8396 (getMessage)
import _toConsumableArray from "_toConsumableArray";
import { Platform } from "get ActivityIndicator";

const require = arg1;
function getMessage(arg0) {
  const items = ["react-native-date-picker is not installed correctly. Make sure you: ", ""];
  const combined = items.concat(callback(arg0), ["", "Please reply in this thread if this solved your issue or not: ", "https://github.com/henninghall/react-native-date-picker/issues/404", "", "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file."]);
  return combined.join("\n");
}
let obj = {};
obj = { expo: getMessage(["1. Have rebuilt your app (with for instance 'npx expo run:ios')", "2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ", "https://github.com/henninghall/react-native-date-picker"]), nonExpo: getMessage(["1. Installed pods (by for instance running 'cd ios && pod install')", "2. Rebuilt the app (by for instance 'npx react-native run-ios')"]) };
obj.ios = obj;
obj = { expo: getMessage(["1. Have rebuilt your app (with for instance 'npx expo run:android')", "2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ", "https://github.com/henninghall/react-native-date-picker"]), nonExpo: getMessage(["1. Rebuilt the app (by for instance 'npx react-native run-ios')"]) };
obj.android = obj;

export const getInstallationErrorMessage = function getInstallationErrorMessage() {
  require(dependencyMap[2]).default;
  return obj.android.expo;
};
