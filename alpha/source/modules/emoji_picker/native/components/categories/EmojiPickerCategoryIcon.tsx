// Module ID: 9777
// Function ID: 9778
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6886, 21, 8799, 9767, 5752, 9778, 9704, 9780, 9782, 7756, 9784, 9786, 9788, 9790, 9637, 2]

// Module 9777 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5752 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6886 */;
import GameControllerIcon from "GameControllerIcon" /* 7756 */;
import TrophyIcon from "TrophyIcon" /* 8799 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9637 */;
import ReactionIcon from "ReactionIcon" /* 9704 */;
import StarIcon from "StarIcon" /* 9767 */;
import LightbulbIcon from "LightbulbIcon" /* 9778 */;
import NatureIcon from "NatureIcon" /* 9780 */;
import FoodIcon from "FoodIcon" /* 9782 */;
import BicycleIcon from "BicycleIcon" /* 9784 */;
import ObjectIcon from "ObjectIcon" /* 9786 */;
import HeartIcon from "HeartIcon" /* 9788 */;
import FlagIcon from "FlagIcon" /* 9790 */;
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
