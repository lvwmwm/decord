// Module ID: 10073
// Function ID: 10074
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6799, 21, 9378, 10063, 5740, 10074, 9452, 10076, 10078, 9727, 10080, 10082, 9468, 10084, 9528, 2]

// Module 10073 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5740 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6799 */;
import TrophyIcon from "TrophyIcon" /* 9378 */;
import ReactionIcon from "ReactionIcon" /* 9452 */;
import HeartIcon from "HeartIcon" /* 9468 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9528 */;
import GameControllerIcon from "GameControllerIcon" /* 9727 */;
import StarIcon from "StarIcon" /* 10063 */;
import LightbulbIcon from "LightbulbIcon" /* 10074 */;
import NatureIcon from "NatureIcon" /* 10076 */;
import FoodIcon from "FoodIcon" /* 10078 */;
import BicycleIcon from "BicycleIcon" /* 10080 */;
import ObjectIcon from "ObjectIcon" /* 10082 */;
import FlagIcon from "FlagIcon" /* 10084 */;
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
