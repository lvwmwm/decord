// Module ID: 4658
// Function ID: 40366
// Name: VoiceNormalIcon
// Dependencies: [31, 33, 689, 3833, 4602, 2]
// Exports: VoiceNormalIcon

// Module 4658 (VoiceNormalIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx");

export const VoiceNormalIcon = function VoiceNormalIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(4602) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(4602) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
