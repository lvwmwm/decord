// Module ID: 9487
// Function ID: 9488
// Name: StageActionHeader
// Dependencies: [19, 17, 4852, 2045, 7050, 2067, 2050, 9354, 1074, 21, 4836, 5994, 4683, 576, 1241, 5016, 8839, 5039, 5043, 504, 9381, 9488, 1115, 5037, 1177, 4989, 5743, 5737, 5293, 4832, 8082, 8079, 9489, 9490, 7842, 8943, 9491, 9492, 9275, 9356, 9362, 9363, 9368, 9493, 9494, 2]
// Exports: HideChannelCallButton, closeStageModal

// Module 9487 (StageActionHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5043 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 7842 */;
import AssetRegistryDefault from "AssetRegistry" /* 8079 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8082 */;
import StatusBarDefault from "StatusBar" /* 8839 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 9368 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9381 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9488 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9489 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9490 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 9493 */;
import ChannelCallHeaderButtons from "ChannelCallHeaderButtons" /* 9494 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import GuildStore from "GuildStore" /* 2067 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import StageMusicStore from "StageMusicStore" /* 9354 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

let onOpenRTCDebugOverlay;

let ColorUtils;
let c10;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
class HideStageChannelCallIcon {
  constructor(channel) {
    let intl;
    let totalMentionCount;
    channel = channel.channel;
    const tmp = closure_14();
    let obj = channel(504);
    const items = [GuildReadStateStore];
    const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
    let obj2 = {
      source: AssetRegistryDefault3,
      accessibilityLabel: intl.string(channel(1115).t.cpT0Cq),
      onPress() {
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
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
      containerStyle: tmp.iconContainer,
      disableBackground: true,
      children: closure_12(channel(1177).MaskedBadge, { value: stateFromStores, maskStyle: {} })
    };
    const tmp3 = ChannelCallNavigatorIconDefault;
    intl = channel(1115).intl;
    return closure_12(tmp3, obj2);
  }
}
class StageChannelCallHeader {
  constructor(channel) {
    let items3;
    let items4;
    let items5;
    channel = channel.channel;
    const tmp = closure_14();
    const tmp4 = useChannelNameDefault(channel);
    const items = [StageInstanceStore];
    const items1 = [channel.id];
    const obj = channel(504);
    const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items1);
    const obj2 = channel(5743);
    const stageParticipantsCount = obj2.useStageParticipantsCount(channel.id, channel(5737).StageChannelParticipantNamedIndex.AUDIENCE);
    const obj3 = channel(5743);
    const actualStageSpeakerCount = obj3.useActualStageSpeakerCount(channel.id);
    const items2 = [ChannelRTCStore];
    const obj5 = { pointerEvents: "none", style: tmp.leftTitleContainer, children: items4 };
    const obj6 = { style: tmp.titleWrapper, children: items3 };
    const obj4 = channel(504);
    let tmp11 = null == obj4.useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channel.id));
    if (tmp11) {
      const obj7 = { style: tmp.linearGradient, colors: ["#00000000", "#000000"], start: { x: 0.85, y: 0 }, end: { x: 1, y: 0 } };
      tmp11 = closure_12(tmp2(5293), obj7);
    }
    items3 = [tmp11, ];
    let topic;
    const Text = tmp5(4832).Text;
    if (stateFromStores != null) {
      topic = stateFromStores.topic;
    }
    if (topic == null) {
      topic = tmp4;
    }
    items3[1] = closure_12(Text, { color: "text-overlay-light", variant: "text-md/semibold", children: topic });
    items4 = [closure_13(View, obj6), ];
    let tmp9Result = null != stateFromStores;
    if (tmp9Result) {
      const obj8 = { style: tmp.stageInfo, children: items5 };
      const obj9 = { source: AssetRegistryDefault2, size: channel(1177).Icon.Sizes.SMALL, disableColor: true };
      const Icon = tmp5(1177).Icon;
      items5 = [closure_12(Icon, obj9), , , , , ];
      const obj10 = { variant: "text-xs/normal", style: tmp.stageInfoTopic, children: tmp4 };
      items5[1] = closure_12(channel(4832).Text, obj10);
      const obj11 = { source: AssetRegistryDefault, size: channel(1177).Icon.Sizes.SMALL, style: tmp.icon };
      const Icon2 = tmp5(1177).Icon;
      items5[2] = closure_12(Icon2, obj11);
      const obj12 = { variant: "text-xs/normal", children: actualStageSpeakerCount };
      items5[3] = closure_12(channel(4832).Text, obj12);
      const obj13 = { source: AssetRegistryDefault4, size: channel(1177).Icon.Sizes.SMALL, style: tmp.icon };
      const Icon3 = tmp5(1177).Icon;
      items5[4] = closure_12(Icon3, obj13);
      const obj14 = { variant: "text-xs/normal", children: stageParticipantsCount };
      items5[5] = closure_12(channel(4832).Text, obj14);
      tmp9Result = tmp9(tmp10, obj8);
    }
    items4[1] = tmp9Result;
    return closure_13(View, obj5);
  }
}
class StageSettingsButton {
  constructor(arg0) {
    let intl;
    let items;
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
    const tmp = closure_14();
    const tmp2 = ChannelCallNavigatorIconDefault;
    intl = intl2.intl;
    items = [, ];
    ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp);
    return closure_12(tmp2, obj);
  }
}
class StageInviteButton {
  constructor(channelId) {
    let intl;
    channelId = channelId.channelId;
    let stateFromStores1;
    const tmp = closure_14();
    let obj = channelId(stateFromStores1[19]);
    const items = [ChannelStore];
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
    const obj3 = channelId(stateFromStores1[35]);
    let id = obj3.useActiveEvent(channelId);
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != stateFromStores1) {
        const obj4 = {
          accessibilityLabel: intl.string(channelId(stateFromStores1[22]).t.VINpSK),
          containerStyle: tmp.iconBackground,
          source: stateFromStores(stateFromStores1[36]),
          IconComponent: channelId(stateFromStores1[37]).GroupPlusIcon,
          onPress() {
                if (null != stateFromStores1.vanityURLCode) {
                  const obj2 = instant_invite_InstantInviteUtils;
                  const result = obj2.showVanityUrlInviteActionSheet(tmp, stateFromStores, unpackModuleId.STAGE_CHANNEL);
                } else {
                  const obj = { source: unpackModuleId.STAGE_CHANNEL, guildScheduledEventId: id };
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
        tmp6 = closure_12(tmp9, obj4);
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
    const tmp = closure_14();
    let obj = stateFromStores(504);
    const items = [StageMusicStore];
    stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
    let tmp6Result = null;
    const obj2 = stateFromStores(9356);
    if (obj2.useShowStageMusicMuteButton(channelId)) {
      let stringResult;
      const tmp8 = ChannelCallNavigatorIconDefault;
      const intl = tmp2(1115).intl;
      const string = intl.string;
      const t = tmp2(1115).t;
      const tmp6 = closure_12;
      const tmp7 = importDefault;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      const obj3 = {
        accessibilityLabel: stringResult,
        containerStyle: tmp.iconBackground,
        source: tmp7(stateFromStores ? 9362 : 9363),
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
const View = react_native.View;
({ AnalyticEvents: c10, InstantInviteSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, leftTitleContainer: { marginLeft: 12, flex: 1 }, titleWrapper: { position: "relative", flex: 1, justifyContent: "center" }, linearGradient: { position: "absolute", zIndex: 1, left: 0, right: 0, top: 0, bottom: 0 }, iconBackground: obj3, iconContainer: obj4, settingsButton: { marginRight: 4 }, stageInfo: obj5, stageInfoTopic: { marginLeft: 4 }, icon: obj6 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, overflow: "visible" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1) };
ColorUtils = ColorUtils_mod;
obj4 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1) };
ColorUtils = ColorUtils_mod;
obj5 = { flex: 1, flexDirection: "row", alignItems: "center", color: nativeDefault.colors.TEXT_SUBTLE };
obj6 = { marginLeft: 8, marginRight: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const authStore2 = createStyles(obj);
const memoResult = react.memo((onOpenRTCDebugOverlay) => {
  let channel;
  let fullscreenStream;
  let items;
  ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
  onOpenRTCDebugOverlay = onOpenRTCDebugOverlay.onOpenRTCDebugOverlay;
  const tmp = closure_14();
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  const obj = { style: tmp.header, pointerEvents: "box-none", children: items };
  items = [closure_12(HideStageChannelCallIcon, { channel, fullscreenStream }), closure_12(StageChannelCallHeader, { channel }), , , , , ];
  const tmp5 = map1;
  const tmp6 = View;
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = tmp7(MusicMuteButton, obj2);
  }
  items[2] = speaker;
  if (fullscreenStream) {
    const obj3 = { channel };
    fullscreenStream = tmp7(ChannelCallHeaderButtons.GridButton, obj3);
  }
  items[3] = fullscreenStream;
  items[4] = closure_12(ChannelCallHeaderButtons.CameraButton, {});
  const obj4 = { channelId: channel.id };
  items[5] = closure_12(StageInviteButton, obj4);
  const obj5 = { channelId: channel.id, onOpenRTCDebugOverlay };
  items[6] = closure_12(StageSettingsButton, obj5);
  return tmp5(tmp6, obj);
});
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default memoResult;
export const closeStageModal = function closeStageModal(id) {
  const track = AnalyticsUtilsDefault.track;
  const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
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
};
export { HideStageChannelCallIcon };
export { StageChannelCallHeader };
export const HideChannelCallButton = function HideChannelCallButton(channel) {
  let intl;
  let totalMentionCount;
  channel = channel.channel;
  const tmp = closure_14();
  let obj = channel(504);
  const items = [GuildReadStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let obj2 = {
    source: AssetRegistryDefault3,
    accessibilityLabel: intl.string(channel(1115).t.cpT0Cq),
    onPress() {
      const track = AnalyticsUtilsDefault.track;
      const VIDEO_LAYOUT_TOGGLED = constants.VIDEO_LAYOUT_TOGGLED;
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
    containerStyle: tmp.iconContainer,
    disableBackground: true,
    children: closure_12(channel(1177).MaskedBadge, { value: stateFromStores, maskStyle: {} })
  };
  const tmp3 = ChannelCallNavigatorIconDefault;
  intl = channel(1115).intl;
  return closure_12(tmp3, obj2);
};
export { StageSettingsButton };
export { StageInviteButton };
export { MusicMuteButton };
