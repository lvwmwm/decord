// Module ID: 6406
// Function ID: 50574
// Name: PingPongPaddleIllocon
// Dependencies: [33, 5085, 6407, 2]
// Exports: PingPongPaddleIllocon

// Module 6406 (PingPongPaddleIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/PingPongPaddleIllocon.native.tsx");

export const PingPongPaddleIllocon = function PingPongPaddleIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6407) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num, height: num });
};
