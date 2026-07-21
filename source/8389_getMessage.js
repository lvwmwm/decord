// Module ID: 8389
// Function ID: 66768
// Name: getMessage
// Dependencies: []
// Exports: getInstallationErrorMessage

// Module 8389 (getMessage)
let closure_2 = importDefault(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;
function getMessage(arg0) {
  const items = ["<string:1405146329>", "<string:1672743112>"];
  const combined = items.concat(callback(arg0), []);
  return combined.join("\n");
}
let obj = {};
obj = { expo: getMessage([]), nonExpo: getMessage([]) };
obj.ios = obj;
obj = { expo: getMessage(["r", "expandDescriptionCTAStyle", "r"]), nonExpo: getMessage(["<string:2559574018>"]) };
obj.android = obj;

export const getInstallationErrorMessage = function getInstallationErrorMessage() {
  arg1(dependencyMap[2]).default;
  return obj.android.expo;
};
