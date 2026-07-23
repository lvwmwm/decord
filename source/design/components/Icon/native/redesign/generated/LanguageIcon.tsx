// Module ID: 14253
// Function ID: 109455
// Name: LanguageIcon
// Dependencies: [31, 33, 689, 3833, 14254, 2]
// Exports: LanguageIcon

// Module 14253 (LanguageIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/LanguageIcon.tsx");

export const LanguageIcon = function LanguageIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(14254) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(14254) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
