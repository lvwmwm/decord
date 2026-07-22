// Module ID: 6367
// Function ID: 50483
// Name: NitroWumpusFlightLeft3dIllustration
// Dependencies: [131072, 561250304, 3657433088, 19]
// Exports: NitroWumpusFlightLeft3dIllustration

// Module 6367 (NitroWumpusFlightLeft3dIllustration)
import _setPrototypeOf from "_setPrototypeOf";

const jsx = require(dependencyMap[0]).jsx;
const result = _setPrototypeOf.fileFinishedImporting("design/components/mana-assets/native/generated/NitroWumpusFlightLeft3dIllustration.native.tsx");

export const NitroWumpusFlightLeft3dIllustration = function NitroWumpusFlightLeft3dIllustration(width) {
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
    num2 = 192;
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
