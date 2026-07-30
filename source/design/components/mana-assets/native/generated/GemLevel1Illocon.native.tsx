// Module ID: 7143
// Function ID: 7144
// Name: GemLevel1Illocon
// Dependencies: [21, 5141, 7144, 2]
// Exports: GemLevel1Illocon

// Module 7143 (GemLevel1Illocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/GemLevel1Illocon.native.tsx");

export const GemLevel1Illocon = function GemLevel1Illocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(7144);
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5141), { uri: null });
};
