// Module ID: 9364
// Function ID: 73101
// Dependencies: [31, 4996, 33, 6592, 9351, 4095, 6519, 9365, 9367, 8867, 9369, 9371, 8603, 9373, 6570, 2]

// Module 9364
import { EmojiCategories } from "EmojiCategoryTypes";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(require(6592) /* TrophyIcon */.TrophyIcon, {});
  } else if (EmojiCategories.FAVORITES === id) {
    return jsx(require(9351) /* StarIcon */.StarIcon, {});
  } else if (EmojiCategories.RECENT === id) {
    return jsx(require(4095) /* ClockIcon */.ClockIcon, {});
  } else if (EmojiCategories.PEOPLE === id) {
    return jsx(require(6519) /* ReactionIcon */.ReactionIcon, {});
  } else if (EmojiCategories.NATURE === id) {
    return jsx(require(9365) /* NatureIcon */.NatureIcon, {});
  } else if (EmojiCategories.FOOD === id) {
    return jsx(require(9367) /* FoodIcon */.FoodIcon, {});
  } else if (EmojiCategories.ACTIVITY === id) {
    return jsx(require(8867) /* GameControllerIcon */.GameControllerIcon, {});
  } else if (EmojiCategories.TRAVEL === id) {
    return jsx(require(9369) /* BicycleIcon */.BicycleIcon, {});
  } else if (EmojiCategories.OBJECTS === id) {
    return jsx(require(9371) /* ObjectIcon */.ObjectIcon, {});
  } else if (EmojiCategories.SYMBOLS === id) {
    return jsx(require(8603) /* HeartIcon */.HeartIcon, {});
  } else if (EmojiCategories.FLAGS === id) {
    return jsx(require(9373) /* FlagIcon */.FlagIcon, {});
  } else {
    if (EmojiCategories.CUSTOM !== id) {
      const PREMIUM_UPSELL = EmojiCategories.PREMIUM_UPSELL;
    }
    return jsx(require(6570) /* NitroWheelIcon */.NitroWheelIcon, {});
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
