// Module ID: 6600
// Function ID: 58463
// Name: ScreenStreamIcon
// Dependencies: [31, 33, 689, 3868, 6601, 2]
// Exports: ScreenStreamIcon

// Module 6600 (ScreenStreamIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ScreenStreamIcon.tsx");

export const ScreenStreamIcon = function ScreenStreamIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(6601) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(6601) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
