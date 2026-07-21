// Module ID: 6429
// Function ID: 50565
// Name: QrCodeLoginSpotIllustration
// Dependencies: [4294967295, 0, 0, 0]
// Exports: QrCodeLoginSpotIllustration

// Module 6429 (QrCodeLoginSpotIllustration)
import result from "result";

const jsx = require(dependencyMap[0]).jsx;
result = result.fileFinishedImporting("design/components/mana-assets/native/generated/QrCodeLoginSpotIllustration.native.tsx");

export const QrCodeLoginSpotIllustration = function QrCodeLoginSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 288;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 162;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(dependencyMap[2]) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(dependencyMap[1]), obj);
};
