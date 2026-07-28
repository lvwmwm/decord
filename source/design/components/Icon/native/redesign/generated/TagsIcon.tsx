// Module ID: 10347
// Function ID: 79835
// Name: TagsIcon
// Dependencies: [31, 33, 689, 3868, 10348, 2]
// Exports: TagsIcon

// Module 10347 (TagsIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/TagsIcon.tsx");

export const TagsIcon = function TagsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(10348) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(10348) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
