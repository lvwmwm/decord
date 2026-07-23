// Module ID: 12715
// Function ID: 99035
// Name: StreamingUserRow
// Dependencies: [31, 27, 1278, 1194, 4809, 1348, 1917, 4177, 4217, 653, 33, 4130, 689, 10534, 566, 3976, 12716, 12717, 1273, 12718, 12719, 12720, 12721, 8479, 4126, 1212, 7495, 6981, 10785, 3981, 4341, 4098, 4660, 8922, 4319, 8920, 3969, 2]

// Module 12715 (StreamingUserRow)
import importAllResult from "showActionSheet";
import get_ActivityIndicator from "_findPlayingActivity";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { Fonts } from "ME";
import jsxProd from "module_8922";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_11;
let closure_12;
let closure_13;
let closure_3;
const require = arg1;
function StreamingUserRow(user) {
  user = user.user;
  const channel = user.channel;
  const tmp = callback3();
  let obj = user(566);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => user(outer1_2[27]).getStreamerActivityByUserId(user.id, outer1_10));
  if (null != stateFromStores) {
    const intl2 = user(1212).intl;
    obj = {};
    if (null == stateFromStores.details) {
      obj.name = stateFromStores.name;
      intl2.format(tmp9, obj);
    }
    const details = stateFromStores.details;
  } else {
    const intl = user(1212).intl;
    obj = {};
    const obj1 = {};
    const merged = Object.assign(user);
    let obj2 = { text: intl.string(user(1212).t.eXan7B) };
    let labelCallScreen = null;
    if (user.isActionSheet) {
      labelCallScreen = tmp2.labelCallScreen;
    }
    obj2.style = labelCallScreen;
    obj1["subLabel"] = closure_11(user(7495).FormSubLabel, obj2);
    const items1 = [closure_11(closure_16, obj1), ];
    let tmp24Result = user.id !== store.getId();
    if (tmp24Result) {
      let obj3 = { style: tmp.streamPreview };
      let obj4 = {};
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
          const obj = user(outer1_2[29]);
          isModalOpenResult = obj.isModalOpen(user(outer1_2[30]).getVoiceChannelKey(channel.id));
          const obj2 = user(outer1_2[30]);
        }
        if (isModalOpenResult) {
          const obj3 = channel(outer1_2[31]);
          obj3.hideActionSheet(user(outer1_2[30]).getVoiceChannelKey(channel.id));
          const obj4 = user(outer1_2[30]);
        }
      };
      obj3.children = closure_11(channel(10785), obj4);
      tmp24Result = closure_11(closure_3, obj3);
      const tmp24 = closure_11;
      const tmp25 = closure_3;
      const tmp26 = closure_11;
      const tmp29 = channel(10785);
    }
    items1[1] = tmp24Result;
    obj.children = items1;
    return closure_12(closure_13, obj);
  }
}
function RingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
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
              userId(outer1_2[33]).ring(channelId, items, "voice_user_action_sheet");
            },
        accessibilityRole: "button",
        style: isActionSheet ? intl.ringingButton : tmp.ringingButton
      };
      tmp6Result = { style: isActionSheet ? intl.ringingButtonLabel : tmp.ringingButtonLabel };
      intl = channelId(1212).intl;
      tmp6Result.children = intl.string(channelId(1212).t.bHa9kN);
      tmp6Result = closure_11(channelId(1273).LegacyText, tmp6Result);
      tmp6Result.children = tmp6Result;
      closure_11(channelId(4660).PressableOpacity, tmp6Result);
      const tmp3 = closure_11;
      const tmp6 = closure_11;
    }
  }
  return tmp2;
}
function StopRingButton(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
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
              userId(outer1_2[33]).stopRinging(channelId, items);
            },
        accessibilityRole: "button",
        style: isActionSheet ? intl.ringingButton : tmp.ringingButton
      };
      tmp6Result = { style: isActionSheet ? intl.ringingButtonLabel : tmp.ringingButtonLabel };
      intl = channelId(1212).intl;
      tmp6Result.children = intl.string(channelId(1212).t.ygslb0);
      tmp6Result = closure_11(channelId(1273).LegacyText, tmp6Result);
      tmp6Result.children = tmp6Result;
      closure_11(channelId(4660).PressableOpacity, tmp6Result);
      const tmp3 = closure_11;
      const tmp6 = closure_11;
    }
  }
  return tmp2;
}
({ View: closure_3, Platform } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
let obj = { row: { flexDirection: "row" } };
obj = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj.voiceStatusIcon = obj;
obj.voiceStatusIconMargin = { marginLeft: 8 };
obj.streamPreview = { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj.ringingButton = _createForOfIteratorHelperLoose;
let obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj.ringingButtonLabel = obj2;
obj.autoDisabledVideo = { flexDirection: "row", alignItems: "center" };
obj.autoDisabledVideoLabel = { marginLeft: 4 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { labelCallScreen: { fontFamily: Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY } };
let obj4 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
obj3.voiceStatusIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj3.ringingButton = _createForOfIteratorHelperLoose;
let obj7 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj3.ringingButtonLabel = obj7;
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj3);
let closure_16 = importAllResult.memo((user) => {
  let channel;
  let dependencyMap;
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
  ({ name, channel } = user);
  ({ voiceState, withStream } = user);
  if (withStream === undefined) {
    withStream = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  let obj = { user: 0, name: 0, channel: 0, voiceState: 0, withStream: 0, isSpectating: 0, isActionSheet: 0, onPress: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(user, obj);
  let c3;
  let id;
  let store;
  let localMute;
  localMute = undefined;
  let c8;
  const tmp3 = callback3();
  c3 = tmp3;
  const tmp4 = callback4();
  id = store.getId();
  obj = { userId: user.id };
  let obj2 = user(566);
  const items = [id];
  store = obj2.useStateFromStores(items, () => id.theme);
  let obj3 = user(566);
  const items1 = [closure_9];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let isVideoEnabledResult = id === user.id;
    const obj = {};
    let isSelfMuteResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfMuteResult = outer1_9.isSelfMute();
    }
    obj.isSelfMute = isSelfMuteResult;
    obj.localMute = outer1_9.isLocalMute(user.id);
    let isSelfDeafResult = isVideoEnabledResult;
    if (isVideoEnabledResult) {
      isSelfDeafResult = outer1_9.isSelfDeaf();
    }
    obj.localDeaf = isSelfDeafResult;
    if (isVideoEnabledResult) {
      isVideoEnabledResult = outer1_9.isVideoEnabled();
    }
    obj.localVideo = isVideoEnabledResult;
    obj.localVideoDisabled = outer1_9.isLocalVideoDisabled(user.id);
    obj.localVideoAutoDisabled = outer1_9.isLocalVideoAutoDisabled(user.id);
    return obj;
  });
  localMute = stateFromStoresObject.localMute;
  ({ localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } = stateFromStoresObject);
  let obj4 = user(566);
  const items2 = [c8];
  const stateFromStores = obj4.useStateFromStores(items2, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return _undefined2.isGuestOrLurker(guild_id, user.id);
  });
  if (!localMute) {
    localMute = isSelfMute;
  }
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
  c8 = tmp14;
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
  obj1.size = user(1273).AvatarSizes.REFRESH_MEDIUM_32;
  obj1.speaking = channel(10534)(obj);
  obj.leading = callback(user(1273).Avatar, obj1);
  let tmp20Result = null;
  if (flag) {
    tmp20Result = null;
    if (!flag3) {
      obj2 = { style: tmp3.row };
      let tmp22 = null;
      if (user.isSpectating) {
        obj3 = { size: user(1273).Icon.Sizes.REFRESH_SMALL_16, source: channel(12721), style: tmp14 };
        tmp22 = callback(user(1273).Icon, obj3);
      }
      const items3 = [
        tmp22,
        (function renderMicIcon() {
              if (localMute) {
                let obj = user(outer1_2[15]);
                if (obj.isThemeDark(closure_5)) {
                  let tmp5Result = tmp5(tmp6[16]);
                } else {
                  tmp5Result = tmp5(tmp6[17]);
                }
                obj = { size: user(outer1_2[18]).Icon.Sizes.REFRESH_SMALL_16, source: tmp5Result, style: _undefined.voiceStatusIconMargin, color: _undefined2.tintColor, disableColor: localMute };
                return outer1_11(user(outer1_2[18]).Icon, obj);
              } else {
                return null;
              }
            })(),
  ,
  ,

      ];
      let tmp27 = null;
      if (tmp9) {
        obj4 = { size: user(1273).Icon.Sizes.REFRESH_SMALL_16, source: channel(12718), style: tmp14 };
        tmp27 = callback(user(1273).Icon, obj4);
      }
      items3[2] = tmp27;
      if (!tmp10) {
        items3[3] = null;
        let tmp43 = null;
        if (flag2) {
          const obj5 = { style: tmp14 };
          tmp43 = callback(user(1273).LiveTag, obj5);
        }
        items3[4] = tmp43;
        obj2.children = items3;
        tmp20Result = tmp20(tmp21, obj2);
      } else {
        if (localVideoDisabled) {
          const obj6 = { size: user(1273).Icon.Sizes.REFRESH_SMALL_16, source: channel(12719), style: tmp3.voiceStatusIconMargin, disableColor: true };
          let obj7 = obj6;
        } else {
          obj7 = { size: user(1273).Icon.Sizes.REFRESH_SMALL_16, source: channel(12720), style: tmp14 };
        }
        callback(user(1273).Icon, obj7);
        const tmp33 = callback;
      }
      tmp20 = callback2;
      tmp21 = c3;
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
    const obj11 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive" };
    const intl = user(1212).intl;
    const items5 = ["\u00A0", intl.string(user(1212).t["pFO/Ph"])];
    obj11.children = items5;
    items4[1] = callback2(user(4126).Text, obj11);
    obj10.children = items4;
    tmp51 = callback2(closure_13, obj10);
  }
  obj9.text = tmp51;
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp4.labelCallScreen;
  }
  obj9.style = labelCallScreen;
  obj8["label"] = callback(user(7495).FormRow.Label, obj9);
  if (localVideoAutoDisabled) {
    const obj12 = { style: tmp3.autoDisabledVideo };
    const obj13 = { source: channel(8479), size: user(1273).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const items6 = [callback(user(1273).Icon, obj13), ];
    const obj14 = { variant: "text-xs/medium", color: "text-default", style: tmp3.autoDisabledVideoLabel };
    const intl3 = user(1212).intl;
    obj14.children = intl3.string(user(1212).t.m2Hyj0);
    items6[1] = callback(user(4126).Text, obj14);
    obj12.children = items6;
    let stringResult = callback2(c3, obj12);
  } else {
    stringResult = null;
    if (flag3) {
      const intl2 = user(1212).intl;
      stringResult = intl2.string(user(1212).t.IyYqqY);
    }
  }
  obj8["subLabel"] = stringResult;
  return callback(user(7495).FormRow, obj8);
});
let obj5 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
const memoResult = importAllResult.memo(function DisconnectedUserRow(user) {
  let dependencyMap;
  let isActionSheet;
  let id = user.user;
  let id2 = user.channel;
  ({ isActionSheet, onPress: dependencyMap } = user);
  let obj = id(566);
  const items = [closure_6];
  const items1 = [id2.id, id.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = outer1_6.getCall(id2.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id.id);
    }
    return hasItem;
  }, items1);
  let obj1 = id2(4319);
  const name = obj1.getName(id2.guild_id, id2.id, id);
  let obj2 = id(8920);
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
  obj.label = callback(id(7495).FormRow.Label, obj);
  obj1 = { user: id, guildId: id2.guild_id, size: id(1273).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.leading = callback(id(1273).Avatar, obj1);
  if (!canRing) {
    obj.trailing = null;
    obj2 = {};
    const merged = Object.assign(obj);
    return callback(id(7495).FormRow, obj2);
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
  const nick = voiceState.nick;
  let obj = voiceState(566);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    if (null != voiceState) {
      channelId = voiceState.channelId;
    }
    return outer1_7.getChannel(channelId);
  });
  let name = importDefault(3969).useName(voiceState.user);
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default memoResult1;
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;
