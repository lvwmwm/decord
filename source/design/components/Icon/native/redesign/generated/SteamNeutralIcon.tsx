// Module ID: 8427
// Function ID: 67287
// Name: SteamNeutralIcon
// Dependencies: [31, 33, 689, 3834, 8428, 2]
// Exports: SteamNeutralIcon

// Module 8427 (SteamNeutralIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/SteamNeutralIcon.tsx");

export const SteamNeutralIcon = function SteamNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(8428) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(8428) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
