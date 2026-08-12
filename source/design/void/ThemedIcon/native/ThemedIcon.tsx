// Module ID: 13416
// Function ID: 13417
// Name: ThemedIcon
// Dependencies: [19, 21, 4065, 4756, 2]
// Exports: default

// Module 13416 (ThemedIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.create(null));
  let obj = require(4065) /* map */;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(4756), { color: token });
};
