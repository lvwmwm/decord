// Module ID: 10767
// Function ID: 83665
// Name: VoiceStatus
// Dependencies: []
// Exports: BlockedStatus, IgnoredStatus

// Module 10767 (VoiceStatus)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.WHITE, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.voiceStatusWrapper = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.WHITE, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.moderatorStatusWrapper = obj1;
obj.restricted = { marginEnd: importDefault(dependencyMap[7]).space.PX_4 };
let closure_8 = obj1.createStyles(obj);
const obj2 = { marginEnd: importDefault(dependencyMap[7]).space.PX_4 };
const memoResult = importAllResult.memo((userId) => {
  userId = userId.userId;
  const arg1 = userId;
  const channelId = userId.channelId;
  const importDefault = channelId;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => localMute.isLocalMute(userId), items1);
  const tmp = callback();
  const items2 = [closure_5];
  const items3 = [channelId, userId];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items2, () => voiceStateForChannel.getVoiceStateForChannel(channelId, userId), items3);
  let isVoiceMutedResult;
  if (null != stateFromStores1) {
    isVoiceMutedResult = stateFromStores1.isVoiceMuted();
  }
  let isVoiceDeafenedResult;
  if (null != stateFromStores1) {
    isVoiceDeafenedResult = stateFromStores1.isVoiceDeafened();
  }
  if (stateFromStores) {
    let tmp7 = importDefault(dependencyMap[9]);
    let flag = true;
  } else if (tmp6) {
    tmp7 = importDefault(dependencyMap[10]);
    flag = false;
  } else {
    flag = false;
    if (tmp4) {
      tmp7 = importDefault(dependencyMap[11]);
      flag = false;
    }
  }
  let tmp14 = null;
  if (null != tmp7) {
    obj = {};
    const items4 = [tmp.voiceStatusWrapper, userId.style];
    obj.style = items4;
    obj = { source: tmp7, size: arg1(dependencyMap[12]).Icon.Sizes.SMALL, color: importDefault(dependencyMap[7]).unsafe_rawColors.BLACK, disableColor: flag };
    obj.children = jsx(arg1(dependencyMap[12]).Icon, obj);
    tmp14 = <View {...obj} />;
  }
  return tmp14;
});
const memoResult1 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const arg1 = userId;
  const channelId = userId.channelId;
  const importDefault = channelId;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const items1 = [channelId, userId];
  let tmp2;
  if (obj.useStateFromStores(items, () => moderator.isModerator(userId, channelId), items1)) {
    tmp2 = importDefault(dependencyMap[13]);
  }
  let tmp5 = null;
  if (null != tmp2) {
    obj = {};
    const items2 = [tmp.moderatorStatusWrapper, userId.style];
    obj.style = items2;
    obj = { source: tmp2, size: arg1(dependencyMap[12]).Icon.Sizes.SMALL, color: importDefault(dependencyMap[7]).unsafe_rawColors.BLACK };
    obj.children = jsx(arg1(dependencyMap[12]).Icon, obj);
    tmp5 = <View {...obj} />;
  }
  return tmp5;
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = memoResult1;
export const BlockedStatus = function BlockedStatus() {
  const obj = { style: callback().restricted, source: importDefault(dependencyMap[14]), size: arg1(dependencyMap[12]).Icon.Sizes.EXTRA_SMALL, color: importDefault(dependencyMap[7]).unsafe_rawColors.RED_400 };
  return jsx(arg1(dependencyMap[12]).Icon, obj);
};
export const IgnoredStatus = function IgnoredStatus() {
  const obj = { style: callback().restricted, source: importDefault(dependencyMap[15]), size: arg1(dependencyMap[12]).Icon.Sizes.EXTRA_SMALL };
  return jsx(arg1(dependencyMap[12]).Icon, obj);
};
