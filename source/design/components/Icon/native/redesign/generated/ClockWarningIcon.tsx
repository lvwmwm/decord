// Module ID: 10998
// Function ID: 85590
// Name: ClockWarningIcon
// Dependencies: [31, 33, 689, 3833, 10999, 2]
// Exports: ClockWarningIcon

// Module 10998 (ClockWarningIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ClockWarningIcon.tsx");

export const ClockWarningIcon = function ClockWarningIcon(qXtNtS) {
  let INTERACTIVE_ICON_DEFAULT = qXtNtS.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(qXtNtS, obj);
  obj = { source: require(10999) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: qXtNtS.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(10999) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: qXtNtS.style });
};
