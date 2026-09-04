// Module ID: 10278
// Function ID: 10279
// Dependencies: [19, 5423, 21, 8647, 10164, 4444, 8687, 10279, 10281, 9152, 10283, 10285, 8704, 8594, 8592, 2]

// Module 10278
import ClockIcon from "ClockIcon" /* 4444 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8592 */;
import FlagIcon from "FlagIcon" /* 8594 */;
import TrophyIcon from "TrophyIcon" /* 8647 */;
import ReactionIcon from "ReactionIcon" /* 8687 */;
import HeartIcon from "HeartIcon" /* 8704 */;
import GameControllerIcon from "GameControllerIcon" /* 9152 */;
import StarIcon from "StarIcon" /* 10164 */;
import NatureIcon from "NatureIcon" /* 10279 */;
import FoodIcon from "FoodIcon" /* 10281 */;
import BicycleIcon from "BicycleIcon" /* 10283 */;
import ObjectIcon from "ObjectIcon" /* 10285 */;
import { EmojiCategories } from "EmojiCategoryTypes" /* 5423 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(TrophyIcon.TrophyIcon, {});
  } else if (tmp.FAVORITES === id) {
    return jsx(StarIcon.StarIcon, {});
  } else if (tmp.RECENT === id) {
    return jsx(ClockIcon.ClockIcon, {});
  } else if (tmp.PEOPLE === id) {
    return jsx(ReactionIcon.ReactionIcon, {});
  } else if (tmp.NATURE === id) {
    return jsx(NatureIcon.NatureIcon, {});
  } else if (tmp.FOOD === id) {
    return jsx(FoodIcon.FoodIcon, {});
  } else if (tmp.ACTIVITY === id) {
    return jsx(GameControllerIcon.GameControllerIcon, {});
  } else if (tmp.TRAVEL === id) {
    return jsx(BicycleIcon.BicycleIcon, {});
  } else if (tmp.OBJECTS === id) {
    return jsx(ObjectIcon.ObjectIcon, {});
  } else if (tmp.SYMBOLS === id) {
    return jsx(HeartIcon.HeartIcon, {});
  } else if (tmp.FLAGS === id) {
    return jsx(FlagIcon.FlagIcon, {});
  } else {
    if (tmp.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(NitroWheelIcon.NitroWheelIcon, {});
  }
});
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
