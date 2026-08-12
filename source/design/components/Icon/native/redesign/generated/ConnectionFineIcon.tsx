// Module ID: 15587
// Function ID: 15588
// Name: ConnectionFineIcon
// Dependencies: [19, 21, 712, 4064, 15588, 2]
// Exports: ConnectionFineIcon

// Module 15587 (ConnectionFineIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx");

export const ConnectionFineIcon = function ConnectionFineIcon(color) {
  let ICON_FEEDBACK_POSITIVE = color.color;
  if (ICON_FEEDBACK_POSITIVE === undefined) {
    ICON_FEEDBACK_POSITIVE = importDefault(712).colors.ICON_FEEDBACK_POSITIVE;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(15588) /* registerAsset */;
  obj[1] = ICON_FEEDBACK_POSITIVE;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4064) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
