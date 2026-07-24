// Module ID: 13062
// Function ID: 100935
// Name: ThemedIcon
// Dependencies: [31, 33, 3834, 4545, 2]
// Exports: default

// Module 13062 (ThemedIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  let obj = Object.create(null);
  obj.themedColor = 0;
  const merged = Object.assign(themedColor, obj);
  obj = require(3834) /* map */;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(4545), { color: token });
};
