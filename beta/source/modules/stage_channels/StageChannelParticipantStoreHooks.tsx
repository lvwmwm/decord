// Module ID: 5743
// Function ID: 5744
// Name: StageChannelParticipantStoreHooks
// Dependencies: [32, 5730, 504, 5744, 5737, 2]
// Exports: useActualStageSpeakerCount, useSortedRequestToSpeakParticipants, useStageParticipants, useStageParticipantsCount

// Module 5743 (StageChannelParticipantStoreHooks)
import StageChannelParticipants from "StageChannelParticipants" /* 5737 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5730 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantStoreHooks.tsx");

export const useStageParticipants = function useStageParticipants(id, SPEAKER) {
  _require = id;
  dependencyMap = SPEAKER;
  let items = [StageChannelParticipantStore];
  const items1 = [id, SPEAKER];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [StageChannelParticipantStore.getMutableParticipants(id, SPEAKER), StageChannelParticipantStore.getParticipantsVersion(id)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useStageParticipantsCount = function useStageParticipantsCount(id, AUDIENCE) {
  _require = id;
  dependencyMap = AUDIENCE;
  const items = [StageChannelParticipantStore];
  const items1 = [id, AUDIENCE];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => StageChannelParticipantStore.getParticipantCount(id, AUDIENCE), items1);
};
export const useSortedRequestToSpeakParticipants = function useSortedRequestToSpeakParticipants(id) {
  _require = id;
  let items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  return _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [StageChannelParticipantStore.getMutableRequestToSpeakParticipants(id), StageChannelParticipantStore.getRequestToSpeakParticipantsVersion(id)];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export const useActualStageSpeakerCount = function useActualStageSpeakerCount(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
    return mutableParticipants.filter((type) => type.type === id(closure_1_1[4]).StageChannelParticipantTypes.VOICE).length;
  }, items1);
};
