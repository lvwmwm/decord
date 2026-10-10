// Module ID: 7060
// Function ID: 7061
// Name: VoiceChannelEffectsUtils
// Dependencies: [1390, 7059, 7061, 7062, 7063, 7064, 7065, 7066, 7067, 7068, 7069, 7070, 7071, 7072, 7073, 7074, 7075, 7076, 7077, 7078, 7079, 7080, 7081, 7082, 12, 1450, 1415, 4764, 4768, 1126, 2]
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 7060 (VoiceChannelEffectsUtils)
import intl4 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1450 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4764 */;
import _modDef7061 from "module_7061" /* 7061 */;
import _modDef7062 from "module_7062" /* 7062 */;
import _modDef7063 from "module_7063" /* 7063 */;
import _modDef7064 from "module_7064" /* 7064 */;
import _modDef7065 from "module_7065" /* 7065 */;
import _modDef7066 from "module_7066" /* 7066 */;
import _modDef7067 from "module_7067" /* 7067 */;
import _modDef7068 from "module_7068" /* 7068 */;
import _modDef7069 from "module_7069" /* 7069 */;
import _modDef7070 from "module_7070" /* 7070 */;
import _modDef7071 from "module_7071" /* 7071 */;
import _modDef7072 from "module_7072" /* 7072 */;
import _modDef7073 from "module_7073" /* 7073 */;
import _modDef7074 from "module_7074" /* 7074 */;
import _modDef7075 from "module_7075" /* 7075 */;
import _modDef7076 from "module_7076" /* 7076 */;
import _modDef7077 from "module_7077" /* 7077 */;
import _modDef7078 from "module_7078" /* 7078 */;
import _modDef7079 from "module_7079" /* 7079 */;
import _modDef7080 from "module_7080" /* 7080 */;
import _modDef7081 from "module_7081" /* 7081 */;
import _modDef7082 from "module_7082" /* 7082 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 7059 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let src;

let VoiceChannelEffectAnimationType;
let closure_4;
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7061];
const items1 = [_modDef7062, _modDef7063, _modDef7064, _modDef7065, _modDef7066, _modDef7067, _modDef7068, _modDef7069, _modDef7070, _modDef7071, _modDef7072, _modDef7073, _modDef7074, _modDef7075, _modDef7076, _modDef7077, _modDef7078, _modDef7079, _modDef7080, _modDef7081, _modDef7082];
const AnimationTypeToAnimations = { [VoiceChannelEffectAnimationType.BASIC]: items, [VoiceChannelEffectAnimationType.PREMIUM]: items1 };
const memoizeResult = module_12.memoize((src) => {
  const promise = new Promise((arg0) => {
    let closure_0;
    src = arg0;
    const image = new globalThis.Image();
    image.src = src;
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      const obj = ImageLoaderUtils;
      const result = React3 * obj.getDevicePixelRatio();
      if (image.width === result) {
        if (image.height === result) {
          closure_0(closure_0);
        }
      }
      const element = <canvas />;
      element.width = result;
      element.height = result;
      const context = element.getContext("2d");
      if (context != null) {
        context.drawImage(image, 0, 0);
      }
      closure_0(element.toDataURL("image/png"));
    };
  });
  return promise;
});
let result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx");

export const CUSTOM_CALL_SOUND_ANIMATION_RANGE = { start: 10, end: 15 };
export { AnimationTypeToAnimations };
export const getResizedEmojiData = memoizeResult;
export const sampleAnimationId = function sampleAnimationId(BASIC, CUSTOM_CALL_SOUND_ANIMATION_RANGE) {
  const arr = obj[BASIC];
  if (null != CUSTOM_CALL_SOUND_ANIMATION_RANGE) {
    if (BASIC === VoiceChannelEffectAnimationType.PREMIUM) {
      const sum = CUSTOM_CALL_SOUND_ANIMATION_RANGE.end + 1;
      const _Math = Math;
      const _Math2 = Math;
      return Math.floor(Math.random() * (CUSTOM_CALL_SOUND_ANIMATION_RANGE.start - sum) + sum);
    }
  }
  return Math.floor(Math.random() * arr.length);
};
export const getEffectUrl = function getEffectUrl(emoji) {
  let animated;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = React3;
  }
  if (null != emoji.id) {
    const obj3 = { id: null, animated, size: tmp };
    ({ id: obj4.id, animated } = emoji);
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (animated == null) {
      animated = false;
    }
    return getEmojiURL(obj3);
  } else {
    const obj = UnicodeEmojisDefault;
    const result = obj.convertSurrogateToName(emoji.name, false);
    const obj2 = UnicodeEmojisDefault;
    const byName = obj2.getByName(result);
    let str = "";
    const tmp2 = importDefault;
    if (null != byName) {
      const tmp2Result = tmp2(4768);
      str = tmp2Result.getURL(byName.surrogates);
    }
    return str;
  }
};
export const getEffectAnnouncement = function getEffectAnnouncement(items) {
  let username2;
  let username4;
  const f95281 = (item) => {
    let tmp = item[emojiName];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  };
  const f95282 = (item) => null != item;
  if (items.length < 1) {
    return "";
  } else {
    let joined;
    const userId = "userId";
    const arr = module_12(items);
    const mapped = arr.map(f95281);
    const found = mapped.filter(f95282);
    const iter = found.uniq();
    const valueResult = iter.value();
    const emojiName = "emojiName";
    const arr4 = module_12(items);
    const mapped1 = arr4.map(f95281);
    const found1 = mapped1.filter(f95282);
    const iter2 = found1.uniq();
    const valueResult2 = iter2.value();
    if (valueResult2.length < 2) {
      let str2;
      if (valueResult2 != null) {
        str2 = valueResult2[0];
      }
      if (str2 == null) {
        str2 = "";
      }
      joined = str2;
    } else {
      joined = valueResult2.join(", ");
    }
    let str3 = "";
    if (valueResult.length >= 1) {
      let formatToPlainString2Result;
      if (1 === valueResult.length) {
        const intl2 = intl4.intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        const yZYxzF = intl4.t.yZYxzF;
        const user = UserStore.getUser(valueResult[0]);
        let username;
        if (user != null) {
          username = user.username;
        }
        const obj3 = { firstUsername: username, emojiNames: joined };
        formatToPlainString2Result = formatToPlainString2(yZYxzF, obj3);
      } else if (2 === valueResult.length) {
        const intl = intl4.intl;
        const formatToPlainString = intl.formatToPlainString;
        const v8rmtbd = intl4.t["8rmtbd"];
        const user1 = UserStore.getUser(valueResult[0]);
        let username1;
        const obj2 = UserStore;
        if (user1 != null) {
          username1 = user1.username;
        }
        const obj4 = { firstUsername: username1, secondUsername: username2, emojiNames: joined };
        const user2 = obj2.getUser(valueResult[1]);
        username2 = undefined;
        if (user2 != null) {
          username2 = user2.username;
        }
        formatToPlainString2Result = formatToPlainString(v8rmtbd, obj4);
      } else {
        const intl3 = intl4.intl;
        const formatToPlainString3 = intl3.formatToPlainString;
        const prop = intl4.t["/okjv0"];
        const user3 = UserStore.getUser(valueResult[0]);
        let username3;
        const obj7 = UserStore;
        if (user3 != null) {
          username3 = user3.username;
        }
        const obj = { firstUsername: username3, secondUsername: username4, count: valueResult.length - 2, emojiNames: joined };
        const user4 = obj7.getUser(valueResult[1]);
        username4 = undefined;
        if (user4 != null) {
          username4 = user4.username;
        }
        formatToPlainString2Result = formatToPlainString3(prop, obj);
      }
      str3 = formatToPlainString2Result;
    }
    return str3;
  }
};
