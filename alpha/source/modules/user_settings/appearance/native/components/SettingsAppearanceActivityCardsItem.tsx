// Module ID: 14813
// Function ID: 14814
// Name: SettingsAppearanceActivityCardsItem
// Dependencies: [19, 21, 8171, 576, 14814, 2]
// Exports: default

// Module 14813 (SettingsAppearanceActivityCardsItem)
import nativeDefault from "native" /* 576 */;
import SettingsAppearanceActivityCardItemDefault from "SettingsAppearanceActivityCardItem" /* 14814 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  const obj = {
    contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
    data: animatedStyles.cards,
    renderItem(item) {
      const merged = Object.assign(item.item);
      return jsx(SettingsAppearanceActivityCardItemDefault, { animatedStyles });
    },
    keyExtractor(title) {
      return title.title;
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true
  };
  return jsx(animatedStyles(8171).FlashList, {
    contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
    data: animatedStyles.cards,
    renderItem(item) {
      const merged = Object.assign(item.item);
      return jsx(SettingsAppearanceActivityCardItemDefault, { animatedStyles });
    },
    keyExtractor(title) {
      return title.title;
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true
  });
};
