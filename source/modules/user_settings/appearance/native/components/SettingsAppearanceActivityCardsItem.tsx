// Module ID: 14456
// Function ID: 14457
// Name: ActivityCardsItem
// Dependencies: [19, 21, 7685, 712, 14457, 2]
// Exports: default

// Module 14456 (ActivityCardsItem)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  let obj = { contentContainerStyle: null, data: null, renderItem: null, keyExtractor: null, showsHorizontalScrollIndicator: false, horizontal: true };
  obj = { paddingVertical: null, paddingHorizontal: null };
  obj[0] = importDefault(712).space.PX_16;
  obj[1] = importDefault(712).space.PX_16;
  obj[0] = obj;
  obj[1] = animatedStyles.cards;
  obj[2] = function renderItem(item) {
    const merged = Object.assign(item.item);
    return outer1_3(outer1_1(outer1_2[4]), { animatedStyles });
  };
  obj[3] = function keyExtractor(title) {
    return title.title;
  };
  return jsx(animatedStyles(7685).FlashList, { paddingVertical: null, paddingHorizontal: null });
};
