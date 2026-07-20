// Module ID: 15472
// Function ID: 118041
// Name: useSound
// Dependencies: []
// Exports: default

// Module 15472 (useSound)
function useSound(items, arg1, arg2) {
  arg1 = items;
  const dependencyMap = arg1;
  const React = arg2;
  const effect = React.useEffect(() => {
    const items = arg1();
    const batchedStoreListener = new items(arg1[18]).BatchedStoreListener(items, () => {
      const tmp = batchedStoreListener();
      const tmp2 = callback2(callback, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = soundDisabled.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        let num2 = 0.4;
        if (null != closure_3) {
          num2 = closure_3;
        }
        callback(batchedStoreListener[19]).playSound(tmp2, num2);
        const obj = callback(batchedStoreListener[19]);
      }
      const callback = tmp;
    });
    const arg1 = batchedStoreListener;
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
}
function MuteDeafen() {
  const items = [closure_12, closure_15];
  useSound(items, () => ({ inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: closure_12.isSelfMute(), selfDeaf: closure_12.isSelfDeaf(), audioPermissionReady: closure_12.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: closure_12.shouldSkipMuteUnmuteSound() }), (selfDeaf) => {
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
        if (selfDeaf.selfMute !== selfMute) {
          if (tmp2) {
            const result = closure_12.notifyMuteUnmuteSoundWasSkipped();
          } else {
            let str = "unmute";
            if (selfMute) {
              str = "mute";
            }
          }
        }
      }
    }
  });
  return null;
}
function Camera() {
  const items = [closure_12, closure_15];
  useSound(items, () => ({ videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() }), (videoEnabled, videoEnabled2) => {
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
  });
  return null;
}
function RTCConnect() {
  const items = [closure_10, closure_14, closure_15, closure_6];
  useSound(items, () => {
    const channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let type;
    if (null != channel) {
      type = channel.type;
    }
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const wasEverRtcConnected = store2.getWasEverRtcConnected();
    const state = store2.getState();
    const obj = { channelType: type, guildId, connected: state === constants.RTC_CONNECTED };
    let tmp5 = !wasEverRtcConnected;
    if (tmp5) {
      tmp5 = state !== constants.DISCONNECTED;
    }
    if (!tmp5) {
      tmp5 = state === constants.RTC_CONNECTED;
    }
    obj.connectHasStarted = tmp5;
    obj.awaitingRemote = null != store.getAwaitingRemoteSessionInfo();
    obj.connectedRemote = null != store.getRemoteSessionId();
    return obj;
  }, (channelType) => {
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
  });
  return null;
}
function Speaking() {
  const items = [closure_16];
  useSound(items, () => currentUserPTTActive.isCurrentUserPTTActive(), (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (closure_12.getMode() === constants.PUSH_TO_TALK) {
        if (!isSelfMuteResult) {
          let str = "ptt_stop";
          if (arg1) {
            str = "ptt_start";
          }
          return str;
        }
      }
      const isSelfMuteResult = closure_12.isSelfMute();
    }
  });
  return null;
}
function SelfMutedTemporarily() {
  const items = [closure_12];
  useSound(items, () => closure_12.isSelfMutedTemporarily(), (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (closure_12.getMode() === constants.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "ptt_start";
          if (arg1) {
            str = "ptt_stop";
          }
          return str;
        }
      }
      const isSelfMuteResult = closure_12.isSelfMute();
    }
  });
  return null;
}
function PriorityVAD() {
  const items = [closure_16];
  useSound(items, () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker(), (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (closure_12.getMode() === constants.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "ptt_stop";
          if (arg1) {
            str = "ptt_start";
          }
          return str;
        }
      }
      const isSelfMuteResult = closure_12.isSelfMute();
    }
  });
  return null;
}
function UserHasBeenMoved() {
  const items = [closure_17];
  useSound(items, () => obj.userHasBeenMovedVersion, (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  });
  return null;
}
function UserInvitedToSpeak() {
  const items = [closure_15, closure_17];
  useSound(items, () => {
    const voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return callback(closure_1[20]).RequestToSpeakStates.NONE;
    } else {
      const voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
      return callback(closure_1[20]).getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  }, (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === callback(closure_1[20]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  });
  return null;
}
function VoiceChannel() {
  const items = [closure_15, closure_8, closure_9, closure_17, closure_10];
  useSound(items, () => {
    const voiceChannelId = voiceChannelId.getVoiceChannelId();
    const id = id.getId();
    const items = [];
    const allActiveStreams = authStore.getAllActiveStreams();
    let type;
    let diff;
    let mapped = items;
    if (null != voiceChannelId) {
      const channel = store.getChannel(voiceChannelId);
      mapped = items;
      if (null != channel) {
        const result = closure_18.countVoiceStatesForChannel(channel.id);
        let num = 0;
        if (inChannel.isInChannel(channel.id)) {
          num = 1;
        }
        diff = result - num;
        const allApplicationStreamsForChannel = authStore.getAllApplicationStreamsForChannel(channel.id);
        mapped = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
        type = channel.type;
      }
    }
    if (1 === allActiveStreams.length) {
      let first = allActiveStreams[0];
    } else {
      first = authStore.getCurrentUserActiveStream();
    }
    let state;
    if (null != first) {
      state = first.state;
    }
    if (state === constants.CONNECTING) {
      first = null;
    }
    let tmp15 = null;
    let num3 = 0;
    if (null != first) {
      let obj = id(closure_1[21]);
      const encodeStreamKeyResult = obj.encodeStreamKey(first);
      const viewerIds = authStore.getViewerIds(encodeStreamKeyResult);
      num3 = viewerIds.filter((arg0) => arg0 !== id).length;
      tmp15 = encodeStreamKeyResult;
    }
    obj = { channelType: type, voiceChannelId, voiceChannelUserCount: diff, streamingUserIds: mapped, singleActiveStreamKey: tmp15, singleActiveStreamViewerCount: num3, currentUserId: id, allActiveStreams };
    return obj;
  }, (voiceChannelId) => {
    let channelType;
    let singleActiveStreamKey;
    let singleActiveStreamViewerCount;
    let streamingUserIds;
    let voiceChannelUserCount;
    ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
    ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: closure_2 } = arg1);
    let closure_3;
    if (voiceChannelId.voiceChannelId === voiceChannelId) {
      if (null != voiceChannelId) {
        const channel = store.getChannel(voiceChannelId);
        let flag = false;
        if (null != channel) {
          const guildId = channel.getGuildId();
          flag = false;
          if (null != guildId) {
            const guild = guild.getGuild(guildId);
            flag = null != guild && guild.afkChannelId === channel.id;
            const tmp4 = null != guild && guild.afkChannelId === channel.id;
          }
        }
        if (!flag) {
          const allActiveStreams = voiceChannelId.allActiveStreams;
          closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
          const streamingUserIds2 = voiceChannelId.streamingUserIds;
          let str = "stream_started";
          if (!someResult) {
            let str2 = "stream_ended";
            if (!tmp8) {
              if (voiceChannelId.singleActiveStreamViewerCount <= 25) {
                if (tmp6) {
                  let str3 = "stream_user_joined";
                }
                str2 = str3;
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  if (voiceChannelId.voiceChannelUserCount <= 25) {
                    let str4 = "user_join";
                  }
                  str3 = str4;
                }
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  if (voiceChannelId.voiceChannelUserCount <= 25) {
                    let str5 = "user_leave";
                  }
                  str4 = str5;
                }
              }
              let str6;
              if (voiceChannelId.singleActiveStreamViewerCount <= 25) {
                if (tmp6) {
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
  });
  return null;
}
function ActivitySounds() {
  const items = [closure_15, closure_3, closure_5, closure_9];
  useSound(items, () => {
    const voiceChannelId = store2.getVoiceChannelId();
    const channelId = store2.getChannelId();
    const connectedActivityLocation = store.getConnectedActivityLocation();
    let obj = callback(closure_1[22]);
    const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    const id = id.getId();
    if (obj2.isNotNullish(channelId)) {
      let embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(channelId);
    } else {
      embeddedActivitiesForChannel = closure_4;
    }
    const obj2 = callback(closure_1[23]);
    if (obj3.isNotNullish(voiceChannelId)) {
      let embeddedActivitiesForChannel1 = store.getEmbeddedActivitiesForChannel(voiceChannelId);
    } else {
      embeddedActivitiesForChannel1 = closure_4;
    }
    obj = { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel };
    const obj3 = callback(closure_1[23]);
    if (obj5.isNotNullish(embeddedActivityLocationChannelId)) {
      let embeddedActivitiesForChannel2 = store.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = closure_4;
    }
    obj.connectedChannelActivities = embeddedActivitiesForChannel2;
    const obj5 = callback(closure_1[23]);
    let selfEmbeddedActivityForLocation = null;
    if (obj6.isNotNullish(connectedActivityLocation)) {
      selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    }
    obj.userConnectedActivity = selfEmbeddedActivityForLocation;
    obj.voiceChannelActivities = embeddedActivitiesForChannel1;
    obj.connectedFrame = connectedFrame.getConnectedFrame();
    return obj;
  }, (voiceChannelActivities) => {
    let channelActivities;
    let connectedActivityLocation;
    let connectedChannelActivities;
    let connectedFrame;
    let userConnectedActivity;
    let voiceChannelId;
    ({ connectedActivityLocation, currentUserId: closure_0, userConnectedActivity } = arg1);
    ({ voiceChannelActivities, connectedFrame, voiceChannelId, channelActivities, connectedChannelActivities } = arg1);
    const someResult = voiceChannelActivities.some((applicationId) => {
      applicationId = undefined;
      if (null != userConnectedActivity) {
        applicationId = userConnectedActivity.applicationId;
      }
      let tmp3 = applicationId.applicationId === applicationId;
      if (tmp3) {
        tmp3 = applicationId.launchId === userConnectedActivity.launchId;
      }
      return tmp3;
    });
    let str;
    if (obj.isNotNullish(voiceChannelId)) {
      const prop = voiceChannelActivities.voiceChannelActivities;
      const found = prop.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(closure_0);
      });
      const found1 = voiceChannelActivities.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(closure_0);
      });
      let isNotNullishResult = voiceChannelActivities.voiceChannelActivities.length < voiceChannelActivities.length;
      if (isNotNullishResult) {
        isNotNullishResult = callback(userConnectedActivity[23]).isNotNullish(voiceChannelActivities.voiceChannelId);
        const obj2 = callback(userConnectedActivity[23]);
      }
      let str2;
      if (isNotNullishResult) {
        str2 = "activity_launch";
      }
      let isNotNullishResult1 = undefined === found1;
      if (isNotNullishResult1) {
        isNotNullishResult1 = callback(userConnectedActivity[23]).isNotNullish(found);
        const obj3 = callback(userConnectedActivity[23]);
      }
      if (isNotNullishResult1) {
        str2 = "activity_end";
      }
      let isNotNullishResult2 = undefined === found;
      if (isNotNullishResult2) {
        isNotNullishResult2 = callback(userConnectedActivity[23]).isNotNullish(found1);
        const obj4 = callback(userConnectedActivity[23]);
      }
      if (isNotNullishResult2) {
        isNotNullishResult2 = found1.userIds.size > 1;
      }
      if (isNotNullishResult2) {
        str2 = "activity_user_join";
      }
      let isNotNullishResult3 = callback(userConnectedActivity[23]).isNotNullish(found1);
      if (isNotNullishResult3) {
        isNotNullishResult3 = callback(userConnectedActivity[23]).isNotNullish(found);
        const obj6 = callback(userConnectedActivity[23]);
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
      const obj5 = callback(userConnectedActivity[23]);
    }
    let str3 = str;
    if (!someResult) {
      if (tmp18) {
        str = "activity_launch";
      }
      const userConnectedActivity2 = voiceChannelActivities.userConnectedActivity;
      let isNotNullishResult4 = null == userConnectedActivity;
      if (isNotNullishResult4) {
        isNotNullishResult4 = callback(userConnectedActivity[23]).isNotNullish(userConnectedActivity2);
        const obj7 = callback(userConnectedActivity[23]);
      }
      if (isNotNullishResult4) {
        str = "activity_end";
      }
      let isNotNullishResult5 = callback(userConnectedActivity[23]).isNotNullish(userConnectedActivity);
      if (isNotNullishResult5) {
        isNotNullishResult5 = callback(userConnectedActivity[23]).isNotNullish(userConnectedActivity2);
        const obj9 = callback(userConnectedActivity[23]);
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
      const obj8 = callback(userConnectedActivity[23]);
      const tmp18 = voiceChannelActivities.connectedChannelActivities.length < connectedChannelActivities.length && voiceChannelActivities.channelActivities.length < channelActivities.length;
    }
    let tmp28 = null != str3;
    if (!tmp28) {
      tmp28 = null == voiceChannelActivities.connectedActivityLocation && null == connectedActivityLocation;
      const tmp29 = null == voiceChannelActivities.connectedActivityLocation && null == connectedActivityLocation;
    }
    let str4 = str3;
    if (!tmp28) {
      if (null != voiceChannelActivities.connectedActivityLocation) {
        if (null == voiceChannelActivities.connectedActivityLocation) {
          let tmp31 = str3;
          if (tmp30) {
            let str7 = "activity_user_join";
            if (voiceChannelActivities.userConnectedActivity.userIds.size >= userConnectedActivity.userIds.size) {
              if (voiceChannelActivities.userConnectedActivity.userIds.size > userConnectedActivity.userIds.size) {
                str3 = "activity_user_leave";
              }
              str7 = str3;
            }
            tmp31 = str7;
          }
          let str6 = tmp31;
          const tmp30 = null != userConnectedActivity && null != voiceChannelActivities.userConnectedActivity;
        } else {
          str6 = "activity_end";
        }
        let str5 = str6;
      } else {
        str5 = "activity_launch";
      }
      str4 = str5;
    }
    let tmp32 = null != str4;
    if (!tmp32) {
      tmp32 = null == voiceChannelActivities.connectedFrame && null == connectedFrame;
      const tmp33 = null == voiceChannelActivities.connectedFrame && null == connectedFrame;
    }
    let tmp34 = str4;
    if (!tmp32) {
      if (null != voiceChannelActivities.connectedFrame) {
        if (tmp35) {
          str4 = "activity_end";
        }
        let str8 = str4;
        const tmp35 = null != voiceChannelActivities.connectedFrame && null == connectedFrame;
      } else {
        str8 = "activity_launch";
      }
      tmp34 = str8;
    }
    return tmp34;
  });
  return null;
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const NO_ACTIVITIES = arg1(dependencyMap[1]).NO_ACTIVITIES;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).SILENT_JOIN_LEAVE_CHANNEL_TYPES;
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
({ InputModes: closure_19, ApplicationStreamStates: closure_20, RTCConnectionStates: closure_21 } = arg1(dependencyMap[16]));
const tmp2 = arg1(dependencyMap[16]);
({ jsx: closure_22, Fragment: closure_23, jsxs: closure_24 } = arg1(dependencyMap[17]));
const tmp3 = arg1(dependencyMap[17]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default function SoundPlayer() {
  const obj = {};
  const items = [callback(MuteDeafen, {}), callback(Camera, {}), callback(RTCConnect, {}), callback(Speaking, {}), callback(SelfMutedTemporarily, {}), callback(UserHasBeenMoved, {}), callback(VoiceChannel, {}), callback(UserInvitedToSpeak, {}), callback(ActivitySounds, {}), callback(PriorityVAD, {})];
  obj.children = items;
  return callback2(closure_23, obj);
};
