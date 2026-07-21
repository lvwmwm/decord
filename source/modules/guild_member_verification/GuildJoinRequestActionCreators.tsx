// Module ID: 9152
// Function ID: 71719
// Name: _fetchGuildJoinRequests
// Dependencies: []

// Module 9152 (_fetchGuildJoinRequests)
function _fetchGuildJoinRequests() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchGuildJoinRequests = obj;
  return obj(...arguments);
}
function _fetchGuildJoinRequestsForUser() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchGuildJoinRequestsForUser = obj;
  return obj(...arguments);
}
function _removeGuildJoinRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _removeGuildJoinRequest = obj;
  return obj(...arguments);
}
function _ackUserGuildJoinRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _ackUserGuildJoinRequest = obj;
  return obj(...arguments);
}
function _updateGuildJoinRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateGuildJoinRequest = obj;
  return obj(...arguments);
}
function _resetGuildJoinRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _resetGuildJoinRequest = obj;
  return obj(...arguments);
}
function _fetchRequestToJoinGuilds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchRequestToJoinGuilds = obj;
  return obj(...arguments);
}
function _fetchJoinRequestForInterview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchJoinRequestForInterview = obj;
  return obj(...arguments);
}
function _createOrEnterJoinRequestInterview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _createOrEnterJoinRequestInterview = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).createChannelRecordFromServer;
let closure_5 = importDefault(dependencyMap[2]);
const joinRequestFromServer = arg1(dependencyMap[3]).joinRequestFromServer;
({ AbortCodes: closure_7, Endpoints: closure_8 } = arg1(dependencyMap[4]));
const obj = {
  fetchGuildJoinRequests(arg0) {
    return _fetchGuildJoinRequests(...arguments);
  },
  fetchGuildJoinRequestsForUser(guildId, userId) {
    return _fetchGuildJoinRequestsForUser(...arguments);
  },
  ackUserGuildJoinRequest(guildId, joinRequestId) {
    return _ackUserGuildJoinRequest(...arguments);
  },
  removeGuildJoinRequest(guildId) {
    return _removeGuildJoinRequest(...arguments);
  },
  updateGuildJoinRequest(arg0, arg1, arg2, APPROVED, arg4) {
    return _updateGuildJoinRequest(...arguments);
  },
  resetGuildJoinRequest(arg0) {
    return _resetGuildJoinRequest(...arguments);
  },
  fetchRequestToJoinGuilds() {
    return _fetchRequestToJoinGuilds(...arguments);
  },
  setSelectedApplicationTab(guildId, applicationTab) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId, applicationTab };
    obj.dispatch(obj);
  },
  setSelectedSortOrder(guildId, sortOrder, applicationStatus) {
    let obj = importDefault(dependencyMap[6]);
    obj = { type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId, sortOrder, applicationStatus };
    obj.dispatch(obj);
  },
  setSelectedGuildJoinRequest(guildId, request) {
    if (null != request) {
      let obj = request(dependencyMap[8]);
      obj = { guildId };
      ({ applicationStatus: obj2.applicationStatus, userId: obj2.applicationUserId } = request);
      const result = obj.trackMemberApplicationViewed(obj);
    }
    obj = { type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId, request };
    importDefault(dependencyMap[6]).dispatch(obj);
  },
  fetchJoinRequestForInterview(castResult) {
    return _fetchJoinRequestForInterview(...arguments);
  },
  createOrEnterJoinRequestInterview(arg0, arg1) {
    return _createOrEnterJoinRequestInterview(...arguments);
  }
};
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestActionCreators.tsx");

export default obj;
