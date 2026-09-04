// Module ID: 5053
// Function ID: 5054
// Name: AnnouncementsSpoilerIcon
// Dependencies: [19, 21, 709, 4196, 5008, 2]
// Exports: AnnouncementsSpoilerIcon

// Module 5053 (AnnouncementsSpoilerIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import BaseIconImage from "BaseIconImage" /* 4196 */;
import registerAsset from "registerAsset" /* 5008 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/AnnouncementsSpoilerIcon.tsx");

export const AnnouncementsSpoilerIcon = function AnnouncementsSpoilerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
