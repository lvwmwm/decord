// Module ID: 18315
// Function ID: 18316
// Name: go_live/ApplicationStreamingManager
// Dependencies: [4780, 502, 2045, 4678, 4808, 2099, 4797, 1376, 4800, 1078, 12, 4900, 1095, 4810, 2040, 577, 7365, 9681, 18295, 2]

// Module 18315 (go_live/ApplicationStreamingManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import DurationsDefault from "Durations" /* 1095 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4810 */;
import StreamActionCreators from "StreamActionCreators" /* 4900 */;
import AVError from "AVError" /* 9681 */;
import AVErrorContext from "AVErrorContext" /* 18295 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4678 */;
import RTCRegionStore from "RTCRegionStore" /* 4808 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4797 */;
import UserStore from "UserStore" /* 1376 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

const Timers = tmp(2040);
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
let Constants = fn(4800);
({ GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT, STREAM_NOTIFY_GUILD_MAX_SIZE } = Constants);
Constants = fn(1078);
({ ApplicationStreamDeleteReasons: c10, ApplicationStreamStates: closure_11 } = Constants);
const apply = fn(12);
apply.debounce(fn(4900).notifyStreamStart, 1000);
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
    channel = channel.getChannel(streamKey(4810).decodeStreamKey(streamKey).channelId);
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
          const encodeStreamKeyResult = applyArgumentsResult(4810).encodeStreamKey(ownerId);
          let tmp4 = ownerId.ownerId !== AuthenticationStore.getId();
          if (tmp4) {
            tmp4 = encodeStreamKeyResult !== streamKey;
          }
          if (tmp4) {
            applyArgumentsResult(4900).stopStream(encodeStreamKeyResult, false);
            const tmpResult = applyArgumentsResult(4900);
          }
        });
      }
    } else {
      let timeout = dependencyMap3[streamKey];
      if (timeout == null) {
        timeout = new streamKey(2040).Timeout();
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
    const obj2 = applyArgumentsResult(4810);
    memberCount = memberCount.getMemberCount(applyArgumentsResult(4810).decodeStreamKey(streamKey).guildId);
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
                  const encodeStreamKeyResult = applyArgumentsResult(4810).encodeStreamKey(streamForUser);
                  if (encodeStreamKeyResult !== c17) {
                    const isStreamMarkedFullResult = obj3.isStreamMarkedFull(encodeStreamKeyResult);
                    if (!isStreamMarkedFullResult) {
                      c17 = encodeStreamKeyResult;
                      tmp2(4900).watchStream(streamForUser, { noFocus: true });
                      const tmp2Result = tmp2(4900);
                    }
                  }
                  let obj = applyArgumentsResult(4810);
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
                      const encodeStreamKeyResult = applyArgumentsResult(4810).encodeStreamKey(streamForUser);
                      let tmp16 = encodeStreamKeyResult !== c17;
                      if (tmp16) {
                        const isStreamMarkedFullResult = obj.isStreamMarkedFull(encodeStreamKeyResult);
                        let flag2 = !isStreamMarkedFullResult;
                        if (!isStreamMarkedFullResult) {
                          c17 = encodeStreamKeyResult;
                          tmp12(4900).watchStream(streamForUser, { noFocus: true });
                          flag2 = true;
                          const tmp12Result = tmp12(4900);
                        }
                        tmp16 = flag2;
                      }
                      flag = tmp16;
                      const obj2 = applyArgumentsResult(4810);
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
                  const encodeStreamKeyResult1 = applyArgumentsResult(4810).encodeStreamKey(activeStreamForUser);
                  let timeout = dependencyMap2[encodeStreamKeyResult1];
                  if (timeout == null) {
                    timeout = new tmp21(2040).Timeout();
                  }
                  timeout.start(closure_2_14, () => closure_2_0(dependencyMap[11]).closeStream(encodeStreamKeyResult1, false));
                  dependencyMap2[encodeStreamKeyResult1] = timeout;
                  const obj5 = applyArgumentsResult(4810);
                  tmp21 = applyArgumentsResult;
                }
              }
              if (selfStream) {
                if (activeStreamForUser.state === constants.ENDED) {
                  const obj10 = applyArgumentsResult(4810);
                  const obj11 = dependencyMap2[obj10.encodeStreamKey(obj10, activeStreamForUser)];
                  if (obj11 != null) {
                    obj11.stop();
                  }
                  delete tmp[tmp2];
                  const streamForUser1 = obj4.getStreamForUser(userId, guildId);
                  if (null != streamForUser1) {
                    if (!obj4.isStreamMarkedFull(tmp34Result.encodeStreamKey(streamForUser1))) {
                      tmp34(4900).watchStream(streamForUser1);
                      const tmp34Result2 = tmp34(4900);
                    }
                    tmp34Result = tmp34(4810);
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
      const encodeStreamKeyResult = applyArgumentsResult(4810).encodeStreamKey(currentUserActiveStream);
      if (region == null) {
        region = RTCRegionStore.getPreferredRegion();
      }
      let tmp7 = null != region;
      if (tmp7) {
        tmp7 = region !== RTCRegionStore.getRegion(StreamRTCConnectionStore.getHostname(encodeStreamKeyResult));
      }
      if (tmp7) {
        tmp3(4900).changeStreamRegion(encodeStreamKeyResult, region);
        const tmp3Result = tmp3(4900);
      }
      const obj = applyArgumentsResult(4810);
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
          let obj = applyArgumentsResult(4810);
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
