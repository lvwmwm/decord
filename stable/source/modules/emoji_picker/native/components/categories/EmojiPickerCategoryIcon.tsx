// Module ID: 10644
// Function ID: 10645
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5712, 21, 9023, 10532, 4750, 9069, 10645, 10647, 9380, 10649, 10651, 9086, 8974, 8972, 2]

// Module 10644 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4750 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8972 */;
import FlagIcon from "FlagIcon" /* 8974 */;
import TrophyIcon from "TrophyIcon" /* 9023 */;
import ReactionIcon from "ReactionIcon" /* 9069 */;
import HeartIcon from "HeartIcon" /* 9086 */;
import GameControllerIcon from "GameControllerIcon" /* 9380 */;
import StarIcon from "StarIcon" /* 10532 */;
import NatureIcon from "NatureIcon" /* 10645 */;
import FoodIcon from "FoodIcon" /* 10647 */;
import BicycleIcon from "BicycleIcon" /* 10649 */;
import ObjectIcon from "ObjectIcon" /* 10651 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5712).EmojiCategories;
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
