// Module ID: 10003
// Function ID: 10004
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5961, 21, 8360, 9891, 4804, 8407, 10004, 10006, 8726, 10008, 10010, 8424, 8311, 8309, 2]

// Module 10003 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4804 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8309 */;
import FlagIcon from "FlagIcon" /* 8311 */;
import TrophyIcon from "TrophyIcon" /* 8360 */;
import ReactionIcon from "ReactionIcon" /* 8407 */;
import HeartIcon from "HeartIcon" /* 8424 */;
import GameControllerIcon from "GameControllerIcon" /* 8726 */;
import StarIcon from "StarIcon" /* 9891 */;
import NatureIcon from "NatureIcon" /* 10004 */;
import FoodIcon from "FoodIcon" /* 10006 */;
import BicycleIcon from "BicycleIcon" /* 10008 */;
import ObjectIcon from "ObjectIcon" /* 10010 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5961).EmojiCategories;
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
