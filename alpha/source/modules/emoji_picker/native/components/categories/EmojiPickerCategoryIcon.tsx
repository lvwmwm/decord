// Module ID: 10608
// Function ID: 10609
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5680, 21, 8991, 10493, 4718, 9037, 10609, 10611, 9348, 10613, 10615, 9054, 8942, 8940, 2]

// Module 10608 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4718 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8940 */;
import FlagIcon from "FlagIcon" /* 8942 */;
import TrophyIcon from "TrophyIcon" /* 8991 */;
import ReactionIcon from "ReactionIcon" /* 9037 */;
import HeartIcon from "HeartIcon" /* 9054 */;
import GameControllerIcon from "GameControllerIcon" /* 9348 */;
import StarIcon from "StarIcon" /* 10493 */;
import NatureIcon from "NatureIcon" /* 10609 */;
import FoodIcon from "FoodIcon" /* 10611 */;
import BicycleIcon from "BicycleIcon" /* 10613 */;
import ObjectIcon from "ObjectIcon" /* 10615 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5680).EmojiCategories;
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
