// Module ID: 16597
// Function ID: 129377
// Name: _createForOfIteratorHelperLoose
// Dependencies: [7, 6, 15, 17, 18, 4149, 1194, 1348, 4051, 4223, 1906, 4216, 1849, 4195, 653, 22, 4309, 664, 4194, 4015, 686, 8896, 16575, 5078, 2]

// Module 16597 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "apply";
import closure_6 from "set";
import isStreamKey from "isStreamKey";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import "_isNativeReflectConstruct";
import StreamIssueReportReasons from "StreamIssueReportReasons";
import ME from "ME";
import apply from "getCommonErrorContext";
import set from "_possibleConstructorReturn";

let GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT;
let STREAM_NOTIFY_GUILD_MAX_SIZE;
let closure_15;
let closure_16;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
function pruneShownFullStreamModals() {
  const item = set.forEach((arg0) => {
    if (!outer1_8.isStreamMarkedFull(arg0)) {
      outer1_23.delete(arg0);
    }
  });
}
function clearSpectatorReconnectionTimer(arg0) {
  if (null != table[arg0]) {
    obj.stop();
  }
  delete tmp[tmp2];
}
function clearConnectTimeout(arg0) {
  if (null != dependencyMap[arg0]) {
    obj.stop();
  }
  delete tmp[tmp2];
}
function maybeAutowatchStream(channelId) {
  if (voiceChannelId.getVoiceChannelId() !== channelId) {
    return false;
  } else {
    channel = channel.getChannel(channelId);
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
          let obj = require(4194) /* isStreamKey */;
          const encodeStreamKeyResult = obj.encodeStreamKey(streamForUser);
          let tmp6 = encodeStreamKeyResult !== c22;
          if (tmp6) {
            let flag2 = !authStore.isStreamMarkedFull(encodeStreamKeyResult);
            if (flag2) {
              c22 = encodeStreamKeyResult;
              obj = { noFocus: true };
              require(4309) /* isVoiceChannelFull */.watchStream(streamForUser, obj);
              flag2 = true;
              const obj2 = require(4309) /* isVoiceChannelFull */;
            }
            tmp6 = flag2;
          }
          return tmp6;
        }
      }
    }
  }
}
function updateRegion(closure_0, preferredRegion) {
  if (null == preferredRegion) {
    preferredRegion = store.getPreferredRegion();
  }
  let tmp3 = null != preferredRegion;
  if (tmp3) {
    tmp3 = preferredRegion !== store.getRegion(store2.getHostname(closure_0));
  }
  if (tmp3) {
    require(4309) /* isVoiceChannelFull */.changeStreamRegion(closure_0, preferredRegion);
    const obj = require(4309) /* isVoiceChannelFull */;
  }
}
function maybeStartConnectTimeout(arg0, arg1) {
  const _require = arg0;
  const allActiveStreamKeys = store2.getAllActiveStreamKeys();
  if (!allActiveStreamKeys.includes(arg0)) {
    let timeout = dependencyMap[arg0];
    if (null == timeout) {
      const Timeout = _require(4015).Timeout;
      const prototype = Timeout.prototype;
      timeout = new Timeout();
    }
    dependencyMap[arg0] = timeout;
    timeout.start(arg1 ? closure_21 : closure_20, () => {
      let obj = outer1_1(outer1_2[20]);
      obj = { type: "STREAM_TIMED_OUT", streamKey: closure_0 };
      obj.dispatch(obj);
    });
  }
}
({ GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT, STREAM_NOTIFY_GUILD_MAX_SIZE } = StreamIssueReportReasons);
({ ApplicationStreamDeleteReasons: closure_15, ApplicationStreamStates: closure_16 } = ME);
apply.debounce(require("isVoiceChannelFull").notifyStreamStart, 1000);
let closure_17 = {};
let closure_18 = {};
let closure_19 = 3 * require("set").Millis.MINUTE;
let closure_20 = 5 * require("set").Millis.SECOND;
let closure_21 = 12 * require("set").Millis.SECOND;
let c22 = null;
let set = new Set();
let result = set.fileFinishedImporting("modules/go_live/ApplicationStreamingManager.tsx");

export default ((arg0) => {
  class BaseApplicationStreamingManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_26()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.handleStreamWatch = (streamKey) => {
        streamKey = streamKey.streamKey;
        const channel = outer2_10.getChannel(BaseApplicationStreamingManager(outer2_2[18]).decodeStreamKey(streamKey).channelId);
        let isGuildStageVoiceResult;
        if (null != channel) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        outer2_32(streamKey, isGuildStageVoiceResult);
        outer2_28(streamKey);
        if (!streamKey.allowMultiple) {
          const allActiveStreams = outer2_8.getAllActiveStreams();
          const item = allActiveStreams.forEach((ownerId) => {
            const encodeStreamKeyResult = BaseApplicationStreamingManager(outer3_2[18]).encodeStreamKey(ownerId);
            let tmp2 = ownerId.ownerId !== outer3_9.getId();
            if (tmp2) {
              tmp2 = encodeStreamKeyResult !== streamKey;
            }
            if (tmp2) {
              BaseApplicationStreamingManager(outer3_2[16]).stopStream(encodeStreamKeyResult, false);
              const obj2 = BaseApplicationStreamingManager(outer3_2[16]);
            }
          });
        }
      };
      tmp2Result.handleStreamStart = (channelId) => {
        let guildId;
        let streamType;
        channelId = channelId.channelId;
        ({ streamType, guildId } = channelId);
        const channel = outer2_10.getChannel(channelId);
        const obj2 = BaseApplicationStreamingManager(outer2_2[18]);
        const tmp = outer2_32;
        let isGuildStageVoiceResult;
        const obj = { streamType, guildId, channelId, ownerId: outer2_9.getId() };
        if (null != channel) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        tmp(obj2.encodeStreamKey({ streamType, guildId, channelId, ownerId: outer2_9.getId() }), isGuildStageVoiceResult);
        const result = tmp2Result.platformHandleStreamStart(channelId);
      };
      tmp2Result.handleStreamCreate = (streamKey) => {
        streamKey = streamKey.streamKey;
        outer2_29(streamKey);
        outer2_27();
        const obj = BaseApplicationStreamingManager(outer2_2[18]);
        const memberCount = outer2_11.getMemberCount(BaseApplicationStreamingManager(outer2_2[18]).decodeStreamKey(streamKey).guildId);
      };
      tmp2Result.handleStreamUpdate = (streamKey) => {
        outer2_29(streamKey.streamKey);
        outer2_27();
      };
      tmp2Result.handleStreamDelete = (streamKey) => {
        streamKey = streamKey.streamKey;
        outer2_29(streamKey);
        if (streamKey.reason === outer2_15.STREAM_FULL) {
          let obj = BaseApplicationStreamingManager(outer2_2[21]);
          obj = { type: BaseApplicationStreamingManager(outer2_2[21]).AVError.STREAM_FULL };
          const merged = Object.assign(BaseApplicationStreamingManager(outer2_2[22]).getStreamErrorContext(streamKey));
          obj.reportAVError(obj);
          if (!outer2_23.has(streamKey)) {
            outer2_23.add(streamKey);
            const result = tmp2Result.platformShowStreamFull();
          }
          const obj3 = BaseApplicationStreamingManager(outer2_2[22]);
        }
      };
      tmp2Result.handleStreamClose = (streamKey) => {
        streamKey = streamKey.streamKey;
        outer2_28(streamKey);
        outer2_29(streamKey);
      };
      tmp2Result.handleVoiceChannelSelect = (channelId) => {
        channelId = channelId.channelId;
        if (null != channelId) {
          const outer2_22 = null;
          outer2_27();
          const allApplicationStreamsForChannel = outer2_8.getAllApplicationStreamsForChannel(channelId);
          const found = allApplicationStreamsForChannel.find((ownerId) => {
            let tmp = ownerId.ownerId !== outer3_9.getId();
            if (tmp) {
              tmp = !outer3_8.isStreamMarkedFull(BaseApplicationStreamingManager(outer3_2[18]).encodeStreamKey(ownerId));
              const obj = BaseApplicationStreamingManager(outer3_2[18]);
            }
            return tmp;
          });
          if (null != found) {
            outer2_30(channelId, found.ownerId);
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
          const result = outer1_0.platformHandleVoiceStateUpdate(arg0);
          if (userId !== outer3_9.getId()) {
            let tmp3 = !selfStream;
            if (!tmp3) {
              tmp3 = null == channelId;
            }
            if (tmp3) {
              tmp3 = outer3_23.size > 0;
            }
            if (tmp3) {
              outer3_27();
            }
            if (null != channelId) {
              const activeStreamForUser = outer3_8.getActiveStreamForUser(userId, guildId);
              if (null != activeStreamForUser) {
                if (activeStreamForUser.channelId === channelId) {
                  if (!selfStream) {
                    if (activeStreamForUser.state !== outer3_16.ENDED) {
                      const encodeStreamKeyResult = BaseApplicationStreamingManager(outer3_2[18]).encodeStreamKey(activeStreamForUser);
                      let closure_0 = encodeStreamKeyResult;
                      let timeout = outer3_17[encodeStreamKeyResult];
                      if (null == timeout) {
                        const Timeout = BaseApplicationStreamingManager(outer3_2[19]).Timeout;
                        const prototype = Timeout.prototype;
                        timeout = new Timeout();
                      }
                      timeout.start(outer3_19, () => BaseApplicationStreamingManager(outer4_2[16]).closeStream(closure_0, false));
                      outer3_17[encodeStreamKeyResult] = timeout;
                      const obj4 = BaseApplicationStreamingManager(outer3_2[18]);
                    }
                  }
                  if (selfStream) {
                    if (activeStreamForUser.state === outer3_16.ENDED) {
                      outer3_28(BaseApplicationStreamingManager(outer3_2[18]).encodeStreamKey(activeStreamForUser));
                      const streamForUser = outer3_8.getStreamForUser(userId, guildId);
                      if (null != streamForUser) {
                        if (!outer3_8.isStreamMarkedFull(obj2.encodeStreamKey(streamForUser))) {
                          BaseApplicationStreamingManager(outer3_2[16]).watchStream(streamForUser);
                          const obj3 = BaseApplicationStreamingManager(outer3_2[16]);
                        }
                        obj2 = BaseApplicationStreamingManager(outer3_2[18]);
                      }
                      const obj5 = BaseApplicationStreamingManager(outer3_2[18]);
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
        const currentUserActiveStream = outer2_8.getCurrentUserActiveStream();
        channelId = undefined;
        if (null != currentUserActiveStream) {
          channelId = currentUserActiveStream.channelId;
        }
        if (channelId === channelId) {
          outer2_31(BaseApplicationStreamingManager(outer2_2[18]).encodeStreamKey(currentUserActiveStream), region);
          const obj = BaseApplicationStreamingManager(outer2_2[18]);
        }
      };
      tmp2Result.handleChannelUpdates = (channels) => {
        let iter2;
        const currentUserActiveStream = outer2_8.getCurrentUserActiveStream();
        if (null != currentUserActiveStream) {
          const tmp3 = outer2_24(channels.channels);
          let iter = tmp3();
          if (!iter.done) {
            do {
              let value = iter.value;
              if (currentUserActiveStream.channelId === value.id) {
                let tmp4 = outer2_31;
                let tmp5 = BaseApplicationStreamingManager;
                let tmp6 = outer2_2;
                let obj = BaseApplicationStreamingManager(outer2_2[18]);
                let tmp7 = outer2_31(obj.encodeStreamKey(currentUserActiveStream), value.rtcRegion);
              }
              iter2 = tmp3();
              iter = iter2;
            } while (!iter2.done);
          }
        }
      };
      tmp2Result.handleSessionReset = () => {
        outer2_23.clear();
      };
      tmp2Result.actions = { STREAM_WATCH: tmp2Result.handleStreamWatch, STREAM_START: tmp2Result.handleStreamStart, STREAM_CREATE: tmp2Result.handleStreamCreate, STREAM_UPDATE: tmp2Result.handleStreamUpdate, STREAM_DELETE: tmp2Result.handleStreamDelete, STREAM_CLOSE: tmp2Result.handleStreamClose, CALL_UPDATE: tmp2Result.handleCallUpdate, CHANNEL_UPDATES: tmp2Result.handleChannelUpdates, VOICE_CHANNEL_SELECT: tmp2Result.handleVoiceChannelSelect, VOICE_STATE_UPDATES: tmp2Result.handleVoiceStateUpdates, CONNECTION_CLOSED: tmp2Result.handleSessionReset, LOGOUT: tmp2Result.handleSessionReset };
      return tmp2Result;
    }
  }
  callback2(BaseApplicationStreamingManager, arg0);
  return callback(BaseApplicationStreamingManager);
})(require("AutomaticLifecycleManager"));
