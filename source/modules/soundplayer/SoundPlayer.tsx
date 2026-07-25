// Module ID: 15664
// Function ID: 120771
// Name: useSound
// Dependencies: [31, 1347, 5658, 4145, 15665, 1352, 4150, 1194, 1348, 1838, 4178, 10183, 4203, 1907, 4953, 4147, 4204, 653, 1355, 33, 566, 10209, 4315, 4195, 3749, 1327, 5629, 2]
// Exports: default

// Module 15664 (useSound)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { NO_ACTIVITIES } from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import { SILENT_JOIN_LEAVE_CHANNEL_TYPES as closure_8 } from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import ME from "ME";
import { StaticChannelRoute } from "set";
import jsxProd from "jsxProd";

let closure_20;
let closure_21;
let closure_22;
let closure_24;
let closure_25;
let closure_26;
const require = arg1;
function useSound(items, arg1, arg2) {
  let closure_0 = items;
  let closure_1 = arg1;
  const React = arg2;
  const effect = React.useEffect(() => {
    const items = batchedStoreListener();
    batchedStoreListener = new items(table[20]).BatchedStoreListener(items, () => {
      const tmp = batchedStoreListener();
      const tmp2 = outer1_2(callback, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = outer2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        let num2 = 0.4;
        if (null != outer1_3) {
          num2 = outer1_3;
        }
        callback(batchedStoreListener[21]).playSound(tmp2, num2);
        const obj = callback(batchedStoreListener[21]);
      }
      callback = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
}
function MuteDeafen() {
  const items = [closure_13, closure_16];
  useSound(items, () => ({ inVoiceChannel: null != outer1_16.getVoiceChannelId(), selfMute: outer1_13.isSelfMute(), selfDeaf: outer1_13.isSelfDeaf(), audioPermissionReady: outer1_13.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: outer1_13.shouldSkipMuteUnmuteSound() }), (selfDeaf) => {
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
            const result = outer1_13.notifyMuteUnmuteSoundWasSkipped();
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
  const items = [closure_13, closure_16];
  useSound(items, () => ({ videoEnabled: outer1_13.isVideoEnabled(), inVoiceChannel: null != outer1_16.getVoiceChannelId() }), (videoEnabled, videoEnabled2) => {
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
  const items = [closure_11, closure_15, closure_16, closure_6];
  useSound(items, () => {
    const channel = outer1_11.getChannel(outer1_16.getVoiceChannelId());
    let type;
    if (null != channel) {
      type = channel.type;
    }
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const wasEverRtcConnected = outer1_15.getWasEverRtcConnected();
    const state = outer1_15.getState();
    const obj = { channelType: type, guildId, connected: state === outer1_22.RTC_CONNECTED };
    let tmp5 = !wasEverRtcConnected;
    if (tmp5) {
      tmp5 = state !== outer1_22.DISCONNECTED;
    }
    if (!tmp5) {
      tmp5 = state === outer1_22.RTC_CONNECTED;
    }
    obj.connectHasStarted = tmp5;
    obj.awaitingRemote = null != outer1_6.getAwaitingRemoteSessionInfo();
    obj.connectedRemote = null != outer1_6.getRemoteSessionId();
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
  const items = [closure_17];
  useSound(items, () => outer1_17.isCurrentUserPTTActive(), (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (outer1_13.getMode() === outer1_20.PUSH_TO_TALK) {
        if (!isSelfMuteResult) {
          let str = "ptt_stop";
          if (arg1) {
            str = "ptt_start";
          }
          return str;
        }
      }
      isSelfMuteResult = outer1_13.isSelfMute();
    }
  });
  return null;
}
function SelfMutedTemporarily() {
  const items = [closure_13];
  useSound(items, () => outer1_13.isSelfMutedTemporarily(), (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (outer1_13.getMode() === outer1_20.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "ptt_start";
          if (arg1) {
            str = "ptt_stop";
          }
          return str;
        }
      }
      isSelfMuteResult = outer1_13.isSelfMute();
    }
  });
  return null;
}
function PriorityVAD() {
  const items = [closure_17];
  useSound(items, () => outer1_17.isCurrentUserPrioritySpeaker(), (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (outer1_13.getMode() === outer1_20.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "ptt_stop";
          if (arg1) {
            str = "ptt_start";
          }
          return str;
        }
      }
      isSelfMuteResult = outer1_13.isSelfMute();
    }
  });
  return null;
}
function UserHasBeenMoved() {
  const items = [closure_18];
  useSound(items, () => outer1_18.userHasBeenMovedVersion, (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  });
  return null;
}
function UserInvitedToSpeak() {
  const items = [closure_16, closure_18];
  useSound(items, () => {
    const voiceChannelId = outer1_16.getVoiceChannelId();
    if (null == voiceChannelId) {
      return outer1_0(outer1_1[22]).RequestToSpeakStates.NONE;
    } else {
      const voiceStateForChannel = outer1_18.getVoiceStateForChannel(voiceChannelId);
      return outer1_0(outer1_1[22]).getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  }, (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === outer1_0(outer1_1[22]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  });
  return null;
}
function VoiceChannel() {
  let items = [closure_16, closure_9, closure_10, closure_18, closure_11];
  useSound(items, () => {
    const voiceChannelId = outer1_16.getVoiceChannelId();
    const id = outer1_10.getId();
    const items = [];
    const allActiveStreams = outer1_9.getAllActiveStreams();
    let type;
    let diff;
    let mapped = items;
    if (null != voiceChannelId) {
      const channel = outer1_11.getChannel(voiceChannelId);
      mapped = items;
      if (null != channel) {
        const result = outer1_19.countVoiceStatesForChannel(channel.id);
        let num = 0;
        if (outer1_18.isInChannel(channel.id)) {
          num = 1;
        }
        diff = result - num;
        const allApplicationStreamsForChannel = outer1_9.getAllApplicationStreamsForChannel(channel.id);
        mapped = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
        type = channel.type;
      }
    }
    if (1 === allActiveStreams.length) {
      let first = allActiveStreams[0];
    } else {
      first = outer1_9.getCurrentUserActiveStream();
    }
    let state;
    if (null != first) {
      state = first.state;
    }
    if (state === outer1_21.CONNECTING) {
      first = null;
    }
    let tmp15 = null;
    let num3 = 0;
    if (null != first) {
      let obj = outer1_0(outer1_1[23]);
      const encodeStreamKeyResult = obj.encodeStreamKey(first);
      const viewerIds = outer1_9.getViewerIds(encodeStreamKeyResult);
      num3 = viewerIds.filter((arg0) => arg0 !== id).length;
      tmp15 = encodeStreamKeyResult;
    }
    obj = { channelType: type, voiceChannelId, voiceChannelUserCount: diff, streamingUserIds: mapped, singleActiveStreamKey: tmp15, singleActiveStreamViewerCount: num3, currentUserId: id, allActiveStreams };
    return obj;
  }, (voiceChannelId) => {
    let channelType;
    let result;
    let singleActiveStreamKey;
    let singleActiveStreamViewerCount;
    let streamingUserIds;
    let voiceChannelUserCount;
    let closure_0 = voiceChannelId;
    ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
    ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: result } = arg1);
    let _createForOfIteratorHelperLoose;
    if (voiceChannelId.voiceChannelId === voiceChannelId) {
      if (null != voiceChannelId) {
        const channel = outer1_11.getChannel(voiceChannelId);
        let flag = false;
        if (null != channel) {
          const guildId = channel.getGuildId();
          flag = false;
          if (null != guildId) {
            const guild = outer1_12.getGuild(guildId);
            flag = null != guild && guild.afkChannelId === channel.id;
            const tmp4 = null != guild && guild.afkChannelId === channel.id;
          }
        }
        if (!flag) {
          const allActiveStreams = voiceChannelId.allActiveStreams;
          _createForOfIteratorHelperLoose = allActiveStreams.map((ownerId) => ownerId.ownerId);
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
  const items = [closure_16, _createForOfIteratorHelperLoose, _isNativeReflectConstruct, closure_10, closure_11, closure_7];
  useSound(items, () => {
    const voiceChannelId = outer1_16.getVoiceChannelId();
    const channelId = outer1_16.getChannelId();
    const connectedActivityLocation = outer1_3.getConnectedActivityLocation();
    let obj = outer1_0(outer1_1[24]);
    const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    const id = outer1_10.getId();
    if (obj2.isNotNullish(channelId)) {
      let embeddedActivitiesForChannel = outer1_3.getEmbeddedActivitiesForChannel(channelId);
    } else {
      embeddedActivitiesForChannel = outer1_4;
    }
    obj2 = outer1_0(outer1_1[25]);
    if (obj3.isNotNullish(voiceChannelId)) {
      let embeddedActivitiesForChannel1 = outer1_3.getEmbeddedActivitiesForChannel(voiceChannelId);
    } else {
      embeddedActivitiesForChannel1 = outer1_4;
    }
    obj3 = outer1_0(outer1_1[25]);
    if (obj4.isNotNullish(embeddedActivityLocationChannelId)) {
      let embeddedActivitiesForChannel2 = outer1_3.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = outer1_4;
    }
    obj4 = outer1_0(outer1_1[25]);
    let selfEmbeddedActivityForLocation = null;
    if (obj5.isNotNullish(connectedActivityLocation)) {
      selfEmbeddedActivityForLocation = outer1_3.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    }
    const connectedFrame = outer1_5.getConnectedFrame();
    let tmp15 = channelId === outer1_23.VIBEGRATIONS;
    if (tmp15) {
      let channelId1;
      if (null != connectedFrame) {
        channelId1 = connectedFrame.channelId;
      }
      tmp15 = null == channelId1;
    }
    if (tmp15) {
      let applicationId;
      if (null != connectedFrame) {
        applicationId = connectedFrame.applicationId;
      }
      tmp15 = applicationId === outer1_7.getBuilderPreviewApplicationId();
    }
    obj = { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel, connectedChannelActivities: embeddedActivitiesForChannel2, userConnectedActivity: selfEmbeddedActivityForLocation, voiceChannelActivities: embeddedActivitiesForChannel1, connectedFrame };
    let channelId2;
    if (null != connectedFrame) {
      channelId2 = connectedFrame.channelId;
    }
    let result = null != channelId2;
    if (result) {
      let channelId3;
      if (null != connectedFrame) {
        channelId3 = connectedFrame.channelId;
      }
      result = outer1_0(outer1_1[26]).isVibegrationsChannelCandidate(outer1_11.getChannel(channelId3), "ActivitySounds");
      const obj7 = outer1_0(outer1_1[26]);
    }
    if (!result) {
      result = tmp15;
    }
    obj.inVibegrationsChannel = result;
    return obj;
  }, (voiceChannelActivities) => {
    let channelActivities;
    let closure_0;
    let connectedActivityLocation;
    let connectedChannelActivities;
    let connectedFrame;
    let inVibegrationsChannel;
    let userConnectedActivity;
    let voiceChannelId;
    ({ connectedActivityLocation, currentUserId: closure_0, userConnectedActivity } = arg1);
    ({ voiceChannelActivities, connectedFrame, voiceChannelId, channelActivities, connectedChannelActivities, inVibegrationsChannel } = arg1);
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
        isNotNullishResult = outer1_0(outer1_1[25]).isNotNullish(voiceChannelActivities.voiceChannelId);
        const obj2 = outer1_0(outer1_1[25]);
      }
      let str2;
      if (isNotNullishResult) {
        str2 = "activity_launch";
      }
      let isNotNullishResult1 = undefined === found1;
      if (isNotNullishResult1) {
        isNotNullishResult1 = outer1_0(outer1_1[25]).isNotNullish(found);
        const obj3 = outer1_0(outer1_1[25]);
      }
      if (isNotNullishResult1) {
        str2 = "activity_end";
      }
      let isNotNullishResult2 = undefined === found;
      if (isNotNullishResult2) {
        isNotNullishResult2 = outer1_0(outer1_1[25]).isNotNullish(found1);
        const obj4 = outer1_0(outer1_1[25]);
      }
      if (isNotNullishResult2) {
        isNotNullishResult2 = found1.userIds.size > 1;
      }
      if (isNotNullishResult2) {
        str2 = "activity_user_join";
      }
      let isNotNullishResult3 = outer1_0(outer1_1[25]).isNotNullish(found1);
      if (isNotNullishResult3) {
        isNotNullishResult3 = outer1_0(outer1_1[25]).isNotNullish(found);
        const obj6 = outer1_0(outer1_1[25]);
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
      const obj5 = outer1_0(outer1_1[25]);
    }
    let str3 = str;
    if (!someResult) {
      if (tmp18) {
        str = "activity_launch";
      }
      const userConnectedActivity2 = voiceChannelActivities.userConnectedActivity;
      let isNotNullishResult4 = null == userConnectedActivity;
      if (isNotNullishResult4) {
        isNotNullishResult4 = outer1_0(outer1_1[25]).isNotNullish(userConnectedActivity2);
        const obj7 = outer1_0(outer1_1[25]);
      }
      if (isNotNullishResult4) {
        str = "activity_end";
      }
      let isNotNullishResult5 = outer1_0(outer1_1[25]).isNotNullish(userConnectedActivity);
      if (isNotNullishResult5) {
        isNotNullishResult5 = outer1_0(outer1_1[25]).isNotNullish(userConnectedActivity2);
        const obj9 = outer1_0(outer1_1[25]);
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
      const obj8 = outer1_0(outer1_1[25]);
      tmp18 = voiceChannelActivities.connectedChannelActivities.length < connectedChannelActivities.length && voiceChannelActivities.channelActivities.length < channelActivities.length;
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
          tmp30 = null != userConnectedActivity && null != voiceChannelActivities.userConnectedActivity;
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
      if (null == voiceChannelActivities.connectedFrame) {
        if (null != connectedFrame) {
          let str8 = "activity_launch";
        }
        tmp34 = str8;
      }
      if (!tmp35) {
        str4 = "activity_end";
      }
      str8 = str4;
      tmp35 = null == voiceChannelActivities.connectedFrame || null != connectedFrame || voiceChannelActivities.inVibegrationsChannel;
    }
    return tmp34;
  });
  return null;
}
({ InputModes: closure_20, ApplicationStreamStates: closure_21, RTCConnectionStates: closure_22 } = ME);
({ jsx: closure_24, Fragment: closure_25, jsxs: closure_26 } = jsxProd);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default function SoundPlayer() {
  const obj = {};
  const items = [callback(MuteDeafen, {}), callback(Camera, {}), callback(RTCConnect, {}), callback(Speaking, {}), callback(SelfMutedTemporarily, {}), callback(UserHasBeenMoved, {}), callback(VoiceChannel, {}), callback(UserInvitedToSpeak, {}), callback(ActivitySounds, {}), callback(PriorityVAD, {})];
  obj.children = items;
  return callback2(closure_25, obj);
};
