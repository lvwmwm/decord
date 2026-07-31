// Module ID: 11688
// Function ID: 11689
// Name: BoostTier1Icon
// Dependencies: [19, 21, 712, 3896, 11689, 2]
// Exports: BoostTier1Icon

// Module 11688 (BoostTier1Icon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/BoostTier1Icon.tsx");

export const BoostTier1Icon = function BoostTier1Icon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(11689) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3896) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
