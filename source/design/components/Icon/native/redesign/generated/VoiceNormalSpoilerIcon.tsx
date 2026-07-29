// Module ID: 4714
// Function ID: 4715
// Name: VoiceNormalSpoilerIcon
// Dependencies: [19, 21, 712, 3892, 4663, 2]
// Exports: VoiceNormalSpoilerIcon

// Module 4714 (VoiceNormalSpoilerIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/VoiceNormalSpoilerIcon.tsx");

export const VoiceNormalSpoilerIcon = function VoiceNormalSpoilerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(4663) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3892) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
