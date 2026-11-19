// Module ID: 10680
// Function ID: 10681
// Name: VoiceChannelEffectsUtils
// Dependencies: [1388, 10681, 10682, 10683, 10684, 10685, 10686, 10687, 10688, 10689, 10690, 10691, 10692, 10693, 10694, 10695, 10696, 10697, 10698, 10699, 10700, 10701, 10702, 10703, 12, 1449, 1414, 4738, 4742, 1113, 2]
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 10680 (VoiceChannelEffectsUtils)
import intl4 from "intl" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1449 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4738 */;
import _modDef10682 from "module_10682" /* 10682 */;
import _modDef10683 from "module_10683" /* 10683 */;
import _modDef10684 from "module_10684" /* 10684 */;
import _modDef10685 from "module_10685" /* 10685 */;
import _modDef10686 from "module_10686" /* 10686 */;
import _modDef10687 from "module_10687" /* 10687 */;
import _modDef10688 from "module_10688" /* 10688 */;
import _modDef10689 from "module_10689" /* 10689 */;
import _modDef10690 from "module_10690" /* 10690 */;
import _modDef10691 from "module_10691" /* 10691 */;
import _modDef10692 from "module_10692" /* 10692 */;
import _modDef10693 from "module_10693" /* 10693 */;
import _modDef10694 from "module_10694" /* 10694 */;
import _modDef10695 from "module_10695" /* 10695 */;
import _modDef10696 from "module_10696" /* 10696 */;
import _modDef10697 from "module_10697" /* 10697 */;
import _modDef10698 from "module_10698" /* 10698 */;
import _modDef10699 from "module_10699" /* 10699 */;
import _modDef10700 from "module_10700" /* 10700 */;
import _modDef10701 from "module_10701" /* 10701 */;
import _modDef10702 from "module_10702" /* 10702 */;
import _modDef10703 from "module_10703" /* 10703 */;
import UserStore from "UserStore" /* 1388 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 10681 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let src;

let VoiceChannelEffectAnimationType;
let closure_4;
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef10682];
const items1 = [_modDef10683, _modDef10684, _modDef10685, _modDef10686, _modDef10687, _modDef10688, _modDef10689, _modDef10690, _modDef10691, _modDef10692, _modDef10693, _modDef10694, _modDef10695, _modDef10696, _modDef10697, _modDef10698, _modDef10699, _modDef10700, _modDef10701, _modDef10702, _modDef10703];
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
      const tmp2Result = tmp2(4742);
      str = tmp2Result.getURL(byName.surrogates);
    }
    return str;
  }
}
export function getEffectAnnouncement(items) {
  let username2;
  let username4;
  const f99606 = (item) => {
    let tmp = item[emojiName];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  };
  const f99607 = (item) => null != item;
  if (items.length < 1) {
    return "";
  } else {
    let joined;
    const userId = "userId";
    const arr = module_12(items);
    const mapped = arr.map(f99606);
    const found = mapped.filter(f99607);
    const iter = found.uniq();
    const valueResult = iter.value();
    const emojiName = "emojiName";
    const arr4 = module_12(items);
    const mapped1 = arr4.map(f99606);
    const found1 = mapped1.filter(f99607);
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
