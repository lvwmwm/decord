// Module ID: 13118
// Function ID: 101240
// Name: ThemedIcon
// Dependencies: [31, 33, 3869, 4580, 2]
// Exports: default

// Module 13118 (ThemedIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  let obj = Object.create(null);
  obj.themedColor = 0;
  const merged = Object.assign(themedColor, obj);
  obj = require(3869) /* map */;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(4580), { color: token });
};
