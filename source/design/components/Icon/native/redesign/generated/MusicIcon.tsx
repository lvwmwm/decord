// Module ID: 9114
// Function ID: 71412
// Name: MusicIcon
// Dependencies: [31, 33, 689, 3833, 9115, 2]
// Exports: MusicIcon

// Module 9114 (MusicIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/MusicIcon.tsx");

export const MusicIcon = function MusicIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(9115) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(9115) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
