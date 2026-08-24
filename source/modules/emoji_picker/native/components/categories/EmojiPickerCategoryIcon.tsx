// Module ID: 9462
// Function ID: 9463
// Dependencies: [19, 6768, 21, 8049, 9447, 4342, 7978, 9463, 9465, 9467, 9468, 9470, 9220, 9472, 8027, 2]

// Module 9462
import ClockIcon from "ClockIcon" /* 4342 */;
import ReactionIcon from "ReactionIcon" /* 7978 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8027 */;
import TrophyIcon from "TrophyIcon" /* 8049 */;
import HeartIcon from "HeartIcon" /* 9220 */;
import StarIcon from "StarIcon" /* 9447 */;
import NatureIcon from "NatureIcon" /* 9463 */;
import FoodIcon from "FoodIcon" /* 9465 */;
import GameControllerIcon from "GameControllerIcon" /* 9467 */;
import BicycleIcon from "BicycleIcon" /* 9468 */;
import ObjectIcon from "ObjectIcon" /* 9470 */;
import FlagIcon from "FlagIcon" /* 9472 */;
import { EmojiCategories } from "EmojiCategoryTypes" /* 6768 */;
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
