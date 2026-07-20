// Module ID: 5631
// Function ID: 48057
// Name: _updateGuildRoleSubscriptionGroupListing
// Dependencies: []
// Exports: archiveGuildRoleSubscriptionListing, createGuildRoleSubscriptionGroupListing, createGuildRoleSubscriptionListing, deleteGuildRoleSubscriptionGroupListing, deleteGuildRoleSubscriptionListing, fetchHighlightedCreatorGuildDetails, getGuildMonetizationRestrictions, getGuildRoleSubscriptionGroupForSubscriptionPlan, getGuildRoleSubscriptionGroupListing, getGuildRoleSubscriptionGroupListingsForGuild, getGuildRoleSubscriptionTrialEligibility, getGuildRoleSubscriptionTrials, getGuildRoleSubscriptionsSettings, getPriceTiers, updateGuildRoleSubscriptionGroupListing, updateGuildRoleSubscriptionListing, updateGuildRoleSubscriptionsSettings, updateGuildRoleSubscriptionsTrial

// Module 5631 (_updateGuildRoleSubscriptionGroupListing)
async function _updateGuildRoleSubscriptionGroupListing(arg0, arg1, body, arg3) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0, arg1), body, rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.patch(obj).body;
}
async function _createGuildRoleSubscriptionGroupListing(arg0, body, arg2) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0), body, rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.post(obj).body;
}
async function _deleteGuildRoleSubscriptionGroupListing(arg0, arg1, arg2) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0, arg1), rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  yield HTTP.del(obj);
}
async function _createGuildRoleSubscriptionListing(arg0, arg1, arg2, arg3) {
  const fn = function*(arg0, arg1, priceTier) {
    let obj = Object.create(null);
    obj.priceTier = 0;
    const merged = Object.assign(priceTier, obj);
    yield undefined;
    const HTTP = callback(closure_1[3]).HTTP;
    obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(arg0, arg1) };
    obj = {};
    const merged1 = Object.assign(merged);
    obj["price_tier"] = priceTier.priceTier;
    obj.body = obj;
    obj.rejectWithError = callback(closure_1[3]).rejectWithMigratedError();
    return yield HTTP.post(obj).body;
  };
  fn.next();
  return fn;
}
async function _updateGuildRoleSubscriptionListing(arg0, arg1, arg2, arg3, arg4) {
  const fn = function*(arg0, arg1, arg2, priceTier) {
    let obj = Object.create(null);
    obj.priceTier = 0;
    const merged = Object.assign(priceTier, obj);
    yield undefined;
    const HTTP = callback(closure_1[3]).HTTP;
    obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(arg0, arg1, arg2) };
    obj = {};
    const merged1 = Object.assign(merged);
    obj["price_tier"] = priceTier.priceTier;
    obj.body = obj;
    obj.rejectWithError = callback(closure_1[3]).rejectWithMigratedError();
    return yield HTTP.patch(obj).body;
  };
  fn.next();
  return fn;
}
async function _getGuildRoleSubscriptionGroupListingsForGuild(arg0, arg1) {
  const fn = function*(arg0) {
    let tmp = arg1;
    if (tmp === undefined) {
      let obj = { includeSoftDeleted: false };
      tmp = obj;
    }
    yield undefined;
    obj = {};
    ({ includeSoftDeleted: obj2.include_soft_deleted, countryCode: obj2.country_code } = tmp);
    const HTTP = callback(closure_1[3]).HTTP;
    obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0), query: obj, rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
    return yield HTTP.get(obj).body;
  };
  fn.next();
  return fn;
}
async function _getGuildRoleSubscriptionsSettings(arg0, arg1) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(arg0), rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _updateGuildRoleSubscriptionsSettings(arg0, body, arg2) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(arg0), body, rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.patch(obj).body;
}
async function _getPriceTiers(guild_id, arg1) {
  const HTTP = callback(closure_1[3]).HTTP;
  let obj = { url: constants.PRICE_TIERS, query: obj };
  obj = { price_tier_type: constants2.GUILD_ROLE_SUBSCRIPTIONS, guild_id, rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _getGuildRoleSubscriptionGroupListing(arg0, arg1, arg2) {
  const fn = function*(arg0, arg1) {
    let obj = arg2;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = callback(closure_1[3]).HTTP;
    obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0, arg1), query: obj };
    obj = {};
    ({ includeDraftListings: obj3.include_draft_listings, includeArchivedListings: obj3.include_archived_listings } = obj);
    obj.rejectWithError = callback(closure_1[3]).rejectWithMigratedError();
    return yield HTTP.get(obj).body;
  };
  fn.next();
  return fn;
}
async function _getGuildRoleSubscriptionGroupForSubscriptionPlan(arg0, arg1) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(arg0), rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _deleteGuildRoleSubscriptionListing(arg0, arg1, arg2, arg3) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(arg0, arg1, arg2), rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  yield HTTP.del(obj);
}
async function _archiveGuildRoleSubscriptionListing(arg0, arg1, arg2, arg3) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(arg0, arg1, arg2), rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.post(obj).body;
}
async function _getGuildRoleSubscriptionTrials(arg0, arg1) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_TRIALS(arg0), rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _updateGuildRoleSubscriptionsTrial(arg0, arg1, body, arg3) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(arg0, arg1), body, rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.patch(obj).body;
}
async function _getGuildRoleSubscriptionTrialEligibility(arg0, arg1, arg2, arg3) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(arg0, arg1, arg2), rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _getGuildMonetizationRestrictions(arg0, arg1) {
  const fn = function*(arg0) {
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = callback(closure_1[3]).HTTP;
    obj = { url: closure_3.CREATOR_MONETIZATION_RESTRICTIONS(arg0), signal: obj.signal, rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
    return yield HTTP.get(obj).body;
  };
  fn.next();
  return fn;
}
async function _fetchHighlightedCreatorGuildDetails(arg0, arg1) {
  const HTTP = callback(closure_1[3]).HTTP;
  const obj = { url: closure_3.GUILD_DISCOVERY_SLUG(arg0), rejectWithError: callback(closure_1[3]).rejectWithMigratedError() };
  const tmp = yield HTTP.get(obj);
  const body = tmp.body;
  if (null != body) {
    let parsed = body;
  } else {
    const _JSON = JSON;
    parsed = JSON.parse(tmp.text);
  }
  return parsed;
}
let closure_2 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const PriceTierTypes = arg1(dependencyMap[2]).PriceTierTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx");

export const updateGuildRoleSubscriptionGroupListing = function updateGuildRoleSubscriptionGroupListing(arg0, arg1, arg2) {
  return _updateGuildRoleSubscriptionGroupListing(...arguments);
};
export const createGuildRoleSubscriptionGroupListing = function createGuildRoleSubscriptionGroupListing(arg0, arg1) {
  return _createGuildRoleSubscriptionGroupListing(...arguments);
};
export const deleteGuildRoleSubscriptionGroupListing = function deleteGuildRoleSubscriptionGroupListing(arg0, groupListingId) {
  return _deleteGuildRoleSubscriptionGroupListing(...arguments);
};
export const createGuildRoleSubscriptionListing = function createGuildRoleSubscriptionListing(guildId, groupListingId, data) {
  return _createGuildRoleSubscriptionListing(...arguments);
};
export const updateGuildRoleSubscriptionListing = function updateGuildRoleSubscriptionListing(guildId, groupListingId, listingId, data) {
  return _updateGuildRoleSubscriptionListing(...arguments);
};
export const getGuildRoleSubscriptionGroupListingsForGuild = function getGuildRoleSubscriptionGroupListingsForGuild(guildId, arg1) {
  return _getGuildRoleSubscriptionGroupListingsForGuild(...arguments);
};
export const getGuildRoleSubscriptionsSettings = function getGuildRoleSubscriptionsSettings(guildId) {
  return _getGuildRoleSubscriptionsSettings(...arguments);
};
export const updateGuildRoleSubscriptionsSettings = function updateGuildRoleSubscriptionsSettings(arg0, arg1) {
  return _updateGuildRoleSubscriptionsSettings(...arguments);
};
export const getPriceTiers = function getPriceTiers(arg0) {
  return _getPriceTiers(...arguments);
};
export const getGuildRoleSubscriptionGroupListing = function getGuildRoleSubscriptionGroupListing(arg0, arg1, arg2) {
  return _getGuildRoleSubscriptionGroupListing(...arguments);
};
export const getGuildRoleSubscriptionGroupForSubscriptionPlan = function getGuildRoleSubscriptionGroupForSubscriptionPlan(planId) {
  return _getGuildRoleSubscriptionGroupForSubscriptionPlan(...arguments);
};
export const deleteGuildRoleSubscriptionListing = function deleteGuildRoleSubscriptionListing(arg0, arg1, listingId) {
  return _deleteGuildRoleSubscriptionListing(...arguments);
};
export const archiveGuildRoleSubscriptionListing = function archiveGuildRoleSubscriptionListing(arg0, arg1, arg2) {
  return _archiveGuildRoleSubscriptionListing(...arguments);
};
export const getGuildRoleSubscriptionTrials = function getGuildRoleSubscriptionTrials(guildId) {
  return _getGuildRoleSubscriptionTrials(...arguments);
};
export const updateGuildRoleSubscriptionsTrial = function updateGuildRoleSubscriptionsTrial(arg0, arg1, arg2) {
  return _updateGuildRoleSubscriptionsTrial(...arguments);
};
export const getGuildRoleSubscriptionTrialEligibility = function getGuildRoleSubscriptionTrialEligibility() {
  return _getGuildRoleSubscriptionTrialEligibility(...arguments);
};
export const getGuildMonetizationRestrictions = function getGuildMonetizationRestrictions(guildId, arg1) {
  return _getGuildMonetizationRestrictions(...arguments);
};
export const fetchHighlightedCreatorGuildDetails = function fetchHighlightedCreatorGuildDetails(arg0) {
  return _fetchHighlightedCreatorGuildDetails(...arguments);
};
