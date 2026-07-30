// Module ID: 9065
// Function ID: 9066
// Name: TvIcon
// Dependencies: [19, 21, 712, 3892, 9066, 2]
// Exports: TvIcon

// Module 9065 (TvIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/TvIcon.tsx");

export const TvIcon = function TvIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(9066) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3892) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
