// Module ID: 12013
// Function ID: 12014
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6980, 21, 10434, 10628, 6036, 12014, 10110, 12016, 12018, 7448, 12020, 12022, 9468, 10828, 9446, 2]

// Module 12013 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 6036 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6980 */;
import GameControllerIcon from "GameControllerIcon" /* 7448 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9446 */;
import HeartIcon from "HeartIcon" /* 9468 */;
import ReactionIcon from "ReactionIcon" /* 10110 */;
import TrophyIcon from "TrophyIcon" /* 10434 */;
import StarIcon from "StarIcon" /* 10628 */;
import FlagIcon from "FlagIcon" /* 10828 */;
import LightbulbIcon from "LightbulbIcon" /* 12014 */;
import NatureIcon from "NatureIcon" /* 12016 */;
import FoodIcon from "FoodIcon" /* 12018 */;
import BicycleIcon from "BicycleIcon" /* 12020 */;
import ObjectIcon from "ObjectIcon" /* 12022 */;
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
