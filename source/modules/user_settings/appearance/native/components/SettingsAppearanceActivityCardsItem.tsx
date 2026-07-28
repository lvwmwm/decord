// Module ID: 14287
// Function ID: 109624
// Name: ActivityCardsItem
// Dependencies: [31, 33, 6655, 689, 14288, 2]
// Exports: default

// Module 14287 (ActivityCardsItem)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useModalDismissGuardRefreshControl").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

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
  return jsx(animatedStyles(6655).FlashList, { paddingVertical: importDefault(689).space.PX_16, paddingHorizontal: importDefault(689).space.PX_16 });
};
