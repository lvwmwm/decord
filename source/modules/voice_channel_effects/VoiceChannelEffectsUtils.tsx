// Module ID: 5744
// Function ID: 49392
// Name: getUniqueListFromMetadata
// Dependencies: [1849, 5743, 5745, 5746, 5747, 5748, 5749, 5750, 5751, 5752, 5753, 5754, 5755, 5756, 5757, 5758, 5759, 5760, 5761, 5762, 5763, 5764, 5765, 5766, 22, 1426, 1392, 3771, 3775, 1212, 2]
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 5744 (getUniqueListFromMetadata)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import VoiceChannelEffectAnimationType from "VoiceChannelEffectAnimationType";
import importDefaultResult from "items";

let VoiceChannelEffectAnimationType;
let closure_4;
const require = arg1;
function getUniqueListFromMetadata(closure_12, emojiName) {
  let closure_0 = emojiName;
  const mapped = importDefault(22)(closure_12).map((arg0) => {
    let tmp2 = null;
    if (null != arg0[closure_0]) {
      tmp2 = tmp;
    }
    return tmp2;
  });
  const found = mapped.filter((arg0) => null != arg0);
  const arr = importDefault(22)(closure_12);
  return found.uniq().value();
}
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = VoiceChannelEffectAnimationType);
let obj = {};
const items = [require("items")];
obj.BASIC = items;
const items1 = [require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items"), require("items")];
obj.PREMIUM = items1;
obj = { [VoiceChannelEffectAnimationType.BASIC]: obj.BASIC, [VoiceChannelEffectAnimationType.PREMIUM]: obj.PREMIUM };
const memoizeResult = require("items").memoize((arg0) => {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const image = new globalThis.Image();
    image.src = closure_0;
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      const result = outer2_4 * callback(outer2_2[25]).getDevicePixelRatio();
      if (image.width === result) {
        if (image.height === result) {
          callback(callback);
        }
      }
      const element = <canvas />;
      element.width = result;
      element.height = result;
      const context = element.getContext("2d");
      if (null != context) {
        context.drawImage(image, 0, 0);
      }
      callback(element.toDataURL("image/png"));
    };
  });
});
let result = require("items").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx");

export const CUSTOM_CALL_SOUND_ANIMATION_RANGE = { start: 10, end: 15 };
export const AnimationTypeToAnimations = obj;
export const getResizedEmojiData = memoizeResult;
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
  let animated;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_4;
  }
  if (null != emoji.id) {
    let obj = {};
    ({ id: obj5.id, animated } = emoji);
    let tmp10 = null != animated;
    if (tmp10) {
      tmp10 = animated;
    }
    obj.animated = tmp10;
    obj.size = tmp;
    return importDefault(1392).getEmojiURL(obj);
  } else {
    obj = importDefault(3771);
    const result = obj.convertSurrogateToName(emoji.name, false);
    const byName = importDefault(3771).getByName(result);
    let str = "";
    if (null != byName) {
      str = importDefault(3775).getURL(byName.surrogates);
      const obj3 = importDefault(3775);
    }
    return str;
  }
};
export const getEffectAnnouncement = function getEffectAnnouncement(closure_12) {
  if (closure_12.length < 1) {
    return "";
  } else {
    const arr = getUniqueListFromMetadata(closure_12, "userId");
    const arr2 = getUniqueListFromMetadata(closure_12, "emojiName");
    if (arr2.length < 2) {
      let first;
      if (null != arr2) {
        first = arr2[0];
      }
      let str2 = "";
      if (null != first) {
        str2 = first;
      }
      let joined = str2;
    } else {
      joined = arr2.join(", ");
    }
    if (arr.length < 1) {
      return "";
    } else if (1 === arr.length) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let obj = {};
      const user = authStore.getUser(arr[0]);
      let username;
      if (null != user) {
        username = user.username;
      }
      obj.firstUsername = username;
      obj.emojiNames = joined;
      let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.yZYxzF, obj);
    } else if (2 === arr.length) {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = {};
      const user1 = authStore.getUser(arr[0]);
      let username1;
      if (null != user1) {
        username1 = user1.username;
      }
      obj.firstUsername = username1;
      const user2 = authStore.getUser(arr[1]);
      let username2;
      if (null != user2) {
        username2 = user2.username;
      }
      obj.secondUsername = username2;
      obj.emojiNames = joined;
      formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["8rmtbd"], obj);
    } else {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj = {};
      const user3 = authStore.getUser(arr[0]);
      let username3;
      if (null != user3) {
        username3 = user3.username;
      }
      obj.firstUsername = username3;
      const user4 = authStore.getUser(arr[1]);
      let username4;
      if (null != user4) {
        username4 = user4.username;
      }
      obj.secondUsername = username4;
      obj.count = arr.length - 2;
      obj.emojiNames = joined;
      formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["/okjv0"], obj);
    }
  }
};
