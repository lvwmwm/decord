// Module ID: 7864
// Function ID: 62058
// Name: XNeutralIcon
// Dependencies: [31, 33, 3833, 7865, 2]
// Exports: XNeutralIcon

// Module 7864 (XNeutralIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("BaseIconImage").fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export const XNeutralIcon = function XNeutralIcon(color) {
  let str = color.color;
  if (str === undefined) {
    str = "#4E5058";
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(7865) /* registerAsset */, color: str, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(7865) /* registerAsset */, color: str, style: color.style });
};
