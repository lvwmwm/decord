// Module ID: 12875
// Function ID: 12876
// Name: LinkExternalMediumIcon
// Dependencies: [19, 21, 712, 4099, 12876, 2]
// Exports: LinkExternalMediumIcon

// Module 12875 (LinkExternalMediumIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4099 */;
import registerAsset from "registerAsset" /* 12876 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/LinkExternalMediumIcon.tsx");

export const LinkExternalMediumIcon = function LinkExternalMediumIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
