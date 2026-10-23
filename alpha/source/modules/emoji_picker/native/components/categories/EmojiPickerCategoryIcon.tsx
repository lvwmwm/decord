// Module ID: 9959
// Function ID: 9960
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 6726, 21, 558, 576, 9307, 9948, 5689, 9960, 9349, 9962, 9964, 9615, 9966, 9968, 9366, 9970, 9424, 2]

// Module 9959 (EmojiPickerCategoryIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ClockIcon from "ClockIcon" /* 5689 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6726 */;
import TrophyIcon from "TrophyIcon" /* 9307 */;
import ReactionIcon from "ReactionIcon" /* 9349 */;
import HeartIcon from "HeartIcon" /* 9366 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9424 */;
import GameControllerIcon from "GameControllerIcon" /* 9615 */;
import StarIcon from "StarIcon" /* 9948 */;
import LightbulbIcon from "LightbulbIcon" /* 9960 */;
import NatureIcon from "NatureIcon" /* 9962 */;
import FoodIcon from "FoodIcon" /* 9964 */;
import BicycleIcon from "BicycleIcon" /* 9966 */;
import ObjectIcon from "ObjectIcon" /* 9968 */;
import FlagIcon from "FlagIcon" /* 9970 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const EmojiCategories = EmojiPickerConstants.EmojiCategories;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerCategoryIcon(id) {
  const obj = react2;
  const cResult = obj.c(13);
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    let first;
    const _Symbol13 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp56 = jsx(TrophyIcon.TrophyIcon, {});
      cResult[0] = tmp56;
      first = tmp56;
    } else {
      first = cResult[0];
    }
    return first;
  } else if (EmojiCategories.FAVORITES === id) {
    let tmp50;
    const _Symbol12 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp52 = jsx(StarIcon.StarIcon, {});
      cResult[1] = tmp52;
      tmp50 = tmp52;
    } else {
      tmp50 = cResult[1];
    }
    return tmp50;
  } else if (EmojiCategories.RECENT === id) {
    let tmp46;
    const _Symbol11 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp48 = jsx(ClockIcon.ClockIcon, {});
      cResult[2] = tmp48;
      tmp46 = tmp48;
    } else {
      tmp46 = cResult[2];
    }
    return tmp46;
  } else if (EmojiCategories.SUGGESTED === id) {
    let tmp42;
    const _Symbol10 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp44 = jsx(LightbulbIcon.LightbulbIcon, {});
      cResult[3] = tmp44;
      tmp42 = tmp44;
    } else {
      tmp42 = cResult[3];
    }
    return tmp42;
  } else if (EmojiCategories.PEOPLE === id) {
    let tmp38;
    const _Symbol9 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp40 = jsx(ReactionIcon.ReactionIcon, {});
      cResult[4] = tmp40;
      tmp38 = tmp40;
    } else {
      tmp38 = cResult[4];
    }
    return tmp38;
  } else if (EmojiCategories.NATURE === id) {
    let tmp34;
    const _Symbol8 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp36 = jsx(NatureIcon.NatureIcon, {});
      cResult[5] = tmp36;
      tmp34 = tmp36;
    } else {
      tmp34 = cResult[5];
    }
    return tmp34;
  } else if (EmojiCategories.FOOD === id) {
    let tmp30;
    const _Symbol7 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp32 = jsx(FoodIcon.FoodIcon, {});
      cResult[6] = tmp32;
      tmp30 = tmp32;
    } else {
      tmp30 = cResult[6];
    }
    return tmp30;
  } else if (EmojiCategories.ACTIVITY === id) {
    let tmp26;
    const _Symbol6 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp28 = jsx(GameControllerIcon.GameControllerIcon, {});
      cResult[7] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[7];
    }
    return tmp26;
  } else if (EmojiCategories.TRAVEL === id) {
    let tmp22;
    const _Symbol5 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp24 = jsx(BicycleIcon.BicycleIcon, {});
      cResult[8] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[8];
    }
    return tmp22;
  } else if (EmojiCategories.OBJECTS === id) {
    let tmp18;
    const _Symbol4 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = jsx(ObjectIcon.ObjectIcon, {});
      cResult[9] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[9];
    }
    return tmp18;
  } else if (EmojiCategories.SYMBOLS === id) {
    let tmp14;
    const _Symbol3 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp16 = jsx(HeartIcon.HeartIcon, {});
      cResult[10] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    return tmp14;
  } else if (EmojiCategories.FLAGS === id) {
    let tmp10;
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp12 = jsx(FlagIcon.FlagIcon, {});
      cResult[11] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[11];
    }
    return tmp10;
  } else {
    let tmp6;
    if (EmojiCategories.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp4.PREMIUM_UPSELL;
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp8 = jsx(NitroWheelIcon.NitroWheelIcon, {});
      cResult[12] = tmp8;
      tmp6 = tmp8;
    } else {
      tmp6 = cResult[12];
    }
    return tmp6;
  }
}) : (function EmojiPickerCategoryIcon(id) {
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
}));
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
