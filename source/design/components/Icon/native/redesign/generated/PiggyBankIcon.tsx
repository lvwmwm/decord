// Module ID: 11056
// Function ID: 85970
// Name: PiggyBankIcon
// Dependencies: [31, 33, 689, 3834, 11057, 2]
// Exports: PiggyBankIcon

// Module 11056 (PiggyBankIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/PiggyBankIcon.tsx");

export const PiggyBankIcon = function PiggyBankIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(11057) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(11057) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
