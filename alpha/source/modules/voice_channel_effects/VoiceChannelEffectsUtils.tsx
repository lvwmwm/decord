// Module ID: 7670
// Function ID: 7671
// Name: VoiceChannelEffectsUtils
// Dependencies: [1385, 7669, 7671, 7672, 7673, 7674, 7675, 7676, 7677, 7678, 7679, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 12, 1446, 1411, 5087, 5091, 1113, 2]
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 7670 (VoiceChannelEffectsUtils)
import intl4 from "intl" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1446 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5087 */;
import _modDef7671 from "module_7671" /* 7671 */;
import _modDef7672 from "module_7672" /* 7672 */;
import _modDef7673 from "module_7673" /* 7673 */;
import _modDef7674 from "module_7674" /* 7674 */;
import _modDef7675 from "module_7675" /* 7675 */;
import _modDef7676 from "module_7676" /* 7676 */;
import _modDef7677 from "module_7677" /* 7677 */;
import _modDef7678 from "module_7678" /* 7678 */;
import _modDef7679 from "module_7679" /* 7679 */;
import _modDef7680 from "module_7680" /* 7680 */;
import _modDef7681 from "module_7681" /* 7681 */;
import _modDef7682 from "module_7682" /* 7682 */;
import _modDef7683 from "module_7683" /* 7683 */;
import _modDef7684 from "module_7684" /* 7684 */;
import _modDef7685 from "module_7685" /* 7685 */;
import _modDef7686 from "module_7686" /* 7686 */;
import _modDef7687 from "module_7687" /* 7687 */;
import _modDef7688 from "module_7688" /* 7688 */;
import _modDef7689 from "module_7689" /* 7689 */;
import _modDef7690 from "module_7690" /* 7690 */;
import _modDef7691 from "module_7691" /* 7691 */;
import _modDef7692 from "module_7692" /* 7692 */;
import UserStore from "UserStore" /* 1385 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 7669 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let src;

let VoiceChannelEffectAnimationType;
let closure_4;
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7671];
const items1 = [_modDef7672, _modDef7673, _modDef7674, _modDef7675, _modDef7676, _modDef7677, _modDef7678, _modDef7679, _modDef7680, _modDef7681, _modDef7682, _modDef7683, _modDef7684, _modDef7685, _modDef7686, _modDef7687, _modDef7688, _modDef7689, _modDef7690, _modDef7691, _modDef7692];
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
export function sampleAnimationId(BASIC, CUSTOM_CALL_SOUND_ANIMATION_RANGE) {
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
}
export function getEffectUrl(emoji) {
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
      const tmp2Result = tmp2(5091);
      str = tmp2Result.getURL(byName.surrogates);
    }
    return str;
  }
}
export function getEffectAnnouncement(items) {
  let username2;
  let username4;
  const f91633 = (item) => {
    let tmp = item[emojiName];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  };
  const f91634 = (item) => null != item;
  if (items.length < 1) {
    return "";
  } else {
    let joined;
    const userId = "userId";
    const arr = module_12(items);
    const mapped = arr.map(f91633);
    const found = mapped.filter(f91634);
    const iter = found.uniq();
    const valueResult = iter.value();
    const emojiName = "emojiName";
    const arr4 = module_12(items);
    const mapped1 = arr4.map(f91633);
    const found1 = mapped1.filter(f91634);
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
}
