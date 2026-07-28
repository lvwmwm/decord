// Module ID: 4686
// Function ID: 40480
// Name: AnnouncementsIcon
// Dependencies: [31, 33, 689, 3868, 4635, 2]
// Exports: AnnouncementsIcon

// Module 4686 (AnnouncementsIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/AnnouncementsIcon.tsx");

export const AnnouncementsIcon = function AnnouncementsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(4635) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(4635) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
