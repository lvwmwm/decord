// Module ID: 10471
// Function ID: 10472
// Name: EmbedIcon
// Dependencies: [19, 21, 712, 4004, 10472, 2]
// Exports: EmbedIcon

// Module 10471 (EmbedIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/EmbedIcon.tsx");

export const EmbedIcon = function EmbedIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(10472) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4004) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
