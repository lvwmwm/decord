// Module ID: 6561
// Function ID: 58369
// Name: BoostGemIcon
// Dependencies: [31, 33, 689, 3834, 6562, 2]
// Exports: BoostGemIcon

// Module 6561 (BoostGemIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/BoostGemIcon.tsx");

export const BoostGemIcon = function BoostGemIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(6562) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(6562) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
