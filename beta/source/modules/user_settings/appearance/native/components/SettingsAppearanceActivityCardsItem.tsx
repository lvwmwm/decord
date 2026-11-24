// Module ID: 16697
// Function ID: 16698
// Name: SettingsAppearanceActivityCardsItem
// Dependencies: [19, 21, 7490, 575, 16698, 2]
// Exports: default

// Module 16697 (SettingsAppearanceActivityCardsItem)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SettingsAppearanceActivityCardItemDefault from "SettingsAppearanceActivityCardItem" /* 16698 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  const cards = animatedStyles.cards;
  const obj2 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
  const FlashList = animatedStyles(7490).FlashList;
  return <FlashList contentContainerStyle={obj2} data={cards} renderItem={function renderItem(item) {
    item = item.item;
    SettingsAppearanceActivityCardItemDefault;
    const merged = Object.assign(item);
    return <tmp animatedStyles={animatedStyles} />;
  }} keyExtractor={function keyExtractor(title) {
    return title.title;
  }} showsHorizontalScrollIndicator={false} horizontal />;
};
