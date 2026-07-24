// Module ID: 6729
// Function ID: 52449
// Name: result
// Dependencies: [664, 2]
// Exports: createMemberSearchCursor

// Module 6729 (result)
const result = 2 * require("set").Millis.DAY;
const result1 = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyElasticSearchQueryTypes.tsx");

export const UNUSUAL_DM_COMPARISON_DELTA = result;
export const createMemberSearchCursor = function createMemberSearchCursor(joinedAt) {
  joinedAt = joinedAt.joinedAt;
  let tmp2 = null;
  if (null != joinedAt) {
    const obj = {};
    const _Date = Date;
    const date = new Date(joinedAt);
    obj.guild_joined_at = date.getTime();
    obj.user_id = tmp;
    tmp2 = obj;
  }
  return tmp2;
};
export const OrderBy = { ORDER_BY_UNSPECIFIED: 0, [0]: "ORDER_BY_UNSPECIFIED", ORDER_BY_GUILD_JOINED_AT_DESC: 1, [1]: "ORDER_BY_GUILD_JOINED_AT_DESC", ORDER_BY_GUILD_JOINED_AT_ASC: 2, [2]: "ORDER_BY_GUILD_JOINED_AT_ASC", ORDER_BY_USER_ID_DESC: 3, [3]: "ORDER_BY_USER_ID_DESC", ORDER_BY_USER_ID_ASC: 4, [4]: "ORDER_BY_USER_ID_ASC" };
