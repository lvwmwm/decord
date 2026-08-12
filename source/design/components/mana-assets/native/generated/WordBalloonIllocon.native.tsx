// Module ID: 6891
// Function ID: 6892
// Name: WordBalloonIllocon
// Dependencies: [21, 5307, 6892, 2]
// Exports: WordBalloonIllocon

// Module 6891 (WordBalloonIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/WordBalloonIllocon.native.tsx");

export const WordBalloonIllocon = function WordBalloonIllocon(size) {
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
  obj[0] = importDefault(6892);
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5307), { uri: null });
};
