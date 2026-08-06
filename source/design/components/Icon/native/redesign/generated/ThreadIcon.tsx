// Module ID: 4783
// Function ID: 4784
// Name: ThreadIcon
// Dependencies: [19, 21, 712, 3987, 4747, 2]
// Exports: ThreadIcon

// Module 4783 (ThreadIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ThreadIcon.tsx");

export const ThreadIcon = function ThreadIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(4747) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3987) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
