// Module ID: 11273
// Function ID: 11274
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6455, 21, 9694, 9888, 5501, 11274, 9369, 11276, 11278, 6921, 11280, 11282, 8856, 10146, 8832, 2]

// Module 11273 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5501 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6455 */;
import GameControllerIcon from "GameControllerIcon" /* 6921 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8832 */;
import HeartIcon from "HeartIcon" /* 8856 */;
import ReactionIcon from "ReactionIcon" /* 9369 */;
import TrophyIcon from "TrophyIcon" /* 9694 */;
import StarIcon from "StarIcon" /* 9888 */;
import FlagIcon from "FlagIcon" /* 10146 */;
import LightbulbIcon from "LightbulbIcon" /* 11274 */;
import NatureIcon from "NatureIcon" /* 11276 */;
import FoodIcon from "FoodIcon" /* 11278 */;
import BicycleIcon from "BicycleIcon" /* 11280 */;
import ObjectIcon from "ObjectIcon" /* 11282 */;
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
