// Module ID: 10203
// Function ID: 10204
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6919, 21, 9506, 10193, 5860, 10204, 9580, 10206, 10208, 9859, 10210, 10212, 9596, 10214, 9656, 2]

// Module 10203 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5860 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6919 */;
import TrophyIcon from "TrophyIcon" /* 9506 */;
import ReactionIcon from "ReactionIcon" /* 9580 */;
import HeartIcon from "HeartIcon" /* 9596 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9656 */;
import GameControllerIcon from "GameControllerIcon" /* 9859 */;
import StarIcon from "StarIcon" /* 10193 */;
import LightbulbIcon from "LightbulbIcon" /* 10204 */;
import NatureIcon from "NatureIcon" /* 10206 */;
import FoodIcon from "FoodIcon" /* 10208 */;
import BicycleIcon from "BicycleIcon" /* 10210 */;
import ObjectIcon from "ObjectIcon" /* 10212 */;
import FlagIcon from "FlagIcon" /* 10214 */;
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
