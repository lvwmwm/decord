// Module ID: 7442
// Function ID: 7443
// Name: VoiceChannelEffectsUtils
// Dependencies: [1392, 7441, 7443, 7444, 7445, 7446, 7447, 7448, 7449, 7450, 7451, 7452, 7453, 7454, 7455, 7456, 7457, 7458, 7459, 7460, 7461, 7462, 7463, 7464, 12, 1452, 1417, 4915, 4919, 1128, 2]
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 7442 (VoiceChannelEffectsUtils)
import intl4 from "intl" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1452 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4915 */;
import _modDef7443 from "module_7443" /* 7443 */;
import _modDef7444 from "module_7444" /* 7444 */;
import _modDef7445 from "module_7445" /* 7445 */;
import _modDef7446 from "module_7446" /* 7446 */;
import _modDef7447 from "module_7447" /* 7447 */;
import _modDef7448 from "module_7448" /* 7448 */;
import _modDef7449 from "module_7449" /* 7449 */;
import _modDef7450 from "module_7450" /* 7450 */;
import _modDef7451 from "module_7451" /* 7451 */;
import _modDef7452 from "module_7452" /* 7452 */;
import _modDef7453 from "module_7453" /* 7453 */;
import _modDef7454 from "module_7454" /* 7454 */;
import _modDef7455 from "module_7455" /* 7455 */;
import _modDef7456 from "module_7456" /* 7456 */;
import _modDef7457 from "module_7457" /* 7457 */;
import _modDef7458 from "module_7458" /* 7458 */;
import _modDef7459 from "module_7459" /* 7459 */;
import _modDef7460 from "module_7460" /* 7460 */;
import _modDef7461 from "module_7461" /* 7461 */;
import _modDef7462 from "module_7462" /* 7462 */;
import _modDef7463 from "module_7463" /* 7463 */;
import _modDef7464 from "module_7464" /* 7464 */;
import UserStore from "UserStore" /* 1392 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 7441 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let src;

let VoiceChannelEffectAnimationType;
let closure_4;
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7443];
const items1 = [_modDef7444, _modDef7445, _modDef7446, _modDef7447, _modDef7448, _modDef7449, _modDef7450, _modDef7451, _modDef7452, _modDef7453, _modDef7454, _modDef7455, _modDef7456, _modDef7457, _modDef7458, _modDef7459, _modDef7460, _modDef7461, _modDef7462, _modDef7463, _modDef7464];
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
      const tmp2Result = tmp2(4919);
      str = tmp2Result.getURL(byName.surrogates);
    }
    return str;
  }
};
export const getEffectAnnouncement = function getEffectAnnouncement(items) {
  let username2;
  let username4;
  const f98191 = (item) => {
    let tmp = item[emojiName];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  };
  const f98192 = (item) => null != item;
  if (items.length < 1) {
    return "";
  } else {
    let joined;
    const userId = "userId";
    const arr = module_12(items);
    const mapped = arr.map(f98191);
    const found = mapped.filter(f98192);
    const iter = found.uniq();
    const valueResult = iter.value();
    const emojiName = "emojiName";
    const arr4 = module_12(items);
    const mapped1 = arr4.map(f98191);
    const found1 = mapped1.filter(f98192);
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
