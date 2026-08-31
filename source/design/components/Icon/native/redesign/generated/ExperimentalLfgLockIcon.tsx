// Module ID: 5001
// Function ID: 5002
// Name: ExperimentalLfgLockIcon
// Dependencies: [19, 21, 712, 4166, 4982, 2]
// Exports: ExperimentalLfgLockIcon

// Module 5001 (ExperimentalLfgLockIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4166 */;
import registerAsset from "registerAsset" /* 4982 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/ExperimentalLfgLockIcon.tsx");

export const ExperimentalLfgLockIcon = function ExperimentalLfgLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
