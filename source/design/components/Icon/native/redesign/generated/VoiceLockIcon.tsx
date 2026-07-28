// Module ID: 4690
// Function ID: 40488
// Name: VoiceLockIcon
// Dependencies: [31, 33, 689, 3868, 4639, 2]
// Exports: VoiceLockIcon

// Module 4690 (VoiceLockIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/VoiceLockIcon.tsx");

export const VoiceLockIcon = function VoiceLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(4639) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(4639) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
