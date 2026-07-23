// Module ID: 8619
// Function ID: 68347
// Name: MinecraftNeutralIcon
// Dependencies: [31, 27, 33, 689, 3833, 8620, 8621, 8622, 2]
// Exports: MinecraftNeutralIcon

// Module 8619 (MinecraftNeutralIcon)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx");

export const MinecraftNeutralIcon = function MinecraftNeutralIcon(secondaryColor) {
  let color;
  let style;
  ({ style, color } = secondaryColor);
  if (color === undefined) {
    color = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let str = secondaryColor.secondaryColor;
  if (str === undefined) {
    str = "#000";
  }
  let str2 = secondaryColor.tertiaryColor;
  if (str2 === undefined) {
    str2 = "#fff";
  }
  let obj = { style: 0, color: 0, secondaryColor: 0, tertiaryColor: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(secondaryColor, obj);
  obj = {};
  obj = { source: require(8620) /* registerAsset */, color, style };
  const merged1 = Object.assign(merged);
  const items = [callback(require(3833) /* BaseIconImage */.BaseIconImage, obj), , ];
  const obj1 = { source: require(8621) /* registerAsset */, color: str };
  const items1 = [style];
  const items2 = [...items1.flat(), { position: "absolute", top: 0 }];
  obj1.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(require(3833) /* BaseIconImage */.BaseIconImage, obj1);
  const obj2 = { source: require(8622) /* registerAsset */, color: str2 };
  const items3 = [style];
  const items4 = [...items3.flat(), { position: "absolute", top: 0 }];
  obj2.style = items4;
  const merged3 = Object.assign(merged);
  items[2] = callback(require(3833) /* BaseIconImage */.BaseIconImage, obj2);
  obj.children = items;
  return callback2(View, obj);
};
