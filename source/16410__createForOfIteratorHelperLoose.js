// Module ID: 16410
// Function ID: 126745
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 16410 (_createForOfIteratorHelperLoose)
let GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT;
let STREAM_NOTIFY_GUILD_MAX_SIZE;
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
function clearSpectatorReconnectionTimer(arg0) {
  if (null != closure_17[arg0]) {
    obj.stop();
  }
  delete r0[r1];
}
function clearConnectTimeout(arg0) {
  if (null != closure_18[arg0]) {
    obj.stop();
  }
  delete r0[r1];
}
function maybeAutowatchStream(channelId) {
  if (voiceChannelId.getVoiceChannelId() !== channelId) {
    return false;
  } else {
    const channel = channel.getChannel(channelId);
    if (null == channel) {
      return false;
    } else {
      if (!channel.isDM()) {
        if (!channel.isGuildStageVoice()) {
          return false;
        }
      }
      if (null != authStore.getActiveStreamForUser(arg1, channel.getGuildId())) {
        return false;
      } else {
        const streamForUser = authStore.getStreamForUser(arg1, channel.getGuildId());
        if (null == streamForUser) {
          return false;
        } else {
          let obj = arg1(dependencyMap[18]);
          const encodeStreamKeyResult = obj.encodeStreamKey(streamForUser);
          let flag2 = encodeStreamKeyResult !== closure_22;
          if (flag2) {
            closure_22 = encodeStreamKeyResult;
            obj = { noFocus: true };
            arg1(dependencyMap[16]).watchStream(streamForUser, obj);
            flag2 = true;
            const obj2 = arg1(dependencyMap[16]);
          }
          return flag2;
        }
      }
    }
  }
}
function updateRegion(first, preferredRegion) {
  if (null == preferredRegion) {
    preferredRegion = store.getPreferredRegion();
  }
  let tmp3 = null != preferredRegion;
  if (tmp3) {
    tmp3 = preferredRegion !== store.getRegion(store2.getHostname(first));
  }
  if (tmp3) {
    preferredRegion(dependencyMap[16]).changeStreamRegion(first, preferredRegion);
    const obj = preferredRegion(dependencyMap[16]);
  }
}
function maybeStartConnectTimeout(arg0, arg1) {
  arg1 = arg0;
  const allActiveStreamKeys = store2.getAllActiveStreamKeys();
  if (!allActiveStreamKeys.includes(arg0)) {
    let timeout = closure_18[arg0];
    if (null == timeout) {
      const Timeout = arg1(dependencyMap[19]).Timeout;
      const prototype = Timeout.prototype;
      timeout = new Timeout();
    }
    closure_18[arg0] = timeout;
    timeout.start(arg1 ? closure_21 : closure_20, () => {
      let obj = callback(closure_2[20]);
      obj = { type: "STREAM_TIMED_OUT", streamKey: arg0 };
      obj.dispatch(obj);
    });
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
importDefault(dependencyMap[12]);
({ GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT, STREAM_NOTIFY_GUILD_MAX_SIZE } = arg1(dependencyMap[13]));
const tmp3 = arg1(dependencyMap[13]);
({ ApplicationStreamDeleteReasons: closure_15, ApplicationStreamStates: closure_16 } = arg1(dependencyMap[14]));
const tmp4 = arg1(dependencyMap[14]);
arg1(dependencyMap[15]).debounce(arg1(dependencyMap[16]).notifyStreamStart, 1000);
let closure_17 = {};
let closure_18 = {};
let closure_19 = 3 * importDefault(dependencyMap[17]).Millis.MINUTE;
let closure_20 = 5 * importDefault(dependencyMap[17]).Millis.SECOND;
let closure_21 = 12 * importDefault(dependencyMap[17]).Millis.SECOND;
let closure_22 = null;
const obj = arg1(dependencyMap[15]);
const tmp6 = (arg0) => {
  class BaseApplicationStreamingManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, BaseApplicationStreamingManager);
      items1 = [...items];
      obj = closure_6(BaseApplicationStreamingManager);
      tmp2 = closure_5;
      if (closure_25()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      BaseApplicationStreamingManager = tmp2Result;
      tmp2Result.handleStreamWatch = (streamKey) => {
        streamKey = streamKey.streamKey;
        const channel = store.getChannel(streamKey(closure_2[18]).decodeStreamKey(streamKey).channelId);
        let isGuildStageVoiceResult;
        if (null != channel) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        closure_30(streamKey, isGuildStageVoiceResult);
        callback2(streamKey);
        if (!streamKey.allowMultiple) {
          const allActiveStreams = authStore.getAllActiveStreams();
          const item = allActiveStreams.forEach((ownerId) => {
            const encodeStreamKeyResult = streamKey(closure_2[18]).encodeStreamKey(ownerId);
            let tmp2 = ownerId.ownerId !== id.getId();
            if (tmp2) {
              tmp2 = encodeStreamKeyResult !== streamKey;
            }
            if (tmp2) {
              streamKey(closure_2[16]).stopStream(encodeStreamKeyResult, false);
              const obj2 = streamKey(closure_2[16]);
            }
          });
        }
      };
      tmp2Result.handleStreamStart = (channelId) => {
        let guildId;
        let streamType;
        channelId = channelId.channelId;
        ({ streamType, guildId } = channelId);
        const channel = store.getChannel(channelId);
        const obj2 = tmp2Result(closure_2[18]);
        const tmp = closure_30;
        let isGuildStageVoiceResult;
        const obj = { streamType, guildId, channelId, ownerId: id.getId() };
        if (null != channel) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        tmp(obj2.encodeStreamKey({ streamType, guildId, channelId, ownerId: id.getId() }), isGuildStageVoiceResult);
        const result = tmp2Result.platformHandleStreamStart(channelId);
      };
      tmp2Result.handleStreamCreate = (streamKey) => {
        streamKey = streamKey.streamKey;
        callback3(streamKey);
        const obj = tmp2Result(closure_2[18]);
        const memberCount = memberCount.getMemberCount(tmp2Result(closure_2[18]).decodeStreamKey(streamKey).guildId);
      };
      tmp2Result.handleStreamUpdate = (streamKey) => {
        callback3(streamKey.streamKey);
      };
      tmp2Result.handleStreamDelete = (streamKey) => {
        streamKey = streamKey.streamKey;
        callback3(streamKey);
        if (streamKey.reason === constants.STREAM_FULL) {
          let obj = tmp2Result(closure_2[21]);
          obj = { type: tmp2Result(closure_2[21]).AVError.STREAM_FULL };
          const merged = Object.assign(tmp2Result(closure_2[22]).getStreamErrorContext(streamKey));
          obj.reportAVError(obj);
          const result = tmp2Result.platformShowStreamFull();
          const obj3 = tmp2Result(closure_2[22]);
        }
      };
      tmp2Result.handleStreamClose = (streamKey) => {
        streamKey = streamKey.streamKey;
        callback2(streamKey);
        callback3(streamKey);
      };
      tmp2Result.handleVoiceChannelSelect = (channelId) => {
        channelId = channelId.channelId;
        if (null != channelId) {
          let closure_22 = null;
          const allApplicationStreamsForChannel = authStore.getAllApplicationStreamsForChannel(channelId);
          const first = allApplicationStreamsForChannel.filter((ownerId) => ownerId.ownerId !== id.getId())[0];
          if (null != first) {
            callback4(channelId, first.ownerId);
          }
        }
      };
      tmp2Result.handleVoiceStateUpdates = (voiceStates) => {
        voiceStates = voiceStates.voiceStates;
        const item = voiceStates.forEach((arg0) => {
          let channelId;
          let guildId;
          let selfStream;
          let userId;
          ({ userId, channelId, guildId, selfStream } = arg0);
          const result = encodeStreamKeyResult.platformHandleVoiceStateUpdate(arg0);
          if (userId !== id.getId()) {
            if (null != channelId) {
              const activeStreamForUser = authStore.getActiveStreamForUser(userId, guildId);
              if (null != activeStreamForUser) {
                if (activeStreamForUser.channelId === channelId) {
                  if (!selfStream) {
                    if (activeStreamForUser.state !== constants.ENDED) {
                      const encodeStreamKeyResult = encodeStreamKeyResult(closure_2[18]).encodeStreamKey(activeStreamForUser);
                      let timeout = closure_17[encodeStreamKeyResult];
                      if (null == timeout) {
                        const Timeout = encodeStreamKeyResult(closure_2[19]).Timeout;
                        const prototype = Timeout.prototype;
                        timeout = new Timeout();
                      }
                      timeout.start(closure_19, () => encodeStreamKeyResult(closure_2[16]).closeStream(encodeStreamKeyResult, false));
                      closure_17[encodeStreamKeyResult] = timeout;
                      const obj4 = encodeStreamKeyResult(closure_2[18]);
                    }
                  }
                  if (selfStream) {
                    if (activeStreamForUser.state === constants.ENDED) {
                      callback(encodeStreamKeyResult(closure_2[18]).encodeStreamKey(activeStreamForUser));
                      const streamForUser = authStore.getStreamForUser(userId, guildId);
                      if (null != streamForUser) {
                        encodeStreamKeyResult(closure_2[16]).watchStream(streamForUser);
                        const obj3 = encodeStreamKeyResult(closure_2[16]);
                      }
                      const obj2 = encodeStreamKeyResult(closure_2[18]);
                    }
                  }
                }
              }
            }
          }
        });
      };
      tmp2Result.handleCallUpdate = (arg0) => {
        let channelId;
        let region;
        ({ channelId, region } = arg0);
        const currentUserActiveStream = authStore.getCurrentUserActiveStream();
        channelId = undefined;
        if (null != currentUserActiveStream) {
          channelId = currentUserActiveStream.channelId;
        }
        if (channelId === channelId) {
          callback5(tmp2Result(closure_2[18]).encodeStreamKey(currentUserActiveStream), region);
          const obj = tmp2Result(closure_2[18]);
        }
      };
      tmp2Result.handleChannelUpdates = (channels) => {
        let iter2;
        const currentUserActiveStream = authStore.getCurrentUserActiveStream();
        if (null != currentUserActiveStream) {
          const tmp3 = callback(channels.channels);
          let iter = tmp3();
          if (!iter.done) {
            do {
              let value = iter.value;
              if (currentUserActiveStream.channelId === value.id) {
                let tmp4 = closure_29;
                let tmp5 = closure_0;
                let tmp6 = closure_2;
                let obj = closure_0(closure_2[18]);
                let tmp7 = closure_29(obj.encodeStreamKey(currentUserActiveStream), value.rtcRegion);
              }
              iter2 = tmp3();
              iter = iter2;
            } while (!iter2.done);
          }
        }
      };
      tmp2Result.actions = { STREAM_WATCH: tmp2Result.handleStreamWatch, STREAM_START: tmp2Result.handleStreamStart, STREAM_CREATE: tmp2Result.handleStreamCreate, STREAM_UPDATE: tmp2Result.handleStreamUpdate, STREAM_DELETE: tmp2Result.handleStreamDelete, STREAM_CLOSE: tmp2Result.handleStreamClose, CALL_UPDATE: tmp2Result.handleCallUpdate, CHANNEL_UPDATES: tmp2Result.handleChannelUpdates, VOICE_CHANNEL_SELECT: tmp2Result.handleVoiceChannelSelect, VOICE_STATE_UPDATES: tmp2Result.handleVoiceStateUpdates };
      return tmp2Result;
    }
  }
  const arg1 = BaseApplicationStreamingManager;
  callback2(BaseApplicationStreamingManager, arg0);
  return callback(BaseApplicationStreamingManager);
}(importDefault(dependencyMap[23]));
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/go_live/ApplicationStreamingManager.tsx");

export default tmp6;
