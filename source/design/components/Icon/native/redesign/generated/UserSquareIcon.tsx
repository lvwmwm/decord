// Module ID: 6594
// Function ID: 58455
// Name: UserSquareIcon
// Dependencies: [31, 33, 689, 3868, 6595, 2]
// Exports: UserSquareIcon

// Module 6594 (UserSquareIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/UserSquareIcon.tsx");

export const UserSquareIcon = function UserSquareIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(6595) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(6595) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
