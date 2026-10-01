// Module ID: 16746
// Function ID: 16747
// Name: SoundPlayer
// Dependencies: [19, 2044, 8499, 4853, 8495, 2049, 4858, 502, 2045, 2067, 1993, 9541, 4859, 2099, 5731, 4855, 4860, 1074, 8500, 21, 504, 9357, 4983, 4888, 4458, 1370, 5370, 2]
// Exports: default

// Module 16746 (SoundPlayer)
import EmbeddedActivitiesStore2 from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import SoundUtils from "SoundUtils" /* 9357 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8499 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8495 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 9541 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SpeakingStore from "SpeakingStore" /* 5731 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import Constants from "Constants" /* 1074 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const EmbeddedActivitiesStore = EmbeddedActivitiesStore2;
let allActiveStreams, connectedActivityLocation, guild, mainFrame, userIds, voiceStateForChannel;

let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
function MuteDeafen() {
  let voiceChannelId;
  const items = [MediaEngineStore, SelectedChannelStore];
  const f106004 = () => {
    const obj = { inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound() };
    return obj;
  };
  const f106005 = (selfDeaf, arg1) => {
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
  const effect = f106005.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
  const f106006 = () => {
    const obj = { videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() };
    return obj;
  };
  const f106007 = (videoEnabled, videoEnabled2) => {
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
  const effect = f106007.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
  const f106008 = () => {
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
  const f106009 = (channelType, arg1) => {
    let connectedRemote;
    ({ channelType, connectedRemote } = arg1);
    const channelType2 = channelType.channelType;
    if (channelType.connectHasStarted) {
      if (tmp4) {
        if (!tmp) {
          if (!tmp3) {
            if (!connectedRemote) {
              return "disconnect";
            }
          }
        }
      }
    }
    return "user_join";
  };
  const effect = f106009.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
  const f106010 = () => currentUserPTTActive.isCurrentUserPTTActive();
  const f106011 = (arg0, arg1) => {
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
  const effect = f106011.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
  const items = [MediaEngineStore];
  const f106012 = () => MediaEngineStore.isSelfMutedTemporarily();
  const f106013 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      const isSelfMuteResult = MediaEngineStore.isSelfMute();
      if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "ptt_start";
          if (arg1) {
            str = "ptt_stop";
          }
          return str;
        }
      }
    }
  };
  const effect = f106013.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
  const f106014 = () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker();
  const f106015 = (arg0, arg1) => {
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
  const effect = f106015.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
  const f106016 = () => VoiceStateStore.userHasBeenMovedVersion;
  const f106017 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  };
  const effect = f106017.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
  const f106018 = () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return items(f106018[22]).RequestToSpeakStates.NONE;
    } else {
      voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
      const obj = items(f106018[22]);
      return obj.getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  };
  const f106019 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === items(f106018[22]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  };
  const effect = f106019.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
  let id;
  let inChannel;
  let items = [SelectedChannelStore, ApplicationStreamingStore, AuthenticationStore, VoiceStateStore, ChannelStore];
  const f106020 = () => {
    let first;
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    const currentUserId = id.getId();
    items = [];
    allActiveStreams = allActiveStreams.getAllActiveStreams();
    let streamingUserIds = items;
    let voiceChannelUserCount;
    let channelType;
    if (null != voiceChannelId) {
      const channel = ChannelStore.getChannel(voiceChannelId);
      streamingUserIds = items;
      if (null != channel) {
        const type = channel.type;
        const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
        let num = 0;
        if (inChannel.isInChannel(channel.id)) {
          num = 1;
        }
        voiceChannelUserCount = result - num;
        const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
        streamingUserIds = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
        channelType = type;
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
      const obj2 = items(f106020[23]);
      const encodeStreamKeyResult = obj2.encodeStreamKey(first);
      const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
      singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
      singleActiveStreamKey = encodeStreamKeyResult;
    }
    return { channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds, singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId, allActiveStreams };
  };
  const f106021 = (voiceChannelId, arg1) => {
    let channelType;
    let closure_129_2;
    let singleActiveStreamKey;
    let singleActiveStreamViewerCount;
    let streamingUserIds;
    let voiceChannelUserCount;
    let closure_0 = voiceChannelId;
    ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
    ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: closure_129_2 } = arg1);
    let closure_3;
    if (voiceChannelId.voiceChannelId === voiceChannelId) {
      if (null != voiceChannelId) {
        const channel = ChannelStore.getChannel(voiceChannelId);
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
          allActiveStreams = voiceChannelId.allActiveStreams;
          const someResult = streamingUserIds.some((item) => {
            streamingUserIds = streamingUserIds.streamingUserIds;
            return !streamingUserIds.includes(item);
          });
          closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
          const streamingUserIds2 = voiceChannelId.streamingUserIds;
          let str = "stream_started";
          if (!someResult) {
            let str2 = "stream_ended";
            if (!tmp8) {
              let str3;
              let str4;
              if (voiceChannelId.singleActiveStreamViewerCount <= 25) {
                if (null != singleActiveStreamKey && voiceChannelId.singleActiveStreamKey === singleActiveStreamKey) {
                  str3 = "stream_user_joined";
                }
                str2 = str3;
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  if (voiceChannelId.voiceChannelUserCount <= 25) {
                    str4 = "user_join";
                  }
                  str3 = str4;
                }
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  let str5;
                  if (voiceChannelId.voiceChannelUserCount <= 25) {
                    str5 = "user_leave";
                  }
                  str4 = str5;
                }
              }
              let str6;
              if (voiceChannelId.singleActiveStreamViewerCount <= 25) {
                if (null != singleActiveStreamKey && voiceChannelId.singleActiveStreamKey === singleActiveStreamKey) {
                  if (singleActiveStreamViewerCount < voiceChannelId.singleActiveStreamViewerCount) {
                    str6 = "stream_user_left";
                  }
                }
              }
              str5 = str6;
            }
            str = str2;
          }
          return str;
        }
      }
    }
  };
  const effect = f106021.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
  const items = [SelectedChannelStore, EmbeddedActivitiesStore, FramesStore, AuthenticationStore, ChannelStore, VibegrationsProjectStore];
  const f106022 = () => {
    let embeddedActivitiesForChannel;
    let embeddedActivitiesForChannel1;
    let embeddedActivitiesForChannel2;
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const channelId = SelectedChannelStore.getChannelId();
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    const obj2 = items(f106022[24]);
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    id = id.getId();
    const obj3 = items(f106022[25]);
    if (obj3.isNotNullish(channelId)) {
      embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
    } else {
      embeddedActivitiesForChannel = NO_ACTIVITIES;
    }
    const tmp4Result = items(f106022[25]);
    if (tmp4Result.isNotNullish(voiceChannelId)) {
      embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
    } else {
      embeddedActivitiesForChannel1 = NO_ACTIVITIES;
    }
    const tmp4Result4 = items(f106022[25]);
    if (tmp4Result4.isNotNullish(embeddedActivityLocationChannelId)) {
      embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = NO_ACTIVITIES;
    }
    let selfEmbeddedActivityForLocation = null;
    const tmp4Result5 = items(f106022[25]);
    if (tmp4Result5.isNotNullish(connectedActivityLocation)) {
      selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    }
    mainFrame = mainFrame.getMainFrame();
    let surface;
    const tmp13 = closure_1_24;
    if (mainFrame != null) {
      surface = mainFrame.surface;
    }
    const tmp13Result = tmp13(surface);
    let result = null == tmp13Result;
    if (result) {
      let applicationId;
      const isVibegrationsProjectApplication = VibegrationsProjectStore.isVibegrationsProjectApplication;
      if (mainFrame != null) {
        applicationId = mainFrame.applicationId;
      }
      result = isVibegrationsProjectApplication(applicationId);
    }
    let result1 = null != tmp13Result;
    if (result1) {
      const tmp4Result6 = items(f106022[26]);
      result1 = tmp4Result6.isVibegrationsChannelCandidate(ChannelStore.getChannel(tmp13Result), "ActivitySounds");
    }
    if (!result1) {
      result1 = result;
    }
    let tmp21 = null != embeddedActivityLocationChannelId;
    if (tmp21) {
      const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      tmp21 = type === constants.GUILD_SPACE;
    }
    const obj4 = { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel, connectedChannelActivities: embeddedActivitiesForChannel2, userConnectedActivity: selfEmbeddedActivityForLocation, voiceChannelActivities: embeddedActivitiesForChannel1, hasFrame: closure_1_25(mainFrame), inVibegrationsChannel: result1, isGuildSpaceActivity: tmp21 };
    return obj4;
  };
  const f106023 = (isGuildSpaceActivity, arg1) => {
    let channelActivities;
    let closure_129_0;
    let connectedChannelActivities;
    let hasFrame;
    let inVibegrationsChannel;
    let userConnectedActivity;
    let voiceChannelActivities;
    let voiceChannelId;
    ({ connectedActivityLocation, currentUserId: closure_129_0, userConnectedActivity } = arg1);
    ({ voiceChannelActivities, hasFrame, isGuildSpaceActivity, voiceChannelId, channelActivities, connectedChannelActivities, inVibegrationsChannel } = arg1);
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
    const obj = items(f106022[25]);
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
        const tmp2Result = items(f106022[25]);
        isNotNullishResult = tmp2Result.isNotNullish(isGuildSpaceActivity.voiceChannelId);
      }
      let str2;
      if (isNotNullishResult) {
        str2 = "activity_launch";
      }
      let isNotNullishResult1 = undefined === found1;
      if (isNotNullishResult1) {
        const tmp2Result8 = items(f106022[25]);
        isNotNullishResult1 = tmp2Result8.isNotNullish(found);
      }
      if (isNotNullishResult1) {
        str2 = "activity_end";
      }
      let isNotNullishResult2 = undefined === found;
      if (isNotNullishResult2) {
        const tmp2Result9 = items(f106022[25]);
        isNotNullishResult2 = tmp2Result9.isNotNullish(found1);
      }
      if (isNotNullishResult2) {
        isNotNullishResult2 = found1.userIds.size > 1;
      }
      if (isNotNullishResult2) {
        str2 = "activity_user_join";
      }
      const tmp2Result10 = items(f106022[25]);
      let isNotNullishResult3 = tmp2Result10.isNotNullish(found1);
      if (isNotNullishResult3) {
        const tmp2Result11 = items(f106022[25]);
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
          const tmp2Result12 = items(f106022[25]);
          isNotNullishResult4 = tmp2Result12.isNotNullish(userConnectedActivity2);
        }
        if (isNotNullishResult4) {
          str = "activity_end";
        }
        const tmp2Result13 = items(f106022[25]);
        let isNotNullishResult5 = tmp2Result13.isNotNullish(userConnectedActivity);
        if (isNotNullishResult5) {
          const tmp2Result14 = items(f106022[25]);
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
      let inVibegrationsChannel2 = !hasFrame2;
      if (hasFrame2) {
        inVibegrationsChannel2 = hasFrame;
      }
      if (!inVibegrationsChannel2) {
        inVibegrationsChannel2 = isGuildSpaceActivity.inVibegrationsChannel;
      }
      if (!inVibegrationsChannel2) {
        str4 = "activity_end";
      }
      str8 = str4;
    }
    return tmp20;
  };
  const effect = f106023.useEffect(() => {
    let batchedStoreListener;
    let closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106022[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106022();
      const tmp2 = f106023(closure_0, tmp);
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
let closure_8 = ChannelRecord.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
({ InputModes: closure_20, ApplicationStreamStates: closure_21, ChannelTypes: closure_22, RTCConnectionStates: closure_23 } = Constants);
({ getChannelIdForSurface: closure_24, isLaunched: closure_25 } = FramesConstants);
({ jsx: closure_26, Fragment: closure_27, jsxs: closure_28 } = Fragment);
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default function SoundPlayer() {
  let items;
  const obj = { children: items };
  items = [prioritySpeakerDucking(MuteDeafen, {}), prioritySpeakerDucking(Camera, {}), prioritySpeakerDucking(RTCConnect, {}), prioritySpeakerDucking(Speaking, {}), prioritySpeakerDucking(SelfMutedTemporarily, {}), prioritySpeakerDucking(UserHasBeenMoved, {}), prioritySpeakerDucking(VoiceChannel, {}), prioritySpeakerDucking(UserInvitedToSpeak, {}), prioritySpeakerDucking(ActivitySounds, {}), prioritySpeakerDucking(PriorityVAD, {})];
  return __initData(closure_27, obj);
};
