// Module ID: 5738
// Function ID: 49631
// Name: getSortValueForMember
// Dependencies: [5736, 5735, 2]
// Exports: getSortValueForMember

// Module 5738 (getSortValueForMember)
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/SortUtils.tsx");

export const getSortValueForMember = function getSortValueForMember(joinedAt, ORDER_BY_UNSPECIFIED) {
  const joinedAtTimestamp = require(5736) /* getJoinedAtDateFormatter */.getJoinedAtTimestamp(joinedAt.joinedAt);
  if (require(5735) /* result */.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC === ORDER_BY_UNSPECIFIED) {
    return joinedAtTimestamp;
  } else if (require(5735) /* result */.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC === ORDER_BY_UNSPECIFIED) {
    return -joinedAtTimestamp;
  } else if (require(5735) /* result */.OrderBy.ORDER_BY_USER_ID_ASC === ORDER_BY_UNSPECIFIED) {
    const _parseInt2 = parseInt;
    return parseInt(joinedAt.userId);
  } else if (require(5735) /* result */.OrderBy.ORDER_BY_USER_ID_DESC === ORDER_BY_UNSPECIFIED) {
    const _parseInt = parseInt;
    return -parseInt(joinedAt.userId);
  } else {
    return -joinedAtTimestamp;
  }
  const obj = require(5736) /* getJoinedAtDateFormatter */;
};
