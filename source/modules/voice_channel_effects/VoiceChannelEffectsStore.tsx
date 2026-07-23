// Module ID: 10591
// Function ID: 82642
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4148, 686, 664, 22, 5744, 3976, 566, 2]
// Exports: clearVoiceChannelEffectForUser

// Module 10591 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { EMOJI_PICKER_EMOJI_TO_SHOW_COUNT as closure_9 } from "ParticipantTypes";
import apply from "apply";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_10 = [];
let closure_11 = {};
let closure_12 = [];
let closure_13 = [];
let closure_14 = 10 * require("set").Millis.SECOND;
let closure_15 = apply.debounce(() => {
  const effectAnnouncement = require(5744) /* getUniqueListFromMetadata */.getEffectAnnouncement(closure_12);
  const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(effectAnnouncement, "polite");
  closure_12 = [];
}, 500);
let tmp2 = ((Store) => {
  class VoiceChannelEffectsStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, VoiceChannelEffectsStore);
      obj = outer1_7(VoiceChannelEffectsStore);
      tmp2 = outer1_6;
      if (outer1_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(VoiceChannelEffectsStore, Store);
  let obj = {
    key: "recentlyUsedEmojis",
    get() {
      return outer1_10;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isOnCooldown",
    get() {
      let tmp = null != outer1_3;
      if (tmp) {
        const _Date = Date;
        const date = new Date();
        tmp = date < outer1_3;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "effectCooldownEndTime",
    get() {
      return outer1_3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getEffectForUserId",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  return callback(VoiceChannelEffectsStore, items);
})(require("initialize").Store);
tmp2.displayName = "VoiceChannelEffectsStore";
apply = {
  VOICE_CHANNEL_EFFECT_CLEAR: function handleClearVoiceChannelEffect(arg0) {
    if (null != table[arg0.userId]) {
      delete tmp[tmp2];
    }
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: function handleAddRecentlyUsedEmojis(emoji) {
    emoji = emoji.emoji;
    if (null != emoji) {
      uniqByResult.unshift(emoji);
      uniqByResult = require(22) /* apply */.uniqBy(uniqByResult, "name");
      if (uniqByResult.length > closure_9 + 1) {
        uniqByResult.pop();
      }
      const obj = require(22) /* apply */;
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
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      obj = { emojiName: emoji.name, userId };
      items[arraySpreadResult] = obj;
      const sum = arraySpreadResult + 1;
      callback3();
    }
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: function handleVoiceChannelEffectSentLocal() {
    const date = new Date();
    const items = [date, ...substr];
    substr = items.slice(0, 20);
    if (substr.length >= 20) {
      const time = date.getTime();
      const diff = time - substr[substr.length - 1].getTime();
      if (diff < closure_14) {
        const _Date = Date;
        const date1 = new Date(date.getTime() + closure_14 - diff);
      }
      const obj2 = substr[substr.length - 1];
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: function handleTimestampUpdate(cooldownEndsAtMs) {
    const date = new Date(Date.now() + cooldownEndsAtMs.cooldownEndsAtMs);
  }
};
tmp2 = new tmp2(require("dispatcher"), apply);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsStore.tsx");

export default tmp2;
export const clearVoiceChannelEffectForUser = function clearVoiceChannelEffectForUser(userId) {
  if (null != userId) {
    let obj = importDefault(686);
    obj = { type: "VOICE_CHANNEL_EFFECT_CLEAR", userId };
    obj.dispatch(obj);
  }
};
