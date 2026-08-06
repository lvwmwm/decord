// Module ID: 6880
// Function ID: 6881
// Name: getSortValueForMember
// Dependencies: [6878, 6877, 2]
// Exports: getSortValueForMember

// Module 6880 (getSortValueForMember)
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/SortUtils.tsx");

export const getSortValueForMember = function getSortValueForMember(joinedAt, ORDER_BY_UNSPECIFIED) {
  const joinedAtTimestamp = require(6878) /* getJoinedAtDateFormatter */.getJoinedAtTimestamp(joinedAt.joinedAt);
  if (require(6877) /* result */.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC === ORDER_BY_UNSPECIFIED) {
    return joinedAtTimestamp;
  } else if (tmp(6877).OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC === ORDER_BY_UNSPECIFIED) {
    return -joinedAtTimestamp;
  } else if (tmp(6877).OrderBy.ORDER_BY_USER_ID_ASC === ORDER_BY_UNSPECIFIED) {
    const _parseInt2 = parseInt;
    return parseInt(joinedAt.userId);
  } else if (tmp(6877).OrderBy.ORDER_BY_USER_ID_DESC === ORDER_BY_UNSPECIFIED) {
    const _parseInt = parseInt;
    return -parseInt(joinedAt.userId);
  } else {
    return -joinedAtTimestamp;
  }
  const obj = require(6878) /* getJoinedAtDateFormatter */;
};
