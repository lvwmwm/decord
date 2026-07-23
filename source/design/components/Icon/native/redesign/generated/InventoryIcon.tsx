// Module ID: 13532
// Function ID: 104080
// Name: InventoryIcon
// Dependencies: [31, 33, 689, 3833, 13533, 2]
// Exports: InventoryIcon

// Module 13532 (InventoryIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/InventoryIcon.tsx");

export const InventoryIcon = function InventoryIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(13533) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(13533) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
