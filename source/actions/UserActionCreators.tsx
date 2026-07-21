// Module ID: 7883
// Function ID: 62743
// Name: _fetchProfile
// Dependencies: []
// Exports: acceptAgreements, fetchCurrentUser, fetchMutualFriends, fetchProfile, getUser, insertStaticUser, setFlag

// Module 7883 (_fetchProfile)
async function _fetchProfile(arg0, arg1) {
  const fn = function*(userId) {
    let abortSignal;
    let connectionsRoleId;
    let guildId;
    let joinRequestId;
    let type;
    let withMutualFriends;
    let withMutualFriendsCount;
    let withMutualGuilds;
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    ({ withMutualFriendsCount, withMutualFriends, guildId } = obj);
    ({ type, withMutualGuilds, connectionsRoleId, joinRequestId, abortSignal } = obj);
    yield undefined;
    const timestamp = Date.now();
    let obj1 = callback2(closure_2[7]);
    obj = { type: "USER_PROFILE_FETCH_START", userId, guildId, withMutualFriends };
    obj1.dispatch(obj);
    let tmp4;
    if (null != guildId) {
      if (!closure_7.includes(guildId)) {
        tmp4 = guildId;
      }
    }
    const HTTP = callback(closure_2[6]).HTTP;
    obj = { url: closure_6.USER_PROFILE(userId) };
    obj1 = { type, with_mutual_guilds: withMutualGuilds, with_mutual_friends: withMutualFriends };
    let tmp7 = withMutualFriendsCount;
    if (withMutualFriendsCount) {
      let tmp10 = tmp9;
      if (null != withMutualFriends) {
        tmp10 = !withMutualFriends;
      }
      tmp7 = tmp10;
    }
    obj1.with_mutual_friends_count = tmp7;
    obj1.guild_id = tmp4;
    obj1.connections_role_id = connectionsRoleId;
    obj1.join_request_id = joinRequestId;
    obj.query = obj1;
    obj.signal = abortSignal;
    obj.rejectWithError = true;
    const tmp11 = yield HTTP.get(obj);
    if (null != arg2) {
      arg2(tmp12.body, guildId);
    }
    callback2(closure_2[7]).dispatch({ type: "USER_UPDATE", user: tmp11.body.user });
    const obj2 = { type: "USER_UPDATE", user: tmp11.body.user };
    const obj6 = callback2(closure_2[7]);
    callback2(closure_2[7]).dispatch({ type: "USER_PROFILE_FETCH_SUCCESS", userProfile: tmp11.body, fetchStartedAt: timestamp, guildId });
    let tmp20 = tmp19;
    if (null != guildId) {
      tmp20 = null != tmp12.body.guild_member;
    }
    if (tmp20) {
      const obj4 = { type: "GUILD_MEMBER_PROFILE_UPDATE", guildId, guildMember: tmp11.body.guild_member };
      callback2(closure_2[7]).dispatch(obj4);
      const obj10 = callback2(closure_2[7]);
    }
  };
  fn.next();
  return fn;
}
async function _fetchMutualFriends(userId, signal, arg2) {
  let obj = callback2(closure_2[7]);
  obj = { type: "MUTUAL_FRIENDS_FETCH_START", userId };
  obj.dispatch(obj);
  const HTTP = callback(closure_2[6]).HTTP;
  obj = { url: closure_6.USER_RELATIONSHIPS(userId), oldFormErrors: true, signal, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
  const obj4 = callback(closure_2[6]);
  const tmp = userId;
  const tmp3 = yield HTTP.get(obj);
  callback2(closure_2[7]).dispatch({ type: "MUTUAL_FRIENDS_FETCH_SUCCESS", userId: tmp, mutualFriends: tmp3.body });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const PSEUDO_GUILD_IDS = arg1(dependencyMap[4]).PSEUDO_GUILD_IDS;
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("UserProfileModalActionCreators");
const result = arg1(dependencyMap[12]).fileFinishedImporting("actions/UserActionCreators.tsx");

export const fetchCurrentUser = function fetchCurrentUser() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let arg1;
  const withAnalyticsToken = obj.withAnalyticsToken;
  arg1 = tmp;
  const HTTP = arg1(dependencyMap[6]).HTTP;
  obj = { url: Endpoints.ME, query: { with_analytics_token: tmp }, oldFormErrors: true, rejectWithError: arg1(dependencyMap[6]).rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let analytics_token;
    let obj = callback(closure_2[7]);
    obj = { type: "CURRENT_USER_UPDATE", user: body.body };
    if (tmp) {
      analytics_token = body.body.analytics_token;
    }
    obj.analyticsToken = analytics_token;
    obj.dispatch(obj);
    return new closure_4(body.body);
  });
};
export const acceptAgreements = function acceptAgreements() {
  let flag = arg0;
  let flag2 = arg1;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  let obj = importDefault(dependencyMap[8]);
  obj = { url: Endpoints.USER_AGREEMENTS };
  obj = { event: arg1(dependencyMap[9]).NetworkActionNames.USER_ACCEPT_AGREEMENTS };
  obj.trackedActionData = obj;
  const obj1 = { terms: flag, privacy: flag2 };
  obj.body = obj1;
  obj.oldFormErrors = true;
  obj.rejectWithError = arg1(dependencyMap[6]).rejectWithMigratedError();
  const obj5 = arg1(dependencyMap[6]);
  return obj.patch(obj).then(() => true, () => false);
};
export const setFlag = function setFlag(arg0, arg1) {
  const currentUser = authStore.getCurrentUser();
  importDefault(dependencyMap[10])(null != currentUser, "setFlag: user cannot be undefined");
  const flags = currentUser.flags;
  if (arg1) {
    let tmp3 = flags | arg0;
  } else {
    tmp3 = flags & ~arg0;
  }
  const HTTP = arg1(dependencyMap[6]).HTTP;
  let obj = { url: Endpoints.ME, oldFormErrors: true, body: obj };
  obj = { flags: tmp3, rejectWithError: arg1(dependencyMap[6]).rejectWithMigratedError() };
  return HTTP.patch(obj);
};
export const getUser = function getUser(arg0) {
  const arg1 = arg0;
  const user = authStore.getUser(arg0);
  if (null != user) {
    let resolved = Promise.resolve(user);
  } else {
    const HTTP = arg1(dependencyMap[6]).HTTP;
    const obj = { url: Endpoints.USER(arg0), oldFormErrors: true, rejectWithError: arg1(dependencyMap[6]).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    resolved = value.then((body) => {
      let obj = callback(closure_2[7]);
      obj = { type: "USER_UPDATE", user: body.body };
      obj.dispatch(obj);
      return user.getUser(body);
    });
    const obj2 = arg1(dependencyMap[6]);
  }
  return resolved;
};
export const insertStaticUser = function insertStaticUser(id) {
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "USER_UPDATE", user: id };
  obj.dispatch(obj);
  return authStore.getUser(id.id);
};
export const fetchProfile = function fetchProfile(id, guildMember, arg2) {
  return _fetchProfile(...arguments);
};
export const fetchMutualFriends = function fetchMutualFriends() {
  return _fetchMutualFriends(...arguments);
};
