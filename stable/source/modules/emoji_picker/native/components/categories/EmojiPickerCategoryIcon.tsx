// Module ID: 10226
// Function ID: 10227
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6887, 21, 9492, 10216, 5896, 10227, 9566, 10229, 10231, 9850, 10233, 10235, 9585, 10237, 9645, 2]

// Module 10226 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5896 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6887 */;
import TrophyIcon from "TrophyIcon" /* 9492 */;
import ReactionIcon from "ReactionIcon" /* 9566 */;
import HeartIcon from "HeartIcon" /* 9585 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9645 */;
import GameControllerIcon from "GameControllerIcon" /* 9850 */;
import StarIcon from "StarIcon" /* 10216 */;
import LightbulbIcon from "LightbulbIcon" /* 10227 */;
import NatureIcon from "NatureIcon" /* 10229 */;
import FoodIcon from "FoodIcon" /* 10231 */;
import BicycleIcon from "BicycleIcon" /* 10233 */;
import ObjectIcon from "ObjectIcon" /* 10235 */;
import FlagIcon from "FlagIcon" /* 10237 */;
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
