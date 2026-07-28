// Module ID: 4666
// Function ID: 40440
// Name: ThreadIcon
// Dependencies: [31, 33, 689, 3868, 4630, 2]
// Exports: ThreadIcon

// Module 4666 (ThreadIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ThreadIcon.tsx");

export const ThreadIcon = function ThreadIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(4630) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(4630) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
