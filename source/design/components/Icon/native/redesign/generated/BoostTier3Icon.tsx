// Module ID: 12489
// Function ID: 96783
// Name: BoostTier3Icon
// Dependencies: [31, 33, 689, 3834, 12490, 2]
// Exports: BoostTier3Icon

// Module 12489 (BoostTier3Icon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/BoostTier3Icon.tsx");

export const BoostTier3Icon = function BoostTier3Icon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(12490) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(12490) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
