// Module ID: 6077
// Function ID: 6078
// Name: CaterpillarIllocon
// Dependencies: [21, 5251, 6078, 2]
// Exports: CaterpillarIllocon

// Module 6077 (CaterpillarIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/CaterpillarIllocon.native.tsx");

export const CaterpillarIllocon = function CaterpillarIllocon(size) {
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
  obj[0] = importDefault(6078);
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5251), { uri: null });
};
