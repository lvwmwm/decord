// Module ID: 5637
// Function ID: 48152
// Name: _updateGuildRoleSubscriptionGroupListing
// Dependencies: [5, 653, 482, 507, 4029, 2]
// Exports: archiveGuildRoleSubscriptionListing, createGuildRoleSubscriptionGroupListing, createGuildRoleSubscriptionListing, deleteGuildRoleSubscriptionGroupListing, deleteGuildRoleSubscriptionListing, fetchHighlightedCreatorGuildDetails, getGuildMonetizationRestrictions, getGuildRoleSubscriptionGroupForSubscriptionPlan, getGuildRoleSubscriptionGroupListing, getGuildRoleSubscriptionGroupListingsForGuild, getGuildRoleSubscriptionTrialEligibility, getGuildRoleSubscriptionTrials, getGuildRoleSubscriptionsSettings, getPriceTiers, updateGuildRoleSubscriptionGroupListing, updateGuildRoleSubscriptionListing, updateGuildRoleSubscriptionsSettings, updateGuildRoleSubscriptionsTrial

// Module 5637 (_updateGuildRoleSubscriptionGroupListing)
import set from "set";
import { Endpoints } from "ME";
import { PriceTierTypes } from "sum";

const require = arg1;
async function _updateGuildRoleSubscriptionGroupListing(arg0, arg1, arg2, arg3) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0, arg1), body: arg2, rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.patch(obj).body;
}
async function _createGuildRoleSubscriptionGroupListing(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0), body: arg1, rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.post(obj).body;
}
async function _deleteGuildRoleSubscriptionGroupListing(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0, arg1), rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  yield HTTP.del(obj);
}
async function _createGuildRoleSubscriptionListing(arg0, arg1, arg2, arg3) {
  let iter = (function*(arg0, arg1, priceTier) {
    let obj = Object.create(null);
    obj.priceTier = 0;
    const merged = Object.assign(priceTier, obj);
    yield undefined;
    const HTTP = outer2_0(outer2_1[3]).HTTP;
    obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(arg0, arg1) };
    obj = {};
    const merged1 = Object.assign(merged);
    obj["price_tier"] = priceTier.priceTier;
    obj.body = obj;
    obj.rejectWithError = outer2_0(outer2_1[3]).rejectWithMigratedError();
    return yield HTTP.post(obj).body;
  })();
  iter.next();
  return iter;
}
async function _updateGuildRoleSubscriptionListing(arg0, arg1, arg2, arg3, arg4) {
  let iter = (function*(arg0, arg1, arg2, priceTier) {
    let obj = Object.create(null);
    obj.priceTier = 0;
    const merged = Object.assign(priceTier, obj);
    yield undefined;
    const HTTP = outer2_0(outer2_1[3]).HTTP;
    obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(arg0, arg1, arg2) };
    obj = {};
    const merged1 = Object.assign(merged);
    obj["price_tier"] = priceTier.priceTier;
    obj.body = obj;
    obj.rejectWithError = outer2_0(outer2_1[3]).rejectWithMigratedError();
    return yield HTTP.patch(obj).body;
  })();
  iter.next();
  return iter;
}
async function _getGuildRoleSubscriptionGroupListingsForGuild(arg0, arg1) {
  let iter = (function*(arg0) {
    let tmp = arg1;
    if (tmp === undefined) {
      let obj = { includeSoftDeleted: false };
      tmp = obj;
    }
    yield undefined;
    obj = {};
    ({ includeSoftDeleted: obj2.include_soft_deleted, countryCode: obj2.country_code } = tmp);
    const HTTP = outer2_0(outer2_1[3]).HTTP;
    obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0), query: obj, rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
    return yield HTTP.get(obj).body;
  })();
  iter.next();
  return iter;
}
async function _getGuildRoleSubscriptionsSettings(arg0, arg1) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(arg0), rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _updateGuildRoleSubscriptionsSettings(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(arg0), body: arg1, rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.patch(obj).body;
}
async function _getPriceTiers(arg0, arg1) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  obj = { url: outer2_3.PRICE_TIERS, query: obj };
  obj = { price_tier_type: outer2_4.GUILD_ROLE_SUBSCRIPTIONS, guild_id: arg0, rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _getGuildRoleSubscriptionGroupListing(arg0, arg1, arg2) {
  let iter = (function*(arg0, arg1) {
    let obj = arg2;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = outer2_0(outer2_1[3]).HTTP;
    obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(arg0, arg1), query: obj };
    obj = {};
    ({ includeDraftListings: obj3.include_draft_listings, includeArchivedListings: obj3.include_archived_listings } = obj);
    obj.rejectWithError = outer2_0(outer2_1[3]).rejectWithMigratedError();
    return yield HTTP.get(obj).body;
  })();
  iter.next();
  return iter;
}
async function _getGuildRoleSubscriptionGroupForSubscriptionPlan(arg0, arg1) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(arg0), rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _deleteGuildRoleSubscriptionListing(arg0, arg1, arg2, arg3) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(arg0, arg1, arg2), rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  yield HTTP.del(obj);
}
async function _archiveGuildRoleSubscriptionListing(arg0, arg1, arg2, arg3) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(arg0, arg1, arg2), rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.post(obj).body;
}
async function _getGuildRoleSubscriptionTrials(arg0, arg1) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_TRIALS(arg0), rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _updateGuildRoleSubscriptionsTrial(arg0, arg1, arg2, arg3) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(arg0, arg1), body: arg2, rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.patch(obj).body;
}
async function _getGuildRoleSubscriptionTrialEligibility(arg0, arg1, arg2, arg3) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(arg0, arg1, arg2), rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
  return yield HTTP.get(obj).body;
}
async function _getGuildMonetizationRestrictions(arg0, arg1) {
  let iter = (function*(arg0) {
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = outer2_0(outer2_1[3]).HTTP;
    obj = { url: outer2_3.CREATOR_MONETIZATION_RESTRICTIONS(arg0), signal: obj.signal, rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
    return yield HTTP.get(obj).body;
  })();
  iter.next();
  return iter;
}
async function _fetchHighlightedCreatorGuildDetails(arg0, arg1) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  const obj = { url: outer2_3.GUILD_DISCOVERY_SLUG(arg0), rejectWithError: outer2_0(outer2_1[3]).rejectWithMigratedError() };
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
const result = require("sum").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx");

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
export const getPriceTiers = function getPriceTiers(outer1_0) {
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
