// Module ID: 14108
// Function ID: 107845
// Name: WreathIcon
// Dependencies: [31, 33, 689, 3868, 14109, 2]
// Exports: default

// Module 14108 (WreathIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/native/QuestDock/WreathIcon.tsx");

export default function WreathIcon(color) {
  let INTERACTIVE_TEXT_DEFAULT = color.color;
  if (INTERACTIVE_TEXT_DEFAULT === undefined) {
    INTERACTIVE_TEXT_DEFAULT = importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(14109) /* registerAsset */, color: INTERACTIVE_TEXT_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(14109) /* registerAsset */, color: INTERACTIVE_TEXT_DEFAULT, style: color.style });
};
