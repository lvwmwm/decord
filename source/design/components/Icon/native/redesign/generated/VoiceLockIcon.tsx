// Module ID: 4656
// Function ID: 40373
// Name: VoiceLockIcon
// Dependencies: [31, 33, 689, 3834, 4605, 2]
// Exports: VoiceLockIcon

// Module 4656 (VoiceLockIcon)
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
  obj = { source: require(4605) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(4605) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
