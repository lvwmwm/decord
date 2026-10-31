// Module ID: 15195
// Function ID: 15196
// Name: VoiceMemberUser
// Dependencies: [19, 17, 6058, 1192, 502, 6569, 4863, 4926, 2006, 5761, 1072, 21, 5014, 575, 9235, 6852, 504, 5021, 15196, 15197, 1187, 15198, 15199, 15200, 15201, 11779, 5624, 1113, 8177, 7882, 12037, 5198, 7939, 5258, 6980, 7487, 6041, 7497, 5068, 2]

// Module 15195 (VoiceMemberUser)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7487 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7882 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7939 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SoundboardStore from "SoundboardStore" /* 6058 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 6569 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let Platform;
let c3;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj6;
let obj7;
let obj8;
let obj9;
function StreamingUserRow(user) {
  let FormSubLabel;
  let formatResult;
  let labelCallScreen;
  let obj4;
  let obj6;
  let tmp17;
  const tmp = closure_15();
  user = user.user;
  const channel = user.channel;
  const isActionSheet = user.isActionSheet;
  const tmp2 = closure_16();
  let obj = user(504);
  const items = [PresenceStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = StreamerApplicationSelectors;
    return obj.getStreamerActivityByUserId(user.id, PresenceStore);
  });
  if (null != stateFromStores) {
    const intl2 = tmp3(1113).intl;
    const format = intl2.format;
    if (null != stateFromStores.details) {
      let name;
      if ("" !== stateFromStores.details) {
        name = stateFromStores.details;
      }
      let obj2 = { name };
      formatResult = format(tmp7, obj2);
    }
    name = stateFromStores.name;
  } else {
    const intl = tmp3(1113).intl;
    formatResult = intl.string(tmp3(1113).t.eXan7B);
  }
  const tmp10 = closure_12;
  const obj3 = { subLabel: tmp10(FormSubLabel, obj4) };
  const merged = Object.assign(user);
  obj4 = { text: formatResult, style: labelCallScreen };
  labelCallScreen = null;
  FormSubLabel = tmp3(8177).FormSubLabel;
  const tmp11 = closure_17;
  const tmp8 = closure_13;
  const tmp9 = closure_14;
  if (isActionSheet) {
    labelCallScreen = tmp2.labelCallScreen;
  }
  const children = [tmp10(tmp11, obj3), ];
  let tmp10Result = user.id !== AuthenticationStore.getId();
  if (tmp10Result) {
    let guildId;
    const obj5 = { style: tmp.streamPreview, children: tmp10(tmp17, obj6) };
    const tmp15 = closure_3;
    tmp17 = channel(12037);
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    obj6 = {
      guildId,
      userId: user.id,
      disableTransition: true,
      onPress() {
          let isModalOpenResult = null != channel;
          if (isModalOpenResult) {
            const isModalOpen = NavigationRouteUtils.isModalOpen;
            NavigationRouteUtils;
            const obj = PrivateChannelCallUtils;
            isModalOpenResult = isModalOpen(obj.getVoiceChannelKey(tmp.id));
          }
          if (isModalOpenResult) {
            const hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
            ActionSheetActionCreatorsDefault;
            const obj2 = PrivateChannelCallUtils;
            hideActionSheet(obj2.getVoiceChannelKey(channel.id));
          }
        }
    };
    tmp10Result = tmp10(tmp15, obj5);
  }
  children[1] = tmp10Result;
  return tmp8(tmp9, { children });
}
function RingButton(channelId) {
  let LegacyText;
  let intl;
  let obj2;
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_15();
  const tmp2 = closure_16();
  let tmp4Result = null;
  if (null != userId) {
    tmp4Result = null;
    if (null != channelId) {
      let obj = {
        onPress() {
              const items = [userId];
              const obj = CallActionCreatorsDefault;
              obj.ring(channelId, items, "voice_user_action_sheet");
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp2.ringingButton : tmp.ringingButton,
        children: closure_12(LegacyText, obj2)
      };
      const PressableOpacity = channelId(6980).PressableOpacity;
      obj2 = { style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel, children: intl.string(channelId(1113).t.bHa9kN) };
      LegacyText = tmp5(1187).LegacyText;
      intl = tmp5(1113).intl;
      tmp4Result = tmp4(PressableOpacity, obj);
    }
  }
  return tmp4Result;
}
function StopRingButton(channelId) {
  let LegacyText;
  let intl;
  let obj2;
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_15();
  const tmp2 = closure_16();
  let tmp4Result = null;
  if (null != userId) {
    tmp4Result = null;
    if (null != channelId) {
      let obj = {
        onPress() {
              const items = [userId];
              const obj = CallActionCreatorsDefault;
              obj.stopRinging(channelId, items);
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp2.ringingButton : tmp.ringingButton,
        children: closure_12(LegacyText, obj2)
      };
      const PressableOpacity = channelId(6980).PressableOpacity;
      obj2 = { style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel, children: intl.string(channelId(1113).t.ygslb0) };
      LegacyText = tmp5(1187).LegacyText;
      intl = tmp5(1113).intl;
      tmp4Result = tmp4(PressableOpacity, obj);
    }
  }
  return tmp4Result;
}
({ View: c3, Platform } = react_native);
const Fonts = Constants.Fonts;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: { flexDirection: "row" }, voiceStatusIcon: obj2, voiceStatusIconMargin: { marginLeft: 8 }, streamPreview: { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 }, ringingButton: obj3, ringingButtonLabel: obj4, autoDisabledVideo: { flexDirection: "row", alignItems: "center" }, autoDisabledVideoLabel: { marginLeft: 4 } };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj4 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = createStyles(obj);
createStyles = createStyles_mod;
let obj5 = { labelCallScreen: obj6, voiceStatusIcon: obj7, ringingButton: obj8, ringingButtonLabel: obj9 };
obj6 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const createStyles2 = createStyles.createStyles;
obj7 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj9 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_16 = createStyles2(obj5);
let closure_17 = react.memo(function VoiceMemberUserRow(user) {
  let Avatar;
  let Label;
  let channel;
  let guild_id;
  let intl3;
  let isActionSheet;
  let isSelfMute;
  let items4;
  let items5;
  let items6;
  let items7;
  let labelCallScreen;
  let localDeaf;
  let localMute;
  let localVideo;
  let localVideoAutoDisabled;
  let localVideoDisabled;
  let name;
  let obj20;
  let obj9;
  let stringResult;
  let theme;
  let tmp26Result;
  user = user.user;
  ({ name, channel } = user);
  let flag = user.withStream;
  const voiceState = user.voiceState;
  if (flag === undefined) {
    flag = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const isSpectating = user.isSpectating;
  const merged = Object.assign(user, Object.assign({ user: 0, name: 0, channel: 0, voiceState: 0, withStream: 0, isSpectating: 0, isActionSheet: 0, onPress: 0 }));
  const withLocalSelfMuteDeaf = user(9235).withLocalSelfMuteDeaf;
  const tmp4 = user(9235);
  let obj = user(9235);
  const result = withLocalSelfMuteDeaf(voiceState, obj.useLocalSelfMuteDeaf());
  const tmp5 = closure_15();
  const tmp6 = closure_16();
  const id = AuthenticationStore.getId();
  const obj2 = { userId: user.id };
  const items = [SoundboardStore];
  const tmp9 = channel(6852)(obj2);
  const obj5 = user(504);
  const stateFromStores = obj5.useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(user.id));
  const items1 = [ThemeStore];
  const obj6 = user(504);
  const stateFromStores1 = obj6.useStateFromStores(items1, () => theme.theme);
  const items2 = [MediaEngineStore];
  const obj7 = user(504);
  const stateFromStoresObject = obj7.useStateFromStoresObject(items2, () => {
    let isSelfDeafResult;
    let isVideoEnabledResult = id === user.id;
    const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
    const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
    isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
    if (isVideoEnabledResult) {
      isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
    }
    return obj;
  });
  ({ localMute, localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } = stateFromStoresObject);
  const items3 = [GuildMemberStore];
  let tmp14 = localMute;
  const obj8 = user(504);
  const stateFromStores2 = obj8.useStateFromStores(items3, () => {
    let guild_id;
    const isGuestOrLurker = GuildMemberStore.isGuestOrLurker;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return isGuestOrLurker(guild_id, user.id);
  });
  const obj3 = AuthenticationStore;
  if (!localMute) {
    tmp14 = isSelfMute;
  }
  if (!localVideo) {
    localVideo = localVideoDisabled;
  }
  let flag2 = false;
  let tmp15 = localVideo;
  let tmp16 = localDeaf;
  let tmp17 = tmp14;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  if (null != result) {
    if (flag) {
      flag = result.selfStream;
    }
    const sessionId = result.sessionId;
    const tmp18 = tmp14 || result.isVoiceMuted();
    const tmp19 = localDeaf || result.isVoiceDeafened();
    const tmp20 = localVideo || result.selfVideo;
    const tmp21 = null != sessionId && id === user.id && sessionId !== obj3.getSessionId();
    flag4 = true;
    flag2 = tmp21;
    tmp15 = tmp20;
    tmp16 = tmp19;
    tmp17 = tmp18;
    flag3 = flag;
    flag5 = tmp21;
  }
  const tmp22 = isActionSheet ? tmp6.voiceStatusIcon : tmp5.voiceStatusIcon;
  const obj4 = {
    onPress() {
      return dependencyMap(user);
    },
    label: name,
    leading: closure_12(Avatar, obj9),
    trailing: tmp26Result
  };
  obj9 = { user, guildId: guild_id, size: user(1187).AvatarSizes.REFRESH_MEDIUM_32, speaking: tmp9, playingSoundboard: stateFromStores };
  guild_id = undefined;
  Avatar = tmp2(1187).Avatar;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  tmp26Result = null;
  if (flag4) {
    tmp26Result = null;
    if (!flag2) {
      let tmp23Result = null;
      const obj10 = { style: tmp5.row, children: items4 };
      const tmp26 = closure_13;
      const tmp27 = id;
      if (isSpectating) {
        const obj11 = { size: user(1187).Icon.Sizes.REFRESH_SMALL_16, source: channel(15201), style: tmp22 };
        const Icon = tmp2(1187).Icon;
        tmp23Result = tmp23(Icon, obj11);
      }
      items4 = [tmp23Result, , , , ];
      let tmp23Result5 = null;
      if (tmp17) {
        let tmp8Result;
        const tmp2Result = user(5021);
        if (tmp2Result.isThemeDark(stateFromStores1)) {
          tmp8Result = tmp8(15196);
        } else {
          tmp8Result = tmp8(15197);
        }
        const obj12 = { size: user(1187).Icon.Sizes.REFRESH_SMALL_16, source: tmp8Result, style: tmp5.voiceStatusIconMargin, color: tmp22.tintColor, disableColor: localMute };
        const Icon2 = tmp2(1187).Icon;
        tmp23Result5 = tmp23(Icon2, obj12);
      }
      items4[1] = tmp23Result5;
      let tmp23Result6 = null;
      if (tmp16) {
        const obj13 = { size: user(1187).Icon.Sizes.REFRESH_SMALL_16, source: channel(15198), style: tmp22 };
        const Icon3 = tmp2(1187).Icon;
        tmp23Result6 = tmp23(Icon3, obj13);
      }
      items4[2] = tmp23Result6;
      let tmp23Result7 = null;
      if (tmp15) {
        let obj15;
        const Icon4 = tmp2(1187).Icon;
        if (localVideoDisabled) {
          obj15 = { size: user(1187).Icon.Sizes.REFRESH_SMALL_16, source: channel(15199), style: tmp5.voiceStatusIconMargin, disableColor: true };
          const obj14 = { size: user(1187).Icon.Sizes.REFRESH_SMALL_16, source: channel(15199), style: tmp5.voiceStatusIconMargin, disableColor: true };
        } else {
          obj15 = { size: user(1187).Icon.Sizes.REFRESH_SMALL_16, source: channel(15200), style: tmp22 };
        }
        tmp23Result7 = tmp23(Icon4, obj15);
      }
      items4[3] = tmp23Result7;
      let tmp23Result8 = null;
      if (flag3) {
        const obj16 = { style: tmp22 };
        tmp23Result8 = tmp23(tmp2(1187).LiveTag, obj16);
      }
      items4[4] = tmp23Result8;
      tmp26Result = tmp26(tmp27, obj10);
    }
  }
  const obj17 = { disabled: flag5, label: closure_12(Label, obj20), subLabel: stringResult };
  const FormRow = tmp2(8177).FormRow;
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj4);
  let tmp36 = name;
  Label = tmp2(8177).FormRow.Label;
  if (stateFromStores2) {
    const obj18 = { children: items5 };
    items5 = [name, ];
    const obj19 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: items6 };
    const Text = tmp2(5624).Text;
    const intl = tmp2(1113).intl;
    items6 = ["\u00A0", intl.string(user(1113).t["pFO/Ph"])];
    items5[1] = closure_13(Text, obj19);
    tmp36 = closure_13(closure_14, obj18);
  }
  obj20 = { text: tmp36, style: labelCallScreen };
  labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp6.labelCallScreen;
  }
  if (localVideoAutoDisabled) {
    const obj21 = { style: tmp5.autoDisabledVideo, children: items7 };
    const obj22 = { source: channel(11779), size: user(1187).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const Icon5 = tmp2(1187).Icon;
    items7 = [closure_12(Icon5, obj22), ];
    const obj23 = { variant: "text-xs/medium", color: "text-default", style: tmp5.autoDisabledVideoLabel, children: intl3.string(user(1113).t.m2Hyj0) };
    const Text2 = tmp2(5624).Text;
    intl3 = tmp2(1113).intl;
    items7[1] = closure_12(Text2, obj23);
    stringResult = closure_13(id, obj21);
  } else {
    stringResult = null;
    if (flag2) {
      const intl2 = tmp2(1113).intl;
      stringResult = intl2.string(tmp2(1113).t.IyYqqY);
    }
  }
  return closure_12(FormRow, obj17);
});
const memoResult = react.memo(function DisconnectedUserRow(user) {
  let Avatar;
  let Label;
  let isActionSheet;
  let labelCallScreen;
  let obj5;
  let obj6;
  let tmp7Result;
  user = user.user;
  const channel = user.channel;
  ({ isActionSheet, onPress: dependencyMap } = user);
  const items = [CallStore];
  const items1 = [channel.id, user.id];
  const tmp = closure_16();
  const obj = user(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = CallStore.getCall(channel.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(user.id);
    }
    return hasItem;
  }, items1);
  const obj2 = channel(6041);
  const name = obj2.getName(channel.guild_id, channel.id, user);
  const obj4 = {
    onPress() {
      return dependencyMap(user);
    },
    label: closure_12(Label, obj5),
    leading: closure_12(Avatar, obj6),
    trailing: tmp7Result
  };
  const obj3 = user(7497);
  const canRing = obj3.useCanRing(user);
  obj5 = { text: name, style: labelCallScreen };
  labelCallScreen = null;
  Label = user(8177).FormRow.Label;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj6 = { user, guildId: channel.guild_id, size: user(1187).AvatarSizes.REFRESH_MEDIUM_32 };
  Avatar = tmp2(1187).Avatar;
  tmp7Result = null;
  if (canRing) {
    const obj7 = { channelId: channel.id, userId: user.id, isActionSheet };
    tmp7Result = tmp7(stateFromStores ? StopRingButton : RingButton, obj7);
  }
  const obj8 = {};
  const FormRow = tmp2(8177).FormRow;
  const merged = Object.assign(obj4);
  return closure_12(FormRow, obj8);
});
const memoResult1 = react.memo(function VoiceMemberUser(voiceState) {
  let tmp6;
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  const user = voiceState.user;
  const items = [ChannelStore];
  const obj = voiceState(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    const getChannel = ChannelStore.getChannel;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    return getChannel(channelId);
  });
  const obj2 = UserUtilsDefault;
  const name = obj2.useName(user);
  if (null != voiceState) {
    let tmp3Result;
    if (voiceState.selfStream) {
      const obj3 = { name: nick, channel: stateFromStores };
      const merged = Object.assign(voiceState);
      const tmp8 = closure_12;
      const tmp9 = StreamingUserRow;
      if (nick == null) {
        nick = name;
      }
      tmp3Result = tmp8(tmp9, obj3);
    }
    return tmp3Result;
  }
  const obj4 = { name: tmp6, channel: stateFromStores, withStream: false };
  const merged1 = Object.assign(voiceState);
  tmp6 = nick;
  const tmp3 = closure_12;
  const tmp4 = closure_17;
  if (nick == null) {
    tmp6 = name;
  }
  tmp3Result = tmp3(tmp4, obj4);
});
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default memoResult1;
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;
