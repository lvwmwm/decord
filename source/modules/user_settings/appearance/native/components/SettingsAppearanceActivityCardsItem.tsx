// Module ID: 14067
// Function ID: 106840
// Name: ActivityCardsItem
// Dependencies: []
// Exports: default

// Module 14067 (ActivityCardsItem)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default function ActivityCardsItem(animatedStyles) {
  const arg1 = animatedStyles.animatedStyles;
  let obj = {};
  obj = { paddingVertical: importDefault(dependencyMap[3]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
  obj.contentContainerStyle = obj;
  obj.data = animatedStyles.cards;
  obj.renderItem = function renderItem(item) {
    const merged = Object.assign(item.item);
    return callback2(callback(closure_2[4]), { animatedStyles });
  };
  obj.keyExtractor = function keyExtractor(title) {
    return title.title;
  };
  obj.showsHorizontalScrollIndicator = false;
  obj.horizontal = true;
  return jsx(arg1(dependencyMap[2]).FlashList, obj);
};
