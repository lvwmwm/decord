// Module ID: 18317
// Function ID: 18318
// Name: go_live/ApplicationStreamingManager
// Dependencies: [4810, 502, 2041, 4707, 4838, 2095, 4827, 1372, 4830, 1074, 12, 4930, 1091, 4840, 2036, 573, 7395, 9718, 18297, 2]

// Module 18317 (go_live/ApplicationStreamingManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4840 */;
import StreamActionCreators from "StreamActionCreators" /* 4930 */;
import AVError from "AVError" /* 9718 */;
import AVErrorContext from "AVErrorContext" /* 18297 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4810 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4707 */;
import RTCRegionStore from "RTCRegionStore" /* 4838 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4827 */;
import UserStore from "UserStore" /* 1372 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

const Timers = tmp(2036);
require = fn;
function updateRegion(encodeStreamKeyResult, preferredRegion) {
  if (preferredRegion == null) {
    preferredRegion = RTCRegionStore.getPreferredRegion();
  }
  let tmp3 = null != preferredRegion;
  if (tmp3) {
    tmp3 = preferredRegion !== RTCRegionStore.getRegion(StreamRTCConnectionStore.getHostname(encodeStreamKeyResult));
  }
  if (tmp3) {
    StreamActionCreators.changeStreamRegion(encodeStreamKeyResult, preferredRegion);
  }
}
let Constants = fn(4830);
({ GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT, STREAM_NOTIFY_GUILD_MAX_SIZE } = Constants);
Constants = fn(1074);
({ ApplicationStreamDeleteReasons: c10, ApplicationStreamStates: closure_11 } = Constants);
const apply = fn(12);
apply.debounce(fn(4930).notifyStreamStart, 1000);
let closure_12 = {};
let closure_13 = {};
let closure_14 = 3 * DurationsDefault.Millis.MINUTE;
let closure_15 = 5 * DurationsDefault.Millis.SECOND;
let closure_16 = 12 * DurationsDefault.Millis.SECOND;
let c17 = null;
const set = new Set();
const prototype = function BaseApplicationStreamingManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.handleStreamWatch = function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    channel = channel.getChannel(streamKey(4840).decodeStreamKey(streamKey).channelId);
    if (channel != null) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    closure_129_0 = streamKey;
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    if (allActiveStreamKeys.includes(streamKey)) {
      if (dependencyMap2[streamKey] != null) {
        obj5.stop();
      }
      delete tmp[tmp2];
      if (!streamKey.allowMultiple) {
        const allActiveStreams = authStore.getAllActiveStreams();
        const item = allActiveStreams.forEach((ownerId) => {
          const encodeStreamKeyResult = applyArgumentsResult(4840).encodeStreamKey(ownerId);
          let tmp4 = ownerId.ownerId !== AuthenticationStore.getId();
          if (tmp4) {
            tmp4 = encodeStreamKeyResult !== streamKey;
          }
          if (tmp4) {
            applyArgumentsResult(4930).stopStream(encodeStreamKeyResult, false);
            const tmpResult = applyArgumentsResult(4930);
          }
        });
      }
    } else {
      let timeout = dependencyMap3[streamKey];
      if (timeout == null) {
        timeout = new streamKey(2036).Timeout();
      }
      dependencyMap3[streamKey] = timeout;
      timeout.start(isGuildStageVoiceResult ? closure_16 : closure_15, () => {
        DispatcherDefault.dispatch({ type: "STREAM_TIMED_OUT", streamKey: encodeStreamKeyResult });
      });
    }
  };
  applyArgumentsResult.handleStreamStart = function handleStreamStart(channelId) {
    channelId = channelId.channelId;
    ({ streamType, guildId } = channelId);
    channel = ChannelStore.getChannel(channelId);
    const obj2 = StreamKeyUtils;
    const encodeStreamKeyResult = obj2.encodeStreamKey({ streamType, guildId, channelId, ownerId: AuthenticationStore.getId() });
    if (channel != null) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    closure_0 = encodeStreamKeyResult;
    allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    if (allActiveStreamKeys.includes(encodeStreamKeyResult)) {
      const result = applyArgumentsResult.platformHandleStreamStart(channelId);
    } else {
      let timeout = dependencyMap3[encodeStreamKeyResult];
      if (timeout == null) {
        timeout = new Timers.Timeout();
      }
      dependencyMap3[encodeStreamKeyResult] = timeout;
      timeout.start(isGuildStageVoiceResult ? closure_16 : closure_15, () => {
        DispatcherDefault.dispatch({ type: "STREAM_TIMED_OUT", streamKey: encodeStreamKeyResult });
      });
    }
  };
  applyArgumentsResult.handleStreamCreate = function handleStreamCreate(streamKey) {
    streamKey = streamKey.streamKey;
    if (dependencyMap3[streamKey] != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    const item = set.forEach((item) => {
      if (!streamMarkedFull.isStreamMarkedFull(item)) {
        set.delete(item);
      }
    });
    const obj2 = applyArgumentsResult(4840);
    memberCount = memberCount.getMemberCount(applyArgumentsResult(4840).decodeStreamKey(streamKey).guildId);
  };
  applyArgumentsResult.handleStreamUpdate = function handleStreamUpdate(arg0) {
    if (dependencyMap3[arg0.streamKey] != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    const item = set.forEach((item) => {
      if (!streamMarkedFull.isStreamMarkedFull(item)) {
        set.delete(item);
      }
    });
  };
  applyArgumentsResult.handleStreamDelete = function handleStreamDelete(streamKey) {
    streamKey = streamKey.streamKey;
    if (dependencyMap3[streamKey] != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    if (streamKey.reason === constants.STREAM_FULL) {
      const obj3 = { type: AVError.AVError.STREAM_FULL };
      const obj2 = AVError;
      const merged = Object.assign(AVErrorContext.getStreamErrorContext(streamKey));
      obj2.reportAVError(obj3);
      if (!set.has(streamKey)) {
        obj5.add(streamKey);
        const result = applyArgumentsResult.platformShowStreamFull();
      }
      obj5 = set;
    }
  };
  applyArgumentsResult.handleStreamClose = function handleStreamClose(streamKey) {
    streamKey = streamKey.streamKey;
    if (dependencyMap2[streamKey] != null) {
      obj.stop();
    }
    delete tmp3[tmp2];
    if (dependencyMap3[streamKey] != null) {
      obj2.stop();
    }
    delete tmp[tmp2];
  };
  applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      c17 = null;
      const item = set.forEach((item) => {
        if (!streamMarkedFull.isStreamMarkedFull(item)) {
          set.delete(item);
        }
      });
      const allApplicationStreamsForChannel = authStore.getAllApplicationStreamsForChannel(channelId);
      const found = allApplicationStreamsForChannel.find((ownerId) => {
        let tmp = ownerId.ownerId !== id.getId();
        if (tmp) {
          tmp = !streamMarkedFull.isStreamMarkedFull(closure_1_0(dependencyMap[13]).encodeStreamKey(ownerId));
          const obj = closure_1_0(dependencyMap[13]);
        }
        return tmp;
      });
      if (null != found) {
        const ownerId = found.ownerId;
        if (SelectedChannelStore.getVoiceChannelId() === channelId) {
          channel = ChannelStore.getChannel(channelId);
          if (null != channel) {
            if (channel.isDM()) {
              if (null == obj3.getActiveStreamForUser(ownerId, channel.getGuildId())) {
                const streamForUser = obj3.getStreamForUser(ownerId, channel.getGuildId());
                if (null != streamForUser) {
                  const encodeStreamKeyResult = applyArgumentsResult(4840).encodeStreamKey(streamForUser);
                  if (encodeStreamKeyResult !== c17) {
                    const isStreamMarkedFullResult = obj3.isStreamMarkedFull(encodeStreamKeyResult);
                    if (!isStreamMarkedFullResult) {
                      c17 = encodeStreamKeyResult;
                      tmp2(4930).watchStream(streamForUser, { noFocus: true });
                      const tmp2Result = tmp2(4930);
                    }
                  }
                  let obj = applyArgumentsResult(4840);
                  tmp2 = applyArgumentsResult;
                }
              }
            }
          }
        }
      }
    }
  };
  applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let item = voiceStates.forEach((item) => {
      ({ userId, channelId, guildId, selfStream } = item);
      const result = closure_1_0.platformHandleVoiceStateUpdate(item);
      if (userId !== AuthenticationStore.getId()) {
        let tmp5 = !selfStream;
        if (selfStream) {
          tmp5 = null == channelId;
        }
        if (tmp5) {
          tmp5 = set.size > 0;
        }
        if (tmp5) {
          item = set.forEach((item) => {
            if (!streamMarkedFull.isStreamMarkedFull(item)) {
              set.delete(item);
            }
          });
        }
        if (null != channelId) {
          if (selfStream) {
            let flag = false;
            if (SelectedChannelStore.getVoiceChannelId() === channelId) {
              channel = ChannelStore.getChannel(channelId);
              flag = false;
              if (null != channel) {
                if (channel.isDM()) {
                  flag = false;
                  if (null == authStore.getActiveStreamForUser(userId, channel.getGuildId())) {
                    const streamForUser = obj.getStreamForUser(userId, channel.getGuildId());
                    flag = false;
                    if (null != streamForUser) {
                      const encodeStreamKeyResult = applyArgumentsResult(4840).encodeStreamKey(streamForUser);
                      let tmp16 = encodeStreamKeyResult !== c17;
                      if (tmp16) {
                        const isStreamMarkedFullResult = obj.isStreamMarkedFull(encodeStreamKeyResult);
                        let flag2 = !isStreamMarkedFullResult;
                        if (!isStreamMarkedFullResult) {
                          c17 = encodeStreamKeyResult;
                          tmp12(4930).watchStream(streamForUser, { noFocus: true });
                          flag2 = true;
                          const tmp12Result = tmp12(4930);
                        }
                        tmp16 = flag2;
                      }
                      flag = tmp16;
                      const obj2 = applyArgumentsResult(4840);
                      tmp12 = applyArgumentsResult;
                    }
                  }
                } else {
                  flag = false;
                }
              }
            }
          }
          const activeStreamForUser = authStore.getActiveStreamForUser(userId, guildId);
          if (null != activeStreamForUser) {
            if (activeStreamForUser.channelId === channelId) {
              if (!selfStream) {
                if (activeStreamForUser.state !== constants.ENDED) {
                  const encodeStreamKeyResult1 = applyArgumentsResult(4840).encodeStreamKey(activeStreamForUser);
                  let timeout = dependencyMap2[encodeStreamKeyResult1];
                  if (timeout == null) {
                    timeout = new tmp21(2036).Timeout();
                  }
                  timeout.start(closure_2_14, () => closure_2_0(dependencyMap[11]).closeStream(encodeStreamKeyResult1, false));
                  dependencyMap2[encodeStreamKeyResult1] = timeout;
                  const obj5 = applyArgumentsResult(4840);
                  tmp21 = applyArgumentsResult;
                }
              }
              if (selfStream) {
                if (activeStreamForUser.state === constants.ENDED) {
                  const obj10 = applyArgumentsResult(4840);
                  const obj11 = dependencyMap2[obj10.encodeStreamKey(obj10, activeStreamForUser)];
                  if (obj11 != null) {
                    obj11.stop();
                  }
                  delete tmp[tmp2];
                  const streamForUser1 = obj4.getStreamForUser(userId, guildId);
                  if (null != streamForUser1) {
                    if (!obj4.isStreamMarkedFull(tmp34Result.encodeStreamKey(streamForUser1))) {
                      tmp34(4930).watchStream(streamForUser1);
                      const tmp34Result2 = tmp34(4930);
                    }
                    tmp34Result = tmp34(4840);
                  }
                }
              }
            }
          }
        }
      }
    });
  };
  applyArgumentsResult.handleCallUpdate = function handleCallUpdate(region) {
    region = region.region;
    const currentUserActiveStream = authStore.getCurrentUserActiveStream();
    let channelId;
    if (currentUserActiveStream != null) {
      channelId = currentUserActiveStream.channelId;
    }
    if (channelId === region.channelId) {
      const encodeStreamKeyResult = applyArgumentsResult(4840).encodeStreamKey(currentUserActiveStream);
      if (region == null) {
        region = RTCRegionStore.getPreferredRegion();
      }
      let tmp7 = null != region;
      if (tmp7) {
        tmp7 = region !== RTCRegionStore.getRegion(StreamRTCConnectionStore.getHostname(encodeStreamKeyResult));
      }
      if (tmp7) {
        tmp3(4930).changeStreamRegion(encodeStreamKeyResult, region);
        const tmp3Result = tmp3(4930);
      }
      const obj = applyArgumentsResult(4840);
      tmp3 = applyArgumentsResult;
    }
  };
  applyArgumentsResult.handleChannelUpdates = function handleChannelUpdates(channels) {
    channels = channels.channels;
    const currentUserActiveStream = authStore.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      const iter = channels[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (currentUserActiveStream.channelId === nextResult.id) {
          let obj = applyArgumentsResult(4840);
          let tmp11 = updateRegion(obj.encodeStreamKey(currentUserActiveStream), tmp6.rtcRegion);
        }
        continue;
      }
    }
  };
  applyArgumentsResult.handleSessionReset = function handleSessionReset() {
    set.clear();
  };
  applyArgumentsResult.actions = { STREAM_WATCH: applyArgumentsResult.handleStreamWatch, STREAM_START: applyArgumentsResult.handleStreamStart, STREAM_CREATE: applyArgumentsResult.handleStreamCreate, STREAM_UPDATE: applyArgumentsResult.handleStreamUpdate, STREAM_DELETE: applyArgumentsResult.handleStreamDelete, STREAM_CLOSE: applyArgumentsResult.handleStreamClose, CALL_UPDATE: applyArgumentsResult.handleCallUpdate, CHANNEL_UPDATES: applyArgumentsResult.handleChannelUpdates, VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, CONNECTION_CLOSED: applyArgumentsResult.handleSessionReset, LOGOUT: applyArgumentsResult.handleSessionReset };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp7 {
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/ApplicationStreamingManager.tsx");

export default prototype;
