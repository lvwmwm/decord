// Module ID: 8987
// Function ID: 70782
// Name: SettingsIcon
// Dependencies: [31, 33, 689, 3868, 8988, 2]
// Exports: SettingsIcon

// Module 8987 (SettingsIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/SettingsIcon.tsx");

export const SettingsIcon = function SettingsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(8988) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(8988) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
