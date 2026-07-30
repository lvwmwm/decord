// Module ID: 9428
// Function ID: 9429
// Dependencies: [19, 5052, 21, 6646, 9415, 4153, 6573, 9429, 9431, 8931, 9433, 9435, 8668, 9437, 6624, 2]

// Module 9428
import { EmojiCategories } from "EmojiCategoryTypes";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(require(6646) /* TrophyIcon */.TrophyIcon, {});
  } else if (tmp.FAVORITES === id) {
    return jsx(require(9415) /* StarIcon */.StarIcon, {});
  } else if (tmp.RECENT === id) {
    return jsx(require(4153) /* ClockIcon */.ClockIcon, {});
  } else if (tmp.PEOPLE === id) {
    return jsx(require(6573) /* ReactionIcon */.ReactionIcon, {});
  } else if (tmp.NATURE === id) {
    return jsx(require(9429) /* NatureIcon */.NatureIcon, {});
  } else if (tmp.FOOD === id) {
    return jsx(require(9431) /* FoodIcon */.FoodIcon, {});
  } else if (tmp.ACTIVITY === id) {
    return jsx(require(8931) /* GameControllerIcon */.GameControllerIcon, {});
  } else if (tmp.TRAVEL === id) {
    return jsx(require(9433) /* BicycleIcon */.BicycleIcon, {});
  } else if (tmp.OBJECTS === id) {
    return jsx(require(9435) /* ObjectIcon */.ObjectIcon, {});
  } else if (tmp.SYMBOLS === id) {
    return jsx(require(8668) /* HeartIcon */.HeartIcon, {});
  } else if (tmp.FLAGS === id) {
    return jsx(require(9437) /* FlagIcon */.FlagIcon, {});
  } else {
    if (tmp.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(require(6624) /* NitroWheelIcon */.NitroWheelIcon, {});
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
