// Module ID: 10200
// Function ID: 10201
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6857, 21, 9465, 10190, 5866, 10201, 9539, 10203, 10205, 9823, 10207, 10209, 9558, 10211, 9618, 2]

// Module 10200 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5866 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6857 */;
import TrophyIcon from "TrophyIcon" /* 9465 */;
import ReactionIcon from "ReactionIcon" /* 9539 */;
import HeartIcon from "HeartIcon" /* 9558 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9618 */;
import GameControllerIcon from "GameControllerIcon" /* 9823 */;
import StarIcon from "StarIcon" /* 10190 */;
import LightbulbIcon from "LightbulbIcon" /* 10201 */;
import NatureIcon from "NatureIcon" /* 10203 */;
import FoodIcon from "FoodIcon" /* 10205 */;
import BicycleIcon from "BicycleIcon" /* 10207 */;
import ObjectIcon from "ObjectIcon" /* 10209 */;
import FlagIcon from "FlagIcon" /* 10211 */;
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
