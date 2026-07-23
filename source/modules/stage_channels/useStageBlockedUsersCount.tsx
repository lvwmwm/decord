// Module ID: 7587
// Function ID: 60645
// Name: useStageBlockedUsersCount
// Dependencies: [4951, 566, 4957, 2]
// Exports: getStageBlockedUsersCount, getStageIgnoredUsersCount, useStageBlockedUsers, useStageBlockedUsersCount, useStageIgnoredUsers, useStageIgnoredUsersCount

// Module 7587 (useStageBlockedUsersCount)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("sortKey").fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export const useStageBlockedUsersCount = function useStageBlockedUsersCount(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    let num = 0;
    if (null != id) {
      num = outer1_2.getParticipantCount(id, id(outer1_1[2]).StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
};
export const useStageIgnoredUsersCount = function useStageIgnoredUsersCount(id1) {
  const _require = id1;
  const items = [_isNativeReflectConstruct];
  const items1 = [id1];
  return _require(566).useStateFromStores(items, () => {
    let num = 0;
    if (null != id1) {
      num = outer1_2.getParticipantCount(id1, id1(outer1_1[2]).StageChannelParticipantNamedIndex.IGNORED);
    }
    return num;
  }, items1);
};
export const getStageBlockedUsersCount = function getStageBlockedUsersCount(id) {
  const participantCount = store.getParticipantCount(id, require(4957) /* sortKey */.StageChannelParticipantNamedIndex.BLOCKED);
  let num = 0;
  if (null != participantCount) {
    num = participantCount;
  }
  return num;
};
export const getStageIgnoredUsersCount = function getStageIgnoredUsersCount(id) {
  const participantCount = store.getParticipantCount(id, require(4957) /* sortKey */.StageChannelParticipantNamedIndex.IGNORED);
  let num = 0;
  if (null != participantCount) {
    num = participantCount;
  }
  return num;
};
export const useStageBlockedUsers = function useStageBlockedUsers(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => outer1_2.getMutableParticipants(id, id(outer1_1[2]).StageChannelParticipantNamedIndex.BLOCKED), items1);
};
export const useStageIgnoredUsers = function useStageIgnoredUsers(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => outer1_2.getMutableParticipants(id, id(outer1_1[2]).StageChannelParticipantNamedIndex.IGNORED), items1);
};
