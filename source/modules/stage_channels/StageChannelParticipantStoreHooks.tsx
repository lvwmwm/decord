// Module ID: 4963
// Function ID: 42665
// Name: useStageParticipants
// Dependencies: [57, 4951, 566, 4964, 4957, 2]
// Exports: useActualStageSpeakerCount, useSortedRequestToSpeakParticipants, useStageParticipants, useStageParticipantsCount

// Module 4963 (useStageParticipants)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/StageChannelParticipantStoreHooks.tsx");

export const useStageParticipants = function useStageParticipants(id, SPEAKER) {
  const _require = id;
  const dependencyMap = SPEAKER;
  let items = [_isNativeReflectConstruct];
  const items1 = [id, SPEAKER];
  return callback(_require(566).useStateFromStores(items, () => {
    const items = [outer1_3.getMutableParticipants(closure_0, closure_1), outer1_3.getParticipantsVersion(closure_0)];
    return items;
  }, items1, _require(4964).isVersionEqual), 1)[0];
};
export const useStageParticipantsCount = function useStageParticipantsCount(id, AUDIENCE) {
  const _require = id;
  const dependencyMap = AUDIENCE;
  const items = [_isNativeReflectConstruct];
  const items1 = [id, AUDIENCE];
  return _require(566).useStateFromStores(items, () => outer1_3.getParticipantCount(closure_0, closure_1), items1);
};
export const useSortedRequestToSpeakParticipants = function useSortedRequestToSpeakParticipants(id) {
  const _require = id;
  let items = [_isNativeReflectConstruct];
  const items1 = [id];
  return callback(_require(566).useStateFromStores(items, () => {
    const items = [outer1_3.getMutableRequestToSpeakParticipants(closure_0), outer1_3.getRequestToSpeakParticipantsVersion(closure_0)];
    return items;
  }, items1, _require(4964).isVersionEqual), 1)[0];
};
export const useActualStageSpeakerCount = function useActualStageSpeakerCount(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    const mutableParticipants = outer1_3.getMutableParticipants(id, id(outer1_1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return mutableParticipants.filter((type) => type.type === callback(outer2_1[4]).StageChannelParticipantTypes.VOICE).length;
  }, items1);
};
