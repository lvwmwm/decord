// Module ID: 13587
// Function ID: 104410
// Name: BurgerIcon
// Dependencies: [31, 33, 689, 3833, 13588, 2]
// Exports: BurgerIcon

// Module 13587 (BurgerIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/BurgerIcon.tsx");

export const BurgerIcon = function BurgerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(13588) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(13588) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
