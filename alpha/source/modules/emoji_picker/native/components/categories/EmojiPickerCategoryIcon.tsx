// Module ID: 10211
// Function ID: 10212
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6879, 21, 9477, 10201, 5895, 10212, 9551, 10214, 10216, 9833, 10218, 10220, 9570, 10222, 9630, 2]

// Module 10211 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5895 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6879 */;
import TrophyIcon from "TrophyIcon" /* 9477 */;
import ReactionIcon from "ReactionIcon" /* 9551 */;
import HeartIcon from "HeartIcon" /* 9570 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9630 */;
import GameControllerIcon from "GameControllerIcon" /* 9833 */;
import StarIcon from "StarIcon" /* 10201 */;
import LightbulbIcon from "LightbulbIcon" /* 10212 */;
import NatureIcon from "NatureIcon" /* 10214 */;
import FoodIcon from "FoodIcon" /* 10216 */;
import BicycleIcon from "BicycleIcon" /* 10218 */;
import ObjectIcon from "ObjectIcon" /* 10220 */;
import FlagIcon from "FlagIcon" /* 10222 */;
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
