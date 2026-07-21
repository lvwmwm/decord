// Module ID: 5855
// Function ID: 49696
// Name: AppleIllocon
// Dependencies: [131072, 561250304, 1895825408, 20]
// Exports: AppleIllocon

// Module 5855 (AppleIllocon)
import AppStartPerformance from "AppStartPerformance";

const jsx = require(dependencyMap[0]).jsx;
const result = AppStartPerformance.fileFinishedImporting("design/components/mana-assets/native/generated/AppleIllocon.native.tsx");

export const AppleIllocon = function AppleIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(dependencyMap[2]) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(dependencyMap[1]), obj);
};
