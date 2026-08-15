// Module ID: 13024
// Function ID: 13025
// Name: ChevronLargeDownIcon
// Dependencies: [19, 21, 712, 4096, 13025, 2]
// Exports: ChevronLargeDownIcon

// Module 13024 (ChevronLargeDownIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ChevronLargeDownIcon.tsx");

export const ChevronLargeDownIcon = function ChevronLargeDownIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(13025) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4096) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
