// Module ID: 6173
// Function ID: 50173
// Name: GemLevel3Illocon
// Dependencies: [4294967295, 0, 0, 0]
// Exports: GemLevel3Illocon

// Module 6173 (GemLevel3Illocon)
const jsx = require(dependencyMap[0]).jsx;
const result = require("__exportStarResult1").fileFinishedImporting("design/components/mana-assets/native/generated/GemLevel3Illocon.native.tsx");

export const GemLevel3Illocon = function GemLevel3Illocon(size) {
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
