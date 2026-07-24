// Module ID: 6602
// Function ID: 50868
// Name: TrophyIllocon
// Dependencies: [33, 5085, 6603, 2]
// Exports: TrophyIllocon

// Module 6602 (TrophyIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/TrophyIllocon.native.tsx");

export const TrophyIllocon = function TrophyIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6603) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num, height: num });
};
