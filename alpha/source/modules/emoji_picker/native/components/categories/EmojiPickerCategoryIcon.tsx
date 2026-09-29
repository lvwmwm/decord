// Module ID: 9977
// Function ID: 9978
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5942, 21, 8338, 9865, 4795, 8384, 9978, 9980, 8700, 9982, 9984, 8401, 8289, 8287, 2]

// Module 9977 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4795 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8287 */;
import FlagIcon from "FlagIcon" /* 8289 */;
import TrophyIcon from "TrophyIcon" /* 8338 */;
import ReactionIcon from "ReactionIcon" /* 8384 */;
import HeartIcon from "HeartIcon" /* 8401 */;
import GameControllerIcon from "GameControllerIcon" /* 8700 */;
import StarIcon from "StarIcon" /* 9865 */;
import NatureIcon from "NatureIcon" /* 9978 */;
import FoodIcon from "FoodIcon" /* 9980 */;
import BicycleIcon from "BicycleIcon" /* 9982 */;
import ObjectIcon from "ObjectIcon" /* 9984 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5942).EmojiCategories;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default noop.memo(function EmojiPickerCategoryIcon(id) {
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
