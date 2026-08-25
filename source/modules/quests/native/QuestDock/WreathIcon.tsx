// Module ID: 14553
// Function ID: 14554
// Name: WreathIcon
// Dependencies: [19, 21, 712, 4100, 14554, 2]
// Exports: default

// Module 14553 (WreathIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4100 */;
import registerAsset from "registerAsset" /* 14554 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/WreathIcon.tsx");

export default function WreathIcon(color) {
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_TEXT_DEFAULT, style: color.style });
};
