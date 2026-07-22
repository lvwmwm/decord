// Module ID: 8390
// Function ID: 66780
// Name: getMessage
// Dependencies: []
// Exports: getInstallationErrorMessage

// Module 8390 (getMessage)
let closure_2 = importDefault(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;
function getMessage(arg0) {
  const items = ["inlineAttachmentMedia", "inlineEmbedMedia"];
  const combined = items.concat(callback(arg0), [-1644166586, -2063597247, -788528568, 1241514578, -520093121]);
  return combined.join("\n");
}
let obj = {};
obj = { expo: getMessage([1403650050, 548012034, 135987201]), nonExpo: getMessage([null, null]) };
obj.ios = obj;
obj = { expo: getMessage([]), nonExpo: getMessage([]) };
obj.android = obj;

export const getInstallationErrorMessage = function getInstallationErrorMessage() {
  arg1(dependencyMap[2]).default;
  return obj.android.expo;
};
