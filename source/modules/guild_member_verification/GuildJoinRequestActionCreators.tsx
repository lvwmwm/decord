// Module ID: 9196
// Function ID: 71993
// Name: _fetchGuildJoinRequests
// Dependencies: [5, 1352, 6692, 3948, 653, 3950, 686, 507, 7107, 4470, 1212, 4944, 2]

// Module 9196 (_fetchGuildJoinRequests)
import isTermsFormField from "isTermsFormField";
import { createChannelRecordFromServer as closure_4 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { joinRequestFromServer } from "_isNativeReflectConstruct";
import ME from "ME";

let closure_7;
let closure_8;
const require = arg1;
function _fetchGuildJoinRequests() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchGuildJoinRequestsForUser() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _removeGuildJoinRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _ackUserGuildJoinRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updateGuildJoinRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _resetGuildJoinRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchRequestToJoinGuilds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchJoinRequestForInterview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _createOrEnterJoinRequestInterview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AbortCodes: closure_7, Endpoints: closure_8 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestActionCreators.tsx");

export default {
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
    let obj = importDefault(686);
    obj = { type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB", guildId, applicationTab };
    obj.dispatch(obj);
  },
  setSelectedSortOrder(guildId, sortOrder, applicationStatus) {
    let obj = importDefault(686);
    obj = { type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER", guildId, sortOrder, applicationStatus };
    obj.dispatch(obj);
  },
  setSelectedGuildJoinRequest(guildId, request) {
    if (null != request) {
      let obj = require(7107) /* trackMemberApplicationViewed */;
      obj = { guildId };
      ({ applicationStatus: obj2.applicationStatus, userId: obj2.applicationUserId } = request);
      const result = obj.trackMemberApplicationViewed(obj);
    }
    obj = { type: "GUILD_JOIN_REQUESTS_SET_SELECTED", guildId, request };
    importDefault(686).dispatch(obj);
  },
  fetchJoinRequestForInterview(isTermsFormField) {
    return _fetchJoinRequestForInterview(...arguments);
  },
  createOrEnterJoinRequestInterview(arg0, arg1) {
    return _createOrEnterJoinRequestInterview(...arguments);
  }
};
