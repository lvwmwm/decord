// Module ID: 15126
// Function ID: 115195
// Name: ConnectionFineIcon
// Dependencies: [31, 33, 689, 3833, 15127, 2]
// Exports: ConnectionFineIcon

// Module 15126 (ConnectionFineIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx");

export const ConnectionFineIcon = function ConnectionFineIcon(color) {
  let ICON_FEEDBACK_POSITIVE = color.color;
  if (ICON_FEEDBACK_POSITIVE === undefined) {
    ICON_FEEDBACK_POSITIVE = importDefault(689).colors.ICON_FEEDBACK_POSITIVE;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(15127) /* registerAsset */, color: ICON_FEEDBACK_POSITIVE, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(15127) /* registerAsset */, color: ICON_FEEDBACK_POSITIVE, style: color.style });
};
