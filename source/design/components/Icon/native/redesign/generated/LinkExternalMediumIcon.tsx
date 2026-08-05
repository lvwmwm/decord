// Module ID: 12536
// Function ID: 12537
// Name: LinkExternalMediumIcon
// Dependencies: [19, 21, 712, 3958, 12537, 2]
// Exports: LinkExternalMediumIcon

// Module 12536 (LinkExternalMediumIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/LinkExternalMediumIcon.tsx");

export const LinkExternalMediumIcon = function LinkExternalMediumIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(12537) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3958) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
