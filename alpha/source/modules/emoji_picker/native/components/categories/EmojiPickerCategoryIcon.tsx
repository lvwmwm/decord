// Module ID: 9778
// Function ID: 9779
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6886, 21, 8800, 9768, 5752, 9779, 9705, 9781, 9783, 7756, 9785, 9787, 9789, 9791, 9638, 2]

// Module 9778 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5752 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6886 */;
import GameControllerIcon from "GameControllerIcon" /* 7756 */;
import TrophyIcon from "TrophyIcon" /* 8800 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9638 */;
import ReactionIcon from "ReactionIcon" /* 9705 */;
import StarIcon from "StarIcon" /* 9768 */;
import LightbulbIcon from "LightbulbIcon" /* 9779 */;
import NatureIcon from "NatureIcon" /* 9781 */;
import FoodIcon from "FoodIcon" /* 9783 */;
import BicycleIcon from "BicycleIcon" /* 9785 */;
import ObjectIcon from "ObjectIcon" /* 9787 */;
import HeartIcon from "HeartIcon" /* 9789 */;
import FlagIcon from "FlagIcon" /* 9791 */;
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
