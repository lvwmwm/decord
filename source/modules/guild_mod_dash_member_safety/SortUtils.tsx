// Module ID: 6727
// Function ID: 52388
// Name: getSortValueForMember
// Dependencies: []
// Exports: getSortValueForMember

// Module 6727 (getSortValueForMember)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/guild_mod_dash_member_safety/SortUtils.tsx");

export const getSortValueForMember = function getSortValueForMember(joinedAt, ORDER_BY_UNSPECIFIED) {
  const joinedAtTimestamp = require(dependencyMap[0]).getJoinedAtTimestamp(joinedAt.joinedAt);
  if (require(dependencyMap[1]).OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC === ORDER_BY_UNSPECIFIED) {
    return joinedAtTimestamp;
  } else if (require(dependencyMap[1]).OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC === ORDER_BY_UNSPECIFIED) {
    return -joinedAtTimestamp;
  } else if (require(dependencyMap[1]).OrderBy.ORDER_BY_USER_ID_ASC === ORDER_BY_UNSPECIFIED) {
    const _parseInt2 = parseInt;
    return parseInt(joinedAt.userId);
  } else if (require(dependencyMap[1]).OrderBy.ORDER_BY_USER_ID_DESC === ORDER_BY_UNSPECIFIED) {
    const _parseInt = parseInt;
    return -parseInt(joinedAt.userId);
  } else {
    return -joinedAtTimestamp;
  }
  const obj = require(dependencyMap[0]);
};
