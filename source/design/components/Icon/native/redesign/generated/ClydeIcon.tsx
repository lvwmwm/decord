// Module ID: 9700
// Function ID: 75595
// Name: ClydeIcon
// Dependencies: [31, 33, 689, 3834, 9701, 2]
// Exports: ClydeIcon

// Module 9700 (ClydeIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ClydeIcon.tsx");

export const ClydeIcon = function ClydeIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(9701) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(9701) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
