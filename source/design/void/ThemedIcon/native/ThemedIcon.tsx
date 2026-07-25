// Module ID: 13073
// Function ID: 101062
// Name: ThemedIcon
// Dependencies: [31, 33, 3835, 4546, 2]
// Exports: default

// Module 13073 (ThemedIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  let obj = Object.create(null);
  obj.themedColor = 0;
  const merged = Object.assign(themedColor, obj);
  obj = require(3835) /* map */;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(4546), { color: token });
};
