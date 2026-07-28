// Module ID: 6796
// Function ID: 59465
// Name: AccountAgeTier8LargeBadge
// Dependencies: [33, 5119, 6797, 2]
// Exports: AccountAgeTier8LargeBadge

// Module 6796 (AccountAgeTier8LargeBadge)
import { jsx } from "jsxProd";

const result = require("vanityUrl").fileFinishedImporting("design/components/mana-assets/native/generated/AccountAgeTier8LargeBadge.native.tsx");

export const AccountAgeTier8LargeBadge = function AccountAgeTier8LargeBadge(width) {
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
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(6797) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num * num3, height: num2 * num3 });
};
