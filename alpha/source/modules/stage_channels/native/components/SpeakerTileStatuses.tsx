// Module ID: 10952
// Function ID: 10953
// Name: SpeakerTileStatuses
// Dependencies: [19, 17, 2131, 5442, 6417, 21, 4794, 575, 504, 9557, 10893, 10648, 10649, 1186, 10953, 10954, 7116, 2]
// Exports: BlockedStatus, IgnoredStatus

// Module 10952 (SpeakerTileStatuses)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import AssetRegistryDefault from "AssetRegistry" /* 7116 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10954 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import VoiceStateStore from "VoiceStateStore" /* 5442 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6417 */;
import createStyles_mod from "createStyles" /* 4794 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { voiceStatusWrapper: size, moderatorStatusWrapper: size1, restricted: obj2 };
size = { position: "absolute", top: 4, left: 4, backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", top: 4, right: 4, backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj2 = { marginEnd: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
const memoResult = react.memo(function VoiceStatus(userId) {
  let flag3;
  let tmp7;
  userId = userId.userId;
  const channelId = userId.channelId;
  const style = userId.style;
  const items = [MediaEngineStore];
  const items1 = [userId];
  const tmp = closure_8();
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.isLocalMute(userId), items1);
  const withLocalSelfMuteDeaf = userId(9557).withLocalSelfMuteDeaf;
  userId(9557);
  const items2 = [VoiceStateStore];
  const items3 = [channelId, userId];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => VoiceStateStore.getVoiceStateForChannel(channelId, userId), items3);
  const obj3 = userId(9557);
  const result = withLocalSelfMuteDeaf(stateFromStores1, obj3.useLocalSelfMuteDeaf());
  let flag;
  if (result != null) {
    flag = result.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (result != null) {
    flag2 = result.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  if (stateFromStores) {
    tmp7 = channelId(10893);
    flag3 = true;
  } else if (flag2) {
    tmp7 = channelId(10648);
    flag3 = false;
  } else {
    flag3 = false;
    if (flag) {
      tmp7 = channelId(10649);
      flag3 = false;
    }
  }
  let tmp11 = null;
  if (null != tmp7) {
    const items4 = [tmp.voiceStatusWrapper, style];
    ({ source: tmp7, size: userId(1186).Icon.Sizes.SMALL, color: channelId(575).unsafe_rawColors.BLACK, disableColor: flag3 });
    const Icon = tmp2(1186).Icon;
    tmp11 = <View style={items4}>{null}</View>;
  }
  return tmp11;
});
const memoResult1 = react.memo(function ModeratorStatus(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const style = userId.style;
  const items = [StageChannelRoleStore];
  const items1 = [channelId, userId];
  let tmp4;
  const tmp = closure_8();
  const obj = userId(504);
  if (obj.useStateFromStores(items, () => StageChannelRoleStore.isModerator(userId, channelId), items1)) {
    tmp4 = channelId(10953);
  }
  let tmp6 = null;
  if (null != tmp4) {
    const items2 = [tmp.moderatorStatusWrapper, style];
    ({ source: tmp4, size: userId(1186).Icon.Sizes.SMALL, color: channelId(575).unsafe_rawColors.BLACK });
    const Icon = tmp2(1186).Icon;
    tmp6 = <View style={items2}>{null}</View>;
  }
  return tmp6;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = memoResult1;
export function BlockedStatus() {
  const Icon = native.Icon;
  return <Icon style={closure_8().restricted} source={AssetRegistryDefault2} size={native.Icon.Sizes.EXTRA_SMALL} color={nativeDefault.unsafe_rawColors.RED_400} />;
}
export function IgnoredStatus() {
  const Icon = native.Icon;
  return <Icon style={closure_8().restricted} source={AssetRegistryDefault} size={native.Icon.Sizes.EXTRA_SMALL} />;
}
