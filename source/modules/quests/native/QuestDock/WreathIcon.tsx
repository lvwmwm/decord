// Module ID: 15104
// Function ID: 15105
// Name: WreathIcon
// Dependencies: [19, 21, 576, 4261, 15105, 2]
// Exports: default

// Module 15104 (WreathIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import registerAsset from "registerAsset" /* 15105 */;
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
