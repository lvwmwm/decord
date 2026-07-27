// Module ID: 13965
// Function ID: 106793
// Name: FiltersHorizontalIcon
// Dependencies: [31, 33, 689, 3834, 13966, 2]
// Exports: FiltersHorizontalIcon

// Module 13965 (FiltersHorizontalIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/FiltersHorizontalIcon.tsx");

export const FiltersHorizontalIcon = function FiltersHorizontalIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(13966) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(13966) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
