// Module ID: 19648
// Function ID: 19649
// Name: VoicePanelTitleButton
// Dependencies: [19, 17, 2162, 4996, 4991, 5807, 21, 5142, 575, 15001, 1113, 5761, 7378, 504, 5778, 9332, 9078, 11371, 6175, 19649, 6161, 8685, 19546, 19646, 6823, 6817, 12147, 5753, 8738, 11336, 12068, 8689, 8921, 1093, 19645, 19620, 2]

// Module 19648 (VoicePanelTitleButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5753 */;
import BaseTextButton from "BaseTextButton" /* 5761 */;
import useChannelNameDefault from "useChannelName" /* 5778 */;
import CallConstants from "CallConstants" /* 5807 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6175 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6817 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6823 */;
import AssetRegistryDefault from "AssetRegistry" /* 7378 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8685 */;
import GroupIcon2 from "GroupIcon" /* 8738 */;
import native from "native" /* 9078 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11371 */;
import useStageSummaryDefault from "useStageSummary" /* 12068 */;
import MicrophoneIcon2 from "MicrophoneIcon" /* 12147 */;
import ShieldLockIcon2 from "ShieldLockIcon" /* 15001 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 19546 */;
import VoicePanelSettingsActionCreators from "VoicePanelSettingsActionCreators" /* 19620 */;
import VoicePanelHeaderUserState from "VoicePanelHeaderUserState" /* 19646 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 19649 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import StageInstanceStore from "StageInstanceStore" /* 4996 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let id;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let tmp5;
const AssetRegistryDefault3 = tmp5(8689);
function ChannelButtonIcons() {
  let intl;
  let items;
  const obj = { style: closure_11().channelButtons, children: items };
  const obj2 = { size: "xs", accessibilityLabel: intl.string(intl4.t.VHXh8a) };
  const ShieldLockIcon = ShieldLockIcon2.ShieldLockIcon;
  intl = intl4.intl;
  items = [React4(ShieldLockIcon, obj2), ];
  const obj3 = { source: AssetRegistryDefault };
  const Icon = BaseTextButton.BaseTextButton.Icon;
  items[1] = React4(Icon, obj3);
  return authStore(View, obj);
}
function ChannelButton(channelId) {
  let intl;
  let tmp3Result;
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  const items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let str = useChannelNameDefault(stateFromStores);
  const obj2 = channelId(9332);
  const isCallSecureFramesVerified = obj2.useIsCallSecureFramesVerified({ channelId });
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(channelId(1113).t["Y2b7+e"]), text: str, icon: tmp3Result, iconOpticalOffsetMargin: -nativeDefault.space.PX_4, iconPosition: "end", onPress, maxFontSizeMultiplier: 2 };
  const HeaderButton = channelId(9078).HeaderButton;
  intl = channelId(1113).intl;
  if (str == null) {
    str = "???";
  }
  if (isCallSecureFramesVerified) {
    tmp3Result = tmp5(ChannelButtonIcons, {});
  } else {
    tmp3Result = tmp3(7378);
  }
  return closure_9(HeaderButton, obj3);
}
function StreamButton(arg0) {
  let channelId;
  let guildId;
  let intl;
  let intl2;
  let onPress;
  let participant;
  ({ participant, onPress } = arg0);
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const obj = NicknameUtilsDefault;
  const name = obj.useName(guildId, channelId, participant.user);
  const obj2 = { accessibilityRole: "button", accessibilityHint: intl.string(intl4.t["Y2b7+e"]), accessibilityLabel: intl2.formatToPlainString(intl4.t.I0mOAs, { username: name }), text: name, icon: AssetRegistryDefault4, iconPosition: "start", onPress };
  const HeaderButton = native.HeaderButton;
  intl = intl4.intl;
  intl2 = intl4.intl;
  return React4(HeaderButton, obj2);
}
function ActivityButton(participant) {
  let intl;
  let items1;
  let str;
  participant = participant.participant;
  const onPress = participant.onPress;
  const items = [ApplicationStore];
  const obj = participant(504);
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(participant.applicationId));
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items1 };
  const Stack = participant(6161).Stack;
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(participant(1113).t["Y2b7+e"]), text: str, icon: AssetRegistryDefault2, iconPosition: "start", onPress, shrink: true };
  const HeaderButton = participant(9078).HeaderButton;
  intl = participant(1113).intl;
  str = undefined;
  const tmp3 = closure_10;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "???";
  }
  items1 = [closure_9(HeaderButton, obj3), ];
  const obj4 = { applicationId: participant.applicationId };
  items1[1] = closure_9(QuestActivityButtonDefault, obj4);
  return tmp3(Stack, obj2);
}
function UserButton(participant) {
  let channelId;
  let guildId;
  let intl;
  let str;
  participant = participant.participant;
  const onPress = participant.onPress;
  const tmp = closure_11();
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const obj = NicknameUtilsDefault;
  const name = obj.useName(guildId, channelId, participant.user);
  const obj2 = VoicePanelHeaderUserState;
  const voicePanelHeaderUserStateIcons = obj2.useVoicePanelHeaderUserStateIcons(participant, guildId, tmp.userIcons);
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(intl4.t["Y2b7+e"]), icon: voicePanelHeaderUserStateIcons, iconPosition: str, text: name, onPress };
  const HeaderButton = native.HeaderButton;
  intl = intl4.intl;
  str = undefined;
  const tmp5 = React4;
  if (null != voicePanelHeaderUserStateIcons) {
    str = "start";
  }
  return tmp5(HeaderButton, obj3);
}
function StageCounts(channelId) {
  let items;
  channelId = channelId.channelId;
  const tmp = closure_11();
  const obj = StageChannelParticipantStoreHooks;
  const actualStageSpeakerCount = obj.useActualStageSpeakerCount(channelId);
  const obj3 = { style: tmp.stageCounts, children: items };
  const obj2 = StageChannelParticipantStoreHooks;
  const stageParticipantsCount = obj2.useStageParticipantsCount(channelId, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
  const obj4 = { size: "xs", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  const MicrophoneIcon = MicrophoneIcon2.MicrophoneIcon;
  items = [React4(MicrophoneIcon, obj4), , , ];
  const obj5 = { variant: "body-sm/medium", color: "none", style: tmp.stageCountsText, children: actualStageSpeakerCount };
  items[1] = React4(Text_Text.Text, obj5);
  const obj6 = { size: "xs", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, style: tmp.stageCountsGroupIcon };
  const GroupIcon = GroupIcon2.GroupIcon;
  items[2] = React4(GroupIcon, obj6);
  const obj7 = { variant: "body-sm/medium", color: "none", style: tmp.stageCountsText, children: stageParticipantsCount };
  items[3] = React4(Text_Text.Text, obj7);
  return authStore(View, obj3);
}
function StageButton(channelId) {
  let intl2;
  let intl3;
  let obj5;
  let obj6;
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  const items = [StageInstanceStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channelId), items1);
  const items2 = [ChannelStore];
  const obj2 = channelId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const tmp6 = useChannelNameDefault(stateFromStores1);
  const obj3 = channelId(11336);
  const isStageUnifiedCall = obj3.useIsStageUnifiedCall(stateFromStores1, "VoicePanelTitleButton");
  let topic;
  const tmp8 = useStageSummaryDefault(channelId);
  if (stateFromStores != null) {
    topic = stateFromStores.topic;
  }
  if (topic == null) {
    topic = tmp6;
  }
  if (topic == null) {
    const intl = tmp(1113).intl;
    topic = intl.string(tmp(1113).t.zLZPmk);
  }
  const HeaderButton = tmp(9078).HeaderButton;
  if (isStageUnifiedCall) {
    const obj4 = { accessibilityRole: "button", accessibilityHint: intl3.string(channelId(1113).t["Y2b7+e"]), accessibilityLabel: "" + topic + ", " + tmp8, text: topic, icon: closure_9(StageCounts, obj5), iconPosition: "end", onPress, shrink: true };
    intl3 = tmp(1113).intl;
    const _HermesInternal = HermesInternal;
    obj6 = obj4;
    obj5 = { channelId };
  } else {
    obj6 = { accessibilityRole: "button", accessibilityHint: intl2.string(channelId(1113).t["Y2b7+e"]), text: topic, icon: AssetRegistryDefault3, iconPosition: "start", onPress };
    intl2 = tmp(1113).intl;
  }
  return closure_9(HeaderButton, obj6);
}
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { userIcons: { marginLeft: -6 }, channelButtons: { alignItems: "center", flexDirection: "row", gap: 2 }, stageCounts: obj2, stageCountsGroupIcon: obj3, stageCountsText: obj4 };
obj2 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { marginStart: nativeDefault.space.PX_4 };
obj4 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let closure_11 = createStyles(obj);
const memoResult = react.memo(function VoicePanelTitleButton() {
  let channelId;
  let channelType;
  let focused;
  const context = react.useContext(channelId(11371));
  const guildId = context.guildId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  let obj = guildId(8921);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return id;
  });
  const GUILD_STAGE_VOICE = guildId(1093).ChannelTypes.GUILD_STAGE_VOICE;
  const tmp3 = channelId(19645)(derivedStateFromSharedValue, channelId, guildId);
  const items = [guildId, channelId];
  const onPress = react.useCallback(() => {
    const obj = VoicePanelSettingsActionCreators;
    const result = obj.openVoicePanelSettingsActionSheet(guildId, channelId);
  }, items);
  if (null != tmp3) {
    if (tmp3.type === ParticipantTypes.STREAM) {
      const obj2 = { participant: tmp3, onPress };
      return closure_9(StreamButton, obj2);
    } else if (tmp3.type === ParticipantTypes.ACTIVITY) {
      const obj3 = { participant: tmp3, onPress };
      return closure_9(ActivityButton, obj3);
    } else if (tmp3.type === ParticipantTypes.USER) {
      const obj4 = { participant: tmp3, onPress };
      return closure_9(UserButton, obj4);
    }
  }
  return closure_9(channelType === GUILD_STAGE_VOICE ? StageButton : ChannelButton, { channelId, onPress });
});
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelTitleButton.tsx");

export default memoResult;
