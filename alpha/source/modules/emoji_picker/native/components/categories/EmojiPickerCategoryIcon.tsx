// Module ID: 11295
// Function ID: 11296
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6484, 21, 9715, 9909, 5532, 11296, 9391, 11298, 11300, 6951, 11302, 11304, 8882, 10168, 8859, 2]

// Module 11295 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5532 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6484 */;
import GameControllerIcon from "GameControllerIcon" /* 6951 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8859 */;
import HeartIcon from "HeartIcon" /* 8882 */;
import ReactionIcon from "ReactionIcon" /* 9391 */;
import TrophyIcon from "TrophyIcon" /* 9715 */;
import StarIcon from "StarIcon" /* 9909 */;
import FlagIcon from "FlagIcon" /* 10168 */;
import LightbulbIcon from "LightbulbIcon" /* 11296 */;
import NatureIcon from "NatureIcon" /* 11298 */;
import FoodIcon from "FoodIcon" /* 11300 */;
import BicycleIcon from "BicycleIcon" /* 11302 */;
import ObjectIcon from "ObjectIcon" /* 11304 */;
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
