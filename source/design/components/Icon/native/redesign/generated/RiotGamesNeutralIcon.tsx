// Module ID: 8479
// Function ID: 67447
// Name: RiotGamesNeutralIcon
// Dependencies: [31, 33, 689, 3868, 8480, 2]
// Exports: RiotGamesNeutralIcon

// Module 8479 (RiotGamesNeutralIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/RiotGamesNeutralIcon.tsx");

export const RiotGamesNeutralIcon = function RiotGamesNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(8480) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(8480) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
