// Module ID: 8868
// Function ID: 69960
// Name: HeadphonesDenyIcon
// Dependencies: [31, 33, 689, 3833, 8869, 2]
// Exports: HeadphonesDenyIcon

// Module 8868 (HeadphonesDenyIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/HeadphonesDenyIcon.tsx");

export const HeadphonesDenyIcon = function HeadphonesDenyIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(8869) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(8869) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
