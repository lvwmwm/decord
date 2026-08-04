// Module ID: 9927
// Function ID: 9928
// Name: PollsIcon
// Dependencies: [19, 21, 712, 3988, 9928, 2]
// Exports: PollsIcon

// Module 9927 (PollsIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/PollsIcon.tsx");

export const PollsIcon = function PollsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(9928) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3988) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
