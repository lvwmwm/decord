// Module ID: 4665
// Function ID: 40438
// Name: ThreadLockIcon
// Dependencies: [31, 33, 689, 3868, 4629, 2]
// Exports: ThreadLockIcon

// Module 4665 (ThreadLockIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ThreadLockIcon.tsx");

export const ThreadLockIcon = function ThreadLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(4629) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(4629) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
