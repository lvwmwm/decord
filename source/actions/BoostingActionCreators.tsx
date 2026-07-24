// Module ID: 4026
// Function ID: 33512
// Name: _fetchAppliedGuildBoostsForGuild
// Dependencies: [5, 4027, 4028, 3782, 653, 507, 686, 4029, 2]
// Exports: applyToGuild, cancelGuildBoostSlot, fetchAppliedBoostsCooldown, fetchAppliedGuildBoostsForGuild, fetchAppliedGuildBoostsForUser, unapplyFromGuild, uncancelGuildBoostSlot

// Module 4026 (_fetchAppliedGuildBoostsForGuild)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
async function _fetchAppliedGuildBoostsForGuild(arg0, arg1) {
  let iter = (function*(guildId) {
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    let flag = obj.includeEnded;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    const HTTP = outer2_0(outer2_2[5]).HTTP;
    obj = { url: outer2_7.APPLIED_GUILD_BOOSTS_FOR_GUILD(guildId), oldFormErrors: true };
    let tmp2;
    if (flag) {
      obj = { include_ended: true };
      tmp2 = obj;
    }
    obj.query = tmp2;
    obj.rejectWithError = true;
    const body = yield HTTP.get(obj).body;
    const mapped = body.map((arg0) => outer3_4.createFromServer(arg0));
    outer2_1(outer2_2[6]).dispatch({ type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS", guildId, appliedBoosts: mapped });
    return mapped;
  })();
  iter.next();
  return iter;
}
async function _fetchAppliedGuildBoostsForUser() {
  let iter = (function*() {
    let flag = arg0;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    const HTTP = outer2_0(outer2_2[5]).HTTP;
    obj = { url: outer2_7.USER_APPLIED_GUILD_BOOSTS, oldFormErrors: true, query: obj, rejectWithError: true };
    obj = { paused: flag };
    const body = yield HTTP.get(obj).body;
    const mapped = body.map((arg0) => outer3_4.createFromServer(arg0));
    outer2_1(outer2_2[6]).dispatch({ type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS", appliedGuildBoosts: mapped });
    return mapped;
  })();
  iter.next();
  return iter;
}
function fetchGuildBoostSlots() {
  return _fetchGuildBoostSlots(...arguments);
}
async function _fetchGuildBoostSlots() {
  let obj = outer2_1(outer2_2[6]);
  obj.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH" });
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  obj = { url: outer2_7.USER_GUILD_BOOST_SLOTS, oldFormErrors: true, rejectWithError: outer2_0(outer2_2[5]).rejectWithMigratedError() };
  const body = yield HTTP.get(obj).body;
  const mapped = body.map((subscription_id) => outer3_5.createFromServer(subscription_id, outer3_6.getSubscriptionById(subscription_id.subscription_id)));
  const obj3 = outer2_0(outer2_2[5]);
  outer2_1(outer2_2[6]).dispatch({ type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS", guildBoostSlots: mapped });
  return mapped;
}
async function _fetchAppliedBoostsCooldown() {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  const obj = { url: outer2_7.APPLIED_GUILD_BOOST_COOLDOWN, oldFormErrors: true, rejectWithError: outer2_0(outer2_2[5]).rejectWithMigratedError() };
  const ends_at = yield HTTP.get(obj).body.ends_at;
  const obj2 = outer2_0(outer2_2[5]);
  outer2_1(outer2_2[6]).dispatch({ type: "APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS", endsAt: ends_at });
  return ends_at;
}
async function _applyToGuild(arg0, arg1, arg2) {
  let iter = (function*(guildId, user_premium_guild_subscription_slot_ids) {
    let flag = arg2;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    let obj = outer2_1(outer2_2[6]);
    obj.dispatch({ type: "GUILD_APPLY_BOOST_START" });
    const HTTP = outer2_0(outer2_2[5]).HTTP;
    obj = { url: outer2_7.APPLIED_GUILD_BOOSTS_FOR_GUILD(guildId), body: obj, oldFormErrors: true };
    obj = { user_premium_guild_subscription_slot_ids, disable_powerup_auto_apply: flag, rejectWithError: outer2_0(outer2_2[5]).rejectWithMigratedError() };
    const tmp3 = yield HTTP.put(obj);
    if (Array.isArray(tmp3.body)) {
      const body = tmp3.body;
      let mapped = body.map(outer2_4.createFromServer);
    } else {
      mapped = [outer2_4.createFromServer(tmp3.body)];
    }
    const obj4 = outer2_0(outer2_2[5]);
    const obj1 = { type: "GUILD_APPLY_BOOST_SUCCESS", appliedGuildBoost: mapped };
    outer2_1(outer2_2[6]).dispatch(obj1);
    outer2_10();
    return mapped;
  })();
  iter.next();
  return iter;
}
async function _unapplyFromGuild(arg0, arg1, arg2) {
  let obj = outer2_1(outer2_2[6]);
  obj.dispatch({ type: "GUILD_UNAPPLY_BOOST_START" });
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  obj = { url: outer2_7.APPLIED_GUILD_BOOST(arg0, arg1), oldFormErrors: true, rejectWithError: outer2_0(outer2_2[5]).rejectWithMigratedError() };
  yield HTTP.del(obj);
  outer2_10();
  const obj3 = outer2_0(outer2_2[5]);
  obj = { type: "GUILD_UNAPPLY_BOOST_SUCCESS", boostId: arg1 };
  outer2_1(outer2_2[6]).dispatch(obj);
}
async function _cancelGuildBoostSlot(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  const obj = { url: outer2_7.USER_GUILD_BOOST_SLOT_CANCEL(arg0), oldFormErrors: true, rejectWithError: true };
  const tmp = yield HTTP.post(obj);
  const fromServer = outer2_5.createFromServer(tmp.body, outer2_6.getSubscriptionById(tmp.body.subscription_id));
  outer2_1(outer2_2[6]).dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: fromServer });
  return fromServer;
}
async function _uncancelGuildBoostSlot(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  const obj = { url: outer2_7.USER_GUILD_BOOST_SLOT_UNCANCEL(arg0), oldFormErrors: true, rejectWithError: true };
  const tmp = yield HTTP.post(obj);
  const fromServer = outer2_5.createFromServer(tmp.body, outer2_6.getSubscriptionById(tmp.body.subscription_id));
  outer2_1(outer2_2[6]).dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: fromServer });
  return fromServer;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/BoostingActionCreators.tsx");

export const fetchAppliedGuildBoostsForGuild = function fetchAppliedGuildBoostsForGuild(closure_0, arg1) {
  return _fetchAppliedGuildBoostsForGuild(...arguments);
};
export const fetchAppliedGuildBoostsForUser = function fetchAppliedGuildBoostsForUser() {
  return _fetchAppliedGuildBoostsForUser(...arguments);
};
export { fetchGuildBoostSlots };
export const fetchAppliedBoostsCooldown = function fetchAppliedBoostsCooldown() {
  return _fetchAppliedBoostsCooldown(...arguments);
};
export const applyToGuild = function applyToGuild(id, arg1, arg2) {
  return _applyToGuild(...arguments);
};
export const unapplyFromGuild = function unapplyFromGuild(guildId, id) {
  return _unapplyFromGuild(...arguments);
};
export const cancelGuildBoostSlot = function cancelGuildBoostSlot() {
  return _cancelGuildBoostSlot(...arguments);
};
export const uncancelGuildBoostSlot = function uncancelGuildBoostSlot() {
  return _uncancelGuildBoostSlot(...arguments);
};
