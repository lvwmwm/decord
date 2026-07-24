// Module ID: 10746
// Function ID: 83616
// Name: VoiceXIcon
// Dependencies: [31, 33, 689, 3833, 10747, 2]
// Exports: VoiceXIcon

// Module 10746 (VoiceXIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/VoiceXIcon.tsx");

export const VoiceXIcon = function VoiceXIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(10747) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(10747) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
