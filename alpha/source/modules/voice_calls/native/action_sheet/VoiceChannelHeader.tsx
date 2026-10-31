// Module ID: 15203
// Function ID: 15204
// Name: VoiceChannelHeader
// Dependencies: [19, 17, 4862, 4885, 4946, 1072, 21, 5014, 575, 15204, 15205, 5624, 15206, 504, 11908, 5652, 9118, 1113, 11625, 1187, 7275, 15208, 11995, 10978, 6980, 2]

// Module 15203 (VoiceChannelHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import useChannelNameDefault from "useChannelName" /* 5652 */;
import Pressables from "Pressables" /* 6980 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7275 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9118 */;
import AssetRegistryDefault from "AssetRegistry" /* 10978 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11625 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 11908 */;
import CallStateHooks from "CallStateHooks" /* 15204 */;
import OngoingCallStatusLabelDefault from "OngoingCallStatusLabel" /* 15205 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const CallStateHooksDefault = CallStateHooks;
let applicationId, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp2;
let unpackModuleId;
const OngoingCallTimerDefault = tmp2(15206);
function PrivateChannelSubtitle(channel) {
  let items;
  channel = channel.channel;
  const tmp = closure_12();
  const state = CallStateHooksDefault(channel.id).state;
  const obj = { style: tmp.subtitleWrapper, children: items };
  items = [, , ];
  const obj2 = { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle };
  items[0] = authStore(OngoingCallStatusLabelDefault, obj2);
  let tmp6Result = state === CallStateHooks.CallStates.CONNECTED;
  const tmp4 = unpackModuleId;
  const tmp5 = View;
  if (tmp6Result) {
    const obj3 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
    tmp6Result = tmp6(tmp7(5624).Text, obj3);
  }
  items[1] = tmp6Result;
  let tmp6Result2 = state === tmp7(15204).CallStates.CONNECTED;
  if (tmp6Result2) {
    const obj4 = { channelId: channel.id, style: tmp.subtitle };
    tmp6Result2 = tmp6(OngoingCallTimerDefault, obj4);
  }
  items[2] = tmp6Result2;
  return tmp4(tmp5, obj);
}
class VoiceChannelHeader {
  constructor(channel) {
    let items3;
    let items4;
    let tmp14Result4;
    let tmp5Result;
    channel = channel.channel;
    const tmp = closure_12();
    let tmp2 = channel;
    let obj = channel(504);
    const items = [GuildStore];
    const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
    const items1 = [EmbeddedActivitiesStore];
    const items2 = [channel];
    const tmp6 = useIsVoiceChannelFullDefault(channel);
    const obj2 = channel(504);
    importDefault = obj2.useStateFromStores(items1, () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id), items2);
    let name;
    const tmp7 = useChannelNameDefault(channel);
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    let E = null;
    if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel)) {
      E = null;
      if (!tmp6) {
        E = () => {
          const obj = { source: constants.VOICE_CHANNEL, targetApplicationId: applicationId };
          applicationId = undefined;
          const showInstantInviteActionSheet = instant_invite_InstantInviteUtils.showInstantInviteActionSheet;
          instant_invite_InstantInviteUtils;
          const tmp2 = channel;
          if (applicationId != null) {
            applicationId = applicationId.applicationId;
          }
          return showInstantInviteActionSheet(tmp2, obj);
        };
      }
    }
    let formatToPlainStringResult = tmp7;
    if (channel.isPrivate()) {
      const intl = tmp2(1113).intl;
      const obj3 = { count: channel.recipients.length + 1 };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1113).t["8bn8Br"], obj3);
      const obj4 = { channel };
      name = closure_10(PrivateChannelSubtitle, obj4);
      class E {
        constructor() {
          return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
        }
      }
    }
    const obj5 = { style: tmp.container, children: items3 };
    const obj6 = { size: tmp2(1187).Icon.Sizes.MEDIUM, source: tmp5Result, disableColor: true, style: tmp.icons };
    const Icon = tmp2(1187).Icon;
    if (isRoleRequiredDefault(channel)) {
      tmp5Result = tmp5(15208);
    } else {
      tmp5Result = tmp5(11995);
    }
    items3 = [closure_10(Icon, obj6), , ];
    let tmp14Result = formatToPlainStringResult;
    const obj7 = { style: tmp.middle, children: items4 };
    if (typeof formatToPlainStringResult === "string") {
      const obj8 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-md/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
      tmp14Result = tmp14(tmp2(5624).Text, obj8);
    }
    items4 = [tmp14Result, ];
    let tmp14Result3 = name;
    if (typeof name === "string") {
      const obj9 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-xs/medium", color: "text-overlay-light", children: name };
      tmp14Result3 = tmp14(tmp2(5624).Text, obj9);
    }
    items4[1] = tmp14Result3;
    items3[1] = closure_11(View, obj7);
    const obj10 = { style: tmp.icons, children: tmp14Result4 };
    tmp14Result4 = null != E;
    if (tmp14Result4) {
      const obj11 = { onPress: E };
      tmp14Result4 = tmp14(AddMemberButton, obj11);
    }
    items3[2] = closure_10(View, obj10);
    return closure_11(View, obj5);
  }
}
function AddMemberButton(onPress) {
  let intl;
  let tmp;
  const obj = { onPress: onPress.onPress, iconSource: AssetRegistryDefault, iconStyle: tmp.icons, accessibilityLabel: intl.string(intl2.t["6Qgrev"]) };
  tmp = closure_12();
  intl = intl2.intl;
  return authStore(IconButton, obj);
}
class IconButton {
  constructor(arg0) {
    let accessibilityLabel;
    let iconSource;
    let iconStyle;
    let onPress;
    let style;
    ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = arg0);
    const obj = { accessibilityRole: "button", accessibilityLabel, onPress, style, children: authStore(native.Icon, { source: iconSource, style: iconStyle }) };
    const PressableOpacity = Pressables.PressableOpacity;
    return authStore(PressableOpacity, obj);
  }
}
const View = react_native.View;
({ Permissions: metroImportDefault, AnalyticsPages: metroImportAll, InstantInviteSources: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 16, alignItems: "center" }, middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 }, icons: obj2, subtitle: obj3, subtitleWrapper: { flexDirection: "row" } };
obj2 = { flexDirection: "row", tintColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.WHITE };
const authStore2 = createStyles(obj);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default VoiceChannelHeader;
export { VoiceChannelHeader };
export { IconButton };
