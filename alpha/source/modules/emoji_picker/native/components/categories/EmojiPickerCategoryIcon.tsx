// Module ID: 10690
// Function ID: 10691
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5766, 21, 9067, 10578, 4789, 9113, 10691, 10693, 9425, 10695, 10697, 9130, 9018, 9016, 2]

// Module 10690 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4789 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9016 */;
import FlagIcon from "FlagIcon" /* 9018 */;
import TrophyIcon from "TrophyIcon" /* 9067 */;
import ReactionIcon from "ReactionIcon" /* 9113 */;
import HeartIcon from "HeartIcon" /* 9130 */;
import GameControllerIcon from "GameControllerIcon" /* 9425 */;
import StarIcon from "StarIcon" /* 10578 */;
import NatureIcon from "NatureIcon" /* 10691 */;
import FoodIcon from "FoodIcon" /* 10693 */;
import BicycleIcon from "BicycleIcon" /* 10695 */;
import ObjectIcon from "ObjectIcon" /* 10697 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5766).EmojiCategories;
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
