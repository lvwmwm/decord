// Module ID: 10737
// Function ID: 83423
// Name: MicrophoneIcon
// Dependencies: [31, 33, 689, 3834, 10738, 2]
// Exports: MicrophoneIcon

// Module 10737 (MicrophoneIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx");

export const MicrophoneIcon = function MicrophoneIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(10738) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(10738) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
