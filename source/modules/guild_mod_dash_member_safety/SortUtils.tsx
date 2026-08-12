// Module ID: 7001
// Function ID: 7002
// Name: getSortValueForMember
// Dependencies: [6999, 6998, 2]
// Exports: getSortValueForMember

// Module 7001 (getSortValueForMember)
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/SortUtils.tsx");

export const getSortValueForMember = function getSortValueForMember(joinedAt, ORDER_BY_UNSPECIFIED) {
  const joinedAtTimestamp = require(6999) /* getJoinedAtDateFormatter */.getJoinedAtTimestamp(joinedAt.joinedAt);
  if (require(6998) /* result */.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC === ORDER_BY_UNSPECIFIED) {
    return joinedAtTimestamp;
  } else if (tmp(6998).OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC === ORDER_BY_UNSPECIFIED) {
    return -joinedAtTimestamp;
  } else if (tmp(6998).OrderBy.ORDER_BY_USER_ID_ASC === ORDER_BY_UNSPECIFIED) {
    const _parseInt2 = parseInt;
    return parseInt(joinedAt.userId);
  } else if (tmp(6998).OrderBy.ORDER_BY_USER_ID_DESC === ORDER_BY_UNSPECIFIED) {
    const _parseInt = parseInt;
    return -parseInt(joinedAt.userId);
  } else {
    return -joinedAtTimestamp;
  }
  const obj = require(6999) /* getJoinedAtDateFormatter */;
};
