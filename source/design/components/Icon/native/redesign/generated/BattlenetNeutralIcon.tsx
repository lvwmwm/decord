// Module ID: 9343
// Function ID: 9344
// Name: BattlenetNeutralIcon
// Dependencies: [19, 21, 712, 4064, 9344, 2]
// Exports: BattlenetNeutralIcon

// Module 9343 (BattlenetNeutralIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/BattlenetNeutralIcon.tsx");

export const BattlenetNeutralIcon = function BattlenetNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(9344) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4064) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
