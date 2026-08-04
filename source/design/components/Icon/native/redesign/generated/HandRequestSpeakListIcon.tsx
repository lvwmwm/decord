// Module ID: 10700
// Function ID: 10701
// Name: HandRequestSpeakListIcon
// Dependencies: [19, 21, 712, 3988, 10701, 2]
// Exports: HandRequestSpeakListIcon

// Module 10700 (HandRequestSpeakListIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/HandRequestSpeakListIcon.tsx");

export const HandRequestSpeakListIcon = function HandRequestSpeakListIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(10701) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3988) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
