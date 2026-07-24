// Module ID: 7577
// Function ID: 60380
// Name: CircleErrorIcon
// Dependencies: [31, 27, 33, 689, 3833, 7578, 7579, 2]
// Exports: CircleErrorIcon

// Module 7577 (CircleErrorIcon)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx");

export const CircleErrorIcon = function CircleErrorIcon(color) {
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
  obj = { source: require(7578) /* registerAsset */, color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [callback(require(3833) /* BaseIconImage */.BaseIconImage, obj), ];
  const obj1 = { source: require(7579) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT };
  const items1 = [style];
  const items2 = [...items1.flat(), { position: "absolute", top: 0 }];
  obj1.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(require(3833) /* BaseIconImage */.BaseIconImage, obj1);
  obj.children = items;
  return callback2(View, obj);
};
