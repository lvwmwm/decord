// Module ID: 8715
// Function ID: 68847
// Name: HeartIcon
// Dependencies: [31, 33, 689, 3833, 8716, 2]
// Exports: HeartIcon

// Module 8715 (HeartIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/HeartIcon.tsx");

export const HeartIcon = function HeartIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(8716) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(8716) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
