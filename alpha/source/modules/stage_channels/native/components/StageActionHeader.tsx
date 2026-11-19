// Module ID: 10988
// Function ID: 10989
// Name: StageActionHeader
// Dependencies: [19, 17, 6499, 4641, 6543, 4663, 4646, 10818, 1072, 21, 575, 4792, 4789, 5346, 1256, 5529, 10539, 6308, 6373, 504, 10849, 10989, 1113, 5528, 1187, 6422, 6416, 4219, 10990, 5383, 10991, 1630, 5408, 5347, 7500, 10992, 6376, 7898, 10993, 10994, 7932, 10820, 10828, 10829, 10833, 10995, 10996, 2]
// Exports: closeStageModal

// Module 10988 (StageActionHeader)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef4219 from "module_4219" /* 4219 */;
import NavigatorConstants from "NavigatorConstants" /* 5346 */;
import LinearGradientDefault from "LinearGradient" /* 5347 */;
import Text_Text from "Text/Text" /* 5383 */;
import useChannelNameDefault from "useChannelName" /* 5408 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5528 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5529 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6373 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 6376 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6416 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6422 */;
import AssetRegistryDefault from "AssetRegistry" /* 7500 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 7932 */;
import StatusBarDefault from "StatusBar" /* 10539 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 10833 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10849 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10989 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10990 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10991 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10992 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 10995 */;
import ChannelCallHeaderButtons from "ChannelCallHeaderButtons" /* 10996 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6499 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6543 */;
import GuildStore from "GuildStore" /* 4663 */;
import StageInstanceStore from "StageInstanceStore" /* 4646 */;
import StageMusicStore from "StageMusicStore" /* 10818 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import ColorUtils_mod from "ColorUtils" /* 4789 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let c3;
let closure_12;
let closure_14;
let closure_4;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
function HideStageChannelCallIcon(channel) {
  let intl;
  let totalMentionCount;
  channel = channel.channel;
  const tmp = closure_16();
  let obj = channel(504);
  items = [GuildReadStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let obj2 = {
    source: AssetRegistryDefault2,
    accessibilityLabel: intl.string(channel(1113).t.cpT0Cq),
    onPress: function handleClose() {
      const track = AnalyticsUtilsDefault.track;
      const VIDEO_LAYOUT_TOGGLED = unpackModuleId.VIDEO_LAYOUT_TOGGLED;
      const obj = { video_layout: "pop out" };
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channel.id));
      track(VIDEO_LAYOUT_TOGGLED, obj);
      const obj3 = StatusBarDefault;
      obj3.setHidden(false);
      const popWithKey = ModalActionCreatorsDefault.popWithKey;
      ModalActionCreatorsDefault;
      const obj4 = PrivateChannelCallUtils;
      popWithKey(obj4.getVoiceChannelKey(channel.id));
      const obj5 = ChannelRTCActionCreatorsDefault;
      const participant = obj5.selectParticipant(channel.id, null);
    },
    containerStyle: tmp.iconBackground,
    disableBackground: true,
    children: closure_13(channel(1187).MaskedBadge, { value: stateFromStores, maskStyle: {} })
  };
  const tmp3 = ChannelCallNavigatorIconDefault;
  intl = channel(1113).intl;
  return closure_13(tmp3, obj2);
}
function StageParticipantCounts(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_16();
  const obj = StageChannelParticipantStoreHooks;
  const actualStageSpeakerCount = obj.useActualStageSpeakerCount(channelId);
  const obj2 = StageChannelParticipantStoreHooks;
  const stageParticipantsCount = obj2.useStageParticipantsCount(channelId, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
  const intl = intl2.intl;
  const obj3 = { style: tmp.counts, pointerEvents: "none", accessible: true, accessibilityLabel: intl.formatToPlainString(_modDef4219.TdMGe4, { speakerCount: actualStageSpeakerCount, audienceCount: stageParticipantsCount }), children: items };
  const obj4 = { source: AssetRegistryDefault3, size: native.Icon.Sizes.SMALL, style: tmp.icon };
  const Icon = native.Icon;
  items = [map1(Icon, obj4), map1(Text_Text.Text, { variant: "body-xs/normal", children: actualStageSpeakerCount }), , ];
  const obj5 = { source: AssetRegistryDefault4, size: native.Icon.Sizes.SMALL, style: tmp.icon };
  const Icon2 = native.Icon;
  items[2] = map1(Icon2, obj5);
  items[3] = map1(Text_Text.Text, { variant: "body-xs/normal", children: stageParticipantsCount });
  return gesture(React3, obj3);
}
class StageChannelCallHeader {
  constructor(channel) {
    let items3;
    let items4;
    let items5;
    let items6;
    let point;
    let point1;
    channel = channel.channel;
    let flag = channel.isStarting;
    const children = channel.children;
    if (flag === undefined) {
      flag = false;
    }
    const tmp = closure_16();
    const rect = useSafeAreaInsetsDefault();
    let left = rect.right;
    const tmp4 = closure_17;
    if (isRTL.isRTL) {
      left = rect.left;
    }
    const tmp4Result = tmp4(flag, left);
    const tmp7 = useChannelNameDefault(channel);
    items = [StageInstanceStore];
    const items1 = [channel.id];
    const obj = channel(504);
    const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items1);
    const items2 = [ChannelRTCStore];
    const obj3 = { style: tmp4Result.header, pointerEvents: "box-none", children: items3 };
    const obj2 = channel(504);
    const stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channel.id));
    items3 = [closure_13(HideStageChannelCallIcon, { channel }), ];
    let tmp13Result = null == stateFromStores1;
    const obj4 = { style: tmp.content, pointerEvents: "box-none", children: items4 };
    if (tmp13Result) {
      let num = 0.7;
      const obj5 = { pointerEvents: "none", style: tmp4Result.linearGradient, colors: items, start: point, end: point1 };
      const tmp2Result = LinearGradientDefault;
      if (isRTL.isRTL) {
        num = 0.3;
      }
      point = { x: num, y: 0 };
      let num2 = 1;
      if (isRTL.isRTL) {
        num2 = 0;
      }
      point1 = { x: num2, y: 0 };
      tmp13Result = tmp13(tmp2Result, obj5);
    }
    items4 = [tmp13Result, , , ];
    let topic;
    const obj6 = { pointerEvents: "none", style: tmp.leftTitleContainer, children: items5 };
    const Text = tmp8(5383).Text;
    if (stateFromStores != null) {
      topic = stateFromStores.topic;
    }
    if (topic == null) {
      topic = tmp7;
    }
    items5 = [closure_13(Text, { color: "text-overlay-light", variant: "body-md/semibold", lineClamp: 1, children: topic }), ];
    let tmp11Result = null != stateFromStores;
    if (tmp11Result) {
      const obj7 = { style: tmp.stageInfo, children: items6 };
      const obj8 = { source: AssetRegistryDefault, size: channel(1187).Icon.Sizes.SMALL, disableColor: true };
      const Icon = tmp8(1187).Icon;
      items6 = [closure_13(Icon, obj8), ];
      const obj9 = { variant: "body-xs/normal", style: tmp.stageInfoTopic, lineClamp: 1, children: tmp7 };
      items6[1] = closure_13(channel(5383).Text, obj9);
      tmp11Result = tmp11(tmp12, obj7);
    }
    items5[1] = tmp11Result;
    items4[1] = closure_14(closure_4, obj6);
    let tmp13Result2 = null != stateFromStores;
    if (tmp13Result2) {
      const obj10 = { channelId: channel.id };
      tmp13Result2 = tmp13(StageParticipantCounts, obj10);
    }
    items4[2] = tmp13Result2;
    items4[3] = children;
    items3[1] = closure_14(closure_4, obj4);
    return closure_14(closure_4, obj3);
  }
}
class StageSettingsButton {
  constructor(arg0) {
    let intl;
    ({ channelId: require, onOpenRTCDebugOverlay: importDefault } = arg0);
    let obj = {
      accessibilityLabel: intl.string(intl2.t["lIx5+G"]),
      containerStyle: items,
      source: AssetRegistryDefault5,
      onPress() {
        const obj = StageChannelActionCreatorExtras;
        return obj.openStageSettingsSheet(require, importDefault);
      },
      disableBackground: true
    };
    const tmp = closure_16();
    const tmp2 = ChannelCallNavigatorIconDefault;
    intl = intl2.intl;
    items = [, ];
    ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp);
    return closure_13(tmp2, obj);
  }
}
class StageInviteButton {
  constructor(channelId) {
    let intl;
    channelId = channelId.channelId;
    let stateFromStores1;
    const tmp = closure_16();
    let obj = channelId(stateFromStores1[19]);
    items = [ChannelStore];
    const items1 = [channelId];
    const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
    let obj2 = channelId(stateFromStores1[19]);
    const items2 = [GuildStore];
    const items3 = [stateFromStores];
    stateFromStores1 = obj2.useStateFromStores(items2, () => {
      let guild_id;
      const getGuild = GuildStore.getGuild;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      return getGuild(guild_id);
    }, items3);
    const obj3 = channelId(stateFromStores1[37]);
    let id = obj3.useActiveEvent(channelId);
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != stateFromStores1) {
        const obj4 = {
          accessibilityLabel: intl.string(channelId(stateFromStores1[22]).t.VINpSK),
          containerStyle: tmp.iconBackground,
          source: stateFromStores(stateFromStores1[38]),
          IconComponent: channelId(stateFromStores1[39]).GroupPlusIcon,
          onPress() {
                if (null != stateFromStores1.vanityURLCode) {
                  const obj2 = instant_invite_InstantInviteUtils;
                  const result = obj2.showVanityUrlInviteActionSheet(tmp, stateFromStores, constants.STAGE_CHANNEL);
                } else {
                  const obj = { source: constants.STAGE_CHANNEL, guildScheduledEventId: id };
                  id = undefined;
                  const showInstantInviteActionSheet = instant_invite_InstantInviteUtils.showInstantInviteActionSheet;
                  instant_invite_InstantInviteUtils;
                  const tmp5 = stateFromStores;
                  if (id != null) {
                    id = id.id;
                  }
                  const result1 = showInstantInviteActionSheet(tmp5, obj);
                }
              },
          disableBackground: true
        };
        const tmp9 = stateFromStores(stateFromStores1[20]);
        intl = tmp2(tmp3[22]).intl;
        tmp6 = closure_13(tmp9, obj4);
      }
    }
    return tmp6;
  }
}
class MusicMuteButton {
  constructor(channelId) {
    let muted;
    let stateFromStores;
    channelId = channelId.channelId;
    const tmp = closure_16();
    let obj = stateFromStores(504);
    items = [StageMusicStore];
    stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
    let tmp6Result = null;
    const obj2 = stateFromStores(10820);
    if (obj2.useShowStageMusicMuteButton(channelId)) {
      let stringResult;
      const tmp8 = ChannelCallNavigatorIconDefault;
      const intl = tmp2(1113).intl;
      const string = intl.string;
      const t = tmp2(1113).t;
      const tmp6 = closure_13;
      const tmp7 = importDefault;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      const obj3 = {
        accessibilityLabel: stringResult,
        containerStyle: tmp.iconBackground,
        source: tmp7(stateFromStores ? 10828 : 10829),
        onPress() {
            const obj = StageMusicActionCreators;
            return obj.updateStageMusicMuted(!stateFromStores);
          },
        disableBackground: true
      };
      tmp6Result = tmp6(tmp8, obj3);
    }
    return tmp6Result;
  }
}
({ I18nManager: c3, View: closure_4 } = react_native);
({ AnalyticEvents: unpackModuleId, InstantInviteSources: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let items = [nativeDefault.unsafe_rawColors.TRANSPARENT, nativeDefault.unsafe_rawColors.BLACK];
let createStyles = createStyles_mod;
let obj = { content: obj2, leftTitleContainer: { flex: 1, minWidth: 0, alignSelf: "stretch", justifyContent: "center", overflow: "hidden" }, iconBackground: obj3, settingsButton: obj4, stageInfo: { flexDirection: "row", alignItems: "center" }, stageInfoTopic: obj5, counts: obj6, icon: obj7 };
obj2 = { marginStart: nativeDefault.space.PX_12, flex: 1, flexDirection: "row", alignItems: "center", alignSelf: "stretch" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1) };
ColorUtils = ColorUtils_mod;
obj4 = { marginEnd: nativeDefault.space.PX_4 };
obj5 = { marginStart: nativeDefault.space.PX_4, flex: 1, minWidth: 0 };
obj6 = { flexDirection: "row", alignItems: "center", flexShrink: 0, marginEnd: nativeDefault.space.PX_8 };
obj7 = { marginStart: nativeDefault.space.PX_8, marginEnd: nativeDefault.space.PX_4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const authStore3 = createStyles(obj);
createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles((arg0, arg1) => {
  let PX_12;
  let num;
  let tmp4;
  const space = nativeDefault.space;
  if (arg0) {
    PX_12 = space.PX_8;
    tmp4 = tmp;
  } else {
    PX_12 = space.PX_12;
    tmp4 = tmp;
  }
  const obj = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: PX_12, marginTop: num };
  num = 0;
  if (arg0) {
    num = tmp4(575).space.PX_4;
  }
  return { header: obj, linearGradient: { position: "absolute", start: 0, end: -PX_12 + arg1, top: 0, bottom: 0 } };
});
const memoResult = react.memo(function StageActionHeader(onOpenRTCDebugOverlay) {
  let channel;
  let fullscreenStream;
  ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
  onOpenRTCDebugOverlay = onOpenRTCDebugOverlay.onOpenRTCDebugOverlay;
  const tmp2 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp2 != null) {
    speaker = tmp2.speaker;
  }
  const obj = { channel, children: items };
  const tmp4 = gesture;
  const tmp5 = StageChannelCallHeader;
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = map1(MusicMuteButton, obj2);
  }
  items = [speaker, , , , ];
  if (fullscreenStream) {
    const obj3 = { channel };
    fullscreenStream = map1(ChannelCallHeaderButtons.GridButton, obj3);
  }
  items[1] = fullscreenStream;
  items[2] = map1(ChannelCallHeaderButtons.CameraButton, {});
  const obj4 = { channelId: channel.id };
  items[3] = map1(StageInviteButton, obj4);
  const obj5 = { channelId: channel.id, onOpenRTCDebugOverlay };
  items[4] = map1(StageSettingsButton, obj5);
  return tmp4(tmp5, obj);
});
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default memoResult;
export function closeStageModal(id) {
  const track = AnalyticsUtilsDefault.track;
  const VIDEO_LAYOUT_TOGGLED = unpackModuleId.VIDEO_LAYOUT_TOGGLED;
  const obj = { video_layout: "pop out" };
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(id.id));
  track(VIDEO_LAYOUT_TOGGLED, obj);
  const obj3 = StatusBarDefault;
  obj3.setHidden(false);
  const popWithKey = ModalActionCreatorsDefault.popWithKey;
  ModalActionCreatorsDefault;
  const obj4 = PrivateChannelCallUtils;
  popWithKey(obj4.getVoiceChannelKey(id.id));
}
export { StageChannelCallHeader };
export { StageSettingsButton };
export { StageInviteButton };
export { MusicMuteButton };
