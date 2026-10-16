// Module ID: 7284
// Function ID: 7285
// Name: VoiceChannelEffectsUtils
// Dependencies: [1392, 7283, 7285, 7286, 7287, 7288, 7289, 7290, 7291, 7292, 7293, 7294, 7295, 7296, 7297, 7298, 7299, 7300, 7301, 7302, 7303, 7304, 7305, 7306, 12, 1452, 1417, 4823, 4827, 1128, 2]
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 7284 (VoiceChannelEffectsUtils)
import intl4 from "intl" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1452 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4823 */;
import _modDef7285 from "module_7285" /* 7285 */;
import _modDef7286 from "module_7286" /* 7286 */;
import _modDef7287 from "module_7287" /* 7287 */;
import _modDef7288 from "module_7288" /* 7288 */;
import _modDef7289 from "module_7289" /* 7289 */;
import _modDef7290 from "module_7290" /* 7290 */;
import _modDef7291 from "module_7291" /* 7291 */;
import _modDef7292 from "module_7292" /* 7292 */;
import _modDef7293 from "module_7293" /* 7293 */;
import _modDef7294 from "module_7294" /* 7294 */;
import _modDef7295 from "module_7295" /* 7295 */;
import _modDef7296 from "module_7296" /* 7296 */;
import _modDef7297 from "module_7297" /* 7297 */;
import _modDef7298 from "module_7298" /* 7298 */;
import _modDef7299 from "module_7299" /* 7299 */;
import _modDef7300 from "module_7300" /* 7300 */;
import _modDef7301 from "module_7301" /* 7301 */;
import _modDef7302 from "module_7302" /* 7302 */;
import _modDef7303 from "module_7303" /* 7303 */;
import _modDef7304 from "module_7304" /* 7304 */;
import _modDef7305 from "module_7305" /* 7305 */;
import _modDef7306 from "module_7306" /* 7306 */;
import UserStore from "UserStore" /* 1392 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 7283 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let src;

let VoiceChannelEffectAnimationType;
let closure_4;
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7285];
const items1 = [_modDef7286, _modDef7287, _modDef7288, _modDef7289, _modDef7290, _modDef7291, _modDef7292, _modDef7293, _modDef7294, _modDef7295, _modDef7296, _modDef7297, _modDef7298, _modDef7299, _modDef7300, _modDef7301, _modDef7302, _modDef7303, _modDef7304, _modDef7305, _modDef7306];
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
      const tmp2Result = tmp2(4827);
      str = tmp2Result.getURL(byName.surrogates);
    }
    return str;
  }
};
export const getEffectAnnouncement = function getEffectAnnouncement(items) {
  let username2;
  let username4;
  const f96439 = (item) => {
    let tmp = item[emojiName];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  };
  const f96440 = (item) => null != item;
  if (items.length < 1) {
    return "";
  } else {
    let joined;
    const userId = "userId";
    const arr = module_12(items);
    const mapped = arr.map(f96439);
    const found = mapped.filter(f96440);
    const iter = found.uniq();
    const valueResult = iter.value();
    const emojiName = "emojiName";
    const arr4 = module_12(items);
    const mapped1 = arr4.map(f96439);
    const found1 = mapped1.filter(f96440);
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
