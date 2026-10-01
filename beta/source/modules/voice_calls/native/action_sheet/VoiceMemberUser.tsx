// Module ID: 13330
// Function ID: 13331
// Name: VoiceMemberUser
// Dependencies: [19, 17, 1182, 502, 5590, 2045, 2108, 1993, 4876, 1074, 21, 4836, 576, 8807, 8902, 504, 4685, 13331, 13332, 1177, 13333, 13334, 13335, 13336, 8905, 4832, 1115, 8053, 7157, 9518, 4692, 5043, 4800, 5435, 9194, 4988, 9187, 4678, 2]

// Module 13330 (VoiceMemberUser)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5043 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7157 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9194 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5590 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let Platform;
let c3;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function StreamingUserRow(user) {
  let FormSubLabel;
  let formatResult;
  let labelCallScreen;
  let obj4;
  let obj6;
  let tmp17;
  const tmp = closure_14();
  user = user.user;
  const channel = user.channel;
  const isActionSheet = user.isActionSheet;
  const tmp2 = closure_15();
  let obj = user(504);
  const items = [PresenceStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = StreamerApplicationSelectors;
    return obj.getStreamerActivityByUserId(user.id, PresenceStore);
  });
  if (null != stateFromStores) {
    const intl2 = tmp3(1115).intl;
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
    const intl = tmp3(1115).intl;
    formatResult = intl.string(tmp3(1115).t.eXan7B);
  }
  const tmp10 = closure_11;
  const obj3 = { subLabel: tmp10(FormSubLabel, obj4) };
  const merged = Object.assign(user);
  obj4 = { text: formatResult, style: labelCallScreen };
  labelCallScreen = null;
  FormSubLabel = tmp3(8053).FormSubLabel;
  const tmp11 = closure_16;
  const tmp8 = closure_12;
  const tmp9 = closure_13;
  if (isActionSheet) {
    labelCallScreen = tmp2.labelCallScreen;
  }
  const children = [tmp10(tmp11, obj3), ];
  let tmp10Result = user.id !== AuthenticationStore.getId();
  if (tmp10Result) {
    let guildId;
    const obj5 = { style: tmp.streamPreview, children: tmp10(tmp17, obj6) };
    const tmp15 = closure_3;
    tmp17 = channel(9518);
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
  const tmp = closure_14();
  const tmp2 = closure_15();
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
        children: closure_11(LegacyText, obj2)
      };
      const PressableOpacity = channelId(5435).PressableOpacity;
      obj2 = { style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel, children: intl.string(channelId(1115).t.bHa9kN) };
      LegacyText = tmp5(1177).LegacyText;
      intl = tmp5(1115).intl;
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
  const tmp = closure_14();
  const tmp2 = closure_15();
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
        children: closure_11(LegacyText, obj2)
      };
      const PressableOpacity = channelId(5435).PressableOpacity;
      obj2 = { style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel, children: intl.string(channelId(1115).t.ygslb0) };
      LegacyText = tmp5(1177).LegacyText;
      intl = tmp5(1115).intl;
      tmp4Result = tmp4(PressableOpacity, obj);
    }
  }
  return tmp4Result;
}
({ View: c3, Platform } = react_native);
const Fonts = Constants.Fonts;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: { flexDirection: "row" }, voiceStatusIcon: obj2, voiceStatusIconMargin: { marginLeft: 8 }, streamPreview: { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 }, ringingButton: obj3, ringingButtonLabel: obj4, autoDisabledVideo: { flexDirection: "row", alignItems: "center" }, autoDisabledVideoLabel: { marginLeft: 4 } };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj4 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_14 = createStyles(obj);
createStyles = createStyles_mod;
let obj5 = { labelCallScreen: obj6, voiceStatusIcon: obj7, ringingButton: obj8, ringingButtonLabel: obj9 };
obj6 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const createStyles2 = createStyles.createStyles;
obj7 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj9 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = createStyles2(obj5);
let closure_16 = react.memo((user) => {
  let Avatar;
  let Label;
  let channel;
  let guild_id;
  let guild_id1;
  let intl3;
  let isActionSheet;
  let isSelfMute;
  let items3;
  let items4;
  let items5;
  let items6;
  let labelCallScreen;
  let localDeaf;
  let localMute;
  let localVideo;
  let localVideoAutoDisabled;
  let localVideoDisabled;
  let name;
  let obj16;
  let obj5;
  let stringResult;
  let theme;
  let tmp27Result;
  let voiceState;
  let withStream;
  user = user.user;
  ({ name, channel } = user);
  ({ voiceState, withStream } = user);
  if (withStream === undefined) {
    withStream = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const isSpectating = user.isSpectating;
  const merged = Object.assign(user, Object.assign({ user: 0, name: 0, channel: 0, voiceState: 0, withStream: 0, isSpectating: 0, isActionSheet: 0, onPress: 0 }));
  const tmp2 = closure_14();
  const tmp3 = closure_15();
  let obj = AuthenticationStore;
  const id = AuthenticationStore.getId();
  const obj2 = { userId: user.id };
  const obj3 = { userId: user.id, guildId: guild_id };
  guild_id = undefined;
  const tmp7 = channel(8807)(obj2);
  const useAvatarSpeakingColor = user(8902).useAvatarSpeakingColor;
  user(8902);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const avatarSpeakingColor = useAvatarSpeakingColor(obj3);
  const items = [ThemeStore];
  const tmp8Result = user(504);
  const stateFromStores = tmp8Result.useStateFromStores(items, () => theme.theme);
  const items1 = [MediaEngineStore];
  const tmp8Result4 = user(504);
  const stateFromStoresObject = tmp8Result4.useStateFromStoresObject(items1, () => {
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
  const items2 = [GuildMemberStore];
  let tmp15 = localMute;
  const tmp8Result5 = user(504);
  const stateFromStores1 = tmp8Result5.useStateFromStores(items2, () => {
    let guild_id;
    const isGuestOrLurker = GuildMemberStore.isGuestOrLurker;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return isGuestOrLurker(guild_id, user.id);
  });
  if (!localMute) {
    tmp15 = isSelfMute;
  }
  if (!localVideo) {
    localVideo = localVideoDisabled;
  }
  let flag = false;
  let tmp16 = localVideo;
  let tmp17 = localDeaf;
  let tmp18 = tmp15;
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  if (null != voiceState) {
    if (withStream) {
      withStream = voiceState.selfStream;
    }
    const sessionId = voiceState.sessionId;
    const tmp19 = tmp15 || voiceState.isVoiceMuted();
    const tmp20 = localDeaf || voiceState.isVoiceDeafened();
    const tmp21 = localVideo || voiceState.selfVideo;
    const tmp22 = null != sessionId && id === user.id && sessionId !== obj.getSessionId();
    flag3 = true;
    flag = tmp22;
    tmp16 = tmp21;
    tmp17 = tmp20;
    tmp18 = tmp19;
    flag2 = withStream;
    flag4 = tmp22;
  }
  const tmp23 = isActionSheet ? tmp3.voiceStatusIcon : tmp2.voiceStatusIcon;
  const obj4 = {
    onPress() {
      return dependencyMap(user);
    },
    label: name,
    leading: closure_11(Avatar, obj5),
    trailing: tmp27Result
  };
  obj5 = { user, guildId: guild_id1, size: user(1177).AvatarSizes.REFRESH_MEDIUM_32, speaking: tmp7, speakingColor: avatarSpeakingColor };
  guild_id1 = undefined;
  Avatar = tmp8(1177).Avatar;
  if (channel != null) {
    guild_id1 = channel.guild_id;
  }
  tmp27Result = null;
  if (flag3) {
    tmp27Result = null;
    if (!flag) {
      let tmp24Result = null;
      const obj6 = { style: tmp2.row, children: items3 };
      const tmp27 = closure_12;
      const tmp28 = id;
      if (isSpectating) {
        const obj7 = { size: user(1177).Icon.Sizes.REFRESH_SMALL_16, source: channel(13336), style: tmp23 };
        const Icon = tmp8(1177).Icon;
        tmp24Result = tmp24(Icon, obj7);
      }
      items3 = [tmp24Result, , , , ];
      let tmp24Result5 = null;
      if (tmp18) {
        let tmp5Result;
        const tmp8Result6 = user(4685);
        if (tmp8Result6.isThemeDark(stateFromStores)) {
          tmp5Result = tmp5(13331);
        } else {
          tmp5Result = tmp5(13332);
        }
        const obj8 = { size: user(1177).Icon.Sizes.REFRESH_SMALL_16, source: tmp5Result, style: tmp2.voiceStatusIconMargin, color: tmp23.tintColor, disableColor: localMute };
        const Icon2 = tmp8(1177).Icon;
        tmp24Result5 = tmp24(Icon2, obj8);
      }
      items3[1] = tmp24Result5;
      let tmp24Result6 = null;
      if (tmp17) {
        const obj9 = { size: user(1177).Icon.Sizes.REFRESH_SMALL_16, source: channel(13333), style: tmp23 };
        const Icon3 = tmp8(1177).Icon;
        tmp24Result6 = tmp24(Icon3, obj9);
      }
      items3[2] = tmp24Result6;
      let tmp24Result7 = null;
      if (tmp16) {
        let obj11;
        const Icon4 = tmp8(1177).Icon;
        if (localVideoDisabled) {
          obj11 = { size: user(1177).Icon.Sizes.REFRESH_SMALL_16, source: channel(13334), style: tmp2.voiceStatusIconMargin, disableColor: true };
          const obj10 = { size: user(1177).Icon.Sizes.REFRESH_SMALL_16, source: channel(13334), style: tmp2.voiceStatusIconMargin, disableColor: true };
        } else {
          obj11 = { size: user(1177).Icon.Sizes.REFRESH_SMALL_16, source: channel(13335), style: tmp23 };
        }
        tmp24Result7 = tmp24(Icon4, obj11);
      }
      items3[3] = tmp24Result7;
      let tmp24Result8 = null;
      if (flag2) {
        const obj12 = { style: tmp23 };
        tmp24Result8 = tmp24(tmp8(1177).LiveTag, obj12);
      }
      items3[4] = tmp24Result8;
      tmp27Result = tmp27(tmp28, obj6);
    }
  }
  const obj13 = { disabled: flag4, label: closure_11(Label, obj16), subLabel: stringResult };
  const FormRow = tmp8(8053).FormRow;
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj4);
  let tmp37 = name;
  Label = tmp8(8053).FormRow.Label;
  if (stateFromStores1) {
    const obj14 = { children: items4 };
    items4 = [name, ];
    const obj15 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: items5 };
    const Text = tmp8(4832).Text;
    const intl = tmp8(1115).intl;
    items5 = ["\u00A0", intl.string(user(1115).t["pFO/Ph"])];
    items4[1] = closure_12(Text, obj15);
    tmp37 = closure_12(closure_13, obj14);
  }
  obj16 = { text: tmp37, style: labelCallScreen };
  labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp3.labelCallScreen;
  }
  if (localVideoAutoDisabled) {
    const obj17 = { style: tmp2.autoDisabledVideo, children: items6 };
    const obj18 = { source: channel(8905), size: user(1177).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const Icon5 = tmp8(1177).Icon;
    items6 = [closure_11(Icon5, obj18), ];
    const obj19 = { variant: "text-xs/medium", color: "text-default", style: tmp2.autoDisabledVideoLabel, children: intl3.string(user(1115).t.m2Hyj0) };
    const Text2 = tmp8(4832).Text;
    intl3 = tmp8(1115).intl;
    items6[1] = closure_11(Text2, obj19);
    stringResult = closure_12(id, obj17);
  } else {
    stringResult = null;
    if (flag) {
      const intl2 = tmp8(1115).intl;
      stringResult = intl2.string(tmp8(1115).t.IyYqqY);
    }
  }
  return closure_11(FormRow, obj13);
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
  const tmp = closure_15();
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
  const obj2 = channel(4988);
  const name = obj2.getName(channel.guild_id, channel.id, user);
  const obj4 = {
    onPress() {
      return dependencyMap(user);
    },
    label: closure_11(Label, obj5),
    leading: closure_11(Avatar, obj6),
    trailing: tmp7Result
  };
  const obj3 = user(9187);
  const canRing = obj3.useCanRing(user);
  obj5 = { text: name, style: labelCallScreen };
  labelCallScreen = null;
  Label = user(8053).FormRow.Label;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj6 = { user, guildId: channel.guild_id, size: user(1177).AvatarSizes.REFRESH_MEDIUM_32 };
  Avatar = tmp2(1177).Avatar;
  tmp7Result = null;
  if (canRing) {
    const obj7 = { channelId: channel.id, userId: user.id, isActionSheet };
    tmp7Result = tmp7(stateFromStores ? StopRingButton : RingButton, obj7);
  }
  const obj8 = {};
  const FormRow = tmp2(8053).FormRow;
  const merged = Object.assign(obj4);
  return closure_11(FormRow, obj8);
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
      const tmp8 = closure_11;
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
  const tmp3 = closure_11;
  const tmp4 = closure_16;
  if (nick == null) {
    tmp6 = name;
  }
  tmp3Result = tmp3(tmp4, obj4);
});
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default memoResult1;
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;
