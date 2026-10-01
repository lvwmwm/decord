// Module ID: 9510
// Function ID: 9511
// Name: SpeakerTileStatuses
// Dependencies: [19, 17, 1993, 4855, 5733, 21, 4836, 576, 504, 9467, 8906, 8907, 1177, 9511, 9512, 6388, 2]
// Exports: BlockedStatus, IgnoredStatus

// Module 9510 (SpeakerTileStatuses)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AssetRegistryDefault from "AssetRegistry" /* 6388 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9512 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5733 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let userId;

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
const memoResult = react.memo((userId) => {
  let flag3;
  let tmp5;
  userId = userId.userId;
  const channelId = userId.channelId;
  const style = userId.style;
  const items = [MediaEngineStore];
  const items1 = [userId];
  const tmp = closure_8();
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.isLocalMute(userId), items1);
  const items2 = [VoiceStateStore];
  const items3 = [channelId, userId];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => VoiceStateStore.getVoiceStateForChannel(channelId, userId), items3);
  let flag;
  if (stateFromStores1 != null) {
    flag = stateFromStores1.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (stateFromStores1 != null) {
    flag2 = stateFromStores1.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  if (stateFromStores) {
    tmp5 = channelId(9467);
    flag3 = true;
  } else if (flag2) {
    tmp5 = channelId(8906);
    flag3 = false;
  } else {
    flag3 = false;
    if (flag) {
      tmp5 = channelId(8907);
      flag3 = false;
    }
  }
  let tmp9 = null;
  if (null != tmp5) {
    const items4 = [tmp.voiceStatusWrapper, style];
    ({ source: tmp5, size: userId(1177).Icon.Sizes.SMALL, color: channelId(576).unsafe_rawColors.BLACK, disableColor: flag3 });
    const Icon = tmp2(1177).Icon;
    tmp9 = <View style={items4}>{null}</View>;
  }
  return tmp9;
});
const memoResult1 = react.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  const style = userId.style;
  const items = [StageChannelRoleStore];
  const items1 = [channelId, userId];
  let tmp4;
  const tmp = closure_8();
  const obj = userId(504);
  if (obj.useStateFromStores(items, () => StageChannelRoleStore.isModerator(userId, channelId), items1)) {
    tmp4 = channelId(9511);
  }
  let tmp6 = null;
  if (null != tmp4) {
    const items2 = [tmp.moderatorStatusWrapper, style];
    ({ source: tmp4, size: userId(1177).Icon.Sizes.SMALL, color: channelId(576).unsafe_rawColors.BLACK });
    const Icon = tmp2(1177).Icon;
    tmp6 = <View style={items2}>{null}</View>;
  }
  return tmp6;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = memoResult1;
export const BlockedStatus = function BlockedStatus() {
  const Icon = native.Icon;
  return <Icon style={closure_8().restricted} source={AssetRegistryDefault2} size={native.Icon.Sizes.EXTRA_SMALL} color={nativeDefault.unsafe_rawColors.RED_400} />;
};
export const IgnoredStatus = function IgnoredStatus() {
  const Icon = native.Icon;
  return <Icon style={closure_8().restricted} source={AssetRegistryDefault} size={native.Icon.Sizes.EXTRA_SMALL} />;
};
