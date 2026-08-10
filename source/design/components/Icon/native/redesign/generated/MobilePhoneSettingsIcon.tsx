// Module ID: 14745
// Function ID: 14746
// Name: MobilePhoneSettingsIcon
// Dependencies: [19, 21, 712, 4004, 14746, 2]
// Exports: MobilePhoneSettingsIcon

// Module 14745 (MobilePhoneSettingsIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/MobilePhoneSettingsIcon.tsx");

export const MobilePhoneSettingsIcon = function MobilePhoneSettingsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(14746) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4004) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
