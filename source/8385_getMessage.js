// Module ID: 8385
// Function ID: 66745
// Name: getMessage
// Dependencies: []
// Exports: getInstallationErrorMessage

// Module 8385 (getMessage)
let closure_2 = importDefault(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;
function getMessage(arg0) {
  const items = [false, false];
  const combined = items.concat(callback(arg0), []);
  return combined.join("\n");
}
let obj = {};
obj = { expo: getMessage([]), nonExpo: getMessage([false, false]) };
obj.ios = obj;
obj = { expo: getMessage([false, false, false]), nonExpo: getMessage([null]) };
obj.android = obj;

export const getInstallationErrorMessage = function getInstallationErrorMessage() {
  arg1(dependencyMap[2]).default;
  return obj.android.expo;
};
