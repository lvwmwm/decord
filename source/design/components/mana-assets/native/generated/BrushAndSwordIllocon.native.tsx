// Module ID: 5909
// Function ID: 49796
// Name: BrushAndSwordIllocon
// Dependencies: [4294967295, 0, 0, 0]
// Exports: BrushAndSwordIllocon

// Module 5909 (BrushAndSwordIllocon)
const jsx = require(dependencyMap[0]).jsx;
const result = require("__exportStarResult1").fileFinishedImporting("design/components/mana-assets/native/generated/BrushAndSwordIllocon.native.tsx");

export const BrushAndSwordIllocon = function BrushAndSwordIllocon(size) {
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
