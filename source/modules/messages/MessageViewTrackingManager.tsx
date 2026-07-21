// Module ID: 9467
// Function ID: 73742
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 9467 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getAnalyticsConfig(type) {
  type = type.type;
  if (obj.ANNOUNCEMENT === type) {
    let obj = { event: AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED };
    obj = {};
    ({ messageId: obj9.message_id, channelId: obj9.channel_id, guildId: obj9.guild_id, sourceChannelId: obj9.source_channel_id, sourceGuildId: obj9.source_guild_id } = type);
    obj.properties = obj;
    return obj;
  } else if (obj.APP_EMBED === type) {
    const obj1 = { event: AnalyticEvents.APP_EMBED_VIEWED };
    ({ applicationId: obj7.application_id, linkType: obj7.link_type, messageId: obj7.message_id, channelId: obj7.channel_id, guildId: obj7.guild_id } = type);
    obj1.properties = {};
    return obj1;
  } else if (obj.OFFICIAL_MESSAGE === type) {
    const obj3 = { event: AnalyticEvents.OFFICIAL_MESSAGE_VIEWED };
    ({ messageId: obj5.message_id, channelId: obj5.channel_id, guildId: obj5.guild_id } = type);
    obj3.properties = {};
    return obj3;
  } else if (obj.VOICE_INVITE_EMBED === type) {
    const obj5 = { event: arg1(dependencyMap[6]).ImpressionNames.VOICE_INVITE_EMBED };
    const obj6 = { impression_type: arg1(dependencyMap[6]).ImpressionTypes.VIEW };
    ({ inviteCode: obj3.invite_code, inviteGuildId: obj3.invite_guild_id, inviteChannelId: obj3.invite_channel_id, inviteInstanceId: obj3.invite_instance_id, hasActiveStream: obj3.has_active_stream } = type);
    const INVITE_EMBED = importDefault(dependencyMap[7]).INVITE_EMBED;
    if (type.treatmentRendered) {
      const items = [INVITE_EMBED, importDefault(dependencyMap[7]).VOICE_CHANNEL_LIST_INVITE_EMBED];
      let items1 = items;
    } else {
      items1 = [INVITE_EMBED];
    }
    obj6.location_stack = items1;
    obj5.properties = obj6;
    return obj5;
  } else {
    obj = arg1(dependencyMap[8]);
    return obj.assertNever(type);
  }
}
function getMessageViewKey(type) {
  if (type.type === obj.VOICE_INVITE_EMBED) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + type.messageId + "-" + type.inviteCode + "-" + type.type;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + type.messageId + "-" + type.type;
  }
  return combined;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const obj = { ANNOUNCEMENT: "announcement", APP_EMBED: "app_embed", OFFICIAL_MESSAGE: "official_message", VOICE_INVITE_EMBED: "voice_invite_embed" };
let tmp2 = (arg0) => {
  class MessageViewTrackingManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, MessageViewTrackingManager);
      items1 = [...items];
      obj = closure_6(MessageViewTrackingManager);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      MessageViewTrackingManager = tmp2Result;
      tmp2Result.currentlyVisibleMessageTimers = {};
      set = new Set();
      tmp2Result.viewsInCurrentChannel = set;
      tmp8 = closure_1(closure_2[9]);
      tmp8 = new tmp8({});
      tmp2Result.recentViewTimes = tmp8;
      tmp2Result.batchBuffer = [];
      tmp2Result.batchTimerId = null;
      tmp2Result.actions = {
        CHANNEL_SELECT() {
              return tmp2Result.handleChannelSelect();
            }
      };
      return tmp2Result;
    }
  }
  const arg1 = MessageViewTrackingManager;
  callback2(MessageViewTrackingManager, arg0);
  let obj = {
    key: "handleMessageBecameVisible",
    value(arg0) {
      const self = this;
      const MessageViewTrackingManager = this;
      const tmp = callback6(arg0);
      if (null == this.currentlyVisibleMessageTimers[tmp]) {
        const viewsInCurrentChannel = self.viewsInCurrentChannel;
        if (!viewsInCurrentChannel.has(tmp)) {
          const recentViewTimes = self.recentViewTimes;
          const value = recentViewTimes.get(tmp);
          if (null == value) {
            const _setTimeout = setTimeout;
            self.currentlyVisibleMessageTimers[tmp] = setTimeout(() => {
              delete r1[r5];
              const viewsInCurrentChannel = self.viewsInCurrentChannel;
              viewsInCurrentChannel.add(tmp);
              const recentViewTimes = self.recentViewTimes;
              const result = recentViewTimes.set(tmp, Date.now());
              self.bufferViewTrack(arg0);
            }, 1000);
          } else {
            const _Date = Date;
          }
        }
      }
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "handleMessageLostVisibility",
    value(arg0, arg1, arg2) {
      const self = this;
      if (null != arg2) {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + arg0 + "-" + arg2 + "-" + arg1;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + arg0 + "-" + arg1;
      }
      if (null != self.currentlyVisibleMessageTimers[combined]) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp7);
        const currentlyVisibleMessageTimers = self.currentlyVisibleMessageTimers;
        delete r0[r1];
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleMessageListVisibilityChange",
    value(arr) {
      let done;
      let iter3;
      const self = this;
      const tmp = callback4(arr);
      let iter = tmp();
      if (!iter.done) {
        do {
          let result = self.handleMessageBecameVisible(iter.value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const keys = Object.keys(self.currentlyVisibleMessageTimers);
      if (keys.length > 0) {
        const _Set = Set;
        const set = new Set(arr.map(closure_14));
        const tmp10 = callback4(keys);
        let iter4 = tmp10();
        if (!iter4.done) {
          do {
            let value = iter4.value;
            let _HermesInternal = HermesInternal;
            let tmp3 = value.endsWith("-" + arg1) && !set.has(value);
            if (tmp3) {
              let clearTimerResult = self.clearTimer(value);
            }
            iter3 = tmp10();
            iter4 = iter3;
          } while (!iter3.done);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearTimer",
    value(arg0) {
      const tmp2 = this.currentlyVisibleMessageTimers[arg0];
      if (null != tmp2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp2);
        const currentlyVisibleMessageTimers = tmp.currentlyVisibleMessageTimers;
        delete r0[r1];
      }
    }
  };
  items[4] = {
    key: "handleChannelSelect",
    value() {
      let length;
      const self = this;
      const values = Object.values(this.currentlyVisibleMessageTimers);
      let num = 0;
      if (0 < values.length) {
        do {
          let _clearTimeout = clearTimeout;
          let clearTimeoutResult = clearTimeout(values[num]);
          num = num + 1;
          length = values.length;
        } while (num < length);
      }
      self.currentlyVisibleMessageTimers = {};
      const viewsInCurrentChannel = self.viewsInCurrentChannel;
      viewsInCurrentChannel.clear();
      self.drainBuffer();
    }
  };
  items[5] = {
    key: "drainBuffer",
    value() {
      let done;
      const self = this;
      const tmp = callback4(this.batchBuffer);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_13;
          let tmp3 = closure_13(iter.value);
          let tmp4 = closure_1;
          let tmp5 = closure_2;
          let obj = closure_1(closure_2[10]);
          let trackResult = obj.track(tmp3.event, tmp3.properties);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      self.batchBuffer = [];
      if (null != self.batchTimerId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.batchTimerId);
        self.batchTimerId = null;
      }
    }
  };
  items[6] = {
    key: "bufferViewTrack",
    value(arg0) {
      const self = this;
      const MessageViewTrackingManager = this;
      if (this.batchBuffer.length >= 10) {
        self.drainBuffer();
      }
      const batchBuffer = self.batchBuffer;
      batchBuffer.push(arg0);
      if (null == self.batchTimerId) {
        const _setTimeout = setTimeout;
        self.batchTimerId = setTimeout(() => self.drainBuffer(), 2000);
      }
    }
  };
  return callback(MessageViewTrackingManager, items);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/messages/MessageViewTrackingManager.tsx");

export default tmp2;
export const MessageViewTrackingType = obj;
