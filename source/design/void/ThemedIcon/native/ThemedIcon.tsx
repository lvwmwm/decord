// Module ID: 13136
// Function ID: 13137
// Name: ThemedIcon
// Dependencies: [19, 21, 3893, 4602, 2]
// Exports: default

// Module 13136 (ThemedIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.create(null));
  let obj = require(3893) /* map */;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(4602), { color: token });
};
