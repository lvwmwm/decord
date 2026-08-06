// Module ID: 6611
// Function ID: 6612
// Name: ServerBannerTheCrewExample
// Dependencies: [21, 5251, 6612, 2]
// Exports: ServerBannerTheCrewExample

// Module 6611 (ServerBannerTheCrewExample)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ServerBannerTheCrewExample.native.tsx");

export const ServerBannerTheCrewExample = function ServerBannerTheCrewExample(width) {
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
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: null };
  obj[0] = importDefault(6612);
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(importDefault(5251), { width: num * num3, height: num2 * num3 });
};
