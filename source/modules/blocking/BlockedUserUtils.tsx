// Module ID: 14726
// Function ID: 111088
// Name: voiceStateHasBlockedUsers
// Dependencies: []
// Exports: filterBlockedUsersFromVoiceStates, filterOutBlockedOrIgnoredUserIds, filterOutBlockedOrIgnoredUsers, filterOutStreamsByBlockedOwner, hasBlockedOrIgnoredUserIds

// Module 14726 (voiceStateHasBlockedUsers)
function voiceStateHasBlockedUsers(userId) {
  return blockedOrIgnored.isBlockedOrIgnored(userId.userId);
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export const filterOutBlockedOrIgnoredUsers = function filterOutBlockedOrIgnoredUsers(mapped, closure_4) {
  const found = mapped.filter((channel) => arg1(closure_2[1]).isNotNullish(channel));
  return found.filter((id) => {
    if (null != arg1) {
      let hasItem = arg1.includes(id.id);
    } else {
      hasItem = blockedOrIgnored.isBlockedOrIgnored(id.id);
    }
    return !hasItem;
  });
};
export const filterOutBlockedOrIgnoredUserIds = function filterOutBlockedOrIgnoredUserIds(arr) {
  return arr.filter((arg0) => {
    if (null != arg1) {
      let hasItem = arg1.includes(arg0);
    } else {
      hasItem = blockedOrIgnored.isBlockedOrIgnored(arg0);
    }
    return !hasItem;
  });
};
export const filterOutStreamsByBlockedOwner = function filterOutStreamsByBlockedOwner(allApplicationStreams) {
  return allApplicationStreams.filter((ownerId) => !blockedOrIgnored.isBlockedOrIgnored(ownerId.ownerId));
};
export const hasBlockedOrIgnoredUserIds = function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs) {
  return items.some((arg0) => {
    if (null != arg1) {
      let hasItem = arg1.includes(arg0);
    } else {
      hasItem = blockedOrIgnored.isBlockedOrIgnored(arg0);
    }
    return hasItem;
  });
};
export { voiceStateHasBlockedUsers };
export const filterBlockedUsersFromVoiceStates = function filterBlockedUsersFromVoiceStates(voiceStates) {
  const found = importDefault(dependencyMap[2])(voiceStates).filter((arg0) => !callback(arg0));
  const arr = importDefault(dependencyMap[2])(voiceStates);
  return found.keyBy("userId").value();
};
