// Module ID: 12587
// Function ID: 96806
// Name: StreamingUserRow
// Dependencies: []

// Module 12587 (StreamingUserRow)
let Platform;
function StreamingUserRow(user) {
  user = user.user;
  const arg1 = user;
  const channel = user.channel;
  const importDefault = channel;
  const tmp = callback3();
  let obj = arg1(dependencyMap[14]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => user(closure_2[27]).getStreamerActivityByUserId(user.id, closure_10));
  if (null != stateFromStores) {
    const intl2 = arg1(dependencyMap[25]).intl;
    obj = {};
    if (null == stateFromStores.details) {
      obj.name = stateFromStores.name;
      intl2.format(tmp9, obj);
    }
    const details = stateFromStores.details;
  } else {
    const intl = arg1(dependencyMap[25]).intl;
    obj = {};
    const obj1 = {};
    const merged = Object.assign(user);
    const obj2 = { text: intl.string(arg1(dependencyMap[25]).t.eXan7B) };
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp2.labelCallScreen;
    }
    obj2.style = labelCallScreen;
    obj1["subLabel"] = closure_11(arg1(dependencyMap[26]).FormSubLabel, obj2);
    const items1 = [closure_11(closure_16, obj1), ];
    let tmp24Result = user.id !== store.getId();
    if (tmp24Result) {
      const obj3 = { style: tmp.streamPreview };
      const obj4 = {};
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      obj4.guildId = guildId;
      obj4.userId = user.id;
      obj4.disableTransition = true;
      obj4.onPress = function onPress() {
        let isModalOpenResult = null != channel;
        if (isModalOpenResult) {
          const obj = user(closure_2[29]);
          isModalOpenResult = obj.isModalOpen(user(closure_2[30]).getVoiceChannelKey(channel.id));
          const obj2 = user(closure_2[30]);
        }
        if (isModalOpenResult) {
          const obj3 = channel(closure_2[31]);
          obj3.hideActionSheet(user(closure_2[30]).getVoiceChannelKey(channel.id));
          const obj4 = user(closure_2[30]);
        }
      };
      obj3.children = closure_11(importDefault(dependencyMap[28]), obj4);
      tmp24Result = closure_11(closure_3, obj3);
      const tmp24 = closure_11;
      const tmp25 = closure_3;
      const tmp26 = closure_11;
      const tmp29 = importDefault(dependencyMap[28]);
    }
    items1[1] = tmp24Result;
    obj.children = items1;
    return closure_12(closure_13, obj);
  }
}
function RingButton(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const userId = channelId.userId;
  const importDefault = userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = callback3();
  let intl = callback4();
  let tmp2 = null;
  if (null != userId) {
    tmp2 = null;
    if (null != channelId) {
      let tmp6Result = {
        onPress() {
              const items = [userId];
              userId(closure_2[33]).ring(channelId, items, "voice_user_action_sheet");
            },
        accessibilityRole: "button",
        style: isActionSheet ? intl.ringingButton : tmp.ringingButton
      };
      tmp6Result = { style: isActionSheet ? intl.ringingButtonLabel : tmp.ringingButtonLabel };
      intl = arg1(dependencyMap[25]).intl;
      tmp6Result.children = intl.string(arg1(dependencyMap[25]).t.bHa9kN);
      tmp6Result = closure_11(arg1(dependencyMap[18]).LegacyText, tmp6Result);
      tmp6Result.children = tmp6Result;
      closure_11(arg1(dependencyMap[32]).PressableOpacity, tmp6Result);
      const tmp3 = closure_11;
      const tmp6 = closure_11;
    }
  }
  return tmp2;
}
function StopRingButton(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const userId = channelId.userId;
  const importDefault = userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = callback3();
  let intl = callback4();
  let tmp2 = null;
  if (null != userId) {
    tmp2 = null;
    if (null != channelId) {
      let tmp6Result = {
        onPress() {
              const items = [userId];
              userId(closure_2[33]).stopRinging(channelId, items);
            },
        accessibilityRole: "button",
        style: isActionSheet ? intl.ringingButton : tmp.ringingButton
      };
      tmp6Result = { style: isActionSheet ? intl.ringingButtonLabel : tmp.ringingButtonLabel };
      intl = arg1(dependencyMap[25]).intl;
      tmp6Result.children = intl.string(arg1(dependencyMap[25]).t.ygslb0);
      tmp6Result = closure_11(arg1(dependencyMap[18]).LegacyText, tmp6Result);
      tmp6Result.children = tmp6Result;
      closure_11(arg1(dependencyMap[32]).PressableOpacity, tmp6Result);
      const tmp3 = closure_11;
      const tmp6 = closure_11;
    }
  }
  return tmp2;
}
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_3, Platform } = arg1(dependencyMap[1]));
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
const Fonts = arg1(dependencyMap[9]).Fonts;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[10]));
let obj1 = arg1(dependencyMap[11]);
let obj = { row: { flexDirection: "row" } };
obj = { tintColor: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj.voiceStatusIcon = obj;
obj.voiceStatusIconMargin = { marginLeft: 8 };
obj.streamPreview = { soundsharing: "r", GuildRoleSubscriptionTierDesignTab: "getSystemVersionMinor", BetaTag: "r", EXPLICIT_MEDIA_SCAN_MESSAGES: "IPv4address" };
obj1 = { <string:1683372976>: false, <string:1865094543>: false, <string:4168941352>: false, <string:1095185546>: false, pause/break: false, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[12]).radii.xs };
obj.ringingButton = obj1;
const tmp3 = arg1(dependencyMap[10]);
obj.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.autoDisabledVideo = { -9223372036854775808: true, filter: true };
obj.autoDisabledVideoLabel = { marginLeft: 4 };
let closure_14 = obj1.createStyles(obj);
let obj6 = arg1(dependencyMap[11]);
const obj3 = {};
const obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_ACTIVE };
obj3.labelCallScreen = { fontFamily: Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[12]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const obj4 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[12]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj3.voiceStatusIcon = { tintColor: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj6 = { <string:1683372976>: false, <string:1865094543>: false, <string:4168941352>: false, <string:1095185546>: false, pause/break: false, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[12]).radii.xs };
obj3.ringingButton = obj6;
const obj5 = { tintColor: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj3.ringingButtonLabel = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = obj6.createStyles(obj3);
let closure_16 = importAllResult.memo((user) => {
  let channel;
  let isActionSheet;
  let isSelfMute;
  let localDeaf;
  let localVideo;
  let localVideoAutoDisabled;
  let localVideoDisabled;
  let name;
  let voiceState;
  let withStream;
  user = user.user;
  const arg1 = user;
  ({ name, channel } = user);
  const importDefault = channel;
  ({ voiceState, withStream } = user);
  if (withStream === undefined) {
    withStream = true;
  }
  ({ isActionSheet, onPress: closure_2 } = user);
  let obj = { 1373623906: null, -865877897: 0.6, 996450396: "BounceOutRight", 1722870988: null, -1335636933: 0.6, -1604081066: "BounceOutLeft", 1632723515: null, -1606786226: 0.6 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(user, obj);
  let tmp3;
  let closure_4;
  let store;
  let closure_6;
  let closure_7;
  let closure_8;
  tmp3 = callback3();
  const tmp4 = callback4();
  const id = store.getId();
  closure_4 = id;
  obj = { userId: user.id };
  let obj2 = arg1(dependencyMap[14]);
  const items = [closure_4];
  store = obj2.useStateFromStores(items, () => id.theme);
  let obj3 = arg1(dependencyMap[14]);
  const items1 = [closure_9];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let isVideoEnabledResult = id === user.id;
    const obj = {};
    let isSelfMuteResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfMuteResult = closure_9.isSelfMute();
    }
    obj.isSelfMute = isSelfMuteResult;
    obj.localMute = closure_9.isLocalMute(user.id);
    let isSelfDeafResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfDeafResult = closure_9.isSelfDeaf();
    }
    obj.localDeaf = isSelfDeafResult;
    if (isVideoEnabledResult) {
      isVideoEnabledResult = closure_9.isVideoEnabled();
    }
    obj.localVideo = isVideoEnabledResult;
    obj.localVideoDisabled = closure_9.isLocalVideoDisabled(user.id);
    obj.localVideoAutoDisabled = closure_9.isLocalVideoAutoDisabled(user.id);
    return obj;
  });
  let localMute = stateFromStoresObject.localMute;
  closure_6 = localMute;
  ({ localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } = stateFromStoresObject);
  let obj4 = arg1(dependencyMap[14]);
  const items2 = [closure_8];
  const stateFromStores = obj4.useStateFromStores(items2, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return tmp14.isGuestOrLurker(guild_id, user.id);
  });
  if (!localMute) {
    localMute = isSelfMute;
  }
  closure_7 = localMute;
  if (!localVideo) {
    localVideo = localVideoDisabled;
  }
  let flag = false;
  let flag2 = false;
  let tmp9 = localDeaf;
  let tmp10 = localVideo;
  let flag3 = false;
  let flag4 = false;
  if (null != voiceState) {
    if (withStream) {
      withStream = voiceState.selfStream;
    }
    if (!localMute) {
      localMute = voiceState.isVoiceMuted();
    }
    closure_7 = localMute;
    let isVoiceDeafenedResult = localDeaf;
    if (!localDeaf) {
      isVoiceDeafenedResult = voiceState.isVoiceDeafened();
    }
    let selfVideo = localVideo;
    if (!localVideo) {
      selfVideo = voiceState.selfVideo;
    }
    const sessionId = voiceState.sessionId;
    let tmp12 = null != sessionId && id === user.id;
    if (tmp12) {
      tmp12 = sessionId !== store.getSessionId();
    }
    flag = true;
    flag3 = tmp12;
    flag2 = withStream;
    tmp9 = isVoiceDeafenedResult;
    tmp10 = selfVideo;
    flag4 = tmp12;
  }
  const tmp14 = isActionSheet ? tmp4.voiceStatusIcon : tmp3.voiceStatusIcon;
  closure_8 = tmp14;
  obj = {
    onPress() {
      return callback(user);
    },
    label: name
  };
  const obj1 = { user };
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  obj1.guildId = guild_id;
  obj1.size = arg1(dependencyMap[18]).AvatarSizes.REFRESH_MEDIUM_32;
  obj1.speaking = importDefault(dependencyMap[13])(obj);
  obj.leading = callback(arg1(dependencyMap[18]).Avatar, obj1);
  let tmp20Result = null;
  if (flag) {
    tmp20Result = null;
    if (!flag3) {
      obj2 = { style: tmp3.row };
      let tmp22 = null;
      if (user.isSpectating) {
        obj3 = { size: arg1(dependencyMap[18]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[22]), style: tmp14 };
        tmp22 = callback(arg1(dependencyMap[18]).Icon, obj3);
      }
      const items3 = [
        tmp22,
        function renderMicIcon() {
              if (localMute) {
                let obj = user(closure_2[15]);
                if (obj.isThemeDark(closure_5)) {
                  let tmp5Result = tmp5(tmp6[16]);
                } else {
                  tmp5Result = tmp5(tmp6[17]);
                }
                obj = { size: user(closure_2[18]).Icon.Sizes.REFRESH_SMALL_16, source: tmp5Result, style: closure_2.voiceStatusIconMargin, color: tmp14.tintColor, disableColor: localMute };
                return callback2(user(closure_2[18]).Icon, obj);
              } else {
                return null;
              }
            }(),
  ,
  ,

      ];
      let tmp27 = null;
      if (tmp9) {
        obj4 = { size: arg1(dependencyMap[18]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[19]), style: tmp14 };
        tmp27 = callback(arg1(dependencyMap[18]).Icon, obj4);
      }
      items3[2] = tmp27;
      if (!tmp10) {
        items3[3] = null;
        let tmp43 = null;
        if (flag2) {
          const obj5 = { style: tmp14 };
          tmp43 = callback(arg1(dependencyMap[18]).LiveTag, obj5);
        }
        items3[4] = tmp43;
        obj2.children = items3;
        tmp20Result = tmp20(tmp21, obj2);
      } else {
        if (localVideoDisabled) {
          const obj6 = { size: arg1(dependencyMap[18]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[20]), style: tmp3.voiceStatusIconMargin, disableColor: true };
          let obj7 = obj6;
        } else {
          obj7 = { size: arg1(dependencyMap[18]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[21]), style: tmp14 };
        }
        callback(arg1(dependencyMap[18]).Icon, obj7);
        const tmp33 = callback;
      }
      const tmp20 = callback2;
      const tmp21 = tmp3;
    }
  }
  obj.trailing = tmp20Result;
  const obj8 = { disabled: flag4 };
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj);
  const obj9 = {};
  let tmp51 = name;
  if (stateFromStores) {
    const obj10 = {};
    const items4 = [name, ];
    const obj11 = {};
    const intl = arg1(dependencyMap[25]).intl;
    const items5 = [-16134899100522266000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, intl.string(arg1(dependencyMap[25]).t.pFO/Ph)];
    obj11.children = items5;
    items4[1] = callback2(arg1(dependencyMap[24]).Text, obj11);
    obj10.children = items4;
    tmp51 = callback2(closure_13, obj10);
  }
  obj9.text = tmp51;
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp4.labelCallScreen;
  }
  obj9.style = labelCallScreen;
  obj8["label"] = callback(arg1(dependencyMap[26]).FormRow.Label, obj9);
  if (localVideoAutoDisabled) {
    const obj12 = { style: tmp3.autoDisabledVideo };
    const obj13 = { source: importDefault(dependencyMap[23]), size: arg1(dependencyMap[18]).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const items6 = [callback(arg1(dependencyMap[18]).Icon, obj13), ];
    const obj14 = { style: tmp3.autoDisabledVideoLabel };
    const intl3 = arg1(dependencyMap[25]).intl;
    obj14.children = intl3.string(arg1(dependencyMap[25]).t.m2Hyj0);
    items6[1] = callback(arg1(dependencyMap[24]).Text, obj14);
    obj12.children = items6;
    let stringResult = callback2(tmp3, obj12);
  } else {
    stringResult = null;
    if (flag3) {
      const intl2 = arg1(dependencyMap[25]).intl;
      stringResult = intl2.string(arg1(dependencyMap[25]).t.IyYqqY);
    }
  }
  obj8["subLabel"] = stringResult;
  return callback(arg1(dependencyMap[26]).FormRow, obj8);
});
const obj7 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_ACTIVE };
const memoResult = importAllResult.memo(function DisconnectedUserRow(user) {
  let isActionSheet;
  let id = user.user;
  const arg1 = id;
  let id2 = user.channel;
  const importDefault = id2;
  ({ isActionSheet, onPress: closure_2 } = user);
  let obj = arg1(dependencyMap[14]);
  const items = [closure_6];
  const items1 = [id2.id, id.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = call.getCall(id2.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id.id);
    }
    return hasItem;
  }, items1);
  let obj1 = importDefault(dependencyMap[34]);
  const name = obj1.getName(id2.guild_id, id2.id, id);
  let obj2 = arg1(dependencyMap[35]);
  obj = {
    onPress() {
      return callback(id);
    }
  };
  const canRing = obj2.useCanRing(id, "DisconnectedUserRow");
  obj = { text: name };
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj.style = labelCallScreen;
  obj.label = callback(arg1(dependencyMap[26]).FormRow.Label, obj);
  obj1 = { user: id, guildId: id2.guild_id, size: arg1(dependencyMap[18]).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.leading = callback(arg1(dependencyMap[18]).Avatar, obj1);
  if (!canRing) {
    obj.trailing = null;
    obj2 = {};
    const merged = Object.assign(obj);
    return callback(arg1(dependencyMap[26]).FormRow, obj2);
  } else {
    const obj3 = {};
    id2 = id2.id;
    obj3.channelId = id2;
    id = id.id;
    obj3.userId = id;
    obj3.isActionSheet = isActionSheet;
    callback(stateFromStores ? StopRingButton : RingButton, obj3);
  }
});
const memoResult1 = importAllResult.memo(function VoiceMemberUser(voiceState) {
  voiceState = voiceState.voiceState;
  const arg1 = voiceState;
  const nick = voiceState.nick;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    if (null != voiceState) {
      channelId = voiceState.channelId;
    }
    return channel.getChannel(channelId);
  });
  let name = importDefault(dependencyMap[36]).useName(voiceState.user);
  if (null != voiceState) {
    if (voiceState.selfStream) {
      obj = {};
      const merged = Object.assign(voiceState);
      if (null != nick) {
        name = nick;
      }
      obj["name"] = name;
      obj["channel"] = stateFromStores;
      let tmp3Result = closure_11(StreamingUserRow, obj);
      const tmp8 = closure_11;
      const tmp9 = StreamingUserRow;
    }
    return tmp3Result;
  }
  obj = {};
  const merged1 = Object.assign(voiceState);
  let tmp6 = name;
  if (null != nick) {
    tmp6 = nick;
  }
  obj["name"] = tmp6;
  obj["channel"] = stateFromStores;
  obj["withStream"] = false;
  tmp3Result = closure_11(closure_16, obj);
});
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default memoResult1;
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;
