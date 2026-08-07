// Module ID: 10730
// Function ID: 10731
// Name: MicrophoneArrowRightIcon
// Dependencies: [19, 21, 712, 4004, 10731, 2]
// Exports: MicrophoneArrowRightIcon

// Module 10730 (MicrophoneArrowRightIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/MicrophoneArrowRightIcon.tsx");

export const MicrophoneArrowRightIcon = function MicrophoneArrowRightIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(10731) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4004) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
