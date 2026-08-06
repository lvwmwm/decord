// Module ID: 8680
// Function ID: 8681
// Dependencies: [19, 5162, 21, 7647, 8667, 4249, 7576, 8681, 8683, 8685, 8686, 8688, 8690, 8692, 7625, 2]

// Module 8680
import { EmojiCategories } from "EmojiCategoryTypes";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(require(7647) /* TrophyIcon */.TrophyIcon, {});
  } else if (tmp.FAVORITES === id) {
    return jsx(require(8667) /* StarIcon */.StarIcon, {});
  } else if (tmp.RECENT === id) {
    return jsx(require(4249) /* ClockIcon */.ClockIcon, {});
  } else if (tmp.PEOPLE === id) {
    return jsx(require(7576) /* ReactionIcon */.ReactionIcon, {});
  } else if (tmp.NATURE === id) {
    return jsx(require(8681) /* NatureIcon */.NatureIcon, {});
  } else if (tmp.FOOD === id) {
    return jsx(require(8683) /* FoodIcon */.FoodIcon, {});
  } else if (tmp.ACTIVITY === id) {
    return jsx(require(8685) /* GameControllerIcon */.GameControllerIcon, {});
  } else if (tmp.TRAVEL === id) {
    return jsx(require(8686) /* BicycleIcon */.BicycleIcon, {});
  } else if (tmp.OBJECTS === id) {
    return jsx(require(8688) /* ObjectIcon */.ObjectIcon, {});
  } else if (tmp.SYMBOLS === id) {
    return jsx(require(8690) /* HeartIcon */.HeartIcon, {});
  } else if (tmp.FLAGS === id) {
    return jsx(require(8692) /* FlagIcon */.FlagIcon, {});
  } else {
    if (tmp.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(require(7625) /* NitroWheelIcon */.NitroWheelIcon, {});
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
