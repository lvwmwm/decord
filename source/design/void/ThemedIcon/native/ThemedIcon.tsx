// Module ID: 13265
// Function ID: 13266
// Name: ThemedIcon
// Dependencies: [19, 21, 3988, 4697, 2]
// Exports: default

// Module 13265 (ThemedIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.create(null));
  let obj = require(3988) /* map */;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(4697), { color: token });
};
