// Module ID: 11616
// Function ID: 90235
// Name: BoostTier1Icon
// Dependencies: [31, 33, 689, 3833, 11617, 2]
// Exports: BoostTier1Icon

// Module 11616 (BoostTier1Icon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/BoostTier1Icon.tsx");

export const BoostTier1Icon = function BoostTier1Icon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(11617) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(11617) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
