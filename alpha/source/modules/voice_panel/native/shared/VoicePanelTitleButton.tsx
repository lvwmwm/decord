// Module ID: 19162
// Function ID: 19163
// Name: VoicePanelTitleButton
// Dependencies: [19, 17, 2040, 4863, 4858, 5676, 21, 5009, 14697, 1114, 5630, 7308, 504, 5647, 9227, 8983, 575, 11203, 6036, 19163, 6022, 8600, 19090, 19160, 8604, 8833, 1094, 19159, 19164, 2]

// Module 19162 (VoicePanelTitleButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import BaseTextButton from "BaseTextButton" /* 5630 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import CallConstants from "CallConstants" /* 5676 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6036 */;
import AssetRegistryDefault from "AssetRegistry" /* 7308 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8600 */;
import native from "native" /* 8983 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11203 */;
import ShieldLockIcon2 from "ShieldLockIcon" /* 14697 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 19090 */;
import VoicePanelHeaderUserState from "VoicePanelHeaderUserState" /* 19160 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 19163 */;
import VoicePanelSettingsActionCreators from "VoicePanelSettingsActionCreators" /* 19164 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import StageInstanceStore from "StageInstanceStore" /* 4863 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let id;

let c10;
let c9;
let tmp5;
const AssetRegistryDefault3 = tmp5(8604);
function ChannelButtonIcons() {
  let intl;
  let items;
  const obj = { style: closure_11().channelButtons, children: items };
  const obj2 = { size: "xs", accessibilityLabel: intl.string(intl3.t.VHXh8a) };
  const ShieldLockIcon = ShieldLockIcon2.ShieldLockIcon;
  intl = intl3.intl;
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
  const obj2 = channelId(9227);
  const isCallSecureFramesVerified = obj2.useIsCallSecureFramesVerified({ channelId });
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(channelId(1114).t["Y2b7+e"]), text: str, icon: tmp3Result, iconOpticalOffsetMargin: -nativeDefault.space.PX_4, iconPosition: "end", onPress, maxFontSizeMultiplier: 2 };
  const HeaderButton = channelId(8983).HeaderButton;
  intl = channelId(1114).intl;
  if (str == null) {
    str = "???";
  }
  if (isCallSecureFramesVerified) {
    tmp3Result = tmp5(ChannelButtonIcons, {});
  } else {
    tmp3Result = tmp3(7308);
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
  const obj2 = { accessibilityRole: "button", accessibilityHint: intl.string(intl3.t["Y2b7+e"]), accessibilityLabel: intl2.formatToPlainString(intl3.t.I0mOAs, { username: name }), text: name, icon: AssetRegistryDefault4, iconPosition: "start", onPress };
  const HeaderButton = native.HeaderButton;
  intl = intl3.intl;
  intl2 = intl3.intl;
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
  const Stack = participant(6022).Stack;
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(participant(1114).t["Y2b7+e"]), text: str, icon: AssetRegistryDefault2, iconPosition: "start", onPress, shrink: true };
  const HeaderButton = participant(8983).HeaderButton;
  intl = participant(1114).intl;
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
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(intl3.t["Y2b7+e"]), icon: voicePanelHeaderUserStateIcons, iconPosition: str, text: name, onPress };
  const HeaderButton = native.HeaderButton;
  intl = intl3.intl;
  str = undefined;
  const tmp5 = React4;
  if (null != voicePanelHeaderUserStateIcons) {
    str = "start";
  }
  return tmp5(HeaderButton, obj3);
}
function StageButton(channelId) {
  let intl;
  let topic;
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  const items = [StageInstanceStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channelId), items1);
  const items2 = [ChannelStore];
  const obj2 = channelId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(channelId(1114).t["Y2b7+e"]), text: topic, icon: AssetRegistryDefault3, iconPosition: "start", onPress };
  const tmp6 = useChannelNameDefault(stateFromStores1);
  const HeaderButton = channelId(8983).HeaderButton;
  intl = channelId(1114).intl;
  topic = undefined;
  const tmp7 = closure_9;
  if (stateFromStores != null) {
    topic = stateFromStores.topic;
  }
  if (topic == null) {
    topic = tmp6;
  }
  if (topic == null) {
    const intl2 = tmp(1114).intl;
    topic = intl2.string(tmp(1114).t.zLZPmk);
  }
  return tmp7(HeaderButton, obj3);
}
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ userIcons: { marginLeft: -6 }, channelButtons: { alignItems: "center", flexDirection: "row", gap: 2 } });
const memoResult = react.memo(function VoicePanelTitleButton() {
  let channelId;
  let channelType;
  let focused;
  const context = react.useContext(channelId(11203));
  const guildId = context.guildId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  let obj = guildId(8833);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return id;
  });
  const GUILD_STAGE_VOICE = guildId(1094).ChannelTypes.GUILD_STAGE_VOICE;
  const tmp3 = channelId(19159)(derivedStateFromSharedValue, channelId, guildId);
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
