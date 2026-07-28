// Module ID: 7422
// Function ID: 60404
// Name: ServerBannerStaffServerExample
// Dependencies: [33, 5119, 7423, 2]
// Exports: ServerBannerStaffServerExample

// Module 7422 (ServerBannerStaffServerExample)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ServerBannerStaffServerExample.native.tsx");

export const ServerBannerStaffServerExample = function ServerBannerStaffServerExample(width) {
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
  obj = { uri: importDefault(7423) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
