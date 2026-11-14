// Module ID: 19796
// Function ID: 19797
// Name: SoundPlayer
// Dependencies: [19, 5154, 2165, 15974, 7017, 7019, 6072, 6801, 5159, 6820, 502, 5155, 5177, 2133, 11014, 6071, 5209, 6941, 5981, 6074, 1072, 7020, 21, 504, 11033, 18956, 6358, 6808, 19797, 5227, 1255, 7022, 7339, 7260, 16115, 2]
// Exports: default

// Module 19796 (SoundPlayer)
import EmbeddedActivitiesStore2 from "EmbeddedActivitiesStore" /* 5154 */;
import ChannelRecord from "ChannelRecord" /* 5159 */;
import FramesConstants from "FramesConstants" /* 7020 */;
import SoundUtils from "SoundUtils" /* 11033 */;
import VoiceConnectFeedbackExperimentDefault from "VoiceConnectFeedbackExperiment" /* 18956 */;
import _modDef19797 from "module_19797" /* 19797 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15974 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import FramesStore from "FramesStore" /* 7019 */;
import GameConsoleStore from "GameConsoleStore" /* 6072 */;
import PassTheControllerStore from "PassTheControllerStore" /* 6801 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5177 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import SpeakingStore from "SpeakingStore" /* 6941 */;
import VoiceStateStore from "VoiceStateStore" /* 5981 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 6074 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const EmbeddedActivitiesStore = EmbeddedActivitiesStore2;
let allActiveStreams, applicationId, connectedActivityLocation, currentUserActiveStream, guestStreamKey, guild, id, isSoundDisabled, mainFrame, voiceStateForChannel;

let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_29;
let closure_30;
let closure_31;
function MuteDeafen() {
  let voiceChannelId;
  const items = [MediaEngineStore, SelectedChannelStore];
  const f121297 = () => {
    const obj = { inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound() };
    return obj;
  };
  const f121298 = (selfDeaf, arg1) => {
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
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
  const f121299 = () => {
    const obj = { videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() };
    return obj;
  };
  const f121300 = (videoEnabled, videoEnabled2) => {
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
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
  const f121301 = () => {
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
  const f121302 = (connectedRemote, arg1) => {
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
      const obj = f121301(f121302[25]);
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
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
  const f121303 = () => currentUserPTTActive.isCurrentUserPTTActive();
  const f121304 = (arg0, arg1) => {
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
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
  const f121305 = () => MediaEngineStore.isSelfMutedTemporarily();
  const f121306 = (arg0, arg1) => {
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
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
  const f121307 = () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker();
  const f121308 = (arg0, arg1) => {
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
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
  const f121309 = () => VoiceStateStore.userHasBeenMovedVersion;
  const f121310 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
  const f121311 = () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return items(f121312[26]).RequestToSpeakStates.NONE;
    } else {
      voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
      const obj = items(f121312[26]);
      return obj.getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  };
  const f121312 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === items(f121312[26]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
  const f121313 = () => {
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
        const result = closure_1_23.countVoiceStatesForChannel(channel.id);
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
      const obj3 = items(f121314[27]);
      const encodeStreamKeyResult = obj3.encodeStreamKey(first);
      const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
      singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
      singleActiveStreamKey = encodeStreamKeyResult;
    }
    return { channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds, singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId, allActiveStreams, rtcConnected, rtcUserIds };
  };
  const f121314 = (rtcConnected, arg1) => {
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
    const tmp8 = _modDef19797(rtcUserIds, rtcConnected.rtcUserIds);
    const rtcConnected3 = rtcConnected.rtcConnected && rtcConnected.rtcUserIds.length <= 25 && tmp6(tmp7[28])(tmp8, keys).length > 0;
    const tmp9 = rtcConnected.rtcConnected && rtcConnected && rtcConnected.rtcUserIds.length <= 25 && tmp6(tmp7[28])(rtcConnected.rtcUserIds, rtcUserIds).length > 0;
    tmp.current = _modDef19797(keys, tmp8);
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
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
  const f121315 = () => {
    let embeddedActivitiesForChannel;
    let embeddedActivitiesForChannel1;
    let embeddedActivitiesForChannel2;
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const channelId = SelectedChannelStore.getChannelId();
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    const obj2 = items(f121316[29]);
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    id = id.getId();
    const obj3 = items(f121316[30]);
    if (obj3.isNotNullish(channelId)) {
      embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
    } else {
      embeddedActivitiesForChannel = NO_ACTIVITIES;
    }
    const tmp4Result = items(f121316[30]);
    if (tmp4Result.isNotNullish(voiceChannelId)) {
      embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
    } else {
      embeddedActivitiesForChannel1 = NO_ACTIVITIES;
    }
    const tmp4Result5 = items(f121316[30]);
    if (tmp4Result5.isNotNullish(embeddedActivityLocationChannelId)) {
      embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = NO_ACTIVITIES;
    }
    let selfEmbeddedActivityForLocation = null;
    const tmp4Result6 = items(f121316[30]);
    if (tmp4Result6.isNotNullish(connectedActivityLocation)) {
      selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    }
    mainFrame = mainFrame.getMainFrame();
    let surface;
    const tmp13 = f121315(f121316[31]);
    if (mainFrame != null) {
      surface = mainFrame.surface;
    }
    const tmp13Result = tmp13(surface);
    let tmp16 = null != mainFrame;
    if (tmp16) {
      let result;
      const tmp4Result7 = items(f121316[32]);
      if (tmp4Result7.isConjurePreviewSurface(mainFrame.surface)) {
        result = conjureProjectApplication.isConjureProjectApplication(mainFrame.applicationId);
      } else {
        result = null == tmp13Result && mainFrame.applicationId === builderPreviewApplicationId.getBuilderPreviewApplicationId();
      }
      tmp16 = result;
    }
    let result1 = null != tmp13Result;
    if (result1) {
      const tmp4Result8 = items(f121316[33]);
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
  const f121316 = (isGuildSpaceActivity, arg1) => {
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
    const obj = items(f121316[30]);
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
        const tmp2Result = items(f121316[30]);
        isNotNullishResult = tmp2Result.isNotNullish(isGuildSpaceActivity.voiceChannelId);
      }
      let str2;
      if (isNotNullishResult) {
        str2 = "activity_launch";
      }
      let isNotNullishResult1 = undefined === found1;
      if (isNotNullishResult1) {
        const tmp2Result8 = items(f121316[30]);
        isNotNullishResult1 = tmp2Result8.isNotNullish(found);
      }
      if (isNotNullishResult1) {
        str2 = "activity_end";
      }
      let isNotNullishResult2 = undefined === found;
      if (isNotNullishResult2) {
        const tmp2Result9 = items(f121316[30]);
        isNotNullishResult2 = tmp2Result9.isNotNullish(found1);
      }
      if (isNotNullishResult2) {
        isNotNullishResult2 = found1.userIds.size > 1;
      }
      if (isNotNullishResult2) {
        str2 = "activity_user_join";
      }
      const tmp2Result10 = items(f121316[30]);
      let isNotNullishResult3 = tmp2Result10.isNotNullish(found1);
      if (isNotNullishResult3) {
        const tmp2Result11 = items(f121316[30]);
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
          const tmp2Result12 = items(f121316[30]);
          isNotNullishResult4 = tmp2Result12.isNotNullish(userConnectedActivity2);
        }
        if (isNotNullishResult4) {
          str = "activity_end";
        }
        const tmp2Result13 = items(f121316[30]);
        let isNotNullishResult5 = tmp2Result13.isNotNullish(userConnectedActivity);
        if (isNotNullishResult5) {
          const tmp2Result14 = items(f121316[30]);
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
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
function PassTheController() {
  const items = [PassTheControllerStore, AuthenticationStore, RTCConnectionStore, SelectedChannelStore, ChannelStore, ApplicationStreamingStore];
  const f121317 = () => {
    let arr;
    let controllerHolderId;
    let guestHostId;
    let guild_id;
    let mapped;
    let tmp10;
    id = id.getId();
    let obj = currentUserActiveStream;
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    let encodeStreamKeyResult = null;
    if (null != currentUserActiveStream) {
      const obj2 = id(f121318[27]);
      encodeStreamKeyResult = obj2.encodeStreamKey(currentUserActiveStream);
    }
    guestStreamKey = guestStreamKey.getGuestStreamKey();
    const obj4 = { currentUserId: id, voiceChannelId, streamingUserIds: mapped, guildId: guild_id, rtcConnected: tmp10, isHost: null != encodeStreamKeyResult && guestStreamKey.isSelfPassingController(encodeStreamKeyResult), controllerHolderId, guestStreamKey, guestHostId, otherHostUserIds: arr.filter((item) => item !== id) };
    if (null != voiceChannelId) {
      const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(voiceChannelId);
      mapped = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
    } else {
      mapped = [];
    }
    channel = channel.getChannel(voiceChannelId);
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    controllerHolderId = null;
    tmp10 = null != voiceChannelId && closure_19.getChannelId() === voiceChannelId && closure_19.getState() === constants.RTC_CONNECTED;
    null != encodeStreamKeyResult && guestStreamKey.isSelfPassingController(encodeStreamKeyResult);
    if (null != encodeStreamKeyResult) {
      controllerHolderId = obj3.getControllerHolderId(encodeStreamKeyResult);
    }
    guestHostId = null;
    if (null != guestStreamKey) {
      guestHostId = obj3.getGuestHostId(guestStreamKey);
    }
    arr = Array.from(guestStreamKey.getHostStreamKeys(), (streamKey) => {
      const obj = id(closure_1_2[27]);
      return obj.decodeStreamKey(streamKey).ownerId;
    });
    return obj4;
  };
  const f121318 = (voiceChannelId, arg1) => {
    let controllerHolderId;
    let guildId;
    let isHost;
    let otherHostUserIds;
    let streamingUserIds;
    ({ voiceChannelId, streamingUserIds } = arg1);
    ({ guildId, isHost, controllerHolderId, guestStreamKey, otherHostUserIds } = arg1);
    if (voiceChannelId.voiceChannelId === voiceChannelId) {
      if (null != voiceChannelId) {
        channel = ChannelStore.getChannel(voiceChannelId);
        let flag = false;
        if (null != channel) {
          const guildId1 = channel.getGuildId();
          flag = false;
          if (null != guildId1) {
            guild = guild.getGuild(guildId1);
            flag = null != guild && guild.afkChannelId === channel.id;
          }
        }
        if (!flag) {
          if (null != guildId) {
            const obj2 = { guildId, location: "PassTheController" };
            const obj3 = f121317(f121318[34]);
            if (obj3.getConfig(obj2).enabled) {
              let str;
              let tmp7 = voiceChannelId.rtcConnected && tmp2;
              let someResult = tmp7;
              if (someResult) {
                const obj = f121317(f121318[28])(voiceChannelId.otherHostUserIds, otherHostUserIds);
                someResult = obj.some((item) => streamingUserIds.includes(item));
              }
              if (tmp7) {
                tmp7 = tmp11(tmp12[28])(otherHostUserIds, voiceChannelId.otherHostUserIds).length > 0;
              }
              if (voiceChannelId.isHost) {
                if (!isHost) {
                  str = "activity_end";
                }
                return str;
              }
              str = "activity_end";
              if (!someResult) {
                let str2;
                let str3;
                if (isHost) {
                  if (null != voiceChannelId.controllerHolderId) {
                    str2 = "activity_user_left";
                  }
                  str = str2;
                }
                if (null != voiceChannelId.guestStreamKey) {
                  if (null == guestStreamKey) {
                    if (null != voiceChannelId.guestHostId) {
                      str2 = "activity_user_left";
                    }
                  }
                }
                if (voiceChannelId.isHost) {
                  str3 = "activity_launch";
                  if (!tmp7) {
                    if (null == controllerHolderId) {
                      let str4;
                      str3 = str4;
                    }
                    str4 = "activity_user_join";
                  }
                } else {
                  str3 = "activity_launch";
                }
                str2 = str3;
              }
            }
          }
        }
      }
    }
  };
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f121318[23]).BatchedStoreListener(closure_0, () => {
      const tmp = f121317();
      const tmp2 = f121318(closure_0, tmp);
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
let closure_12 = ChannelRecord.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
({ InputModes: closure_24, ApplicationStreamStates: closure_25, ChannelTypes: closure_26, RTCConnectionStates: closure_27 } = Constants);
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_29, Fragment: closure_30, jsxs: closure_31 } = Fragment);
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default function SoundPlayer() {
  let items;
  const obj = { children: items };
  items = [mostRecentSelectedTextChannelIds(MuteDeafen, {}), mostRecentSelectedTextChannelIds(Camera, {}), mostRecentSelectedTextChannelIds(RTCConnect, {}), mostRecentSelectedTextChannelIds(Speaking, {}), mostRecentSelectedTextChannelIds(SelfMutedTemporarily, {}), mostRecentSelectedTextChannelIds(UserHasBeenMoved, {}), mostRecentSelectedTextChannelIds(VoiceChannel, {}), mostRecentSelectedTextChannelIds(UserInvitedToSpeak, {}), mostRecentSelectedTextChannelIds(ActivitySounds, {}), mostRecentSelectedTextChannelIds(PriorityVAD, {}), mostRecentSelectedTextChannelIds(PassTheController, {})];
  return map2(closure_30, obj);
};
