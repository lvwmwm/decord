// Module ID: 10259
// Function ID: 10260
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6937, 21, 9531, 10249, 5877, 10260, 9605, 10262, 10264, 9883, 10266, 10268, 9621, 10270, 9681, 2]

// Module 10259 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5877 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6937 */;
import TrophyIcon from "TrophyIcon" /* 9531 */;
import ReactionIcon from "ReactionIcon" /* 9605 */;
import HeartIcon from "HeartIcon" /* 9621 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9681 */;
import GameControllerIcon from "GameControllerIcon" /* 9883 */;
import StarIcon from "StarIcon" /* 10249 */;
import LightbulbIcon from "LightbulbIcon" /* 10260 */;
import NatureIcon from "NatureIcon" /* 10262 */;
import FoodIcon from "FoodIcon" /* 10264 */;
import BicycleIcon from "BicycleIcon" /* 10266 */;
import ObjectIcon from "ObjectIcon" /* 10268 */;
import FlagIcon from "FlagIcon" /* 10270 */;
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
