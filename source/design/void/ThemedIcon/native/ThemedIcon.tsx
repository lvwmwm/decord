// Module ID: 13223
// Function ID: 13224
// Name: ThemedIcon
// Dependencies: [19, 21, 3959, 4668, 2]
// Exports: default

// Module 13223 (ThemedIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.create(null));
  let obj = require(3959) /* map */;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(4668), { color: token });
};
