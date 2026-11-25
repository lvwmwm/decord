// Module ID: 9735
// Function ID: 9736
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6855, 21, 8757, 9725, 5721, 9736, 9662, 9738, 9740, 7722, 9742, 9744, 9746, 9748, 9595, 2]

// Module 9735 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5721 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6855 */;
import GameControllerIcon from "GameControllerIcon" /* 7722 */;
import TrophyIcon from "TrophyIcon" /* 8757 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9595 */;
import ReactionIcon from "ReactionIcon" /* 9662 */;
import StarIcon from "StarIcon" /* 9725 */;
import LightbulbIcon from "LightbulbIcon" /* 9736 */;
import NatureIcon from "NatureIcon" /* 9738 */;
import FoodIcon from "FoodIcon" /* 9740 */;
import BicycleIcon from "BicycleIcon" /* 9742 */;
import ObjectIcon from "ObjectIcon" /* 9744 */;
import HeartIcon from "HeartIcon" /* 9746 */;
import FlagIcon from "FlagIcon" /* 9748 */;
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
