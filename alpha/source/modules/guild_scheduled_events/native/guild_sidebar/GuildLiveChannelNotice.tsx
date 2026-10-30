// Module ID: 18192
// Function ID: 18193
// Name: GuildLiveChannelNotice
// Dependencies: [19, 17, 6707, 4863, 6708, 4941, 5762, 4864, 1083, 21, 575, 1188, 5749, 11037, 8563, 11028, 1376, 5635, 5009, 5619, 14054, 11030, 6728, 1889, 7931, 7942, 5248, 9801, 5629, 5016, 5647, 504, 1114, 8595, 9096, 8963, 8998, 8953, 6759, 6753, 6706, 9071, 8661, 18191, 10782, 6971, 2]
// Exports: getScaledLiveChannelNoticeHeight

// Module 18192 (GuildLiveChannelNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl3 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1889 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4864 */;
import Text_Text from "Text/Text" /* 5619 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6753 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8563 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8953 */;
import EntityUtils from "EntityUtils" /* 8963 */;
import LocationIcon from "LocationIcon" /* 8998 */;
import CalendarIcon from "CalendarIcon" /* 9096 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10782 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11028 */;
import MarkupInlineChannelMentionRules from "MarkupInlineChannelMentionRules" /* 11037 */;
import react from "react" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6707 */;
import StageInstanceStore from "StageInstanceStore" /* 4863 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5762 */;
import Fragment from "Fragment" /* 21 */;
import MarkupUtils_mod from "MarkupUtils" /* 5749 */;
import createStyles_mod from "createStyles" /* 5009 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let MarkupUtils;
let closure_14;
let closure_15;
let map1;
let num;
let obj2;
let obj3;
let size;
function UserSummaryRow(arg0) {
  let audienceCount;
  let closure_3;
  let guildId;
  let isLiveStreaming;
  let items;
  let items2;
  let items3;
  let max;
  let obj3;
  let obj5;
  let tmp4Result;
  let users;
  ({ users, max } = arg0);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount, isLiveStreaming } = arg0);
  let closure_2 = Math.max(users.length - max, 0);
  const tmp = closure_27(closure_19);
  dependencyMap = tmp;
  if (0 !== users.length) {
    let tmp4 = closure_14;
    let obj = { style: tmp.container, children: items };
    items = [
      users.map((user, index) => {
          let Text;
          let obj4;
          let obj5;
          let obj7;
          if (index < max) {
            if (index === tmp - 1) {
              let tmp3Result;
              if (closure_2 > 0) {
                const items = [closure_3.wrapper, ];
                let obj2 = 0 !== index;
                const tmp13 = map1;
                const tmp14 = View;
                const tmp15 = closure_3;
                if (obj2) {
                  obj2 = { marginLeft: 4 };
                }
                items[1] = obj2;
                const obj3 = { style: items, children: map1(View, obj4) };
                obj4 = { style: tmp15.overflowCircle, children: map1(Text, obj5) };
                const _HermesInternal = HermesInternal;
                obj5 = { variant: "text-xs/medium", lineClamp: 1, maxFontSizeMultiplier: 1, children: "+" + tmp2 + 1 };
                Text = Text_Text.Text;
                tmp3Result = tmp13(tmp14, obj3, "overflow");
              }
              return tmp3Result;
            }
            const items1 = [closure_3.wrapper, ];
            let obj = 0 !== index;
            const tmp3 = map1;
            const tmp4 = View;
            if (obj) {
              obj = { marginLeft: 4 };
            }
            items1[1] = obj;
            const obj6 = { style: items1, children: map1(native.Avatar, obj7) };
            obj7 = { user, guildId: importDefault, size: XSMALL };
            tmp3Result = tmp3(tmp4, obj6, index);
          }
        }),
  ,

    ];
    let tmp8Result = null != audienceCount && audienceCount > 0;
    if (tmp8Result) {
      let items1 = [tmp.wrapper, ];
      const tmp9 = users.length > 0 && { marginLeft: 4 };
      let obj2 = { style: items1, children: tmp4(tmp5, obj3) };
      items1[1] = tmp9;
      obj3 = { style: items2, children: items3 };
      items2 = [, ];
      ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp);
      let obj4 = { size: "custom", style: obj5.makeSizeStyle(14) };
      const HeadphonesIcon = max(14054).HeadphonesIcon;
      obj5 = max(11030);
      items3 = [tmp8(HeadphonesIcon, obj4), ];
      let obj6 = { variant: "text-xs/semibold", style: { marginLeft: 4 }, maxFontSizeMultiplier: 1, children: audienceCount };
      items3[1] = closure_13(max(5619).Text, obj6);
      tmp8Result = tmp8(tmp5, obj2);
    }
    items[1] = tmp8Result;
    if (isLiveStreaming) {
      let tmp13 = max;
      let tmp14 = dependencyMap;
      let obj7 = { style: { marginLeft: 4 } };
      isLiveStreaming = closure_13(max(1188).LiveTag, obj7);
    }
    items[2] = isLiveStreaming;
    tmp4Result = tmp4(tmp5, obj);
  } else {
    const tmp2 = null;
    if (null == audienceCount) {
      tmp4Result = null;
    }
  }
  return tmp4Result;
}
function JoinChannelButton(label) {
  let Button;
  let channel;
  let disabled;
  let isChannelContentGated;
  let obj3;
  let str;
  ({ channel, disabled } = label);
  label = label.label;
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_29();
  const tmp2 = isChannelContentGated(5248)();
  isChannelContentGated = undefined;
  const tmp3 = isChannelContentGated(9801)();
  const obj = channel(6728);
  isChannelContentGated = obj.useIsChannelContentGated(channel);
  const items = [channel, isChannelContentGated];
  const obj2 = { style: tmp.button, children: closure_13(Button, obj3) };
  const callback = react.useCallback(() => {
    if (null != activeEventOrStageInstanceChannel) {
      const obj2 = KeyboardManagerUtilsAll;
      const result = obj2.dismissGlobalKeyboard();
      if (!activeEventOrStageInstanceChannel.isGuildVoice()) {
        const tmp4 = isChannelContentGated;
        if (!tmp4) {
          const obj3 = activeEventOrStageInstanceChannel(dependencyMap[25]);
          obj3.connectAndOpen(activeEventOrStageInstanceChannel);
        }
      }
      const obj4 = activeEventOrStageInstanceChannel(dependencyMap[24]);
      obj4.openGuildVoiceModal(activeEventOrStageInstanceChannel);
    }
  }, items);
  obj3 = { onPress: callback, variant: str, size: "sm", disabled, text: label };
  Button = channel(5629).Button;
  str = "tertiary";
  const obj4 = channel(5016);
  const tmp7 = View;
  if (obj4.isThemeLight(tmp2)) {
    str = "tertiary";
    if (!tmp3) {
      str = "active";
    }
  }
  return closure_13(tmp7, obj2);
}
function GuildVoiceEventNotice(channel) {
  let intl;
  let intl2;
  let obj5;
  let obj6;
  let tmp7Result;
  channel = channel.channel;
  const guildEvent = channel.guildEvent;
  const items = [SortedVoiceStateStore];
  const tmp2 = useChannelNameDefault(channel);
  const obj = channel(504);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(channel);
    return voiceStatesForChannel.map((user) => user.user);
  });
  const items1 = [PermissionStore];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => PermissionStore.can(Permissions.CONNECT, channel));
  const items2 = [ApplicationStreamingStore];
  const obj4 = { heading: intl.string(channel(1114).t["X2K3/4"]), topic: guildEvent.name, location: tmp2, LocationIcon: obj5.getChannelIconComponent(channel), LiveIcon: channel(9096).CalendarIcon, voiceUsers: closure_13(UserSummaryRow, obj6), joinButton: tmp7Result };
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id).length > 0);
  intl = channel(1114).intl;
  tmp7Result = undefined;
  obj5 = channel(8595);
  obj6 = { guildId: channel.guild_id, users: stateFromStoresArray, isLiveStreaming: stateFromStores1 };
  const tmp8 = closure_31;
  if (stateFromStores) {
    const obj7 = { channel, label: intl2.string(channel(1114).t.VJlc0S) };
    intl2 = tmp3(1114).intl;
    tmp7Result = tmp7(JoinChannelButton, obj7);
  }
  return closure_13(tmp8, obj4);
}
function GuildExternalEventNotice(guildEvent) {
  let intl;
  let obj3;
  guildEvent = guildEvent.guildEvent;
  const obj = EntityUtils;
  const locationFromEvent = obj.getLocationFromEvent(guildEvent);
  let tmp4 = null;
  if (null != locationFromEvent) {
    const obj2 = { heading: intl.string(intl3.t.TxqPQR), topic: guildEvent.name, location: closure_26(locationFromEvent, true), LocationIcon: LocationIcon.LocationIcon, LiveIcon: CalendarIcon.CalendarIcon, joinButton: map1(SeeDetailButton, obj3) };
    intl = tmp(1114).intl;
    obj3 = { guildEvent };
    tmp4 = map1(closure_31, obj2);
  }
  return tmp4;
}
function SeeDetailButton(guildEvent) {
  let Button;
  let intl;
  let obj2;
  guildEvent = guildEvent.guildEvent;
  const items = [guildEvent];
  let obj = { style: closure_29().button, children: closure_13(Button, obj2) };
  closure_29();
  const callback = react.useCallback(() => {
    const obj = GuildScheduledEventModalActionCreators;
    const obj2 = { eventId: guildEvent.id, event: guildEvent };
    const result = obj.openGuildEventDetails(obj2);
  }, items);
  obj2 = { onPress: callback, variant: "active", size: "sm", text: intl.string(guildEvent(1114).t.z4FcDs) };
  Button = guildEvent(5629).Button;
  intl = guildEvent(1114).intl;
  return closure_13(View, obj);
}
function GuildLiveStageNotice(channel) {
  let StageIcon;
  let channelIconComponent;
  let intl;
  let intl2;
  let obj7;
  let tmp9Result;
  channel = channel.channel;
  const stageInstance = channel.stageInstance;
  const tmp2 = useChannelNameDefault(channel);
  const obj = channel(6759);
  const stageParticipants = obj.useStageParticipants(channel.id, channel(6753).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === channel(dependencyMap[39]).StageChannelParticipantTypes.VOICE);
  const mapped = found.map((user) => user.user);
  const items = [StageChannelParticipantStore];
  const items1 = [channel.id];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => StageChannelParticipantStore.getParticipantCount(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE), items1);
  const items2 = [PermissionStore];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => PermissionStore.can(Permissions.CONNECT, channel));
  const obj4 = channel(6706);
  const stageHasStream = obj4.useStageHasStream(channel.id);
  const obj5 = channel(9071);
  const guildActiveEvent = obj5.useGuildActiveEvent(channel.guild_id);
  const obj6 = { heading: intl.string(channel(1114).t["X2K3/4"]), location: tmp2, LocationIcon: channelIconComponent, LiveIcon: StageIcon, topic: stageInstance.topic, voiceUsers: closure_13(UserSummaryRow, obj7), joinButton: tmp9Result };
  intl = channel(1114).intl;
  channelIconComponent = undefined;
  const tmp10 = closure_31;
  if (null != guildActiveEvent) {
    const tmp3Result = channel(8595);
    channelIconComponent = tmp3Result.getChannelIconComponent(channel);
  }
  if (null != guildActiveEvent) {
    StageIcon = tmp3(9096).CalendarIcon;
  } else {
    StageIcon = tmp3(8661).StageIcon;
  }
  tmp9Result = undefined;
  obj7 = { guildId: channel.guild_id, users: mapped, isLiveStreaming: stageHasStream, audienceCount: stateFromStores };
  if (stateFromStores1) {
    const obj8 = { channel, label: intl2.string(channel(1114).t["7vb2cc"]) };
    intl2 = tmp3(1114).intl;
    tmp9Result = tmp9(JoinChannelButton, obj8);
  }
  return closure_13(tmp10, obj6);
}
const View = react_native.View;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const Permissions = Constants.Permissions;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const XSMALL = native.AvatarSizes.XSMALL;
const height = native.AVATAR_SIZE_MAP[XSMALL];
const PX_122 = nativeDefault.space.PX_12;
let c21 = "text-xs/bold";
let c22 = "text-md/semibold";
let c23 = "text-xs/medium";
const PX_82 = nativeDefault.space.PX_8;
const PX_4 = nativeDefault.space.PX_4;
const guildEventRules = MarkupUtils.guildEventRules;
MarkupUtils = MarkupUtils_mod;
let obj = {
  channelMention: obj2,
  guild: {
    react(content, output, state) {
      if (typeof content.content === "string") {
        content = content.content;
      } else {
        const obj = MarkupRulesUtils;
        content = obj.smartOutput(content, output, state);
      }
      return content;
    }
  },
  channel: obj3
};
const reactParserFor = MarkupUtils.reactParserFor;
const merged = Object.assign(guildEventRules);
obj2 = { react: MarkupInlineChannelMentionRules.inlineChannelMentionReact };
const merged1 = Object.assign(guildEventRules.channelMention);
obj3 = { react: MarkupInlineChannelMentionRules.inlineChannelReact };
let closure_26 = reactParserFor(obj);
let createStyles = createStyles_mod;
let closure_27 = createStyles.createStyles((height) => {
  let obj2;
  const obj = { container: obj2, overflowCircle: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, paddingHorizontal: 6 }, wrapper: { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height }, badge: { borderRadius: nativeDefault.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height }, audienceBadge: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
  obj2 = { flexDirection: "row", alignItems: "center", marginTop: PX_82 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, paddingHorizontal: 6 });
  ({ borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height });
  ({ borderRadius: nativeDefault.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
  return obj;
});
createStyles = createStyles_mod;
let obj4 = { card: { padding: PX_122 }, row: { flexDirection: "row", alignItems: "center" }, infoRow: { marginTop: PX_4 }, liveNowIcon: { marginEnd: 4 }, uppercase: { textTransform: "uppercase" }, headingText: { marginTop: num }, liveDot: size, calendarIcon: { marginRight: 7 }, topic: { marginTop: PX_82 }, button: { marginTop: PX_82 } };
createStyles = createStyles.createStyles;
num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
size = { width: 7, height: 7, marginRight: 7, backgroundColor: nativeDefault.colors.STATUS_POSITIVE, borderRadius: nativeDefault.radii.xs };
let closure_29 = createStyles(obj4);
let closure_31 = react.memo(function GuildNoticeBody(arg0) {
  let LiveIcon;
  let LocationIcon;
  let _location;
  let heading;
  let isLiveStreaming;
  let items;
  let items1;
  let items3;
  let joinButton;
  let obj10;
  let tmp2Result;
  let tmp4;
  let tmp5;
  let topic;
  let voiceUsers;
  ({ location: _location, LocationIcon, isLiveStreaming, LiveIcon } = arg0);
  ({ heading, topic, voiceUsers, joinButton } = arg0);
  const tmp = closure_29();
  const obj = { style: tmp.row, children: items };
  if (null != LiveIcon) {
    const obj2 = { size: "xxs", color: "status-positive", style: tmp.calendarIcon };
    tmp5 = map1(LiveIcon, obj2);
    tmp4 = map1;
  } else {
    tmp4 = map1;
    const obj3 = { style: tmp.liveDot };
    tmp5 = map1(tmp3, obj3);
  }
  items = [tmp5, ];
  let str = "text-xs/semibold";
  const Text = Text_Text.Text;
  if (isLiveStreaming) {
    str = c21;
  }
  const obj4 = { variant: str, color: "status-positive", style: items1, children: heading };
  items1 = [tmp.headingText, ];
  if (isLiveStreaming) {
    isLiveStreaming = tmp.uppercase;
  }
  items1[1] = isLiveStreaming;
  items[1] = tmp4(Text, obj4);
  const items2 = [authStore3(View, obj), voiceUsers, , , ];
  const obj5 = { style: tmp.topic, lineClamp: 1, variant, color: "redesign-channel-name-text", children: topic };
  items2[2] = tmp4(Text_Text.Text, obj5);
  const obj6 = { style: items3, children: tmp2Result };
  items3 = [, ];
  ({ row: arr4[0], infoRow: arr4[1] } = tmp);
  tmp2Result = null != _location;
  if (tmp2Result) {
    let tmp4Result = null != LocationIcon;
    const tmp10 = closure_15;
    if (tmp4Result) {
      const obj7 = { style: tmp.liveNowIcon, size: "xxs", color: "redesign-channel-name-muted-text" };
      tmp4Result = tmp4(LocationIcon, obj7);
    }
    const items4 = [tmp4Result, ];
    const obj8 = { lineClamp: 1, variant: variant2, color: "redesign-channel-name-muted-text", style: obj10, children: _location };
    const Text2 = tmp7(5619).Text;
    let num = 0;
    const tmp7Result = PlatformUtils;
    if (tmp7Result.isAndroid()) {
      num = -2;
    }
    obj10 = { marginTop: num, flexShrink: 1 };
    const obj9 = { children: items4 };
    items4[1] = tmp4(Text2, obj8);
    tmp2Result = tmp2(tmp10, obj9);
  }
  const obj11 = { children: items2 };
  items2[3] = tmp4(View, obj6);
  items2[4] = joinButton;
  return authStore3(View, obj11);
});
const memoResult = react.memo(function GuildLiveChannelNotice(guild) {
  let items4;
  let tmp14;
  guild = guild.guild;
  let activeEventOrStageInstanceChannel;
  const style = guild.style;
  const tmp2 = activeEventOrStageInstanceChannel;
  const tmp = closure_29();
  let obj = activeEventOrStageInstanceChannel(18191);
  activeEventOrStageInstanceChannel = obj.useActiveEventOrStageInstanceChannel(guild.id);
  let obj2 = activeEventOrStageInstanceChannel(9071);
  const guildActiveEvent = obj2.useGuildActiveEvent(guild.id);
  let obj3 = activeEventOrStageInstanceChannel(504);
  const items = [StageInstanceStore];
  const items1 = [activeEventOrStageInstanceChannel];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let id;
    const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
    if (activeEventOrStageInstanceChannel != null) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return getStageInstanceByChannel(id);
  }, items1);
  let obj4 = activeEventOrStageInstanceChannel(6728);
  const isChannelContentGated = obj4.useIsChannelContentGated(activeEventOrStageInstanceChannel);
  const items2 = [activeEventOrStageInstanceChannel, isChannelContentGated];
  let id;
  const callback = react.useCallback(() => {
    if (null != activeEventOrStageInstanceChannel) {
      const obj2 = KeyboardManagerUtilsAll;
      const result = obj2.dismissGlobalKeyboard();
      if (!activeEventOrStageInstanceChannel.isGuildVoice()) {
        const tmp4 = isChannelContentGated;
        if (!tmp4) {
          const obj3 = activeEventOrStageInstanceChannel(dependencyMap[25]);
          obj3.connectAndOpen(activeEventOrStageInstanceChannel);
        }
      }
      const obj4 = activeEventOrStageInstanceChannel(dependencyMap[24]);
      obj4.openGuildVoiceModal(activeEventOrStageInstanceChannel);
    }
  }, items2);
  const useCallback = react.useCallback;
  if (activeEventOrStageInstanceChannel != null) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const items3 = [id, guildActiveEvent];
  let entity_type;
  const callback1 = useCallback(() => {
    if (null != guildActiveEvent) {
      const obj3 = { eventId: guildActiveEvent.id, event: guildActiveEvent };
      const obj2 = GuildScheduledEventModalActionCreators;
      const result = obj2.openGuildEventDetails(obj3);
    } else {
      let id;
      if (activeEventOrStageInstanceChannel != null) {
        id = tmp2.id;
      }
      if (null != id) {
        const obj = openChannelLongPressActionSheet;
        const result1 = obj.openChannelLongPressActionSheet(tmp2.id);
      }
    }
  }, items3);
  if (guildActiveEvent != null) {
    entity_type = guildActiveEvent.entity_type;
  }
  if (entity_type === constants.EXTERNAL) {
    const obj5 = { guildEvent: guildActiveEvent };
    tmp14 = closure_13(GuildExternalEventNotice, obj5);
  } else {
    if (null != activeEventOrStageInstanceChannel) {
      if (null != stateFromStores) {
        const obj6 = { stageInstance: stateFromStores, channel: activeEventOrStageInstanceChannel };
        tmp14 = closure_13(GuildLiveStageNotice, obj6);
      }
    }
    tmp14 = null;
    const tmp13 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
    if (tmp13) {
      const obj7 = { guildEvent: guildActiveEvent, channel: activeEventOrStageInstanceChannel };
      tmp14 = closure_13(GuildVoiceEventNotice, obj7);
    }
  }
  let tmp21 = null;
  if (null != tmp14) {
    const obj8 = { variant: "secondary", style: items4, onPress: callback, onLongPress: callback1, children: tmp14 };
    items4 = [tmp.card, style];
    tmp21 = closure_13(tmp2(6971).Card, obj8);
  }
  return tmp21;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx");

export default memoResult;
export const LIVE_CHANNEL_NOTICE_MARGIN_TOP = PX_8;
export const LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM = PX_12;
export function getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo) {
  let hasAudience;
  let hasButton;
  let hasSpeakers;
  let hasStream;
  ({ hasSpeakers, hasButton, hasAudience, hasStream } = guildLiveChannelNoticeInfo);
  useScaledTextLineHeight;
  if (!hasSpeakers) {
    let num;
    if (!hasAudience) {
      num = 0;
    }
    const tmpResult = useScaledTextLineHeight;
    const sum = PX_82 + tmpResult.scaleTextLineHeight(c22, fontScale);
    let num2 = 0;
    const tmp5 = PX_82;
    const tmp8 = PX_4;
    const tmpResult3 = PlatformUtils;
    if (tmpResult3.isAndroid()) {
      num2 = -2;
    }
    const sum1 = tmp8 + num2;
    let num3 = 0;
    const tmpResult4 = useScaledTextLineHeight;
    const sum2 = sum1 + tmpResult4.scaleTextLineHeight(c23, fontScale);
    if (hasButton) {
      num3 = tmp5 + tmp(5635).SMALL_BUTTON_HEIGHT;
    }
    return PX_8 + PX_122 + tmp4 + num + sum + sum2 + num3 + PX_122 + PX_12;
  }
  num = PX_82 + height;
}
