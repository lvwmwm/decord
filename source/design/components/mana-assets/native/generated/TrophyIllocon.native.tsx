// Module ID: 7579
// Function ID: 7580
// Name: TrophyIllocon
// Dependencies: [21, 5141, 7580, 2]
// Exports: TrophyIllocon

// Module 7579 (TrophyIllocon)
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
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(7580);
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5141), { uri: null });
};
