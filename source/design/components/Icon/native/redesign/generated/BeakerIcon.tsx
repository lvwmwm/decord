// Module ID: 13623
// Function ID: 104647
// Name: BeakerIcon
// Dependencies: [31, 33, 689, 3868, 13624, 2]
// Exports: BeakerIcon

// Module 13623 (BeakerIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/BeakerIcon.tsx");

export const BeakerIcon = function BeakerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(13624) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(13624) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
