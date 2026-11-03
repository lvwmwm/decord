// Module ID: 17428
// Function ID: 17429
// Name: SettingsAppearanceActivityCardsItem
// Dependencies: [19, 21, 7414, 575, 17429, 2]
// Exports: default

// Module 17428 (SettingsAppearanceActivityCardsItem)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SettingsAppearanceActivityCardItemDefault from "SettingsAppearanceActivityCardItem" /* 17429 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  const cards = animatedStyles.cards;
  const obj2 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
  const FlashList = animatedStyles(7414).FlashList;
  return <FlashList contentContainerStyle={obj2} data={cards} renderItem={function renderItem(item) {
    item = item.item;
    SettingsAppearanceActivityCardItemDefault;
    const merged = Object.assign(item);
    return <tmp animatedStyles={animatedStyles} />;
  }} keyExtractor={function keyExtractor(title) {
    return title.title;
  }} showsHorizontalScrollIndicator={false} horizontal />;
};
