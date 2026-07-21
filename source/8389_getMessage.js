// Module ID: 8389
// Function ID: 66757
// Name: getMessage
// Dependencies: []
// Exports: getInstallationErrorMessage

// Module 8389 (getMessage)
let closure_2 = importDefault(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;
function getMessage(arg0) {
  const items = ["<string:2039238028>", "<string:2080505859>"];
  const combined = items.concat(callback(arg0), []);
  return combined.join("\n");
}
let obj = {};
obj = { expo: getMessage(["<string:1155465218>", "<string:1209925634>", "<string:848953346>"]), nonExpo: getMessage([]) };
obj.ios = obj;
obj = { expo: getMessage([]), nonExpo: getMessage([true]) };
obj.android = obj;

export const getInstallationErrorMessage = function getInstallationErrorMessage() {
  arg1(dependencyMap[2]).default;
  return obj.android.expo;
};
