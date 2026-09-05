// Module ID: 16836
// Function ID: 16837
// Name: SlashIcon
// Dependencies: [19, 21, 576, 4261, 16837, 2]
// Exports: SlashIcon

// Module 16836 (SlashIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import registerAsset from "registerAsset" /* 16837 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/SlashIcon.tsx");

export const SlashIcon = function SlashIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
