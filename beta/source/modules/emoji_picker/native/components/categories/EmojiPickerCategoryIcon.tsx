// Module ID: 10528
// Function ID: 10529
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5682, 21, 558, 568, 8989, 10515, 4720, 9035, 10529, 10531, 9346, 10533, 10535, 9052, 8940, 8938, 2]

// Module 10528 (EmojiPickerCategoryIcon)
import c from "c" /* 568 */;
import ClockIcon from "ClockIcon" /* 4720 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8938 */;
import FlagIcon from "FlagIcon" /* 8940 */;
import TrophyIcon from "TrophyIcon" /* 8989 */;
import ReactionIcon from "ReactionIcon" /* 9035 */;
import HeartIcon from "HeartIcon" /* 9052 */;
import GameControllerIcon from "GameControllerIcon" /* 9346 */;
import StarIcon from "StarIcon" /* 10515 */;
import NatureIcon from "NatureIcon" /* 10529 */;
import FoodIcon from "FoodIcon" /* 10531 */;
import BicycleIcon from "BicycleIcon" /* 10533 */;
import ObjectIcon from "ObjectIcon" /* 10535 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5682).EmojiCategories;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const cResult = c.c(12);
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    const _Symbol12 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp52 = jsx(tmp(8989).TrophyIcon, {});
      cResult[0] = tmp52;
      let first = tmp52;
    } else {
      first = cResult[0];
    }
    return first;
  } else if (tmp4.FAVORITES === id) {
    const _Symbol11 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp48 = jsx(tmp(10515).StarIcon, {});
      cResult[1] = tmp48;
      let tmp46 = tmp48;
    } else {
      tmp46 = cResult[1];
    }
    return tmp46;
  } else if (tmp4.RECENT === id) {
    const _Symbol10 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp44 = jsx(tmp(4720).ClockIcon, {});
      cResult[2] = tmp44;
      let tmp42 = tmp44;
    } else {
      tmp42 = cResult[2];
    }
    return tmp42;
  } else if (tmp4.PEOPLE === id) {
    const _Symbol9 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp40 = jsx(tmp(9035).ReactionIcon, {});
      cResult[3] = tmp40;
      let tmp38 = tmp40;
    } else {
      tmp38 = cResult[3];
    }
    return tmp38;
  } else if (tmp4.NATURE === id) {
    const _Symbol8 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp36 = jsx(tmp(10529).NatureIcon, {});
      cResult[4] = tmp36;
      let tmp34 = tmp36;
    } else {
      tmp34 = cResult[4];
    }
    return tmp34;
  } else if (tmp4.FOOD === id) {
    const _Symbol7 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp32 = jsx(tmp(10531).FoodIcon, {});
      cResult[5] = tmp32;
      let tmp30 = tmp32;
    } else {
      tmp30 = cResult[5];
    }
    return tmp30;
  } else if (tmp4.ACTIVITY === id) {
    const _Symbol6 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp28 = jsx(tmp(9346).GameControllerIcon, {});
      cResult[6] = tmp28;
      let tmp26 = tmp28;
    } else {
      tmp26 = cResult[6];
    }
    return tmp26;
  } else if (tmp4.TRAVEL === id) {
    const _Symbol5 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp24 = jsx(tmp(10533).BicycleIcon, {});
      cResult[7] = tmp24;
      let tmp22 = tmp24;
    } else {
      tmp22 = cResult[7];
    }
    return tmp22;
  } else if (tmp4.OBJECTS === id) {
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = jsx(tmp(10535).ObjectIcon, {});
      cResult[8] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[8];
    }
    return tmp18;
  } else if (tmp4.SYMBOLS === id) {
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp16 = jsx(tmp(9052).HeartIcon, {});
      cResult[9] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[9];
    }
    return tmp14;
  } else if (tmp4.FLAGS === id) {
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp12 = jsx(tmp(8940).FlagIcon, {});
      cResult[10] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[10];
    }
    return tmp10;
  } else {
    if (tmp4.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp4.PREMIUM_UPSELL;
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp8 = jsx(tmp(8938).NitroWheelIcon, {});
      cResult[11] = tmp8;
      let tmp6 = tmp8;
    } else {
      tmp6 = cResult[11];
    }
    return tmp6;
  }
}) : ((id) => {
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
}));
