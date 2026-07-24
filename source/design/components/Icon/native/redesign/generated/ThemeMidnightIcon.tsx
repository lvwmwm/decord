// Module ID: 14208
// Function ID: 109268
// Name: ThemeMidnightIcon
// Dependencies: [31, 33, 689, 3833, 14209, 2]
// Exports: ThemeMidnightIcon

// Module 14208 (ThemeMidnightIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ThemeMidnightIcon.tsx");

export const ThemeMidnightIcon = function ThemeMidnightIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(14209) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(14209) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
