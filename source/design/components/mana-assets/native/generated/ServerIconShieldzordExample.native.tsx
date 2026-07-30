// Module ID: 7461
// Function ID: 7462
// Name: ServerIconShieldzordExample
// Dependencies: [21, 5141, 7462, 2]
// Exports: ServerIconShieldzordExample

// Module 7461 (ServerIconShieldzordExample)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ServerIconShieldzordExample.native.tsx");

export const ServerIconShieldzordExample = function ServerIconShieldzordExample(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 100;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 100;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(7462);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5141), { width: num * num3, height: num2 * num3 });
};
