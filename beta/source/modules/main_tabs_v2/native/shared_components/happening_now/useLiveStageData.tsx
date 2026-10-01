// Module ID: 15704
// Function ID: 15705
// Name: useLiveStageData
// Dependencies: [19, 5730, 2045, 563, 5737, 12, 2]
// Exports: useLiveStageData

// Module 15704 (useLiveStageData)
import _modDef12 from "module_12" /* 12 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5737 */;
import react from "react" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5730 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useLiveStageData.tsx");

export const useLiveStageData = function useLiveStageData(stage) {
  let memo1;
  let stateFromStoresArray1;
  _require = stage;
  let obj = require("useStateFromStores");
  let items = [memo1];
  const items1 = [stage.channel_id];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stage.channel_id, StageChannelParticipants.StageChannelParticipantNamedIndex.FRIEND);
    const found = mutableParticipants.filter((type) => type.type === stage(stateFromStoresArray1[4]).StageChannelParticipantTypes.VOICE);
    return found.map((user) => user.user);
  }, items1);
  const items2 = [memo1];
  const items3 = [stage.channel_id];
  const obj2 = require("useStateFromStores");
  stateFromStoresArray1 = obj2.useStateFromStoresArray(items2, () => {
    const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stage.channel_id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
    const found = mutableParticipants.filter((type) => type.type === stage(stateFromStoresArray1[4]).StageChannelParticipantTypes.VOICE);
    return found.map((user) => user.user);
  }, items3);
  const items4 = [memo1];
  const items5 = [stage.channel_id];
  const obj3 = require("useStateFromStores");
  const stateFromStoresArray2 = obj3.useStateFromStoresArray(items4, () => {
    const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stage.channel_id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
    const found = mutableParticipants.filter((type) => type.type === stage(stateFromStoresArray1[4]).StageChannelParticipantTypes.VOICE);
    return found.map((user) => user.user);
  }, items5);
  const items6 = [stateFromStoresArray, stateFromStoresArray1];
  const items7 = [stateFromStoresArray, stateFromStoresArray1];
  const memo = stateFromStoresArray2.useMemo(() => {
    const items = [...stateFromStoresArray1];
    const obj = _modDef12;
    return obj.uniqBy(items, (id) => id.id);
  }, items6);
  memo1 = stateFromStoresArray2.useMemo(() => {
    const obj = _modDef12;
    return obj.differenceBy(stateFromStoresArray, stateFromStoresArray1, "id");
  }, items7);
  const items8 = [stateFromStoresArray, stateFromStoresArray2];
  const memo2 = stateFromStoresArray2.useMemo(() => {
    const obj = _modDef12;
    return obj.differenceBy(stateFromStoresArray2, stateFromStoresArray, "id");
  }, items8);
  const items9 = [memo1, memo2];
  const memo3 = stateFromStoresArray2.useMemo(() => {
    const items = [...memo2];
    return items;
  }, items9);
  const items10 = [memo2];
  const items11 = [stage.channel_id];
  const obj4 = require("useStateFromStores");
  const obj5 = { friends: stateFromStoresArray, speakers: stateFromStoresArray1, audienceCount: stateFromStoresArray2.length, users: memo, audiencePrefixedFriends: memo3, audienceFriends: memo1, channel: obj4.useStateFromStores(items10, () => ChannelStore.getChannel(stage.channel_id), items11) };
  return obj5;
};
