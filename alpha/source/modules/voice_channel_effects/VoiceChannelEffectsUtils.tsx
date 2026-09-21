// Module ID: 7591
// Function ID: 7592
// Name: VoiceChannelEffectsUtils
// Dependencies: [1372, 7590, 7592, 7593, 7594, 7595, 7596, 7597, 7598, 7599, 7600, 7601, 7602, 7603, 7604, 7605, 7606, 7607, 7608, 7609, 7610, 7611, 7612, 7613, 12, 1431, 1397, 4409, 4413, 1115, 2]
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 7591 (VoiceChannelEffectsUtils)
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1431 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4409 */;
import _modDef7592 from "module_7592" /* 7592 */;
import _modDef7593 from "module_7593" /* 7593 */;
import _modDef7594 from "module_7594" /* 7594 */;
import _modDef7595 from "module_7595" /* 7595 */;
import _modDef7596 from "module_7596" /* 7596 */;
import _modDef7597 from "module_7597" /* 7597 */;
import _modDef7598 from "module_7598" /* 7598 */;
import _modDef7599 from "module_7599" /* 7599 */;
import _modDef7600 from "module_7600" /* 7600 */;
import _modDef7601 from "module_7601" /* 7601 */;
import _modDef7602 from "module_7602" /* 7602 */;
import _modDef7603 from "module_7603" /* 7603 */;
import _modDef7604 from "module_7604" /* 7604 */;
import _modDef7605 from "module_7605" /* 7605 */;
import _modDef7606 from "module_7606" /* 7606 */;
import _modDef7607 from "module_7607" /* 7607 */;
import _modDef7608 from "module_7608" /* 7608 */;
import _modDef7609 from "module_7609" /* 7609 */;
import _modDef7610 from "module_7610" /* 7610 */;
import _modDef7611 from "module_7611" /* 7611 */;
import _modDef7612 from "module_7612" /* 7612 */;
import _modDef7613 from "module_7613" /* 7613 */;
import UserStore from "UserStore" /* 1372 */;
import apply from "module_12" /* 12 */;

require = fn;
const VoiceChannelEffectsConstants = fn(7590);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectsConstants);
const items = [_modDef7592];
const items1 = [_modDef7593, _modDef7594, _modDef7595, _modDef7596, _modDef7597, _modDef7598, _modDef7599, _modDef7600, _modDef7601, _modDef7602, _modDef7603, _modDef7604, _modDef7605, _modDef7606, _modDef7607, _modDef7608, _modDef7609, _modDef7610, _modDef7611, _modDef7612, _modDef7613];
const AnimationTypeToAnimations = { [VoiceChannelEffectAnimationType.BASIC]: items, [VoiceChannelEffectAnimationType.PREMIUM]: items1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx");

export const CUSTOM_CALL_SOUND_ANIMATION_RANGE = { start: 10, end: 15 };
export { AnimationTypeToAnimations };
export const getResizedEmojiData = apply.memoize((src) => new Promise((arg0) => {
  src = arg0;
  const image = new globalThis.Image();
  image.src = src;
  image.crossOrigin = "Anonymous";
  image.onload = () => {
    const result = React4 * ImageLoaderUtils.getDevicePixelRatio();
    if (image.width === result) {
      if (tmp2.height === result) {
        closure_0(closure_0);
      }
    }
    const element = <canvas />;
    element.width = result;
    element.height = result;
    const context = element.getContext("2d");
    if (context != null) {
      context.drawImage(tmp2, 0, 0);
    }
    closure_0(element.toDataURL("image/png"));
  };
}));
export const sampleAnimationId = function sampleAnimationId(BASIC, CUSTOM_CALL_SOUND_ANIMATION_RANGE) {
  if (null != CUSTOM_CALL_SOUND_ANIMATION_RANGE) {
    if (BASIC === VoiceChannelEffectAnimationType.PREMIUM) {
      const sum = CUSTOM_CALL_SOUND_ANIMATION_RANGE.end + 1;
      const _Math = Math;
      const _Math2 = Math;
      return Math.floor(Math.random() * (CUSTOM_CALL_SOUND_ANIMATION_RANGE.start - sum) + sum);
    }
  }
  return Math.floor(Math.random() * obj[BASIC].length);
};
export const getEffectUrl = function getEffectUrl(emoji) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = React4;
  }
  if (null != emoji.id) {
    const obj3 = { id: null, animated: null, size: null };
    ({ id: obj5.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj3.animated = animated;
    obj3.size = tmp;
    return AvatarUtilsDefault.getEmojiURL(obj3);
  } else {
    const result = UnicodeEmojisDefault.convertSurrogateToName(emoji.name, false);
    const tmp2 = importDefault;
    const byName = UnicodeEmojisDefault.getByName(result);
    let str = "";
    if (null != byName) {
      str = tmp2(4413).getURL(byName.surrogates);
      const tmp2Result = tmp2(4413);
    }
    return str;
  }
};
export const getEffectAnnouncement = function getEffectAnnouncement(items) {
  if (items.length < 1) {
    return "";
  } else {
    let emojiName = "userId";
    let yZYxzF = dependencyMap;
    const mapped = apply(items).map((item) => {
      let tmp = item[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found = mapped.filter((item) => null != item);
    const arr = apply(items);
    let obj3 = found.uniq().value();
    emojiName = "emojiName";
    const iter = found.uniq();
    const mapped1 = apply(items).map((item) => {
      let tmp = item[emojiName];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    });
    const found1 = mapped1.filter((item) => null != item);
    const arr3 = apply(items);
    const valueResult2 = found1.uniq().value();
    if (valueResult2.length < 2) {
      let str2;
      if (valueResult2 != null) {
        str2 = valueResult2[0];
      }
      if (str2 == null) {
        str2 = "";
      }
      let joined = str2;
    } else {
      joined = valueResult2.join(", ");
    }
    if (obj3.length < 1) {
      return "";
    } else if (1 === obj3.length) {
      const intl2 = util.intl;
      yZYxzF = util.t.yZYxzF;
      const user = UserStore.getUser(obj3[0]);
      let username;
      if (user != null) {
        username = user.username;
      }
      obj3 = { firstUsername: username, emojiNames: joined };
      let formatToPlainStringResult = intl2.formatToPlainString(yZYxzF, obj3);
    } else if (2 === obj3.length) {
      const intl = util.intl;
      const user1 = UserStore.getUser(obj3[0]);
      let username1;
      if (user1 != null) {
        username1 = user1.username;
      }
      const obj4 = { firstUsername: username1, secondUsername: null, emojiNames: null };
      const user2 = UserStore.getUser(obj3[1]);
      let username2;
      if (user2 != null) {
        username2 = user2.username;
      }
      obj4.secondUsername = username2;
      obj4.emojiNames = joined;
      formatToPlainStringResult = intl.formatToPlainString(util.t["8rmtbd"], obj4);
    } else {
      const intl3 = util.intl;
      const user3 = UserStore.getUser(obj3[0]);
      let username3;
      if (user3 != null) {
        username3 = user3.username;
      }
      const obj = { firstUsername: username3, secondUsername: null, count: null, emojiNames: null };
      const user4 = UserStore.getUser(obj3[1]);
      let username4;
      if (user4 != null) {
        username4 = user4.username;
      }
      obj.secondUsername = username4;
      obj.count = obj3.length - 2;
      obj.emojiNames = joined;
      formatToPlainStringResult = intl3.formatToPlainString(util.t["/okjv0"], obj);
    }
    const iter2 = found1.uniq();
  }
};
