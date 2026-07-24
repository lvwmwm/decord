// Module ID: 10807
// Function ID: 83930
// Name: VoiceStatus
// Dependencies: [31, 27, 4177, 4146, 4954, 33, 4130, 689, 566, 10766, 10621, 10622, 1273, 10808, 10809, 8542, 2]
// Exports: BlockedStatus, IgnoredStatus

// Module 10807 (VoiceStatus)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { position: "absolute", top: 4, left: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj.voiceStatusWrapper = obj;
_createForOfIteratorHelperLoose = { position: "absolute", top: 4, right: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj.moderatorStatusWrapper = _createForOfIteratorHelperLoose;
obj.restricted = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_4 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj2 = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_4 };
const memoResult = importAllResult.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  let obj = userId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.isLocalMute(userId), items1);
  const tmp = callback();
  const items2 = [closure_5];
  const items3 = [channelId, userId];
  const stateFromStores1 = userId(566).useStateFromStores(items2, () => outer1_5.getVoiceStateForChannel(channelId, userId), items3);
  let isVoiceMutedResult;
  if (null != stateFromStores1) {
    isVoiceMutedResult = stateFromStores1.isVoiceMuted();
  }
  let isVoiceDeafenedResult;
  if (null != stateFromStores1) {
    isVoiceDeafenedResult = stateFromStores1.isVoiceDeafened();
  }
  if (stateFromStores) {
    let tmp7 = channelId(10766);
    let flag = true;
  } else if (tmp6) {
    tmp7 = channelId(10621);
    flag = false;
  } else {
    flag = false;
    if (tmp4) {
      tmp7 = channelId(10622);
      flag = false;
    }
  }
  let tmp14 = null;
  if (null != tmp7) {
    obj = {};
    const items4 = [tmp.voiceStatusWrapper, userId.style];
    obj.style = items4;
    obj = { source: tmp7, size: userId(1273).Icon.Sizes.SMALL, color: channelId(689).unsafe_rawColors.BLACK, disableColor: flag };
    obj.children = jsx(userId(1273).Icon, { source: tmp7, size: userId(1273).Icon.Sizes.SMALL, color: channelId(689).unsafe_rawColors.BLACK, disableColor: flag });
    tmp14 = <View source={tmp7} size={userId(1273).Icon.Sizes.SMALL} color={channelId(689).unsafe_rawColors.BLACK} disableColor={flag} />;
  }
  return tmp14;
});
const memoResult1 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  let obj = userId(566);
  const items = [closure_6];
  const items1 = [channelId, userId];
  let tmp2;
  if (obj.useStateFromStores(items, () => outer1_6.isModerator(userId, channelId), items1)) {
    tmp2 = channelId(10808);
  }
  let tmp5 = null;
  if (null != tmp2) {
    obj = {};
    const items2 = [tmp.moderatorStatusWrapper, userId.style];
    obj.style = items2;
    obj = { source: tmp2, size: userId(1273).Icon.Sizes.SMALL, color: channelId(689).unsafe_rawColors.BLACK };
    obj.children = jsx(userId(1273).Icon, { source: tmp2, size: userId(1273).Icon.Sizes.SMALL, color: channelId(689).unsafe_rawColors.BLACK });
    tmp5 = <View source={tmp2} size={userId(1273).Icon.Sizes.SMALL} color={channelId(689).unsafe_rawColors.BLACK} />;
  }
  return tmp5;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = memoResult1;
export const BlockedStatus = function BlockedStatus() {
  const obj = { style: callback().restricted, source: importDefault(10809), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL, color: importDefault(689).unsafe_rawColors.RED_400 };
  return jsx(require(1273) /* Button */.Icon, { style: callback().restricted, source: importDefault(10809), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL, color: importDefault(689).unsafe_rawColors.RED_400 });
};
export const IgnoredStatus = function IgnoredStatus() {
  const obj = { style: callback().restricted, source: importDefault(8542), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL };
  return jsx(require(1273) /* Button */.Icon, { style: callback().restricted, source: importDefault(8542), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL });
};
