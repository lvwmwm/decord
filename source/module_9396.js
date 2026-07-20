// Module ID: 9396
// Function ID: 73227
// Dependencies: []

// Module 9396
const EmojiCategories = arg1(dependencyMap[1]).EmojiCategories;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(arg1(dependencyMap[3]).TrophyIcon, {});
  } else if (EmojiCategories.FAVORITES === id) {
    return jsx(arg1(dependencyMap[4]).StarIcon, {});
  } else if (EmojiCategories.RECENT === id) {
    return jsx(arg1(dependencyMap[5]).ClockIcon, {});
  } else if (EmojiCategories.PEOPLE === id) {
    return jsx(arg1(dependencyMap[6]).ReactionIcon, {});
  } else if (EmojiCategories.NATURE === id) {
    return jsx(arg1(dependencyMap[7]).NatureIcon, {});
  } else if (EmojiCategories.FOOD === id) {
    return jsx(arg1(dependencyMap[8]).FoodIcon, {});
  } else if (EmojiCategories.ACTIVITY === id) {
    return jsx(arg1(dependencyMap[9]).GameControllerIcon, {});
  } else if (EmojiCategories.TRAVEL === id) {
    return jsx(arg1(dependencyMap[10]).BicycleIcon, {});
  } else if (EmojiCategories.OBJECTS === id) {
    return jsx(arg1(dependencyMap[11]).ObjectIcon, {});
  } else if (EmojiCategories.SYMBOLS === id) {
    return jsx(arg1(dependencyMap[12]).HeartIcon, {});
  } else if (EmojiCategories.FLAGS === id) {
    return jsx(arg1(dependencyMap[13]).FlagIcon, {});
  } else {
    if (EmojiCategories.CUSTOM !== id) {
      const PREMIUM_UPSELL = EmojiCategories.PREMIUM_UPSELL;
    }
    return jsx(arg1(dependencyMap[14]).NitroWheelIcon, {});
  }
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
