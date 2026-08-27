// Module ID: 14936
// Function ID: 14937
// Name: EmojiSmilingFaceWithHornsIcon
// Dependencies: [19, 21, 712, 4164, 14937, 2]
// Exports: EmojiSmilingFaceWithHornsIcon

// Module 14936 (EmojiSmilingFaceWithHornsIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4164 */;
import registerAsset from "registerAsset" /* 14937 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiSmilingFaceWithHornsIcon.tsx");

export const EmojiSmilingFaceWithHornsIcon = function EmojiSmilingFaceWithHornsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
