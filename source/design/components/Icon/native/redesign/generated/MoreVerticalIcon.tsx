// Module ID: 12285
// Function ID: 95760
// Name: MoreVerticalIcon
// Dependencies: [31, 33, 689, 3868, 12286, 2]
// Exports: MoreVerticalIcon

// Module 12285 (MoreVerticalIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/MoreVerticalIcon.tsx");

export const MoreVerticalIcon = function MoreVerticalIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(12286) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(12286) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
