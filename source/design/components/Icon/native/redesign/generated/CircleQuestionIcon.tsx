// Module ID: 9817
// Function ID: 9818
// Name: CircleQuestionIcon
// Dependencies: [19, 17, 21, 712, 3892, 9818, 9819, 2]
// Exports: CircleQuestionIcon

// Module 9817 (CircleQuestionIcon)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleQuestionIcon.tsx");

export const CircleQuestionIcon = function CircleQuestionIcon(color) {
  let secondaryColor;
  let style;
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  let obj = { children: null };
  obj = { source: null, color: null, style: null };
  obj[0] = require(9818) /* registerAsset */;
  obj[1] = secondaryColor;
  obj[2] = style;
  const merged1 = Object.assign(merged);
  const items = [callback(require(3892) /* BaseIconImage */.BaseIconImage, obj), ];
  obj = { source: null, color: null, style: null };
  obj[0] = require(9819) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj[2] = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(require(3892) /* BaseIconImage */.BaseIconImage, obj);
  obj[0] = items;
  return callback2(View, obj);
};
