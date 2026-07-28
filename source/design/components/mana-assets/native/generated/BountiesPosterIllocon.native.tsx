// Module ID: 6866
// Function ID: 59570
// Name: BountiesPosterIllocon
// Dependencies: [33, 5119, 6867, 2]
// Exports: BountiesPosterIllocon

// Module 6866 (BountiesPosterIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/BountiesPosterIllocon.native.tsx");

export const BountiesPosterIllocon = function BountiesPosterIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6867) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num, height: num });
};
