// Module ID: 6470
// Function ID: 50670
// Name: ServerBannerUnderboxExample
// Dependencies: [33, 5085, 6471, 2]
// Exports: ServerBannerUnderboxExample

// Module 6470 (ServerBannerUnderboxExample)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ServerBannerUnderboxExample.native.tsx");

export const ServerBannerUnderboxExample = function ServerBannerUnderboxExample(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 300;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 156;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6471) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
