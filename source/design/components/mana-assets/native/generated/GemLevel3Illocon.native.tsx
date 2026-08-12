// Module ID: 6437
// Function ID: 6438
// Name: GemLevel3Illocon
// Dependencies: [21, 5307, 6438, 2]
// Exports: GemLevel3Illocon

// Module 6437 (GemLevel3Illocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/GemLevel3Illocon.native.tsx");

export const GemLevel3Illocon = function GemLevel3Illocon(size) {
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
  obj[0] = importDefault(6438);
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5307), { uri: null });
};
