// Module ID: 8802
// Function ID: 8803
// Dependencies: [19, 5219, 21, 7767, 8789, 4308, 7696, 8803, 8805, 8807, 8808, 8810, 8812, 8814, 7745, 2]

// Module 8802
import { EmojiCategories } from "EmojiCategoryTypes";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(require(7767) /* TrophyIcon */.TrophyIcon, {});
  } else if (tmp.FAVORITES === id) {
    return jsx(require(8789) /* StarIcon */.StarIcon, {});
  } else if (tmp.RECENT === id) {
    return jsx(require(4308) /* ClockIcon */.ClockIcon, {});
  } else if (tmp.PEOPLE === id) {
    return jsx(require(7696) /* ReactionIcon */.ReactionIcon, {});
  } else if (tmp.NATURE === id) {
    return jsx(require(8803) /* NatureIcon */.NatureIcon, {});
  } else if (tmp.FOOD === id) {
    return jsx(require(8805) /* FoodIcon */.FoodIcon, {});
  } else if (tmp.ACTIVITY === id) {
    return jsx(require(8807) /* GameControllerIcon */.GameControllerIcon, {});
  } else if (tmp.TRAVEL === id) {
    return jsx(require(8808) /* BicycleIcon */.BicycleIcon, {});
  } else if (tmp.OBJECTS === id) {
    return jsx(require(8810) /* ObjectIcon */.ObjectIcon, {});
  } else if (tmp.SYMBOLS === id) {
    return jsx(require(8812) /* HeartIcon */.HeartIcon, {});
  } else if (tmp.FLAGS === id) {
    return jsx(require(8814) /* FlagIcon */.FlagIcon, {});
  } else {
    if (tmp.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(require(7745) /* NitroWheelIcon */.NitroWheelIcon, {});
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
