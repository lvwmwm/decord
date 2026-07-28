// Module ID: 14948
// Function ID: 113897
// Name: BellZIcon
// Dependencies: [31, 33, 689, 3868, 14949, 2]
// Exports: BellZIcon

// Module 14948 (BellZIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/BellZIcon.tsx");

export const BellZIcon = function BellZIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(14949) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(14949) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
