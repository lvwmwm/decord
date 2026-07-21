// Module ID: 14807
// Function ID: 111610
// Name: useLiveStageData
// Dependencies: []
// Exports: useLiveStageData

// Module 14807 (useLiveStageData)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useLiveStageData.tsx");

export const useLiveStageData = function useLiveStageData(stage) {
  const arg1 = stage;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const items1 = [stage.channel_id];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const mutableParticipants = memo1.getMutableParticipants(arg0.channel_id, arg0(stateFromStoresArray1[4]).StageChannelParticipantNamedIndex.FRIEND);
    const found = mutableParticipants.filter((type) => type.type === callback(closure_2[4]).StageChannelParticipantTypes.VOICE);
    return found.map((user) => user.user);
  }, items1);
  const importDefault = stateFromStoresArray;
  const items2 = [closure_4];
  const items3 = [stage.channel_id];
  const stateFromStoresArray1 = arg1(dependencyMap[3]).useStateFromStoresArray(items2, () => {
    const mutableParticipants = memo1.getMutableParticipants(arg0.channel_id, arg0(stateFromStoresArray1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    const found = mutableParticipants.filter((type) => type.type === callback(closure_2[4]).StageChannelParticipantTypes.VOICE);
    return found.map((user) => user.user);
  }, items3);
  const dependencyMap = stateFromStoresArray1;
  const obj2 = arg1(dependencyMap[3]);
  const items4 = [closure_4];
  const items5 = [stage.channel_id];
  const stateFromStoresArray2 = arg1(dependencyMap[3]).useStateFromStoresArray(items4, () => {
    const mutableParticipants = memo1.getMutableParticipants(arg0.channel_id, arg0(stateFromStoresArray1[4]).StageChannelParticipantNamedIndex.AUDIENCE);
    const found = mutableParticipants.filter((type) => type.type === callback(closure_2[4]).StageChannelParticipantTypes.VOICE);
    return found.map((user) => user.user);
  }, items5);
  const React = stateFromStoresArray2;
  const items6 = [stateFromStoresArray, stateFromStoresArray1];
  const items7 = [stateFromStoresArray, stateFromStoresArray1];
  const memo = React.useMemo(() => {
    const items = [...closure_2];
    return stateFromStoresArray(stateFromStoresArray1[5]).uniqBy(items, (id) => id.id);
  }, items6);
  const memo1 = React.useMemo(() => stateFromStoresArray(stateFromStoresArray1[5]).differenceBy(stateFromStoresArray, stateFromStoresArray1, "id"), items7);
  closure_4 = memo1;
  const items8 = [stateFromStoresArray, stateFromStoresArray2];
  const memo2 = React.useMemo(() => stateFromStoresArray(stateFromStoresArray1[5]).differenceBy(stateFromStoresArray2, stateFromStoresArray, "id"), items8);
  let closure_5 = memo2;
  const items9 = [memo1, memo2];
  const memo3 = React.useMemo(() => {
    const items = [...closure_5];
    return items;
  }, items9);
  const obj3 = arg1(dependencyMap[3]);
  const items10 = [closure_5];
  const items11 = [stage.channel_id];
  obj = { friends: stateFromStoresArray, speakers: stateFromStoresArray1, audienceCount: stateFromStoresArray2.length, users: memo, audiencePrefixedFriends: memo3, audienceFriends: memo1, channel: arg1(dependencyMap[3]).useStateFromStores(items10, () => memo2.getChannel(arg0.channel_id), items11) };
  return obj;
};
