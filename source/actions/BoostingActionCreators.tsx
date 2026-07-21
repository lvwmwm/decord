// Module ID: 4024
// Function ID: 33495
// Name: _fetchAppliedGuildBoostsForGuild
// Dependencies: []
// Exports: applyToGuild, cancelGuildBoostSlot, fetchAppliedBoostsCooldown, fetchAppliedGuildBoostsForGuild, fetchAppliedGuildBoostsForUser, unapplyFromGuild, uncancelGuildBoostSlot

// Module 4024 (_fetchAppliedGuildBoostsForGuild)
async function _fetchAppliedGuildBoostsForGuild(arg0, arg1) {
  const fn = function*(guildId) {
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    let flag = obj.includeEnded;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    const HTTP = callback(closure_2[5]).HTTP;
    obj = { url: closure_7.APPLIED_GUILD_BOOSTS_FOR_GUILD(guildId), oldFormErrors: true };
    let tmp2;
    if (flag) {
      obj = { include_ended: true };
      tmp2 = obj;
    }
    obj.query = tmp2;
    obj.rejectWithError = true;
    const body = yield HTTP.get(obj).body;
    const mapped = body.map((arg0) => closure_4.createFromServer(arg0));
    callback2(closure_2[6]).dispatch({ type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS", guildId, appliedBoosts: mapped });
    return mapped;
  };
  fn.next();
  return fn;
}
async function _fetchAppliedGuildBoostsForUser() {
  const fn = function*() {
    let flag = arg0;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    const HTTP = callback(closure_2[5]).HTTP;
    let obj = { url: constants.USER_APPLIED_GUILD_BOOSTS, oldFormErrors: true, query: obj, rejectWithError: true };
    obj = { paused: flag };
    const body = yield HTTP.get(obj).body;
    const mapped = body.map((arg0) => closure_4.createFromServer(arg0));
    callback2(closure_2[6]).dispatch({ type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS", appliedGuildBoosts: mapped });
    return mapped;
  };
  fn.next();
  return fn;
}
function fetchGuildBoostSlots() {
  return _fetchGuildBoostSlots(...arguments);
}
async function _fetchGuildBoostSlots() {
  let obj = callback2(closure_2[6]);
  obj.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH" });
  const HTTP = callback(closure_2[5]).HTTP;
  obj = { url: constants.USER_GUILD_BOOST_SLOTS, oldFormErrors: true, rejectWithError: callback(closure_2[5]).rejectWithMigratedError() };
  const body = yield HTTP.get(obj).body;
  const mapped = body.map((subscription_id) => closure_5.createFromServer(subscription_id, subscriptionById.getSubscriptionById(subscription_id.subscription_id)));
  const obj3 = callback(closure_2[5]);
  callback2(closure_2[6]).dispatch({ type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS", guildBoostSlots: mapped });
  return mapped;
}
async function _fetchAppliedBoostsCooldown() {
  const HTTP = callback(closure_2[5]).HTTP;
  const obj = { url: constants.APPLIED_GUILD_BOOST_COOLDOWN, oldFormErrors: true, rejectWithError: callback(closure_2[5]).rejectWithMigratedError() };
  const ends_at = yield HTTP.get(obj).body.ends_at;
  const obj2 = callback(closure_2[5]);
  callback2(closure_2[6]).dispatch({ type: "APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS", endsAt: ends_at });
  return ends_at;
}
async function _applyToGuild(arg0, arg1, arg2) {
  const fn = function*(guildId, user_premium_guild_subscription_slot_ids) {
    let flag = arg2;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    let obj = callback2(closure_2[6]);
    obj.dispatch({ type: "GUILD_APPLY_BOOST_START" });
    const HTTP = callback(closure_2[5]).HTTP;
    obj = { url: closure_7.APPLIED_GUILD_BOOSTS_FOR_GUILD(guildId), body: obj, oldFormErrors: true };
    obj = { user_premium_guild_subscription_slot_ids, disable_powerup_auto_apply: flag, rejectWithError: callback(closure_2[5]).rejectWithMigratedError() };
    const tmp3 = yield HTTP.put(obj);
    if (Array.isArray(tmp3.body)) {
      const body = tmp3.body;
      let mapped = body.map(closure_4.createFromServer);
    } else {
      mapped = [closure_4.createFromServer(tmp3.body)];
    }
    const obj4 = callback(closure_2[5]);
    const obj1 = { type: "GUILD_APPLY_BOOST_SUCCESS", appliedGuildBoost: mapped };
    callback2(closure_2[6]).dispatch(obj1);
    callback3();
    return mapped;
  };
  fn.next();
  return fn;
}
async function _unapplyFromGuild(arg0, boostId, arg2) {
  let obj = callback2(closure_2[6]);
  obj.dispatch({ type: "GUILD_UNAPPLY_BOOST_START" });
  const HTTP = callback(closure_2[5]).HTTP;
  obj = { url: closure_7.APPLIED_GUILD_BOOST(arg0, boostId), oldFormErrors: true, rejectWithError: callback(closure_2[5]).rejectWithMigratedError() };
  yield HTTP.del(obj);
  callback3();
  const obj3 = callback(closure_2[5]);
  obj = { type: "GUILD_UNAPPLY_BOOST_SUCCESS", boostId };
  callback2(closure_2[6]).dispatch(obj);
}
async function _cancelGuildBoostSlot(arg0, arg1) {
  const HTTP = callback(closure_2[5]).HTTP;
  const obj = { lc: null, type: null, end: null, url: closure_7.USER_GUILD_BOOST_SLOT_CANCEL(arg0) };
  const tmp = yield HTTP.post(obj);
  const fromServer = closure_5.createFromServer(tmp.body, subscriptionById.getSubscriptionById(tmp.body.subscription_id));
  callback2(closure_2[6]).dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: fromServer });
  return fromServer;
}
async function _uncancelGuildBoostSlot(arg0, arg1) {
  const HTTP = callback(closure_2[5]).HTTP;
  const obj = { lc: null, type: null, end: null, url: closure_7.USER_GUILD_BOOST_SLOT_UNCANCEL(arg0) };
  const tmp = yield HTTP.post(obj);
  const fromServer = closure_5.createFromServer(tmp.body, subscriptionById.getSubscriptionById(tmp.body.subscription_id));
  callback2(closure_2[6]).dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: fromServer });
  return fromServer;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const Endpoints = arg1(dependencyMap[4]).Endpoints;
const result = arg1(dependencyMap[8]).fileFinishedImporting("actions/BoostingActionCreators.tsx");

export const fetchAppliedGuildBoostsForGuild = function fetchAppliedGuildBoostsForGuild(guildId, arg1) {
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
