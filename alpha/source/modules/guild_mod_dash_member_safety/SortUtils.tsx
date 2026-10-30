// Module ID: 7672
// Function ID: 7673
// Name: SortUtils
// Dependencies: [7670, 7669, 2]
// Exports: getSortValueForMember

// Module 7672 (SortUtils)
import MemberSafetyElasticSearchQueryTypes from "MemberSafetyElasticSearchQueryTypes" /* 7669 */;
import guild_mod_dash_member_safety_DateUtils from "guild_mod_dash_member_safety/DateUtils" /* 7670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/SortUtils.tsx");

export function getSortValueForMember(joinedAt, ORDER_BY_UNSPECIFIED) {
  const obj = guild_mod_dash_member_safety_DateUtils;
  const joinedAtTimestamp = obj.getJoinedAtTimestamp(joinedAt.joinedAt);
  if (MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC === ORDER_BY_UNSPECIFIED) {
    return joinedAtTimestamp;
  } else if (MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC === ORDER_BY_UNSPECIFIED) {
    return -joinedAtTimestamp;
  } else if (MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_USER_ID_ASC === ORDER_BY_UNSPECIFIED) {
    const _parseInt2 = parseInt;
    return parseInt(joinedAt.userId);
  } else if (MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_USER_ID_DESC === ORDER_BY_UNSPECIFIED) {
    const _parseInt = parseInt;
    return -parseInt(joinedAt.userId);
  } else {
    return -joinedAtTimestamp;
  }
}
