// Module ID: 7867
// Function ID: 7868
// Name: XNeutralIcon
// Dependencies: [19, 21, 3892, 7868, 2]
// Exports: XNeutralIcon

// Module 7867 (XNeutralIcon)
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
  obj[0] = require(7868) /* registerAsset */;
  obj[1] = str;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3892) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
