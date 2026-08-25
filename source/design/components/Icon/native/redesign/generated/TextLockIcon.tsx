// Module ID: 4909
// Function ID: 4910
// Name: TextLockIcon
// Dependencies: [19, 21, 712, 4100, 4891, 2]
// Exports: TextLockIcon

// Module 4909 (TextLockIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4100 */;
import registerAsset from "registerAsset" /* 4891 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/TextLockIcon.tsx");

export const TextLockIcon = function TextLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
