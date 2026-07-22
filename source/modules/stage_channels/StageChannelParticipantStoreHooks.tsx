// Module ID: 4960
// Function ID: 42643
// Name: useStageParticipants
// Dependencies: []
// Exports: useActualStageSpeakerCount, useSortedRequestToSpeakParticipants, useStageParticipants, useStageParticipantsCount

// Module 4960 (useStageParticipants)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/stage_channels/StageChannelParticipantStoreHooks.tsx");

export const useStageParticipants = function useStageParticipants(id, SPEAKER) {
  SPEAKER = id;
  const dependencyMap = SPEAKER;
  const items = [closure_3];
  const items1 = [id, SPEAKER];
  return callback(SPEAKER(dependencyMap[2]).useStateFromStores(items, () => {
    const items = [store.getMutableParticipants(arg0, arg1), store.getParticipantsVersion(arg0)];
    return items;
  }, items1, SPEAKER(dependencyMap[3]).isVersionEqual), 1)[0];
};
export const useStageParticipantsCount = function useStageParticipantsCount(id, AUDIENCE) {
  AUDIENCE = id;
  const dependencyMap = AUDIENCE;
  const items = [closure_3];
  const items1 = [id, AUDIENCE];
  return AUDIENCE(dependencyMap[2]).useStateFromStores(items, () => participantCount.getParticipantCount(arg0, arg1), items1);
};
export const useSortedRequestToSpeakParticipants = function useSortedRequestToSpeakParticipants(id) {
  const arg1 = id;
  const items = [closure_3];
  const items1 = [id];
  return callback(arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const items = [store.getMutableRequestToSpeakParticipants(arg0), store.getRequestToSpeakParticipantsVersion(arg0)];
    return items;
  }, items1, arg1(dependencyMap[3]).isVersionEqual), 1)[0];
};
export const useActualStageSpeakerCount = function useActualStageSpeakerCount(id) {
  const arg1 = id;
  const items = [closure_3];
  const items1 = [id];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const mutableParticipants = mutableParticipants.getMutableParticipants(arg0, arg0(closure_1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return mutableParticipants.filter((type) => type.type === callback(closure_1[4]).StageChannelParticipantTypes.VOICE).length;
  }, items1);
};
