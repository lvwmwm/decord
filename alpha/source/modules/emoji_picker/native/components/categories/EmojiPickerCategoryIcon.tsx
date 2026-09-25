// Module ID: 9799
// Function ID: 9800
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5770, 21, 8165, 9687, 4791, 8211, 9800, 9802, 8527, 9804, 9806, 8228, 8116, 8114, 2]

// Module 9799 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4791 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8114 */;
import FlagIcon from "FlagIcon" /* 8116 */;
import TrophyIcon from "TrophyIcon" /* 8165 */;
import ReactionIcon from "ReactionIcon" /* 8211 */;
import HeartIcon from "HeartIcon" /* 8228 */;
import GameControllerIcon from "GameControllerIcon" /* 8527 */;
import StarIcon from "StarIcon" /* 9687 */;
import NatureIcon from "NatureIcon" /* 9800 */;
import FoodIcon from "FoodIcon" /* 9802 */;
import BicycleIcon from "BicycleIcon" /* 9804 */;
import ObjectIcon from "ObjectIcon" /* 9806 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5770).EmojiCategories;
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
