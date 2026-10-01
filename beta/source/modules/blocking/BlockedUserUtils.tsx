// Module ID: 13254
// Function ID: 13255
// Name: BlockedUserUtils
// Dependencies: [4479, 1370, 12, 2]
// Exports: filterBlockedUsersFromVoiceStates, filterOutBlockedOrIgnoredUserIds, filterOutBlockedOrIgnoredUsers, filterOutStreamsByBlockedOwner, hasBlockedOrIgnoredUserIds, voiceStateHasBlockedUsers

// Module 13254 (BlockedUserUtils)
import _modDef12 from "module_12" /* 12 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import size from "module_2" /* 2 */;

let id;

const result = size.fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export const filterOutBlockedOrIgnoredUsers = function filterOutBlockedOrIgnoredUsers(mapped, arg1) {
  let closure_0 = arg1;
  const found = mapped.filter((item) => {
    const obj = closure_0(dependencyMap[1]);
    return obj.isNotNullish(item);
  });
  return found.filter((id) => {
    let hasItem;
    id = id.id;
    const obj = closure_0;
    if (null != closure_0) {
      hasItem = obj.has(id);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
};
export const filterOutBlockedOrIgnoredUserIds = function filterOutBlockedOrIgnoredUserIds(arr, arg1) {
  let closure_0 = arg1;
  return arr.filter((item) => {
    let hasItem;
    const obj = closure_0;
    if (null != closure_0) {
      hasItem = obj.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return !hasItem;
  });
};
export const filterOutStreamsByBlockedOwner = function filterOutStreamsByBlockedOwner(allApplicationStreams) {
  let blockedOrIgnored;
  return allApplicationStreams.filter((ownerId) => !blockedOrIgnored.isBlockedOrIgnored(ownerId.ownerId));
};
export const hasBlockedOrIgnoredUserIds = function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs) {
  let closure_0 = blockedOrIgnoredIDs;
  return items.some((item) => {
    let hasItem;
    const obj = blockedOrIgnoredIDs;
    if (null != blockedOrIgnoredIDs) {
      hasItem = obj.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return hasItem;
  });
};
export const voiceStateHasBlockedUsers = function voiceStateHasBlockedUsers(userId) {
  return RelationshipStore.isBlockedOrIgnored(userId.userId);
};
export const filterBlockedUsersFromVoiceStates = function filterBlockedUsersFromVoiceStates(voiceStates) {
  let blockedOrIgnored;
  const arr = _modDef12(voiceStates);
  const found = arr.filter((userId) => !blockedOrIgnored.isBlockedOrIgnored(userId.userId));
  const iter = found.keyBy("userId");
  return iter.value();
};
