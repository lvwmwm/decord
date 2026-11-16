// Module ID: 7635
// Function ID: 7636
// Name: VoiceChannelEffectsUtils
// Dependencies: [1385, 7634, 7636, 7637, 7638, 7639, 7640, 7641, 7642, 7643, 7644, 7645, 7646, 7647, 7648, 7649, 7650, 7651, 7652, 7653, 7654, 7655, 7656, 7657, 12, 1446, 1411, 5116, 5120, 1113, 2]
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 7635 (VoiceChannelEffectsUtils)
import intl4 from "intl" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1446 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5116 */;
import _modDef7636 from "module_7636" /* 7636 */;
import _modDef7637 from "module_7637" /* 7637 */;
import _modDef7638 from "module_7638" /* 7638 */;
import _modDef7639 from "module_7639" /* 7639 */;
import _modDef7640 from "module_7640" /* 7640 */;
import _modDef7641 from "module_7641" /* 7641 */;
import _modDef7642 from "module_7642" /* 7642 */;
import _modDef7643 from "module_7643" /* 7643 */;
import _modDef7644 from "module_7644" /* 7644 */;
import _modDef7645 from "module_7645" /* 7645 */;
import _modDef7646 from "module_7646" /* 7646 */;
import _modDef7647 from "module_7647" /* 7647 */;
import _modDef7648 from "module_7648" /* 7648 */;
import _modDef7649 from "module_7649" /* 7649 */;
import _modDef7650 from "module_7650" /* 7650 */;
import _modDef7651 from "module_7651" /* 7651 */;
import _modDef7652 from "module_7652" /* 7652 */;
import _modDef7653 from "module_7653" /* 7653 */;
import _modDef7654 from "module_7654" /* 7654 */;
import _modDef7655 from "module_7655" /* 7655 */;
import _modDef7656 from "module_7656" /* 7656 */;
import _modDef7657 from "module_7657" /* 7657 */;
import UserStore from "UserStore" /* 1385 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 7634 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let src;

let VoiceChannelEffectAnimationType;
let closure_4;
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7636];
const items1 = [_modDef7637, _modDef7638, _modDef7639, _modDef7640, _modDef7641, _modDef7642, _modDef7643, _modDef7644, _modDef7645, _modDef7646, _modDef7647, _modDef7648, _modDef7649, _modDef7650, _modDef7651, _modDef7652, _modDef7653, _modDef7654, _modDef7655, _modDef7656, _modDef7657];
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
      const tmp2Result = tmp2(5120);
      str = tmp2Result.getURL(byName.surrogates);
    }
    return str;
  }
}
export function getEffectAnnouncement(items) {
  let username2;
  let username4;
  const f92545 = (item) => {
    let tmp = item[emojiName];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  };
  const f92546 = (item) => null != item;
  if (items.length < 1) {
    return "";
  } else {
    let joined;
    const userId = "userId";
    const arr = module_12(items);
    const mapped = arr.map(f92545);
    const found = mapped.filter(f92546);
    const iter = found.uniq();
    const valueResult = iter.value();
    const emojiName = "emojiName";
    const arr4 = module_12(items);
    const mapped1 = arr4.map(f92545);
    const found1 = mapped1.filter(f92546);
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
