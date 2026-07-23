// Module ID: 8419
// Function ID: 67066
// Name: _fetchGuildTopGames
// Dependencies: [5, 3948, 1917, 8417, 653, 686, 507, 5129, 4029, 675, 2]
// Exports: fetchGuildTopGames, getGuildProfile, saveGuildProfile, setGuildProfileVisibility, trackGuildProfileViewed

// Module 8419 (_fetchGuildTopGames)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { GuildProfileFetchStatus } from "_isNativeReflectConstruct";
import ME from "ME";

let closure_8;
let closure_9;
const require = arg1;
function _fetchGuildTopGames() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_8, Endpoints: closure_9 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_profile/GuildProfileActionCreators.tsx");

export const getGuildProfile = function getGuildProfile(guildId, flag, arg2) {
  let obj = arg2;
  const _require = guildId;
  if (arg2 === undefined) {
    obj = {};
  }
  flag = obj.respectBackoff;
  if (flag === undefined) {
    flag = false;
  }
  if (null == guildId) {
    return Promise.resolve(null);
  } else {
    const fetchStatus = store.getFetchStatus(guildId);
    const lastSyncTimestamp = store.getLastSyncTimestamp(guildId);
    const profile = store.getProfile(guildId);
    const _Date2 = Date;
    let num = 0;
    const timestamp = Date.now();
    if (null != lastSyncTimestamp) {
      num = lastSyncTimestamp;
    }
    const diff = timestamp - num;
    const nextFetchAllowedAt = store.getNextFetchAllowedAt(guildId);
    if (flag) {
      if (null != nextFetchAllowedAt) {
        const _Date = Date;
        if (Date.now() < nextFetchAllowedAt) {
          let resolved = Promise.resolve(profile);
        }
        return resolved;
      }
    }
    if (fetchStatus === GuildProfileFetchStatus.FETCHING) {
      if (!flag) {
        resolved = Promise.resolve(null);
      }
    }
    if (null != profile) {
      if (diff <= 60000) {
        if (!flag) {
          let resolved1 = Promise.resolve(profile);
        }
      }
    }
    obj = { type: "GUILD_PROFILE_FETCH", guildId };
    importDefault(686).dispatch(obj);
    const HTTP = _require(507).HTTP;
    obj = { url: closure_9.GUILD_PROFILE(guildId) };
    const obj2 = importDefault(686);
    const obj6 = store;
    obj.rejectWithError = _require(507).rejectWithMigratedError();
    const value = HTTP.get(obj);
    const obj5 = _require(507);
    resolved1 = value.then((body) => {
      let obj = guildId(outer1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId, profile: guildProfileFromServer };
      outer1_1(outer1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    }).catch((arg0) => {
      const aPIError = new guildId(outer1_2[8]).APIError(arg0);
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_FETCH_FAILURE", guildId, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = value.then((body) => {
      let obj = guildId(outer1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId, profile: guildProfileFromServer };
      outer1_1(outer1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    });
  }
};
export const saveGuildProfile = function saveGuildProfile(guildId, updates) {
  const _require = guildId;
  if (store.getIsUpdating(guildId)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = importDefault(686);
    obj = { type: "GUILD_PROFILE_UPDATE", guildId, updates };
    obj.dispatch(obj);
    const HTTP = _require(507).HTTP;
    obj = { url: closure_9.GUILD_PROFILE(guildId), body: _require(5129).buildGuildProfileUpdateForServer(updates) };
    const obj4 = _require(5129);
    obj.rejectWithError = _require(507).rejectWithMigratedError();
    const obj5 = _require(507);
    const patchResult = HTTP.patch(obj);
    resolved = HTTP.patch(obj).then((body) => {
      let obj = guildId(outer1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId, profile: guildProfileFromServer };
      outer1_1(outer1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    }).catch((arg0) => {
      const aPIError = new guildId(outer1_2[8]).APIError(arg0);
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_FAILURE", guildId, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = HTTP.patch(obj).then((body) => {
      let obj = guildId(outer1_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId, profile: guildProfileFromServer };
      outer1_1(outer1_2[5]).dispatch(obj);
      return guildProfileFromServer;
    });
  }
  return resolved;
};
export const setGuildProfileVisibility = function setGuildProfileVisibility(guildId, visibility) {
  const _require = guildId;
  if (store.getIsUpdating(guildId)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = importDefault(686);
    obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY", guildId, visibility };
    obj.dispatch(obj);
    const HTTP = _require(507).HTTP;
    obj = { url: closure_9.GUILD_PROFILE_VISIBILITY(guildId) };
    const obj1 = { visibility };
    obj.body = obj1;
    obj.rejectWithError = _require(507).rejectWithMigratedError();
    const obj5 = _require(507);
    const putResult = HTTP.put(obj);
    resolved = HTTP.put(obj).then((body) => {
      const visibility = body.body.visibility;
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId: closure_0, visibility };
      obj.dispatch(obj);
      return visibility;
    }).catch((arg0) => {
      const aPIError = new guildId(outer1_2[8]).APIError(arg0);
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE", guildId, error: aPIError };
      obj.dispatch(obj);
      throw aPIError;
    });
    const nextPromise = HTTP.put(obj).then((body) => {
      const visibility = body.body.visibility;
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId: closure_0, visibility };
      obj.dispatch(obj);
      return visibility;
    });
  }
  return resolved;
};
export const fetchGuildTopGames = function fetchGuildTopGames() {
  return _fetchGuildTopGames(...arguments);
};
export const trackGuildProfileViewed = function trackGuildProfileViewed(guildId, analyticsLocations) {
  const tmp = null != selfMember.getSelfMember(guildId);
  let obj = importDefault(675);
  obj = { guild_id: guildId, location_stack: analyticsLocations, is_member: tmp, has_join_request: null != request.getRequest(guildId) };
  obj.track(constants.GUILD_PROFILE_VIEWED, obj);
};
