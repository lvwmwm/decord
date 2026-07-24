// Module ID: 9451
// Function ID: 73526
// Name: ObjectIcon
// Dependencies: [31, 33, 689, 3833, 9452, 2]
// Exports: ObjectIcon

// Module 9451 (ObjectIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ObjectIcon.tsx");

export const ObjectIcon = function ObjectIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(9452) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(9452) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
