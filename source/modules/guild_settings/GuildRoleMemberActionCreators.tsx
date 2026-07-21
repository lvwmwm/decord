// Module ID: 5417
// Function ID: 46472
// Name: _fetchMemberCountsFromBackend
// Dependencies: []
// Exports: fetchMemberCounts, requestMembersForRole

// Module 5417 (_fetchMemberCountsFromBackend)
async function _fetchMemberCountsFromBackend(guildId, arg1) {
  let obj = callback2(closure_2[3]);
  obj = { type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId };
  obj.dispatch(obj);
  const HTTP = callback(closure_2[4]).HTTP;
  obj = { url: closure_5.GUILD_ROLE_MEMBER_COUNTS(guildId), rejectWithError: true };
  const obj4 = callback2(closure_2[3]);
  obj4.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId, roleMemberCount: yield HTTP.get(obj).body });
}
async function _fetchMemberCounts(fetchState, arg1) {
  if (closure_4.shouldFetch(fetchState)) {
    yield function fetchMemberCountsFromBackend(fetchState) {
      return callback(...arguments);
    }(fetchState);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult({ maxAge: 10000 });
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_settings/GuildRoleMemberActionCreators.tsx");

export const fetchMemberCounts = function fetchMemberCounts(guildId) {
  return _fetchMemberCounts(...arguments);
};
export const requestMembersForRole = function requestMembersForRole(guildId, roleId, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const combined = "" + guildId + "-" + roleId;
  if (flag) {
    if (null != importDefaultResult.get(combined)) {
      let resolved = Promise.resolve(null);
    }
    return resolved;
  }
  const result = importDefaultResult.set(combined, true);
  resolved = function doRequestMembersForRole(guildId, roleId) {
    const HTTP = guildId(closure_2[4]).HTTP;
    const obj = { url: closure_5.GUILD_ROLE_MEMBER_IDS(guildId, roleId), rejectWithError: guildId(closure_2[4]).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      const membersById = callback(closure_2[6]).requestMembersById(body, body.body, false);
      return body.body.length;
    });
  }(guildId, roleId);
};
