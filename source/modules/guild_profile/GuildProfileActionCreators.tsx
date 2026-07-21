// Module ID: 8412
// Function ID: 67006
// Name: _fetchGuildTopGames
// Dependencies: []
// Exports: fetchGuildTopGames, getGuildProfile, saveGuildProfile, setGuildProfileVisibility, trackGuildProfileViewed

// Module 8412 (_fetchGuildTopGames)
function _fetchGuildTopGames() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchGuildTopGames = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const GuildProfileFetchStatus = arg1(dependencyMap[3]).GuildProfileFetchStatus;
({ AnalyticEvents: closure_8, Endpoints: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_profile/GuildProfileActionCreators.tsx");

export const getGuildProfile = function getGuildProfile(guildId, flag, arg2) {
  let obj = arg2;
  flag = guildId;
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
    importDefault(dependencyMap[5]).dispatch(obj);
    const HTTP = flag(dependencyMap[6]).HTTP;
    obj = { url: closure_9.GUILD_PROFILE(guildId) };
    const obj2 = importDefault(dependencyMap[5]);
    const obj6 = store;
    obj.rejectWithError = flag(dependencyMap[6]).rejectWithMigratedError();
    const value = HTTP.get(obj);
    const obj5 = flag(dependencyMap[6]);
    resolved1 = value.then((body) => {
      let obj = body(closure_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: body, profile: guildProfileFromServer };
      callback(closure_2[5]).dispatch(obj);
      return guildProfileFromServer;
    }).catch((arg0) => {
      const aPIError = new arg0(closure_2[8]).APIError(arg0);
      let obj = callback(closure_2[5]);
      obj = { type: "GUILD_PROFILE_FETCH_FAILURE", guildId: arg0, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = value.then((body) => {
      let obj = body(closure_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_FETCH_SUCCESS", guildId: body, profile: guildProfileFromServer };
      callback(closure_2[5]).dispatch(obj);
      return guildProfileFromServer;
    });
  }
};
export const saveGuildProfile = function saveGuildProfile(guildId, updates) {
  updates = guildId;
  if (store.getIsUpdating(guildId)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = importDefault(dependencyMap[5]);
    obj = { type: "GUILD_PROFILE_UPDATE", guildId, updates };
    obj.dispatch(obj);
    const HTTP = updates(dependencyMap[6]).HTTP;
    obj = { url: closure_9.GUILD_PROFILE(guildId), body: updates(dependencyMap[7]).buildGuildProfileUpdateForServer(updates) };
    const obj4 = updates(dependencyMap[7]);
    obj.rejectWithError = updates(dependencyMap[6]).rejectWithMigratedError();
    const obj5 = updates(dependencyMap[6]);
    const patchResult = HTTP.patch(obj);
    resolved = HTTP.patch(obj).then((body) => {
      let obj = body(closure_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: body, profile: guildProfileFromServer };
      callback(closure_2[5]).dispatch(obj);
      return guildProfileFromServer;
    }).catch((arg0) => {
      const aPIError = new arg0(closure_2[8]).APIError(arg0);
      let obj = callback(closure_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_FAILURE", guildId: arg0, error: aPIError };
      obj.dispatch(obj);
      return null;
    });
    const nextPromise = HTTP.patch(obj).then((body) => {
      let obj = body(closure_2[7]);
      const guildProfileFromServer = obj.buildGuildProfileFromServer(body.body);
      obj = { type: "GUILD_PROFILE_UPDATE_SUCCESS", guildId: body, profile: guildProfileFromServer };
      callback(closure_2[5]).dispatch(obj);
      return guildProfileFromServer;
    });
  }
  return resolved;
};
export const setGuildProfileVisibility = function setGuildProfileVisibility(guildId, visibility) {
  visibility = guildId;
  if (store.getIsUpdating(guildId)) {
    let resolved = Promise.resolve(null);
  } else {
    let obj = importDefault(dependencyMap[5]);
    obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY", guildId, visibility };
    obj.dispatch(obj);
    const HTTP = visibility(dependencyMap[6]).HTTP;
    obj = { url: closure_9.GUILD_PROFILE_VISIBILITY(guildId) };
    const obj1 = { visibility };
    obj.body = obj1;
    obj.rejectWithError = visibility(dependencyMap[6]).rejectWithMigratedError();
    const obj5 = visibility(dependencyMap[6]);
    const putResult = HTTP.put(obj);
    resolved = HTTP.put(obj).then((body) => {
      const visibility = body.body.visibility;
      let obj = callback(closure_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId: body, visibility };
      obj.dispatch(obj);
      return visibility;
    }).catch((arg0) => {
      const aPIError = new arg0(closure_2[8]).APIError(arg0);
      let obj = callback(closure_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE", guildId: arg0, error: aPIError };
      obj.dispatch(obj);
      throw aPIError;
    });
    const nextPromise = HTTP.put(obj).then((body) => {
      const visibility = body.body.visibility;
      let obj = callback(closure_2[5]);
      obj = { type: "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS", guildId: body, visibility };
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
  let obj = importDefault(dependencyMap[9]);
  obj = { guild_id: guildId, location_stack: analyticsLocations, is_member: tmp, has_join_request: null != request.getRequest(guildId) };
  obj.track(constants.GUILD_PROFILE_VIEWED, obj);
};
