// Module ID: 8309
// Function ID: 8310
// Name: XNeutralIcon
// Dependencies: [19, 21, 4096, 8310, 2]
// Exports: XNeutralIcon

// Module 8309 (XNeutralIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("BaseIconImage").fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export const XNeutralIcon = function XNeutralIcon(color) {
  let str = color.color;
  if (str === undefined) {
    str = "#4E5058";
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(8310) /* registerAsset */;
  obj[1] = str;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4096) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
