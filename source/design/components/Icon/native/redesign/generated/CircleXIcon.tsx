// Module ID: 6715
// Function ID: 59084
// Name: CircleXIcon
// Dependencies: [31, 27, 33, 689, 3868, 6716, 6717, 2]
// Exports: CircleXIcon

// Module 6715 (CircleXIcon)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleXIcon.tsx");

export const CircleXIcon = function CircleXIcon(color) {
  let secondaryColor;
  let style;
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = { style: 0, secondaryColor: 0, color: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  obj = {};
  obj = { source: require(6716) /* registerAsset */, color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [callback(require(3868) /* BaseIconImage */.BaseIconImage, obj), ];
  const obj1 = { source: require(6717) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT };
  const items1 = [style];
  const items2 = [...items1.flat(), { position: "absolute", top: 0 }];
  obj1.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(require(3868) /* BaseIconImage */.BaseIconImage, obj1);
  obj.children = items;
  return callback2(View, obj);
};
