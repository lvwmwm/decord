// Module ID: 9408
// Function ID: 73306
// Dependencies: [31, 4995, 33, 8633, 9395, 4094, 8007, 9409, 9411, 8940, 9413, 9415, 8674, 9417, 7871, 2]

// Module 9408
import { EmojiCategories } from "EmojiCategoryTypes";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(require(8633) /* TrophyIcon */.TrophyIcon, {});
  } else if (EmojiCategories.FAVORITES === id) {
    return jsx(require(9395) /* StarIcon */.StarIcon, {});
  } else if (EmojiCategories.RECENT === id) {
    return jsx(require(4094) /* ClockIcon */.ClockIcon, {});
  } else if (EmojiCategories.PEOPLE === id) {
    return jsx(require(8007) /* ReactionIcon */.ReactionIcon, {});
  } else if (EmojiCategories.NATURE === id) {
    return jsx(require(9409) /* NatureIcon */.NatureIcon, {});
  } else if (EmojiCategories.FOOD === id) {
    return jsx(require(9411) /* FoodIcon */.FoodIcon, {});
  } else if (EmojiCategories.ACTIVITY === id) {
    return jsx(require(8940) /* GameControllerIcon */.GameControllerIcon, {});
  } else if (EmojiCategories.TRAVEL === id) {
    return jsx(require(9413) /* BicycleIcon */.BicycleIcon, {});
  } else if (EmojiCategories.OBJECTS === id) {
    return jsx(require(9415) /* ObjectIcon */.ObjectIcon, {});
  } else if (EmojiCategories.SYMBOLS === id) {
    return jsx(require(8674) /* HeartIcon */.HeartIcon, {});
  } else if (EmojiCategories.FLAGS === id) {
    return jsx(require(9417) /* FlagIcon */.FlagIcon, {});
  } else {
    if (EmojiCategories.CUSTOM !== id) {
      const PREMIUM_UPSELL = EmojiCategories.PREMIUM_UPSELL;
    }
    return jsx(require(7871) /* NitroWheelIcon */.NitroWheelIcon, {});
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
