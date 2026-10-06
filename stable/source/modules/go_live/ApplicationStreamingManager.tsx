// Module ID: 17684
// Function ID: 17685
// Name: go_live/ApplicationStreamingManager
// Dependencies: [4859, 502, 2051, 4756, 4887, 2102, 4876, 1378, 4879, 1086, 12, 4979, 1103, 4889, 2046, 585, 6540, 8869, 17664, 2]

// Module 17684 (go_live/ApplicationStreamingManager)
import DurationsDefault from "Durations" /* 1103 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4889 */;
import StreamActionCreators from "StreamActionCreators" /* 4979 */;
import AVError from "AVError" /* 8869 */;
import AVErrorContext from "AVErrorContext" /* 17664 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4859 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4756 */;
import RTCRegionStore from "RTCRegionStore" /* 4887 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4876 */;
import UserStore from "UserStore" /* 1378 */;
import Constants_mod from "Constants" /* 4879 */;
import Constants_mod2 from "Constants" /* 1086 */;
import module_12 from "module_12" /* 12 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

let allActiveStreamKeys, channel, memberCount;

let GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT;
let STREAM_NOTIFY_GUILD_MAX_SIZE;
let c10;
let tmp;
let unpackModuleId;
const Timers = tmp(2046);
function updateRegion(encodeStreamKeyResult, preferredRegion) {
  if (preferredRegion == null) {
    preferredRegion = RTCRegionStore.getPreferredRegion();
  }
  const tmp3 = null != preferredRegion && preferredRegion !== RTCRegionStore.getRegion(StreamRTCConnectionStore.getHostname(encodeStreamKeyResult));
  if (tmp3) {
    const obj = StreamActionCreators;
    obj.changeStreamRegion(encodeStreamKeyResult, preferredRegion);
  }
}
let Constants = Constants_mod2;
({ GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT, STREAM_NOTIFY_GUILD_MAX_SIZE } = Constants);
Constants = Constants_mod2;
({ ApplicationStreamDeleteReasons: c10, ApplicationStreamStates: unpackModuleId } = Constants);
module_12.debounce(StreamActionCreators.notifyStreamStart, 1000);
let closure_12 = {};
let closure_13 = {};
let closure_14 = 3 * DurationsDefault.Millis.MINUTE;
let closure_15 = 5 * DurationsDefault.Millis.SECOND;
let closure_16 = 12 * DurationsDefault.Millis.SECOND;
let c17 = null;
const set = new Set();
class BaseApplicationStreamingManager extends AutomaticLifecycleManager {
  constructor() {
    const f131387 = (item) => {
      if (!streamMarkedFull.isStreamMarkedFull(item)) {
        set.delete(item);
      }
    };
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleStreamWatch = function handleStreamWatch(streamKey) {
      let isGuildStageVoiceResult;
      streamKey = streamKey.streamKey;
      const allowMultiple = streamKey.allowMultiple;
      let tmp = streamKey;
      let tmp2 = closure_2;
      let obj = streamKey(closure_2[13]);
      channel = channel.getChannel(obj.decodeStreamKey(streamKey).channelId);
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
      if (!allActiveStreamKeys.includes(streamKey)) {
        let timeout = closure_13[streamKey];
        let tmp4 = closure_13;
        if (timeout == null) {
          const self = this;
          const self2 = this;
          timeout = new tmp(tmp2[14]).Timeout();
        }
        tmp4[streamKey] = timeout;
        timeout.start(isGuildStageVoiceResult ? closure_16 : closure_15, () => {
          const obj = closure_2_1(closure_2_2[15]);
          const obj2 = { type: "STREAM_TIMED_OUT", streamKey: encodeStreamKeyResult };
          obj.dispatch(obj2);
        });
      }
      const tmp6 = closure_12;
      if (closure_12[streamKey] != null) {
        closure_12[streamKey].stop();
      }
      delete tmp6[streamKey];
      if (!allowMultiple) {
        const allActiveStreams = authStore.getAllActiveStreams();
        const item = allActiveStreams.forEach((ownerId) => {
          const obj = StreamKeyUtils;
          const encodeStreamKeyResult = obj.encodeStreamKey(ownerId);
          let tmp4 = ownerId.ownerId !== AuthenticationStore.getId();
          const tmp = require;
          const tmp2 = dependencyMap;
          if (tmp4) {
            tmp4 = encodeStreamKeyResult !== streamKey;
          }
          if (tmp4) {
            const tmpResult = tmp(tmp2[11]);
            tmpResult.stopStream(encodeStreamKeyResult, false);
          }
        });
      }
    };
    applyArgumentsResult.handleStreamStart = function handleStreamStart(channelId) {
      let guildId;
      let isGuildStageVoiceResult;
      let streamType;
      channelId = channelId.channelId;
      ({ streamType, guildId } = channelId);
      channel = ChannelStore.getChannel(channelId);
      let obj2 = StreamKeyUtils;
      let obj = { streamType, guildId, channelId, ownerId: AuthenticationStore.getId() };
      const encodeStreamKeyResult = obj2.encodeStreamKey(obj);
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
      if (!allActiveStreamKeys.includes(encodeStreamKeyResult)) {
        let timeout = closure_13[encodeStreamKeyResult];
        const tmp5 = closure_13;
        if (timeout == null) {
          const self = this;
          const self2 = this;
          timeout = new Timers.Timeout();
        }
        tmp5[encodeStreamKeyResult] = timeout;
        timeout.start(isGuildStageVoiceResult ? closure_16 : closure_15, () => {
          const obj = closure_2_1(closure_2_2[15]);
          const obj2 = { type: "STREAM_TIMED_OUT", streamKey: encodeStreamKeyResult };
          obj.dispatch(obj2);
        });
      }
      const result = require.platformHandleStreamStart(channelId);
    };
    applyArgumentsResult.handleStreamCreate = function handleStreamCreate(streamKey) {
      streamKey = streamKey.streamKey;
      const tmp = closure_1_13;
      if (closure_1_13[streamKey] != null) {
        closure_1_13[streamKey].stop();
      }
      delete tmp[streamKey];
      const item = set.forEach(f131387);
      const obj2 = StreamKeyUtils;
      const decodeStreamKeyResult = obj2.decodeStreamKey(streamKey);
      memberCount = memberCount.getMemberCount(decodeStreamKeyResult.guildId);
    };
    applyArgumentsResult.handleStreamUpdate = function handleStreamUpdate(streamKey) {
      streamKey = streamKey.streamKey;
      const tmp = closure_1_13;
      if (closure_1_13[streamKey] != null) {
        closure_1_13[streamKey].stop();
      }
      delete tmp[streamKey];
      const item = set.forEach(f131387);
    };
    applyArgumentsResult.handleStreamDelete = function handleStreamDelete(streamKey) {
      streamKey = streamKey.streamKey;
      const reason = streamKey.reason;
      const tmp = closure_13;
      if (closure_13[streamKey] != null) {
        closure_13[streamKey].stop();
      }
      delete tmp[streamKey];
      if (reason === constants.STREAM_FULL) {
        const obj2 = { type: AVError.AVError.STREAM_FULL };
        const reportAVError = AVError.reportAVError;
        AVError;
        const obj3 = AVErrorContext;
        const merged = Object.assign(obj3.getStreamErrorContext(streamKey));
        reportAVError(obj2);
        const obj4 = set;
        if (!set.has(streamKey)) {
          obj4.add(streamKey);
          const result = require.platformShowStreamFull();
        }
      }
    };
    applyArgumentsResult.handleStreamClose = function handleStreamClose(streamKey) {
      streamKey = streamKey.streamKey;
      const tmp = closure_1_12;
      if (closure_1_12[streamKey] != null) {
        closure_1_12[streamKey].stop();
      }
      delete tmp[streamKey];
      const tmp3 = closure_1_13;
      if (closure_1_13[streamKey] != null) {
        closure_1_13[streamKey].stop();
      }
      delete tmp3[streamKey];
    };
    applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(channelId) {
      let id;
      channelId = channelId.channelId;
      if (null != channelId) {
        c17 = null;
        const item = set.forEach(f131387);
        const allApplicationStreamsForChannel = authStore.getAllApplicationStreamsForChannel(channelId);
        const found = allApplicationStreamsForChannel.find((ownerId) => {
          let tmp = ownerId.ownerId !== id.getId();
          if (tmp) {
            isStreamMarkedFull = isStreamMarkedFull.isStreamMarkedFull;
            const obj = closure_1_0(closure_1_2[13]);
            tmp = !isStreamMarkedFull(obj.encodeStreamKey(ownerId));
          }
          return tmp;
        });
        if (null != found) {
          const ownerId = found.ownerId;
          if (SelectedChannelStore.getVoiceChannelId() === channelId) {
            channel = ChannelStore.getChannel(channelId);
            if (null != channel) {
              if (channel.isDM()) {
                if (null == authStore.getActiveStreamForUser(ownerId, channel.getGuildId())) {
                  const streamForUser = obj3.getStreamForUser(ownerId, channel.getGuildId());
                  if (null != streamForUser) {
                    let obj = StreamKeyUtils;
                    const encodeStreamKeyResult = obj.encodeStreamKey(streamForUser);
                    const tmp2 = require;
                    const tmp3 = dependencyMap;
                    if (encodeStreamKeyResult !== c17) {
                      const tmp7 = !authStore.isStreamMarkedFull(encodeStreamKeyResult);
                      if (tmp7) {
                        c17 = encodeStreamKeyResult;
                        const tmp2Result = tmp2(tmp3[11]);
                        tmp2Result.watchStream(streamForUser, { noFocus: true });
                      }
                    }
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
      let item = voiceStates.forEach(function(item) {
        let channelId;
        let guildId;
        let selfStream;
        let streamMarkedFull;
        let userId;
        ({ userId, channelId, guildId, selfStream } = item);
        const result = closure_1_0.platformHandleVoiceStateUpdate(item);
        if (userId !== AuthenticationStore.getId()) {
          let tmp3 = !selfStream;
          if (selfStream) {
            tmp3 = null == channelId;
          }
          if (tmp3) {
            tmp3 = set.size > 0;
          }
          if (tmp3) {
            item = set.forEach(f131387);
          }
          if (null != channelId) {
            if (selfStream) {
              if (SelectedChannelStore.getVoiceChannelId() === channelId) {
                channel = ChannelStore.getChannel(channelId);
                if (null != channel) {
                  if (channel.isDM()) {
                    let obj = authStore;
                    if (null == authStore.getActiveStreamForUser(userId, channel.getGuildId())) {
                      const streamForUser = obj.getStreamForUser(userId, channel.getGuildId());
                      if (null != streamForUser) {
                        const obj2 = StreamKeyUtils;
                        const encodeStreamKeyResult = obj2.encodeStreamKey(streamForUser);
                        let tmp14 = encodeStreamKeyResult !== c17;
                        const tmp10 = require;
                        const tmp11 = dependencyMap;
                        if (tmp14) {
                          let flag2 = !obj.isStreamMarkedFull(encodeStreamKeyResult);
                          obj.isStreamMarkedFull(encodeStreamKeyResult);
                          if (flag2) {
                            c17 = encodeStreamKeyResult;
                            const tmp10Result = tmp10(tmp11[11]);
                            tmp10Result.watchStream(streamForUser, { noFocus: true });
                            flag2 = true;
                          }
                          tmp14 = flag2;
                        }
                      }
                    }
                  }
                }
              }
            }
            const activeStreamForUser = authStore.getActiveStreamForUser(userId, guildId);
            if (null != activeStreamForUser) {
              if (activeStreamForUser.channelId === channelId) {
                if (!selfStream) {
                  if (activeStreamForUser.state !== constants.ENDED) {
                    const obj5 = StreamKeyUtils;
                    const encodeStreamKeyResult1 = obj5.encodeStreamKey(activeStreamForUser);
                    let timeout = closure_2_12[encodeStreamKeyResult1];
                    const tmp19 = require;
                    const tmp20 = dependencyMap;
                    const tmp22 = closure_2_12;
                    if (timeout == null) {
                      const self = this;
                      const self2 = this;
                      timeout = new tmp19(tmp20[14]).Timeout();
                    }
                    timeout.start(closure_2_14, () => {
                      const obj = closure_2_0(closure_2_2[11]);
                      return obj.closeStream(encodeStreamKeyResult1, false);
                    });
                    tmp22[encodeStreamKeyResult1] = timeout;
                  }
                }
                if (selfStream) {
                  if (activeStreamForUser.state === constants.ENDED) {
                    const obj10 = StreamKeyUtils;
                    const obj11 = closure_2_12[obj10.encodeStreamKey(activeStreamForUser)];
                    const tmp33 = closure_2_12;
                    if (obj11 != null) {
                      obj11.stop();
                    }
                    delete tmp33[tmp32];
                    const streamForUser1 = obj4.getStreamForUser(userId, guildId);
                    if (null != streamForUser1) {
                      const isStreamMarkedFull = obj4.isStreamMarkedFull;
                      const tmp30Result = StreamKeyUtils;
                      if (!isStreamMarkedFull(tmp30Result.encodeStreamKey(streamForUser1))) {
                        const tmp30Result2 = StreamActionCreators;
                        tmp30Result2.watchStream(streamForUser1);
                      }
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
      const channelId = region.channelId;
      const currentUserActiveStream = authStore.getCurrentUserActiveStream();
      let channelId1;
      if (currentUserActiveStream != null) {
        channelId1 = currentUserActiveStream.channelId;
      }
      if (channelId1 === channelId) {
        const obj = StreamKeyUtils;
        const encodeStreamKeyResult = obj.encodeStreamKey(currentUserActiveStream);
        const tmp3 = require;
        const tmp4 = dependencyMap;
        if (region == null) {
          region = RTCRegionStore.getPreferredRegion();
        }
        const tmp7 = null != region && region !== RTCRegionStore.getRegion(StreamRTCConnectionStore.getHostname(encodeStreamKeyResult));
        if (tmp7) {
          const tmp3Result = tmp3(tmp4[11]);
          tmp3Result.changeStreamRegion(encodeStreamKeyResult, region);
        }
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
            let obj = StreamKeyUtils;
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
  }
}
let result = size.fileFinishedImporting("modules/go_live/ApplicationStreamingManager.tsx");

export default BaseApplicationStreamingManager;
