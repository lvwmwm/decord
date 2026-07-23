// Module ID: 14850
// Function ID: 113299
// Name: voiceStateHasBlockedUsers
// Dependencies: [3767, 1327, 22, 2]
// Exports: filterBlockedUsersFromVoiceStates, filterOutBlockedOrIgnoredUserIds, filterOutBlockedOrIgnoredUsers, filterOutStreamsByBlockedOwner, hasBlockedOrIgnoredUserIds

// Module 14850 (voiceStateHasBlockedUsers)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function voiceStateHasBlockedUsers(userId) {
  return blockedOrIgnored.isBlockedOrIgnored(userId.userId);
}
const result = require("apply").fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export const filterOutBlockedOrIgnoredUsers = function filterOutBlockedOrIgnoredUsers(mapped, outer1_5) {
  let closure_0 = outer1_5;
  const found = mapped.filter((channel) => outer1_5(outer1_2[1]).isNotNullish(channel));
  return found.filter((id) => {
    if (null != outer1_5) {
      let hasItem = outer1_5.includes(id.id);
    } else {
      hasItem = outer1_3.isBlockedOrIgnored(id.id);
    }
    return !hasItem;
  });
};
export const filterOutBlockedOrIgnoredUserIds = function filterOutBlockedOrIgnoredUserIds(arr) {
  let closure_0 = arg1;
  return arr.filter((arg0) => {
    if (null != closure_0) {
      let hasItem = closure_0.includes(arg0);
    } else {
      hasItem = outer1_3.isBlockedOrIgnored(arg0);
    }
    return !hasItem;
  });
};
export const filterOutStreamsByBlockedOwner = function filterOutStreamsByBlockedOwner(allApplicationStreams) {
  return allApplicationStreams.filter((ownerId) => !outer1_3.isBlockedOrIgnored(ownerId.ownerId));
};
export const hasBlockedOrIgnoredUserIds = function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs) {
  let closure_0 = blockedOrIgnoredIDs;
  return items.some((arg0) => {
    if (null != blockedOrIgnoredIDs) {
      let hasItem = blockedOrIgnoredIDs.includes(arg0);
    } else {
      hasItem = outer1_3.isBlockedOrIgnored(arg0);
    }
    return hasItem;
  });
};
export { voiceStateHasBlockedUsers };
export const filterBlockedUsersFromVoiceStates = function filterBlockedUsersFromVoiceStates(voiceStates) {
  const found = importDefault(22)(voiceStates).filter((arg0) => !outer1_4(arg0));
  const arr = importDefault(22)(voiceStates);
  return found.keyBy("userId").value();
};
