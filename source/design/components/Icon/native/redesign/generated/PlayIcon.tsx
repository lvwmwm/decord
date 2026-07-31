// Module ID: 8131
// Function ID: 8132
// Name: PlayIcon
// Dependencies: [19, 21, 712, 3896, 8132, 2]
// Exports: PlayIcon

// Module 8131 (PlayIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/PlayIcon.tsx");

export const PlayIcon = function PlayIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(8132) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3896) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
