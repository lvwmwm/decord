// Module ID: 10549
// Function ID: 82427
// Name: areParticipantsEqual
// Dependencies: []

// Module 10549 (areParticipantsEqual)
function areParticipantsEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, , tmp] = arg0;
  [, , tmp2] = arg1;
  return tmp === tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ TouchableOpacity: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const tmp2 = arg1(dependencyMap[2]);
({ togglePipFocus: closure_13, useIsVoiceChatFocused: closure_14 } = arg1(dependencyMap[10]));
const ParticipantTypes = arg1(dependencyMap[11]).ParticipantTypes;
const tmp3 = arg1(dependencyMap[10]);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = arg1(dependencyMap[12]));
let obj1 = arg1(dependencyMap[13]);
let obj = {};
let obj3 = arg1(dependencyMap[14]);
obj.elevationShadow = obj3.generateBoxShadowStyle(arg1(dependencyMap[14]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj = { backgroundColor: importDefault(dependencyMap[15]).colors.BLACK, borderRadius: importDefault(dependencyMap[15]).radii.sm, overflow: "hidden" };
obj.background = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[15]).colors.BLACK, borderRadius: importDefault(dependencyMap[15]).radii.lg };
obj.backgroundPipFab = obj1;
const tmp4 = arg1(dependencyMap[12]);
obj.pip = { borderRadius: importDefault(dependencyMap[15]).radii.sm, overflow: "hidden" };
obj3 = { borderRadius: importDefault(dependencyMap[15]).radii.lg, overflow: "hidden" };
obj.pipFab = obj3;
obj.avatarContainer = {};
obj.activityPipContainer = { backgroundColor: false, borderRadius: false };
obj.thermalAlertIconContainer = {};
const obj4 = { "Null": "<string:1912602975>", "Null": "height", color: importDefault(dependencyMap[15]).colors.WHITE };
obj.thermalAlertIcon = obj4;
let closure_19 = obj1.createStyles(obj);
let closure_20 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  const pipParticipant = channel.pipParticipant;
  const importDefault = pipParticipant;
  const selfParticipant = channel.selfParticipant;
  let dependencyMap;
  let closure_3;
  let closure_4;
  function onScreenshareTap() {
    const voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null != voiceChannelId) {
      let id;
      if (null != pipParticipant) {
        id = pipParticipant.id;
      }
      let tmp7 = null;
      if (null != id) {
        tmp7 = id;
      }
      const participant = pipParticipant(openVoice[21]).selectParticipant(voiceChannelId, tmp7);
      if (closure_3) {
        openVoice();
      }
      const obj = pipParticipant(openVoice[21]);
    }
  }
  function onPipTap() {
    if (closure_3) {
      openVoice();
    }
    if (closure_4) {
      const participant = pipParticipant(openVoice[21]).selectParticipant(channel.id, null);
      const obj = pipParticipant(openVoice[21]);
    } else {
      callback();
    }
  }
  let obj = arg1(dependencyMap[16]);
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  let openVoice;
  if (null != voiceChatNavigationContext) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (null == openVoice) {
    openVoice = importDefault(dependencyMap[17]).noop;
  }
  dependencyMap = openVoice;
  closure_3 = callback2();
  closure_4 = importDefault(dependencyMap[18])(channel.id);
  let type;
  if (null != pipParticipant) {
    type = pipParticipant.type;
  }
  let tmp9Result = type === ParticipantTypes.ACTIVITY;
  if (tmp9Result) {
    let applicationId;
    if (null != pipParticipant) {
      applicationId = pipParticipant.applicationId;
    }
    tmp9Result = importDefault(dependencyMap[19])(applicationId);
    const tmp9 = importDefault(dependencyMap[19]);
  }
  let obj1 = arg1(dependencyMap[20]);
  const items = [closure_9];
  const items1 = [pipParticipant];
  let type1;
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let isLocalVideoDisabledResult = null != pipParticipant;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = localVideoDisabled.isLocalVideoDisabled(pipParticipant.id);
    }
    return isLocalVideoDisabledResult;
  }, items1);
  if (null != pipParticipant) {
    type1 = pipParticipant.type;
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    if (ParticipantTypes.STREAM !== type1) {
      if (ParticipantTypes.USER === type1) {
        let tmp17 = null;
        if (importDefault(dependencyMap[25])(pipParticipant)) {
          tmp17 = null;
          if (!stateFromStores) {
            obj = { participant: pipParticipant, avatarSize: arg1(dependencyMap[14]).AvatarSizes.PROFILE, resizeMode: arg1(dependencyMap[24]).ResizeMode.COVER, onSingleTap: onPipTap, onDoubleTap: onPipTap };
            tmp17 = callback3(importDefault(dependencyMap[26]), obj);
            const tmp21 = importDefault(dependencyMap[26]);
          }
        }
        let tmp14 = tmp17;
      } else {
        tmp14 = null;
        if (ParticipantTypes.ACTIVITY === type1) {
          obj = {
            participant: pipParticipant,
            channel,
            onSingleTap() {
                      const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
                      if (null != currentEmbeddedActivity) {
                        pipParticipant(openVoice[28])(channel.guild_id, currentEmbeddedActivity.location);
                      }
                      if (closure_3) {
                        openVoice();
                      }
                    }
          };
          tmp14 = callback3(importDefault(dependencyMap[27]), obj);
        }
      }
      obj1 = {};
      let tmp34 = null;
      if (null != selfParticipant) {
        tmp34 = null;
        if (!tmp9Result) {
          const obj2 = {
            participant: selfParticipant,
            avatarSize: arg1(dependencyMap[14]).AvatarSizes.PROFILE,
            resizeMode: arg1(dependencyMap[24]).ResizeMode.COVER,
            onSingleTap() {
                      if (closure_3) {
                        openVoice();
                      } else {
                        callback();
                      }
                    }
          };
          tmp34 = callback3(importDefault(dependencyMap[26]), obj2);
          const tmp38 = importDefault(dependencyMap[26]);
        }
      }
      const items2 = [tmp34, tmp14];
      obj1.children = items2;
      return closure_18(closure_17, obj1);
    }
  }
  if (pipParticipant.user.id === id.getId()) {
    const obj3 = { onSingleTap: onScreenshareTap, onDoubleTap: onScreenshareTap };
    callback3(importDefault(dependencyMap[22]), obj3);
  } else {
    const obj4 = { <string:140633209>: null, <string:1406208081>: null, resizeMode: arg1(dependencyMap[24]).ResizeMode.CONTAIN, participant: pipParticipant, onSingleTap: onPipTap, onDoubleTap: onPipTap };
    callback3(importDefault(dependencyMap[23]), obj4);
    const tmp26 = importDefault(dependencyMap[23]);
  }
});
let closure_21 = importAllResult.memo((channel) => {
  let tmp3;
  let tmp4;
  channel = channel.channel;
  const tmp = callback4();
  let obj = arg1(dependencyMap[20]);
  const items = [closure_12];
  obj = { channelId: channel.id, selfParticipant: channel.selfParticipant };
  [tmp3, tmp4] = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_12.consumedRequestToRespondToSeriousThermalState(), closure_12.isReactingToThermalState()];
    return items;
  }), 2);
  const tmp5 = function useActivityPipParticipant(channelId) {
    channelId = channelId.channelId;
    const selfParticipant = channelId.selfParticipant;
    const items = [closure_12];
    const stateFromStores = channelId(leadingEdgeDebounce[20]).useStateFromStores(items, () => reactingToThermalState.isReactingToThermalState());
    const obj = channelId(leadingEdgeDebounce[20]);
    const items1 = [closure_7];
    const items2 = [channelId];
    const tmp2 = callback(channelId(leadingEdgeDebounce[20]).useStateFromStores(items1, () => {
      const items = [store.getParticipants(channelId), store.getVideoParticipants(channelId), store.getParticipantsVersion(channelId)];
      return items;
    }, items2, closure_22), 2);
    const first = tmp2[0];
    const obj2 = channelId(leadingEdgeDebounce[20]);
    const items3 = [closure_11];
    const items4 = [selfParticipant];
    const stateFromStores1 = channelId(leadingEdgeDebounce[20]).useStateFromStores(items3, () => {
      let found = null;
      if (null != selfParticipant) {
        const speakers = speakers.getSpeakers();
        found = speakers.find((arg0) => {
          let isSpeakingResult = arg0 !== user.user.id;
          if (isSpeakingResult) {
            isSpeakingResult = speaking.isSpeaking(arg0);
          }
          return isSpeakingResult;
        });
      }
      return found;
    }, items4);
    const obj3 = channelId(leadingEdgeDebounce[20]);
    const leadingEdgeDebounce = channelId(leadingEdgeDebounce[29]).useLeadingEdgeDebounce(stateFromStores1, 1000);
    if (null != leadingEdgeDebounce) {
      const found = first.find((id) => id.id === leadingEdgeDebounce);
      if (null != found) {
        if (found.type === constants.USER) {
          return found;
        }
      }
    }
    let streamId;
    if (null != selfParticipant) {
      streamId = selfParticipant.streamId;
    }
    if (null != streamId) {
      return selfParticipant;
    } else {
      if (!stateFromStores) {
        const items5 = [];
        HermesBuiltin.arraySpread(tmp3, 0);
        const first1 = items5.sort((lastSpoke, lastSpoke2) => {
          let num = -1;
          if (lastSpoke.lastSpoke < lastSpoke2.lastSpoke) {
            num = 1;
          }
          return num;
        })[0];
        if (null != first1) {
          return first1;
        }
      }
      return selfParticipant;
    }
    const obj4 = channelId(leadingEdgeDebounce[29]);
  }(obj);
  let obj2 = arg1(dependencyMap[30]);
  const token = obj2.useToken(importDefault(dependencyMap[15]).unsafe_rawColors.PRIMARY_800);
  if (null != tmp5) {
    const user = tmp5.user;
    const avatarURL = user.getAvatarURL(channel.guild_id, 80);
  }
  if (null == tmp5) {
    return null;
  } else {
    let tmp10 = null != tmp5.streamId;
    if (tmp10) {
      const voiceState = tmp5.voiceState;
      let selfVideo;
      if (null != voiceState) {
        selfVideo = voiceState.selfVideo;
      }
      tmp10 = selfVideo;
    }
    obj = {};
    const items1 = [tmp.avatarContainer, ];
    const obj1 = { backgroundColor: tmp8 };
    items1[1] = obj1;
    obj.style = items1;
    if (tmp10) {
      if (!tmp4) {
        obj2 = { participant: tmp5, avatarSize: arg1(dependencyMap[14]).AvatarSizes.PROFILE, resizeMode: arg1(dependencyMap[24]).ResizeMode.COVER };
        let tmp18 = callback3(importDefault(dependencyMap[26]), obj2);
        const tmp16 = importDefault(dependencyMap[26]);
      }
      const items2 = [tmp18, ];
      let tmp22 = null;
      if (tmp3) {
        const obj3 = { style: tmp.thermalAlertIconContainer };
        const obj4 = { style: tmp.thermalAlertIcon, source: importDefault(dependencyMap[32]), color: tmp.thermalAlertIcon.color };
        obj3.children = callback3(arg1(dependencyMap[14]).Icon, obj4);
        tmp22 = callback3(closure_5, obj3);
      }
      items2[1] = tmp22;
      obj.children = items2;
      return tmp11(tmp12, obj);
    }
    const obj5 = { size: arg1(dependencyMap[14]).AvatarSizes.LARGE_48, channel, guildId: channel.guild_id };
    ({ user: obj7.user, speaking: obj7.speaking } = tmp5);
    tmp18 = callback3(arg1(dependencyMap[14]).Avatar, obj5);
  }
});
const obj2 = { borderRadius: importDefault(dependencyMap[15]).radii.sm, overflow: "hidden" };
const memoResult = importAllResult.memo((arg0) => {
  let channel;
  let height;
  let pipParticipant;
  let selfParticipant;
  let width;
  ({ channel, pipParticipant, selfParticipant } = arg0);
  const tmp = callback4();
  let obj = arg1(dependencyMap[33]);
  obj = { channelId: channel.id };
  const isViewingActivity = obj.useIsViewingActivity(obj);
  let obj2 = arg1(dependencyMap[34]);
  const shouldForcePipOrientation = obj2.useShouldForcePipOrientation({ channel });
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp4 = importDefault(dependencyMap[35])(obj);
  const obj1 = { style: isViewingActivity ? tmp.backgroundPipFab : tmp.background };
  obj2 = { activeOpacity: 0.7 };
  const obj3 = {};
  const items = [isViewingActivity ? tmp.pipFab : tmp.pip, , , ];
  ({ width, height } = importDefault(dependencyMap[36])());
  let obj7 = arg1(dependencyMap[37]);
  let elevationShadow;
  if (obj7.isAndroid()) {
    elevationShadow = tmp.elevationShadow;
  }
  items[1] = elevationShadow;
  const obj4 = {};
  if (width > height) {
    let str = "row";
  } else {
    str = "column";
  }
  obj4.flexDirection = str;
  items[2] = obj4;
  items[3] = tmp4;
  obj3.style = items;
  if (isViewingActivity) {
    const obj5 = { pointerEvents: "none", style: tmp.activityPipContainer };
    const obj6 = { channel, pipParticipant, selfParticipant };
    obj5.children = tmp14(closure_21, obj6);
    let tmp14Result = tmp14(closure_5, obj5);
  } else {
    obj7 = { channel, pipParticipant, selfParticipant };
    tmp14Result = tmp14(closure_20, obj7);
  }
  obj3.children = tmp14Result;
  obj2.children = closure_16(closure_5, obj3);
  obj1.children = closure_16(closure_4, obj2);
  return closure_16(closure_5, obj1);
});
const result = arg1(dependencyMap[39]).fileFinishedImporting("modules/video_calls/native/components/PictureInPictureVideo.tsx");

export default memoResult;
export { areParticipantsEqual };
