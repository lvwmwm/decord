// Module ID: 7580
// Function ID: 60586
// Name: useStageBlockedUsersCount
// Dependencies: []
// Exports: getStageBlockedUsersCount, getStageIgnoredUsersCount, useStageBlockedUsers, useStageBlockedUsersCount, useStageIgnoredUsers, useStageIgnoredUsersCount

// Module 7580 (useStageBlockedUsersCount)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export const useStageBlockedUsersCount = function useStageBlockedUsersCount(id) {
  const arg1 = id;
  const items = [closure_2];
  const items1 = [id];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let num = 0;
    if (null != arg0) {
      num = participantCount.getParticipantCount(arg0, arg0(closure_1[2]).StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
};
export const useStageIgnoredUsersCount = function useStageIgnoredUsersCount(id1) {
  const arg1 = id1;
  const items = [closure_2];
  const items1 = [id1];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let num = 0;
    if (null != arg0) {
      num = participantCount.getParticipantCount(arg0, arg0(closure_1[2]).StageChannelParticipantNamedIndex.IGNORED);
    }
    return num;
  }, items1);
};
export const getStageBlockedUsersCount = function getStageBlockedUsersCount(id) {
  const participantCount = store.getParticipantCount(id, arg1(dependencyMap[2]).StageChannelParticipantNamedIndex.BLOCKED);
  let num = 0;
  if (null != participantCount) {
    num = participantCount;
  }
  return num;
};
export const getStageIgnoredUsersCount = function getStageIgnoredUsersCount(id) {
  const participantCount = store.getParticipantCount(id, arg1(dependencyMap[2]).StageChannelParticipantNamedIndex.IGNORED);
  let num = 0;
  if (null != participantCount) {
    num = participantCount;
  }
  return num;
};
export const useStageBlockedUsers = function useStageBlockedUsers(id) {
  const arg1 = id;
  const items = [closure_2];
  const items1 = [id];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => mutableParticipants.getMutableParticipants(arg0, arg0(closure_1[2]).StageChannelParticipantNamedIndex.BLOCKED), items1);
};
export const useStageIgnoredUsers = function useStageIgnoredUsers(id) {
  const arg1 = id;
  const items = [closure_2];
  const items1 = [id];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => mutableParticipants.getMutableParticipants(arg0, arg0(closure_1[2]).StageChannelParticipantNamedIndex.IGNORED), items1);
};
