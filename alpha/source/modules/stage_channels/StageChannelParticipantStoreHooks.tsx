// Module ID: 6759
// Function ID: 6760
// Name: StageChannelParticipantStoreHooks
// Dependencies: [32, 6707, 504, 6760, 6753, 2]
// Exports: useActualStageSpeakerCount, useSortedRequestToSpeakParticipants, useStageParticipants, useStageParticipantsCount

// Module 6759 (StageChannelParticipantStoreHooks)
import StageChannelParticipants from "StageChannelParticipants" /* 6753 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6707 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantStoreHooks.tsx");

export function useStageParticipants(id, SPEAKER) {
  _require = id;
  dependencyMap = SPEAKER;
  let items = [StageChannelParticipantStore];
  const items1 = [id, SPEAKER];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [StageChannelParticipantStore.getMutableParticipants(id, SPEAKER), StageChannelParticipantStore.getParticipantsVersion(id)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}
export function useStageParticipantsCount(id, AUDIENCE) {
  _require = id;
  dependencyMap = AUDIENCE;
  const items = [StageChannelParticipantStore];
  const items1 = [id, AUDIENCE];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => StageChannelParticipantStore.getParticipantCount(id, AUDIENCE), items1);
}
export function useSortedRequestToSpeakParticipants(id) {
  _require = id;
  let items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [StageChannelParticipantStore.getMutableRequestToSpeakParticipants(id), StageChannelParticipantStore.getRequestToSpeakParticipantsVersion(id)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
}
export function useActualStageSpeakerCount(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
    return mutableParticipants.filter((type) => type.type === id(closure_1_1[4]).StageChannelParticipantTypes.VOICE).length;
  }, items1);
}
