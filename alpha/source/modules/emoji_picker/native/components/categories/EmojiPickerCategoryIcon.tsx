// Module ID: 11317
// Function ID: 11318
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6972, 21, 10324, 10183, 6042, 11318, 10409, 11320, 11322, 7438, 11324, 11326, 9458, 11328, 9436, 2]

// Module 11317 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 6042 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6972 */;
import GameControllerIcon from "GameControllerIcon" /* 7438 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9436 */;
import HeartIcon from "HeartIcon" /* 9458 */;
import StarIcon from "StarIcon" /* 10183 */;
import TrophyIcon from "TrophyIcon" /* 10324 */;
import ReactionIcon from "ReactionIcon" /* 10409 */;
import LightbulbIcon from "LightbulbIcon" /* 11318 */;
import NatureIcon from "NatureIcon" /* 11320 */;
import FoodIcon from "FoodIcon" /* 11322 */;
import BicycleIcon from "BicycleIcon" /* 11324 */;
import ObjectIcon from "ObjectIcon" /* 11326 */;
import FlagIcon from "FlagIcon" /* 11328 */;
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
