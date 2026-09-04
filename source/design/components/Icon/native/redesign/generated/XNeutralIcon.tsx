// Module ID: 8030
// Function ID: 8031
// Name: XNeutralIcon
// Dependencies: [19, 21, 4196, 8031, 2]
// Exports: XNeutralIcon

// Module 8030 (XNeutralIcon)
import noopAll from "noop" /* 19 */;
import BaseIconImage from "BaseIconImage" /* 4196 */;
import registerAsset from "registerAsset" /* 8031 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export const XNeutralIcon = function XNeutralIcon(color) {
  let str = color.color;
  if (str === undefined) {
    str = "#4E5058";
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: str, style: color.style });
};
