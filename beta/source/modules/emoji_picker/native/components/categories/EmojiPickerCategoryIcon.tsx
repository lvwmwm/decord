// Module ID: 9810
// Function ID: 9811
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5775, 21, 8173, 9698, 4795, 8219, 9811, 9813, 8535, 9815, 9817, 8236, 8124, 8122, 2]

// Module 9810 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 4795 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5775 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import FlagIcon from "FlagIcon" /* 8124 */;
import TrophyIcon from "TrophyIcon" /* 8173 */;
import ReactionIcon from "ReactionIcon" /* 8219 */;
import HeartIcon from "HeartIcon" /* 8236 */;
import GameControllerIcon from "GameControllerIcon" /* 8535 */;
import StarIcon from "StarIcon" /* 9698 */;
import NatureIcon from "NatureIcon" /* 9811 */;
import FoodIcon from "FoodIcon" /* 9813 */;
import BicycleIcon from "BicycleIcon" /* 9815 */;
import ObjectIcon from "ObjectIcon" /* 9817 */;
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
