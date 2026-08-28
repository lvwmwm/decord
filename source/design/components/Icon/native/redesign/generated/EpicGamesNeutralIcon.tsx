// Module ID: 8763
// Function ID: 8764
// Name: EpicGamesNeutralIcon
// Dependencies: [19, 21, 712, 4165, 8764, 2]
// Exports: EpicGamesNeutralIcon

// Module 8763 (EpicGamesNeutralIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4165 */;
import registerAsset from "registerAsset" /* 8764 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/EpicGamesNeutralIcon.tsx");

export const EpicGamesNeutralIcon = function EpicGamesNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
