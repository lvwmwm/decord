// Module ID: 13785
// Function ID: 105682
// Name: QrCodeIcon
// Dependencies: [31, 33, 689, 3833, 12169, 2]
// Exports: QrCodeIcon

// Module 13785 (QrCodeIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/QrCodeIcon.tsx");

export const QrCodeIcon = function QrCodeIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(12169) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(12169) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
