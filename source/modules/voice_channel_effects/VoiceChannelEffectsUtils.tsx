// Module ID: 5737
// Function ID: 49292
// Name: getUniqueListFromMetadata
// Dependencies: []
// Exports: getEffectAnnouncement, getEffectUrl, sampleAnimationId

// Module 5737 (getUniqueListFromMetadata)
let VoiceChannelEffectAnimationType;
function getUniqueListFromMetadata(closure_12, emojiName) {
  const mapped = importDefault(dependencyMap[24])(closure_12).map((arg0) => {
    let tmp2 = null;
    if (null != arg0[closure_0]) {
      tmp2 = tmp;
    }
    return tmp2;
  });
  const found = mapped.filter((arg0) => null != arg0);
  const arr = importDefault(dependencyMap[24])(closure_12);
  return found.uniq().value();
}
let closure_3 = importDefault(dependencyMap[0]);
({ EMOJI_SIZE: closure_4, VoiceChannelEffectAnimationType } = arg1(dependencyMap[1]));
let obj = {};
const items = [importDefault(dependencyMap[2])];
obj.BASIC = items;
const items1 = [importDefault(dependencyMap[3]), importDefault(dependencyMap[4]), importDefault(dependencyMap[5]), importDefault(dependencyMap[6]), importDefault(dependencyMap[7]), importDefault(dependencyMap[8]), importDefault(dependencyMap[9]), importDefault(dependencyMap[10]), importDefault(dependencyMap[11]), importDefault(dependencyMap[12]), importDefault(dependencyMap[13]), importDefault(dependencyMap[14]), importDefault(dependencyMap[15]), importDefault(dependencyMap[16]), importDefault(dependencyMap[17]), importDefault(dependencyMap[18]), importDefault(dependencyMap[19]), importDefault(dependencyMap[20]), importDefault(dependencyMap[21]), importDefault(dependencyMap[22]), importDefault(dependencyMap[23])];
obj.PREMIUM = items1;
obj = { [VoiceChannelEffectAnimationType.BASIC]: obj.BASIC, [VoiceChannelEffectAnimationType.PREMIUM]: obj.PREMIUM };
const tmp2 = arg1(dependencyMap[1]);
const importDefaultResult = importDefault(dependencyMap[24]);
const memoizeResult = importDefault(dependencyMap[24]).memoize((arg0) => {
  const arg1 = arg0;
  return new Promise((arg0) => {
    const image = new globalThis.Image();
    image.src = arg0;
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      const result = closure_4 * arg0(closure_2[25]).getDevicePixelRatio();
      if (image.width === result) {
        if (image.height === result) {
          arg0(arg0);
        }
      }
      const element = <canvas />;
      element.width = result;
      element.height = result;
      const context = element.getContext("2d");
      if (null != context) {
        context.drawImage(image, 0, 0);
      }
      arg0(element.toDataURL("image/png"));
    };
  });
});
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx");

export const CUSTOM_CALL_SOUND_ANIMATION_RANGE = { 1726238916: -33283686791197806000000, 607091733: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010061404906786437 };
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
    return importDefault(dependencyMap[26]).getEmojiURL(obj);
  } else {
    obj = importDefault(dependencyMap[27]);
    const result = obj.convertSurrogateToName(emoji.name, false);
    const byName = importDefault(dependencyMap[27]).getByName(result);
    let str = "";
    if (null != byName) {
      str = importDefault(dependencyMap[28]).getURL(byName.surrogates);
      const obj3 = importDefault(dependencyMap[28]);
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
      const intl2 = arg1(dependencyMap[29]).intl;
      let obj = {};
      const user = authStore.getUser(arr[0]);
      let username;
      if (null != user) {
        username = user.username;
      }
      obj.firstUsername = username;
      obj.emojiNames = joined;
      let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[29]).t.yZYxzF, obj);
    } else if (2 === arr.length) {
      const intl = arg1(dependencyMap[29]).intl;
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
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[29]).t.8rmtbd, obj);
    } else {
      const intl3 = arg1(dependencyMap[29]).intl;
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
      formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[29]).t./okjv0, obj);
    }
  }
};
