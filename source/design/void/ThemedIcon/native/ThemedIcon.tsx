// Module ID: 13555
// Function ID: 13556
// Name: ThemedIcon
// Dependencies: [19, 21, 4101, 4817, 2]
// Exports: default

// Module 13555 (ThemedIcon)
import noopAll from "noop" /* 19 */;
import map from "map" /* 4101 */;
import IconSizesDefault from "IconSizes" /* 4817 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.create(null));
  let obj = map;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(IconSizesDefault, { color: token });
};
