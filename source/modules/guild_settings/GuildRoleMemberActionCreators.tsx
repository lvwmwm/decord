// Module ID: 5150
// Function ID: 44917
// Name: _fetchMemberCountsFromBackend
// Dependencies: [5, 5149, 653, 686, 507, 1362, 5048, 2]
// Exports: fetchMemberCounts, requestMembersForRole

// Module 5150 (_fetchMemberCountsFromBackend)
import priv from "priv";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import importDefaultResult from "priv";

const require = arg1;
async function _fetchMemberCountsFromBackend(arg0, arg1) {
  let obj = outer2_1(outer2_2[3]);
  obj = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: arg0 };
  obj.dispatch(obj);
  const HTTP = outer2_0(outer2_2[4]).HTTP;
  obj = { url: outer2_5.GUILD_ROLE_MEMBER_COUNTS(arg0), rejectWithError: true };
  const obj4 = outer2_1(outer2_2[3]);
  obj4.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: arg0, roleMemberCount: yield HTTP.get(obj).body });
}
async function _fetchMemberCounts(arg0, arg1) {
  if (outer2_4.shouldFetch(arg0)) {
    yield (function fetchMemberCountsFromBackend(fetchState) {
      return outer3_7(...arguments);
    })(arg0);
  }
}
importDefaultResult = new importDefaultResult({ maxAge: 10000 });
let result = require("ME").fileFinishedImporting("modules/guild_settings/GuildRoleMemberActionCreators.tsx");

export const fetchMemberCounts = function fetchMemberCounts(closure_0) {
  return _fetchMemberCounts(...arguments);
};
export const requestMembersForRole = function requestMembersForRole(closure_0, closure_1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const combined = "" + closure_0 + "-" + closure_1;
  if (flag) {
    if (null != importDefaultResult.get(combined)) {
      let resolved = Promise.resolve(null);
    }
    return resolved;
  }
  const result = importDefaultResult.set(combined, true);
  resolved = (function doRequestMembersForRole(closure_0, closure_1) {
    const HTTP = outer1_0(outer1_2[4]).HTTP;
    const obj = { url: outer1_5.GUILD_ROLE_MEMBER_IDS(closure_0, closure_1), rejectWithError: outer1_0(outer1_2[4]).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      const membersById = outer2_1(outer2_2[6]).requestMembersById(closure_0, body.body, false);
      return body.body.length;
    });
  })(closure_0, closure_1);
};
