// Module ID: 9444
// Function ID: 73515
// Dependencies: [31, 4995, 33, 7508, 9431, 4094, 7437, 9445, 9447, 8979, 9449, 9451, 8715, 9453, 7486, 2]

// Module 9444
import { EmojiCategories } from "EmojiCategoryTypes";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(require(7508) /* TrophyIcon */.TrophyIcon, {});
  } else if (EmojiCategories.FAVORITES === id) {
    return jsx(require(9431) /* StarIcon */.StarIcon, {});
  } else if (EmojiCategories.RECENT === id) {
    return jsx(require(4094) /* ClockIcon */.ClockIcon, {});
  } else if (EmojiCategories.PEOPLE === id) {
    return jsx(require(7437) /* ReactionIcon */.ReactionIcon, {});
  } else if (EmojiCategories.NATURE === id) {
    return jsx(require(9445) /* NatureIcon */.NatureIcon, {});
  } else if (EmojiCategories.FOOD === id) {
    return jsx(require(9447) /* FoodIcon */.FoodIcon, {});
  } else if (EmojiCategories.ACTIVITY === id) {
    return jsx(require(8979) /* GameControllerIcon */.GameControllerIcon, {});
  } else if (EmojiCategories.TRAVEL === id) {
    return jsx(require(9449) /* BicycleIcon */.BicycleIcon, {});
  } else if (EmojiCategories.OBJECTS === id) {
    return jsx(require(9451) /* ObjectIcon */.ObjectIcon, {});
  } else if (EmojiCategories.SYMBOLS === id) {
    return jsx(require(8715) /* HeartIcon */.HeartIcon, {});
  } else if (EmojiCategories.FLAGS === id) {
    return jsx(require(9453) /* FlagIcon */.FlagIcon, {});
  } else {
    if (EmojiCategories.CUSTOM !== id) {
      const PREMIUM_UPSELL = EmojiCategories.PREMIUM_UPSELL;
    }
    return jsx(require(7486) /* NitroWheelIcon */.NitroWheelIcon, {});
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
