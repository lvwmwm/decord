// Module ID: 10695
// Function ID: 10696
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5768, 21, 9071, 10583, 4791, 9117, 10696, 10698, 9429, 10700, 10702, 9134, 9022, 9020, 2]

// Module 10695 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4791 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9020 */;
import FlagIcon from "FlagIcon" /* 9022 */;
import TrophyIcon from "TrophyIcon" /* 9071 */;
import ReactionIcon from "ReactionIcon" /* 9117 */;
import HeartIcon from "HeartIcon" /* 9134 */;
import GameControllerIcon from "GameControllerIcon" /* 9429 */;
import StarIcon from "StarIcon" /* 10583 */;
import NatureIcon from "NatureIcon" /* 10696 */;
import FoodIcon from "FoodIcon" /* 10698 */;
import BicycleIcon from "BicycleIcon" /* 10700 */;
import ObjectIcon from "ObjectIcon" /* 10702 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5768).EmojiCategories;
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
