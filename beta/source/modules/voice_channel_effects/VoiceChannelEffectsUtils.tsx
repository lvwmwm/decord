// Module ID: 10747
// Function ID: 10748
// Name: VoiceChannelEffectsUtils
// Dependencies: [1386, 10748, 10749, 10750, 10751, 10752, 10753, 10754, 10755, 10756, 10757, 10758, 10759, 10760, 10761, 10762, 10763, 10764, 10765, 10766, 10767, 10768, 10769, 10770, 12, 1447, 1412, 4859, 4863, 1112, 2]
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 10747 (VoiceChannelEffectsUtils)
import intl4 from "intl" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1447 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4859 */;
import _modDef10749 from "module_10749" /* 10749 */;
import _modDef10750 from "module_10750" /* 10750 */;
import _modDef10751 from "module_10751" /* 10751 */;
import _modDef10752 from "module_10752" /* 10752 */;
import _modDef10753 from "module_10753" /* 10753 */;
import _modDef10754 from "module_10754" /* 10754 */;
import _modDef10755 from "module_10755" /* 10755 */;
import _modDef10756 from "module_10756" /* 10756 */;
import _modDef10757 from "module_10757" /* 10757 */;
import _modDef10758 from "module_10758" /* 10758 */;
import _modDef10759 from "module_10759" /* 10759 */;
import _modDef10760 from "module_10760" /* 10760 */;
import _modDef10761 from "module_10761" /* 10761 */;
import _modDef10762 from "module_10762" /* 10762 */;
import _modDef10763 from "module_10763" /* 10763 */;
import _modDef10764 from "module_10764" /* 10764 */;
import _modDef10765 from "module_10765" /* 10765 */;
import _modDef10766 from "module_10766" /* 10766 */;
import _modDef10767 from "module_10767" /* 10767 */;
import _modDef10768 from "module_10768" /* 10768 */;
import _modDef10769 from "module_10769" /* 10769 */;
import _modDef10770 from "module_10770" /* 10770 */;
import UserStore from "UserStore" /* 1386 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 10748 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let src;

let VoiceChannelEffectAnimationType;
let closure_4;
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef10749];
const items1 = [_modDef10750, _modDef10751, _modDef10752, _modDef10753, _modDef10754, _modDef10755, _modDef10756, _modDef10757, _modDef10758, _modDef10759, _modDef10760, _modDef10761, _modDef10762, _modDef10763, _modDef10764, _modDef10765, _modDef10766, _modDef10767, _modDef10768, _modDef10769, _modDef10770];
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
      const tmp2Result = tmp2(4863);
      str = tmp2Result.getURL(byName.surrogates);
    }
    return str;
  }
}
export function getEffectAnnouncement(items) {
  let username2;
  let username4;
  const f98275 = (item) => {
    let tmp = item[emojiName];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  };
  const f98276 = (item) => null != item;
  if (items.length < 1) {
    return "";
  } else {
    let joined;
    const userId = "userId";
    const arr = module_12(items);
    const mapped = arr.map(f98275);
    const found = mapped.filter(f98276);
    const iter = found.uniq();
    const valueResult = iter.value();
    const emojiName = "emojiName";
    const arr4 = module_12(items);
    const mapped1 = arr4.map(f98275);
    const found1 = mapped1.filter(f98276);
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
