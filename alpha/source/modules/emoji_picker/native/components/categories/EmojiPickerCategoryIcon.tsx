// Module ID: 10251
// Function ID: 10252
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6934, 21, 9524, 10241, 5874, 10252, 9599, 10254, 10256, 9877, 10258, 10260, 9615, 10262, 9675, 2]

// Module 10251 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5874 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6934 */;
import TrophyIcon from "TrophyIcon" /* 9524 */;
import ReactionIcon from "ReactionIcon" /* 9599 */;
import HeartIcon from "HeartIcon" /* 9615 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9675 */;
import GameControllerIcon from "GameControllerIcon" /* 9877 */;
import StarIcon from "StarIcon" /* 10241 */;
import LightbulbIcon from "LightbulbIcon" /* 10252 */;
import NatureIcon from "NatureIcon" /* 10254 */;
import FoodIcon from "FoodIcon" /* 10256 */;
import BicycleIcon from "BicycleIcon" /* 10258 */;
import ObjectIcon from "ObjectIcon" /* 10260 */;
import FlagIcon from "FlagIcon" /* 10262 */;
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
