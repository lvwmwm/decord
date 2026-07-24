// Module ID: 4639
// Function ID: 40328
// Name: ImageWarningIcon
// Dependencies: [31, 33, 689, 3833, 4617, 2]
// Exports: ImageWarningIcon

// Module 4639 (ImageWarningIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx");

export const ImageWarningIcon = function ImageWarningIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(4617) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(4617) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
