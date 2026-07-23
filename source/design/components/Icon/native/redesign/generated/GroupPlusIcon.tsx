// Module ID: 10195
// Function ID: 78767
// Name: GroupPlusIcon
// Dependencies: [31, 33, 689, 3833, 10196, 2]
// Exports: GroupPlusIcon

// Module 10195 (GroupPlusIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx");

export const GroupPlusIcon = function GroupPlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(10196) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(10196) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
