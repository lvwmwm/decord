// Module ID: 14231
// Function ID: 109319
// Name: ActivityCardsItem
// Dependencies: [31, 33, 7527, 689, 14232, 2]
// Exports: default

// Module 14231 (ActivityCardsItem)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("defaultMVCPConfig").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  let obj = {};
  obj = { paddingVertical: importDefault(689).space.PX_16, paddingHorizontal: importDefault(689).space.PX_16 };
  obj.contentContainerStyle = obj;
  obj.data = animatedStyles.cards;
  obj.renderItem = function renderItem(item) {
    const merged = Object.assign(item.item);
    return outer1_3(outer1_1(outer1_2[4]), { animatedStyles });
  };
  obj.keyExtractor = function keyExtractor(title) {
    return title.title;
  };
  obj.showsHorizontalScrollIndicator = false;
  obj.horizontal = true;
  return jsx(animatedStyles(7527).FlashList, { paddingVertical: importDefault(689).space.PX_16, paddingHorizontal: importDefault(689).space.PX_16 });
};
