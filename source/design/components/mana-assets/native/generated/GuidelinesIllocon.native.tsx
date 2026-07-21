// Module ID: 6239
// Function ID: 50272
// Name: GuidelinesIllocon
// Dependencies: [33554456, 1946157056, 33, 5233]
// Exports: GuidelinesIllocon

// Module 6239 (GuidelinesIllocon)
import preload from "preload";

const jsx = require(dependencyMap[0]).jsx;
const result = preload.fileFinishedImporting("design/components/mana-assets/native/generated/GuidelinesIllocon.native.tsx");

export const GuidelinesIllocon = function GuidelinesIllocon(size) {
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
