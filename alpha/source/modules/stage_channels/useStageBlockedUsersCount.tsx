// Module ID: 8175
// Function ID: 8176
// Name: useStageBlockedUsersCount
// Dependencies: [6713, 504, 6759, 2]
// Exports: getStageBlockedUsersCount, getStageIgnoredUsersCount, useStageBlockedUsers, useStageBlockedUsersCount, useStageIgnoredUsers, useStageIgnoredUsersCount

// Module 8175 (useStageBlockedUsersCount)
import StageChannelParticipants from "StageChannelParticipants" /* 6759 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6713 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/stage_channels/useStageBlockedUsersCount.tsx");

export function useStageBlockedUsersCount(id1) {
  _require = id1;
  const items = [StageChannelParticipantStore];
  const items1 = [id1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let num = 0;
    if (null != id1) {
      num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
    }
    return num;
  }, items1);
}
export function useStageIgnoredUsersCount(id2) {
  _require = id2;
  const items = [StageChannelParticipantStore];
  const items1 = [id2];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let num = 0;
    if (null != id2) {
      num = StageChannelParticipantStore.getParticipantCount(tmp, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
    }
    return num;
  }, items1);
}
export function getStageBlockedUsersCount(id) {
  let num = StageChannelParticipantStore.getParticipantCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED);
  if (num == null) {
    num = 0;
  }
  return num;
}
export function getStageIgnoredUsersCount(id) {
  let num = StageChannelParticipantStore.getParticipantCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED);
  if (num == null) {
    num = 0;
  }
  return num;
}
export function useStageBlockedUsers(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.BLOCKED), items1);
}
export function useStageIgnoredUsers(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.IGNORED), items1);
}
