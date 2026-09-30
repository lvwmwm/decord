// Module ID: 10011
// Function ID: 10012
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5972, 21, 8369, 9899, 4825, 8415, 10012, 10014, 8734, 10016, 10018, 8432, 8320, 8318, 2]

// Module 10011 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4825 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8318 */;
import FlagIcon from "FlagIcon" /* 8320 */;
import TrophyIcon from "TrophyIcon" /* 8369 */;
import ReactionIcon from "ReactionIcon" /* 8415 */;
import HeartIcon from "HeartIcon" /* 8432 */;
import GameControllerIcon from "GameControllerIcon" /* 8734 */;
import StarIcon from "StarIcon" /* 9899 */;
import NatureIcon from "NatureIcon" /* 10012 */;
import FoodIcon from "FoodIcon" /* 10014 */;
import BicycleIcon from "BicycleIcon" /* 10016 */;
import ObjectIcon from "ObjectIcon" /* 10018 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5972).EmojiCategories;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default noop.memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(TrophyIcon.TrophyIcon, {});
  } else if (tmp.FAVORITES === id) {
    return jsx(StarIcon.StarIcon, {});
  } else if (tmp.RECENT === id) {
    return jsx(ClockIcon.ClockIcon, {});
  } else if (tmp.PEOPLE === id) {
    return jsx(ReactionIcon.ReactionIcon, {});
  } else if (tmp.NATURE === id) {
    return jsx(NatureIcon.NatureIcon, {});
  } else if (tmp.FOOD === id) {
    return jsx(FoodIcon.FoodIcon, {});
  } else if (tmp.ACTIVITY === id) {
    return jsx(GameControllerIcon.GameControllerIcon, {});
  } else if (tmp.TRAVEL === id) {
    return jsx(BicycleIcon.BicycleIcon, {});
  } else if (tmp.OBJECTS === id) {
    return jsx(ObjectIcon.ObjectIcon, {});
  } else if (tmp.SYMBOLS === id) {
    return jsx(HeartIcon.HeartIcon, {});
  } else if (tmp.FLAGS === id) {
    return jsx(FlagIcon.FlagIcon, {});
  } else {
    if (tmp.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(NitroWheelIcon.NitroWheelIcon, {});
  }
});
