// Module ID: 8611
// Function ID: 68335
// Name: EpicGamesNeutralIcon
// Dependencies: [31, 33, 689, 3833, 8612, 2]
// Exports: EpicGamesNeutralIcon

// Module 8611 (EpicGamesNeutralIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/EpicGamesNeutralIcon.tsx");

export const EpicGamesNeutralIcon = function EpicGamesNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(8612) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(8612) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
