// Module ID: 11335
// Function ID: 11336
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6576, 21, 9814, 10011, 5622, 11336, 9489, 11338, 11340, 7040, 11342, 11344, 8976, 10269, 8952, 2]

// Module 11335 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5622 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6576 */;
import GameControllerIcon from "GameControllerIcon" /* 7040 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8952 */;
import HeartIcon from "HeartIcon" /* 8976 */;
import ReactionIcon from "ReactionIcon" /* 9489 */;
import TrophyIcon from "TrophyIcon" /* 9814 */;
import StarIcon from "StarIcon" /* 10011 */;
import FlagIcon from "FlagIcon" /* 10269 */;
import LightbulbIcon from "LightbulbIcon" /* 11336 */;
import NatureIcon from "NatureIcon" /* 11338 */;
import FoodIcon from "FoodIcon" /* 11340 */;
import BicycleIcon from "BicycleIcon" /* 11342 */;
import ObjectIcon from "ObjectIcon" /* 11344 */;
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
