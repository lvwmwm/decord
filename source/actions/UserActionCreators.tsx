// Module ID: 7976
// Function ID: 63101
// Name: _fetchProfile
// Dependencies: [5, 1857, 1849, 653, 654, 3, 507, 686, 4942, 640, 44, 4029, 2]
// Exports: acceptAgreements, fetchCurrentUser, fetchMutualFriends, fetchProfile, getUser, insertStaticUser, setFlag

// Module 7976 (_fetchProfile)
import timestamp from "timestamp";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import { PSEUDO_GUILD_IDS } from "APP_WITH_INVITE_AND_GUILD_ONBOARDING";
import importDefaultResult from "ME";

const require = arg1;
async function _fetchProfile(arg0, arg1) {
  let iter = (function*(userId) {
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
    let obj1 = outer2_1(outer2_2[7]);
    obj = { type: "USER_PROFILE_FETCH_START", userId, guildId, withMutualFriends };
    obj1.dispatch(obj);
    let tmp4;
    if (null != guildId) {
      if (!outer2_7.includes(guildId)) {
        tmp4 = guildId;
      }
    }
    const HTTP = outer2_0(outer2_2[6]).HTTP;
    obj = { url: outer2_6.USER_PROFILE(userId) };
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
    outer2_1(outer2_2[7]).dispatch({ type: "USER_UPDATE", user: tmp11.body.user });
    const obj2 = { type: "USER_UPDATE", user: tmp11.body.user };
    const obj6 = outer2_1(outer2_2[7]);
    outer2_1(outer2_2[7]).dispatch({ type: "USER_PROFILE_FETCH_SUCCESS", userProfile: tmp11.body, fetchStartedAt: timestamp, guildId });
    let tmp20 = tmp19;
    if (null != guildId) {
      tmp20 = null != tmp12.body.guild_member;
    }
    if (tmp20) {
      const obj4 = { type: "GUILD_MEMBER_PROFILE_UPDATE", guildId, guildMember: tmp11.body.guild_member };
      outer2_1(outer2_2[7]).dispatch(obj4);
      const obj10 = outer2_1(outer2_2[7]);
    }
  })();
  iter.next();
  return iter;
}
async function _fetchMutualFriends(arg0, arg1, arg2) {
  let obj = outer2_1(outer2_2[7]);
  obj = { type: "MUTUAL_FRIENDS_FETCH_START", userId: arg0 };
  obj.dispatch(obj);
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_6.USER_RELATIONSHIPS(arg0), oldFormErrors: true, signal: arg1, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
  const obj4 = outer2_0(outer2_2[6]);
  const tmp = arg0;
  const tmp3 = yield HTTP.get(obj);
  outer2_1(outer2_2[7]).dispatch({ type: "MUTUAL_FRIENDS_FETCH_SUCCESS", userId: tmp, mutualFriends: tmp3.body });
}
importDefaultResult = new importDefaultResult("UserProfileModalActionCreators");
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/UserActionCreators.tsx");

export const fetchCurrentUser = function fetchCurrentUser() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _require;
  const withAnalyticsToken = obj.withAnalyticsToken;
  _require = tmp;
  const HTTP = _require(507).HTTP;
  obj = { url: Endpoints.ME, query: { with_analytics_token: tmp }, oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let analytics_token;
    let obj = outer1_1(outer1_2[7]);
    obj = { type: "CURRENT_USER_UPDATE", user: body.body };
    if (c0) {
      analytics_token = body.body.analytics_token;
    }
    obj.analyticsToken = analytics_token;
    obj.dispatch(obj);
    return new outer1_4(body.body);
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
  let obj = importDefault(4942);
  obj = { url: Endpoints.USER_AGREEMENTS };
  obj = { event: require(640) /* ImpressionNames */.NetworkActionNames.USER_ACCEPT_AGREEMENTS };
  obj.trackedActionData = obj;
  const obj1 = { terms: flag, privacy: flag2 };
  obj.body = obj1;
  obj.oldFormErrors = true;
  obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
  const obj5 = require(507) /* _isNativeReflectConstruct */;
  return obj.patch(obj).then(() => true, () => false);
};
export const setFlag = function setFlag(arg0, arg1) {
  const currentUser = authStore.getCurrentUser();
  importDefault(44)(null != currentUser, "setFlag: user cannot be undefined");
  const flags = currentUser.flags;
  if (arg1) {
    let tmp3 = flags | arg0;
  } else {
    tmp3 = flags & ~arg0;
  }
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.ME, oldFormErrors: true, body: obj };
  obj = { flags: tmp3, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.patch(obj);
};
export const getUser = function getUser(arg0) {
  const _require = arg0;
  const user = authStore.getUser(arg0);
  if (null != user) {
    let resolved = Promise.resolve(user);
  } else {
    const HTTP = _require(507).HTTP;
    let obj = { url: Endpoints.USER(arg0), oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    resolved = value.then((body) => {
      let obj = outer1_1(outer1_2[7]);
      obj = { type: "USER_UPDATE", user: body.body };
      obj.dispatch(obj);
      return outer1_5.getUser(closure_0);
    });
    const obj2 = _require(507);
  }
  return resolved;
};
export const insertStaticUser = function insertStaticUser(id) {
  let obj = importDefault(686);
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
