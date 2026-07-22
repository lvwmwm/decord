// Module ID: 10581
// Function ID: 82592
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: clearVoiceChannelEffectForUser

// Module 10581 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).EMOJI_PICKER_EMOJI_TO_SHOW_COUNT;
let closure_10 = [];
let closure_11 = {};
let closure_12 = [];
let closure_13 = [];
let closure_14 = 10 * importDefault(dependencyMap[7]).Millis.SECOND;
let obj = arg1(dependencyMap[8]);
let closure_15 = obj.debounce(() => {
  const effectAnnouncement = arg1(dependencyMap[9]).getEffectAnnouncement(closure_12);
  const AccessibilityAnnouncer = arg1(dependencyMap[10]).AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(effectAnnouncement, "polite");
  closure_12 = [];
}, 500);
let tmp2 = (Store) => {
  class VoiceChannelEffectsStore {
    constructor() {
      self = this;
      tmp = closure_4(this, VoiceChannelEffectsStore);
      obj = closure_7(VoiceChannelEffectsStore);
      tmp2 = closure_6;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = VoiceChannelEffectsStore;
  callback2(VoiceChannelEffectsStore, Store);
  let obj = {
    key: "recentlyUsedEmojis",
    get() {
      return closure_10;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isOnCooldown",
    get() {
      let tmp = null != closure_3;
      if (tmp) {
        const _Date = Date;
        const date = new Date();
        tmp = date < closure_3;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "effectCooldownEndTime",
    get() {
      return closure_3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getEffectForUserId",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  return callback(VoiceChannelEffectsStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp2.displayName = "VoiceChannelEffectsStore";
obj = {
  VOICE_CHANNEL_EFFECT_CLEAR: function handleClearVoiceChannelEffect(arg0) {
    if (null != closure_11[arg0.userId]) {
      delete r0[r1];
    }
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: function handleAddRecentlyUsedEmojis(emoji) {
    emoji = emoji.emoji;
    if (null != emoji) {
      let arr = arr.unshift(emoji);
      const uniqByResult = arg1(dependencyMap[8]).uniqBy(arr, "name");
      arr = uniqByResult;
      if (uniqByResult.length > closure_9 + 1) {
        arr = arr.pop();
      }
      const obj = arg1(dependencyMap[8]);
    }
  },
  VOICE_CHANNEL_EFFECT_SEND: function handleReceivedVoiceChannelEffect(arg0) {
    let animationType;
    let emoji;
    let userId;
    ({ emoji, userId, animationType } = arg0);
    if (tmp) {
      let obj = { emoji };
      const _Date = Date;
      obj.sentAt = Date.now();
      obj.animationType = animationType;
      closure_11[userId] = obj;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_12, 0);
      obj = { emojiName: emoji.name, userId };
      items[arraySpreadResult] = obj;
      const sum = arraySpreadResult + 1;
      closure_12 = items;
      callback3();
    }
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: function handleVoiceChannelEffectSentLocal() {
    const date = new Date();
    const items = [date, ...closure_13];
    const substr = items.slice(0, 20);
    let closure_13 = substr;
    if (substr.length >= 20) {
      const time = date.getTime();
      const diff = time - closure_13[closure_13.length - 1].getTime();
      if (diff < closure_14) {
        const _Date = Date;
        const date1 = new Date(date.getTime() + closure_14 - diff);
      }
      const obj2 = closure_13[closure_13.length - 1];
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: function handleTimestampUpdate(cooldownEndsAtMs) {
    const date = new Date(Date.now() + cooldownEndsAtMs.cooldownEndsAtMs);
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsStore.tsx");

export default tmp2;
export const clearVoiceChannelEffectForUser = function clearVoiceChannelEffectForUser(userId) {
  if (null != userId) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "VOICE_CHANNEL_EFFECT_CLEAR", userId };
    obj.dispatch(obj);
  }
};
