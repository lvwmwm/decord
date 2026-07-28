// Module ID: 14498
// Function ID: 110667
// Name: WrenchIcon
// Dependencies: [31, 33, 689, 3868, 14499, 2]
// Exports: WrenchIcon

// Module 14498 (WrenchIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/WrenchIcon.tsx");

export const WrenchIcon = function WrenchIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(14499) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(14499) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
