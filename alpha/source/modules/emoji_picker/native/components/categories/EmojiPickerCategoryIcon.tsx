// Module ID: 9636
// Function ID: 9637
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6760, 21, 8658, 9626, 5626, 9637, 9563, 9639, 9641, 7623, 9643, 9645, 9647, 9649, 9496, 2]

// Module 9636 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5626 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6760 */;
import GameControllerIcon from "GameControllerIcon" /* 7623 */;
import TrophyIcon from "TrophyIcon" /* 8658 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9496 */;
import ReactionIcon from "ReactionIcon" /* 9563 */;
import StarIcon from "StarIcon" /* 9626 */;
import LightbulbIcon from "LightbulbIcon" /* 9637 */;
import NatureIcon from "NatureIcon" /* 9639 */;
import FoodIcon from "FoodIcon" /* 9641 */;
import BicycleIcon from "BicycleIcon" /* 9643 */;
import ObjectIcon from "ObjectIcon" /* 9645 */;
import HeartIcon from "HeartIcon" /* 9647 */;
import FlagIcon from "FlagIcon" /* 9649 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const EmojiCategories = EmojiPickerConstants.EmojiCategories;
const jsx = Fragment.jsx;
const memoResult = react.memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(TrophyIcon.TrophyIcon, {});
  } else if (EmojiCategories.FAVORITES === id) {
    return jsx(StarIcon.StarIcon, {});
  } else if (EmojiCategories.RECENT === id) {
    return jsx(ClockIcon.ClockIcon, {});
  } else if (EmojiCategories.SUGGESTED === id) {
    return jsx(LightbulbIcon.LightbulbIcon, {});
  } else if (EmojiCategories.PEOPLE === id) {
    return jsx(ReactionIcon.ReactionIcon, {});
  } else if (EmojiCategories.NATURE === id) {
    return jsx(NatureIcon.NatureIcon, {});
  } else if (EmojiCategories.FOOD === id) {
    return jsx(FoodIcon.FoodIcon, {});
  } else if (EmojiCategories.ACTIVITY === id) {
    return jsx(GameControllerIcon.GameControllerIcon, {});
  } else if (EmojiCategories.TRAVEL === id) {
    return jsx(BicycleIcon.BicycleIcon, {});
  } else if (EmojiCategories.OBJECTS === id) {
    return jsx(ObjectIcon.ObjectIcon, {});
  } else if (EmojiCategories.SYMBOLS === id) {
    return jsx(HeartIcon.HeartIcon, {});
  } else if (EmojiCategories.FLAGS === id) {
    return jsx(FlagIcon.FlagIcon, {});
  } else {
    if (EmojiCategories.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(NitroWheelIcon.NitroWheelIcon, {});
  }
});
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
