// Module ID: 18962
// Function ID: 18963
// Name: SoundPlayer
// Dependencies: [19, 4857, 2040, 16249, 6838, 6840, 5760, 4862, 6708, 502, 4858, 4880, 2007, 10992, 5759, 4912, 6750, 5674, 5762, 1072, 6841, 21, 504, 11011, 18242, 6043, 6711, 18963, 4930, 1380, 6843, 10863, 7413, 2]
// Exports: default

// Module 18962 (SoundPlayer)
import EmbeddedActivitiesStore2 from "EmbeddedActivitiesStore" /* 4857 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import SoundUtils from "SoundUtils" /* 11011 */;
import VoiceConnectFeedbackExperimentDefault from "VoiceConnectFeedbackExperiment" /* 18242 */;
import _modDef18963 from "module_18963" /* 18963 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 16249 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import FramesStore from "FramesStore" /* 6840 */;
import GameConsoleStore from "GameConsoleStore" /* 5760 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10992 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SpeakingStore from "SpeakingStore" /* 6750 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5762 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const EmbeddedActivitiesStore = EmbeddedActivitiesStore2;
let allActiveStreams, applicationId, connectedActivityLocation, guild, id, isSoundDisabled, mainFrame, voiceStateForChannel;

let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_28;
let closure_29;
let closure_30;
function MuteDeafen() {
  let voiceChannelId;
  const items = [MediaEngineStore, SelectedChannelStore];
  const f116113 = () => {
    const obj = { inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound() };
    return obj;
  };
  const f116114 = (selfDeaf, arg1) => {
    let inVoiceChannel;
    let selfMute;
    ({ inVoiceChannel, selfMute, selfDeaf } = arg1);
    if (inVoiceChannel) {
      if (selfDeaf.selfDeaf !== selfDeaf) {
        let str2 = "undeafen";
        if (selfDeaf) {
          str2 = "deafen";
        }
        return str2;
      } else if (tmp) {
        let tmp4;
        if (selfDeaf.selfMute !== selfMute) {
          let str;
          if (tmp2) {
            const result = MediaEngineStore.notifyMuteUnmuteSoundWasSkipped();
          } else {
            str = "unmute";
            if (selfMute) {
              str = "mute";
            }
          }
          tmp4 = str;
        }
        return tmp4;
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function Camera() {
  let voiceChannelId;
  const items = [MediaEngineStore, SelectedChannelStore];
  const f116115 = () => {
    const obj = { videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() };
    return obj;
  };
  const f116116 = (videoEnabled, videoEnabled2) => {
    videoEnabled = videoEnabled2.videoEnabled;
    if (videoEnabled.videoEnabled !== videoEnabled) {
      if (videoEnabled.inVoiceChannel) {
        if (videoEnabled2.inVoiceChannel) {
          let str = "camera_off";
          if (videoEnabled) {
            str = "camera_on";
          }
          return str;
        }
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function RTCConnect() {
  let voiceChannelId;
  const items = [ChannelStore, RTCConnectionStore, SelectedChannelStore, GameConsoleStore];
  const f116117 = () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const wasEverRtcConnected = RTCConnectionStore.getWasEverRtcConnected();
    const state = RTCConnectionStore.getState();
    const obj = { channelType: type, guildId, connected: state === constants.RTC_CONNECTED, connectHasStarted: !wasEverRtcConnected && state !== constants.DISCONNECTED || state === constants.RTC_CONNECTED, awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), connectedRemote: null != GameConsoleStore.getRemoteSessionId() };
    return obj;
  };
  const f116118 = (connectedRemote, arg1) => {
    let awaitingRemote;
    let channelType;
    let channelType2;
    let connectHasStarted;
    let connected;
    let connected2;
    ({ channelType, connected, connectedRemote } = arg1);
    ({ channelType: channelType2, connected: connected2 } = connectedRemote);
    let tmp = connectedRemote;
    ({ connectHasStarted, awaitingRemote } = arg1);
    if (connectedRemote) {
      tmp = !connectedRemote.connectedRemote;
    }
    let tmp2 = !connectedRemote.connectHasStarted && connectHasStarted;
    if (!tmp2) {
      if (!(!connected2 && connected)) {
        if (!tmp) {
          if (connected2) {
            if (!connected) {
              if (!awaitingRemote) {
                if (!connectedRemote) {
                  return "disconnect";
                }
              }
            }
          }
        }
      }
    }
    if (tmp) {
      return "user_join";
    } else {
      const obj = f116117(f116118[24]);
      if (obj.getConfig({ location: "RTCConnect" }).rtcConnectionJoinSounds) {
        tmp2 = tmp3;
      }
      if (tmp2) {
        return "user_join";
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function Speaking() {
  let currentUserPTTActive;
  const items = [SpeakingStore];
  const f116119 = () => currentUserPTTActive.isCurrentUserPTTActive();
  const f116120 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      const isSelfMuteResult = MediaEngineStore.isSelfMute();
      if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
        if (!isSelfMuteResult) {
          let str = "ptt_stop";
          if (arg1) {
            str = "ptt_start";
          }
          return str;
        }
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function SelfMutedTemporarily() {
  const items = [MediaEngineStore, NotificationSettingsStore];
  const f116121 = () => MediaEngineStore.isSelfMutedTemporarily();
  const f116122 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      const isSelfMuteResult = MediaEngineStore.isSelfMute();
      if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "unmute";
          isSoundDisabled = isSoundDisabled.isSoundDisabled;
          if (arg1) {
            str = "mute";
          }
          if (!isSoundDisabled(str)) {
            let str2 = "ptt_start";
            if (arg1) {
              str2 = "ptt_stop";
            }
            return str2;
          }
        }
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function PriorityVAD() {
  let currentUserPrioritySpeaker;
  const items = [SpeakingStore];
  const f116123 = () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker();
  const f116124 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      const isSelfMuteResult = MediaEngineStore.isSelfMute();
      if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "ptt_stop";
          if (arg1) {
            str = "ptt_start";
          }
          return str;
        }
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function UserHasBeenMoved() {
  const items = [VoiceStateStore];
  const f116125 = () => VoiceStateStore.userHasBeenMovedVersion;
  const f116126 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function UserInvitedToSpeak() {
  const items = [SelectedChannelStore, VoiceStateStore];
  const f116127 = () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return items(f116128[25]).RequestToSpeakStates.NONE;
    } else {
      voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
      const obj = items(f116128[25]);
      return obj.getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  };
  const f116128 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === items(f116128[25]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function VoiceChannel() {
  let voiceStatesForChannel;
  let closure_0 = react.useRef([]);
  let items = [SelectedChannelStore, ApplicationStreamingStore, AuthenticationStore, VoiceStateStore, ChannelStore, RTCConnectionStore];
  const f116129 = () => {
    let first;
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    const currentUserId = id.getId();
    items = [];
    const items1 = [];
    allActiveStreams = allActiveStreams.getAllActiveStreams();
    let rtcUserIds = items1;
    let rtcConnected = false;
    let streamingUserIds = items;
    let voiceChannelUserCount;
    let channelType;
    if (null != voiceChannelId) {
      channel = channel.getChannel(voiceChannelId);
      let diff;
      let tmp10;
      if (null != channel) {
        const type = channel.type;
        const result = closure_1_22.countVoiceStatesForChannel(channel.id);
        let num = 0;
        if (inChannel.isInChannel(channel.id)) {
          num = 1;
        }
        diff = result - num;
        const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
        items = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
        tmp10 = type;
      }
      rtcUserIds = items1;
      rtcConnected = false;
      streamingUserIds = items;
      voiceChannelUserCount = diff;
      channelType = tmp10;
      const tmp14 = channelId.getChannelId() === voiceChannelId && obj2.getState() === constants2.RTC_CONNECTED;
      if (tmp14) {
        const _Array = Array;
        let userIds = obj2.getUserIds();
        if (userIds == null) {
          userIds = [];
        }
        const fromResult = from(userIds);
        rtcUserIds = fromResult.filter((item) => item !== currentUserId);
        rtcConnected = true;
        streamingUserIds = items;
        voiceChannelUserCount = diff;
        channelType = tmp10;
      }
    }
    if (1 === allActiveStreams.length) {
      first = allActiveStreams[0];
    } else {
      first = obj.getCurrentUserActiveStream();
    }
    let state;
    if (first != null) {
      state = first.state;
    }
    if (state === constants.CONNECTING) {
      first = null;
    }
    let singleActiveStreamViewerCount = 0;
    let singleActiveStreamKey = null;
    if (null != first) {
      const obj3 = items(f116130[26]);
      const encodeStreamKeyResult = obj3.encodeStreamKey(first);
      const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
      singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
      singleActiveStreamKey = encodeStreamKeyResult;
    }
    return { channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds, singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId, allActiveStreams, rtcConnected, rtcUserIds };
  };
  const f116130 = (rtcConnected, arg1) => {
    let channelType;
    let closure_129_2;
    let keys;
    let rtcUserIds;
    let singleActiveStreamKey;
    let singleActiveStreamViewerCount;
    let streamingUserIds;
    let streamingUserIds2;
    let tmp2;
    let voiceChannelUserCount;
    let voiceChannelUserCount2;
    closure_0 = rtcConnected;
    ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
    ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: closure_129_2, rtcConnected, rtcUserIds } = arg1);
    let closure_3;
    const tmp = items;
    if (rtcConnected) {
      let rtcConnected2 = rtcConnected.rtcConnected;
      if (!rtcConnected2) {
        rtcConnected2 = null == voiceChannelId;
      }
      keys = tmp2;
      if (!rtcConnected2) {
        const _Object = Object;
        keys = Object.keys(voiceStatesForChannel.getVoiceStatesForChannel(voiceChannelId));
      }
    } else {
      keys = [];
    }
    const tmp8 = _modDef18963(rtcUserIds, rtcConnected.rtcUserIds);
    const rtcConnected3 = rtcConnected.rtcConnected && rtcConnected.rtcUserIds.length <= 25 && tmp6(tmp7[27])(tmp8, keys).length > 0;
    const tmp9 = rtcConnected.rtcConnected && rtcConnected && rtcConnected.rtcUserIds.length <= 25 && tmp6(tmp7[27])(rtcConnected.rtcUserIds, rtcUserIds).length > 0;
    tmp.current = _modDef18963(keys, tmp8);
    if (rtcConnected.voiceChannelId === voiceChannelId) {
      if (null != voiceChannelId) {
        channel = channel.getChannel(voiceChannelId);
        let flag = false;
        if (null != channel) {
          const guildId = channel.getGuildId();
          flag = false;
          if (null != guildId) {
            guild = guild.getGuild(guildId);
            flag = null != guild && guild.afkChannelId === channel.id;
          }
        }
        if (!flag) {
          allActiveStreams = rtcConnected.allActiveStreams;
          const someResult = streamingUserIds.some((item) => {
            streamingUserIds = streamingUserIds.streamingUserIds;
            return !streamingUserIds.includes(item);
          });
          closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
          ({ streamingUserIds: streamingUserIds2, voiceChannelUserCount: voiceChannelUserCount2 } = rtcConnected);
          let tmp18 = null != voiceChannelUserCount2;
          const someResult1 = streamingUserIds2.some((item) => {
            const hasItem = streamingUserIds.includes(item);
            let tmp2 = !hasItem;
            if (tmp2) {
              const hasItem1 = item === closure_1_2 || closure_3.includes(item);
              tmp2 = hasItem1;
            }
            return tmp2;
          });
          if (tmp18) {
            tmp18 = null != voiceChannelUserCount;
          }
          if (tmp18) {
            tmp18 = voiceChannelUserCount2 <= 25;
          }
          let tmp19 = tmp18 && voiceChannelUserCount > voiceChannelUserCount2;
          if (tmp18) {
            tmp18 = voiceChannelUserCount < voiceChannelUserCount2;
          }
          let rtcConnectionJoinSounds = tmp19 || tmp18 || rtcConnected3 || tmp9;
          if (rtcConnectionJoinSounds) {
            const tmp6Result = VoiceConnectFeedbackExperimentDefault;
            rtcConnectionJoinSounds = tmp6Result.getConfig({ location: "VoiceChannel" }).rtcConnectionJoinSounds;
          }
          if (rtcConnectionJoinSounds) {
            tmp18 = tmp9;
            tmp19 = rtcConnected3;
          }
          let str = "stream_started";
          if (!someResult) {
            let str2 = "stream_ended";
            if (!someResult1) {
              if (rtcConnected.singleActiveStreamViewerCount <= 25) {
                let str3;
                if (null != singleActiveStreamKey && rtcConnected.singleActiveStreamKey === singleActiveStreamKey) {
                  str3 = "stream_user_joined";
                }
                str2 = str3;
              }
              let str4 = "user_join";
              if (!tmp19) {
                let str5 = "user_leave";
                if (!tmp18) {
                  let str6;
                  if (rtcConnected.singleActiveStreamViewerCount <= 25) {
                    if (null != singleActiveStreamKey && rtcConnected.singleActiveStreamKey === singleActiveStreamKey) {
                      if (singleActiveStreamViewerCount < rtcConnected.singleActiveStreamViewerCount) {
                        str6 = "stream_user_left";
                      }
                    }
                  }
                  str5 = str6;
                }
                str4 = str5;
              }
              str3 = str4;
            }
            str = str2;
          }
          return str;
        }
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function ActivitySounds() {
  let builderPreviewApplicationId;
  let conjureProjectApplication;
  const items = [SelectedChannelStore, EmbeddedActivitiesStore, FramesStore, AuthenticationStore, ChannelStore, ConjureProjectStore, ConjureBuilderPreviewStore, ApplicationStore, GuildStore];
  const f116131 = () => {
    let embeddedActivitiesForChannel;
    let embeddedActivitiesForChannel1;
    let embeddedActivitiesForChannel2;
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const channelId = SelectedChannelStore.getChannelId();
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    const obj2 = items(f116132[28]);
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    id = id.getId();
    const obj3 = items(f116132[29]);
    if (obj3.isNotNullish(channelId)) {
      embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
    } else {
      embeddedActivitiesForChannel = NO_ACTIVITIES;
    }
    const tmp4Result = items(f116132[29]);
    if (tmp4Result.isNotNullish(voiceChannelId)) {
      embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
    } else {
      embeddedActivitiesForChannel1 = NO_ACTIVITIES;
    }
    const tmp4Result5 = items(f116132[29]);
    if (tmp4Result5.isNotNullish(embeddedActivityLocationChannelId)) {
      embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = NO_ACTIVITIES;
    }
    let selfEmbeddedActivityForLocation = null;
    const tmp4Result6 = items(f116132[29]);
    if (tmp4Result6.isNotNullish(connectedActivityLocation)) {
      selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    }
    mainFrame = mainFrame.getMainFrame();
    let surface;
    const tmp13 = f116131(f116132[30]);
    if (mainFrame != null) {
      surface = mainFrame.surface;
    }
    const tmp13Result = tmp13(surface);
    let tmp16 = null != mainFrame;
    if (tmp16) {
      let result;
      const tmp4Result7 = items(f116132[31]);
      if (tmp4Result7.isConjurePreviewSurface(mainFrame.surface)) {
        result = conjureProjectApplication.isConjureProjectApplication(mainFrame.applicationId);
      } else {
        result = null == tmp13Result && mainFrame.applicationId === builderPreviewApplicationId.getBuilderPreviewApplicationId();
      }
      tmp16 = result;
    }
    let result1 = null != tmp13Result;
    if (result1) {
      const tmp4Result8 = items(f116132[32]);
      result1 = tmp4Result8.isConjureChannelCandidate(ChannelStore.getChannel(tmp13Result), "ActivitySounds");
    }
    if (!result1) {
      result1 = tmp16;
    }
    let tmp22 = null != embeddedActivityLocationChannelId;
    if (tmp22) {
      const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      tmp22 = type === constants.GUILD_SPACE;
    }
    const obj4 = { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel, connectedChannelActivities: embeddedActivitiesForChannel2, userConnectedActivity: selfEmbeddedActivityForLocation, voiceChannelActivities: embeddedActivitiesForChannel1, hasFrame: isLaunched(mainFrame), inConjureChannel: result1, isGuildSpaceActivity: tmp22 };
    return obj4;
  };
  const f116132 = (isGuildSpaceActivity, arg1) => {
    let channelActivities;
    let closure_129_0;
    let connectedChannelActivities;
    let hasFrame;
    let inConjureChannel;
    let userConnectedActivity;
    let voiceChannelActivities;
    let voiceChannelId;
    ({ connectedActivityLocation, currentUserId: closure_129_0, userConnectedActivity } = arg1);
    ({ voiceChannelActivities, hasFrame, isGuildSpaceActivity, voiceChannelId, channelActivities, connectedChannelActivities, inConjureChannel } = arg1);
    const someResult = voiceChannelActivities.some((applicationId) => {
      let applicationId1;
      applicationId = applicationId.applicationId;
      if (userConnectedActivity != null) {
        applicationId1 = tmp.applicationId;
      }
      return applicationId === applicationId1 && applicationId.launchId === userConnectedActivity.launchId;
    });
    if (!isGuildSpaceActivity) {
      isGuildSpaceActivity = isGuildSpaceActivity.isGuildSpaceActivity;
    }
    let str;
    const obj = items(f116132[29]);
    if (obj.isNotNullish(voiceChannelId)) {
      const prop = isGuildSpaceActivity.voiceChannelActivities;
      const found = prop.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(closure_1_0);
      });
      const found1 = voiceChannelActivities.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(closure_1_0);
      });
      let isNotNullishResult = isGuildSpaceActivity.voiceChannelActivities.length < voiceChannelActivities.length;
      if (isNotNullishResult) {
        const tmp2Result = items(f116132[29]);
        isNotNullishResult = tmp2Result.isNotNullish(isGuildSpaceActivity.voiceChannelId);
      }
      let str2;
      if (isNotNullishResult) {
        str2 = "activity_launch";
      }
      let isNotNullishResult1 = undefined === found1;
      if (isNotNullishResult1) {
        const tmp2Result8 = items(f116132[29]);
        isNotNullishResult1 = tmp2Result8.isNotNullish(found);
      }
      if (isNotNullishResult1) {
        str2 = "activity_end";
      }
      let isNotNullishResult2 = undefined === found;
      if (isNotNullishResult2) {
        const tmp2Result9 = items(f116132[29]);
        isNotNullishResult2 = tmp2Result9.isNotNullish(found1);
      }
      if (isNotNullishResult2) {
        isNotNullishResult2 = found1.userIds.size > 1;
      }
      if (isNotNullishResult2) {
        str2 = "activity_user_join";
      }
      const tmp2Result10 = items(f116132[29]);
      let isNotNullishResult3 = tmp2Result10.isNotNullish(found1);
      if (isNotNullishResult3) {
        const tmp2Result11 = items(f116132[29]);
        isNotNullishResult3 = tmp2Result11.isNotNullish(found);
      }
      str = str2;
      if (isNotNullishResult3) {
        if (found1.userIds.size > found.userIds.size) {
          str2 = "activity_user_join";
        }
        if (found1.userIds.size < found.userIds.size) {
          str2 = "activity_user_left";
        }
        str = str2;
      }
    }
    let str3 = str;
    if (!someResult) {
      str3 = str;
      if (!isGuildSpaceActivity) {
        const tmp10 = isGuildSpaceActivity.connectedChannelActivities.length < connectedChannelActivities.length && isGuildSpaceActivity.channelActivities.length < channelActivities.length;
        if (tmp10) {
          str = "activity_launch";
        }
        const userConnectedActivity2 = isGuildSpaceActivity.userConnectedActivity;
        let isNotNullishResult4 = null == userConnectedActivity;
        if (isNotNullishResult4) {
          const tmp2Result12 = items(f116132[29]);
          isNotNullishResult4 = tmp2Result12.isNotNullish(userConnectedActivity2);
        }
        if (isNotNullishResult4) {
          str = "activity_end";
        }
        const tmp2Result13 = items(f116132[29]);
        let isNotNullishResult5 = tmp2Result13.isNotNullish(userConnectedActivity);
        if (isNotNullishResult5) {
          const tmp2Result14 = items(f116132[29]);
          isNotNullishResult5 = tmp2Result14.isNotNullish(userConnectedActivity2);
        }
        str3 = str;
        if (isNotNullishResult5) {
          if (userConnectedActivity.userIds.size > userConnectedActivity2.userIds.size) {
            str = "activity_user_join";
          }
          if (userConnectedActivity.userIds.size < userConnectedActivity2.userIds.size) {
            str = "activity_user_left";
          }
          str3 = str;
        }
      }
    }
    let tmp14 = null != str3 || isGuildSpaceActivity;
    if (!tmp14) {
      tmp14 = null == isGuildSpaceActivity.connectedActivityLocation && null == connectedActivityLocation;
    }
    let str4 = str3;
    if (!tmp14) {
      let str5;
      if (null != isGuildSpaceActivity.connectedActivityLocation) {
        let str6;
        if (null == isGuildSpaceActivity.connectedActivityLocation) {
          let tmp17 = str3;
          const tmp16 = null != userConnectedActivity && null != isGuildSpaceActivity.userConnectedActivity;
          if (tmp16) {
            let str7 = "activity_user_join";
            if (isGuildSpaceActivity.userConnectedActivity.userIds.size >= userConnectedActivity.userIds.size) {
              if (isGuildSpaceActivity.userConnectedActivity.userIds.size > userConnectedActivity.userIds.size) {
                str3 = "activity_user_leave";
              }
              str7 = str3;
            }
            tmp17 = str7;
          }
          str6 = tmp17;
        } else {
          str6 = "activity_end";
        }
        str5 = str6;
      } else {
        str5 = "activity_launch";
      }
      str4 = str5;
    }
    let tmp18 = null == str4;
    if (tmp18) {
      tmp18 = isGuildSpaceActivity.hasFrame || hasFrame;
    }
    let tmp20 = str4;
    if (tmp18) {
      if (!isGuildSpaceActivity.hasFrame) {
        let str8;
        if (hasFrame) {
          str8 = "activity_launch";
        }
        tmp20 = str8;
      }
      const hasFrame2 = isGuildSpaceActivity.hasFrame;
      let inConjureChannel2 = !hasFrame2;
      if (hasFrame2) {
        inConjureChannel2 = hasFrame;
      }
      if (!inConjureChannel2) {
        inConjureChannel2 = isGuildSpaceActivity.inConjureChannel;
      }
      if (!inConjureChannel2) {
        str4 = "activity_end";
      }
      str8 = str4;
    }
    return tmp20;
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116132[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116131();
      const tmp2 = f116132(closure_0, tmp);
      const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
      if (!isSoundDisabledResult) {
        const obj = SoundUtils;
        obj.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
const NO_ACTIVITIES = EmbeddedActivitiesStore2.NO_ACTIVITIES;
let closure_11 = ChannelRecord.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
({ InputModes: closure_23, ApplicationStreamStates: closure_24, ChannelTypes: closure_25, RTCConnectionStates: closure_26 } = Constants);
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_28, Fragment: closure_29, jsxs: closure_30 } = Fragment);
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default function SoundPlayer() {
  let items;
  const obj = { children: items };
  items = [closure_28(MuteDeafen, {}), closure_28(Camera, {}), closure_28(RTCConnect, {}), closure_28(Speaking, {}), closure_28(SelfMutedTemporarily, {}), closure_28(UserHasBeenMoved, {}), closure_28(VoiceChannel, {}), closure_28(UserInvitedToSpeak, {}), closure_28(ActivitySounds, {}), closure_28(PriorityVAD, {})];
  return closure_30(closure_29, obj);
};
