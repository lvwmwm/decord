// Module ID: 5636
// Function ID: 48091
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 653, 5637, 686, 4451, 5638, 675, 4324, 4206, 664, 2]
// Exports: archiveSubscriptionListing, createSubscriptionGroupListing, createSubscriptionListing, deleteSubscriptionGroupListing, deleteSubscriptionListing, fetchAllSubscriptionListingsDataForGuild, fetchMonetizationRestrictions, fetchSubscriptionListingForPlan, fetchSubscriptionsSettings, updateSubscriptionGroupListing, updateSubscriptionListing, updateSubscriptionTrial, updateSubscriptionsSettings

// Module 5636 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _deletePaymentSource from "_deletePaymentSource";
import { AnalyticEvents } from "ME";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
async function _fetchSubscriptionsSettings(arg0, arg1) {
  const obj = outer2_2(outer2_3[3]);
  const tmp = yield outer2_2(outer2_3[3]).getGuildRoleSubscriptionsSettings(arg0);
  outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: tmp });
}
async function _updateSubscriptionsSettings(arg0, arg1, arg2) {
  const obj = outer2_2(outer2_3[3]);
  const tmp = yield outer2_2(outer2_3[3]).updateGuildRoleSubscriptionsSettings(arg0, arg1);
  outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: tmp });
}
async function _fetchAllSubscriptionListingsDataForGuild(arg0, arg1) {
  let iter = (function*(guildId) {
    let iter6;
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    let flag = obj.includeSoftDeleted;
    if (flag === undefined) {
      flag = true;
    }
    yield undefined;
    let obj1 = outer2_1(outer2_3[4]);
    obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS", guildId };
    obj1.dispatch(obj);
    obj = { includeSoftDeleted: flag };
    obj.countryCode = obj.countryCode;
    const items = [outer2_2(outer2_3[3]).getGuildRoleSubscriptionGroupListingsForGuild(guildId, obj), , , ];
    const obj4 = outer2_2(outer2_3[3]);
    items[1] = outer2_2(outer2_3[3]).getGuildRoleSubscriptionsSettings(guildId);
    const obj6 = outer2_2(outer2_3[3]);
    items[2] = outer2_2(outer2_3[3]).getGuildRoleSubscriptionTrials(guildId);
    const obj7 = outer2_2(outer2_3[3]);
    items[3] = outer2_0(outer2_3[5]).fetchSubscriptions();
    const tmp3 = outer2_4(yield Promise.all(items), 3);
    const first = tmp3[0];
    const tmp5 = outer2_7(first);
    const iter = tmp5();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp6 = iter2;
        let subscription_listings = iter2.value.subscription_listings;
        let tmp7 = subscription_listings;
        let tmp8 = outer2_7(null != subscription_listings ? subscription_listings : []);
        let tmp9 = tmp8;
        let iter3 = tmp8();
        let iter4 = iter3;
        if (!iter3.done) {
          do {
            let tmp10 = iter4;
            let value = iter4.value;
            let tmp11 = outer2_1;
            let tmp12 = outer2_3;
            let obj10 = outer2_1(outer2_3[4]);
            obj1 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: value.id, subscriptionPlans: value.subscription_plans };
            let dispatchResult1 = obj10.dispatch(obj1);
            let tmp14 = tmp8;
            let iter5 = tmp9();
            iter4 = iter5;
            done = iter5.done;
          } while (!done);
        }
        let tmp15 = tmp5;
        iter6 = tmp5();
        iter2 = iter6;
      } while (!iter6.done);
    }
    const obj8 = outer2_0(outer2_3[5]);
    const flatMapResult = first.flatMap((benefit_channels) => {
      benefit_channels = benefit_channels.benefit_channels;
      if (null == benefit_channels) {
        benefit_channels = [];
      }
      return benefit_channels;
    });
    outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS", guildId, groupListings: first, benefitChannels: flatMapResult, settings: tmp3[1], subscriptionTrials: tmp3[2] });
  })();
  iter.next();
  return iter;
}
async function _createSubscriptionGroupListing(arg0, arg1, arg2) {
  const tmp = yield outer2_2(outer2_3[3]).createGuildRoleSubscriptionGroupListing(arg0, arg1);
  const obj = outer2_2(outer2_3[3]);
  outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: tmp });
  return tmp;
}
async function _updateSubscriptionGroupListing(arg0, arg1, arg2, arg3) {
  const tmp = yield outer2_2(outer2_3[3]).updateGuildRoleSubscriptionGroupListing(arg0, arg1, arg2);
  const obj = outer2_2(outer2_3[3]);
  outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: tmp });
  return tmp;
}
async function _deleteSubscriptionGroupListing(arg0, arg1, arg2) {
  let obj = outer2_2(outer2_3[3]);
  yield obj.deleteGuildRoleSubscriptionGroupListing(arg0, arg1);
  obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING", groupListingId: arg1 };
  outer2_1(outer2_3[4]).dispatch(obj);
  return true;
}
async function _fetchSubscriptionListingForPlan(arg0, arg1) {
  let iter3;
  let obj = outer2_1(outer2_3[4]);
  obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: arg0 };
  obj.dispatch(obj);
  const tmp2 = yield outer2_2(outer2_3[3]).getGuildRoleSubscriptionGroupForSubscriptionPlan(arg0);
  const obj3 = outer2_2(outer2_3[3]);
  outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: tmp2 });
  let prop = tmp2.subscription_listings;
  if (null == prop) {
    prop = [];
  }
  const tmp4Result = outer2_7(prop);
  const iter = tmp4Result();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      if (value.subscription_plans[0].id === arg0) {
        let tmp6 = outer2_2;
        let tmp7 = outer2_3;
        let obj5 = outer2_2(outer2_3[6]);
        let tmp8 = obj5;
        let flag = true;
        let tmp9 = yield obj5.fetchSubscriptionPlansForSKU(value.id, undefined, undefined, true);
      }
      iter3 = tmp4Result();
      iter2 = iter3;
    } while (!iter3.done);
  }
}
async function _deleteSubscriptionListing(arg0, arg1, arg2, arg3) {
  let obj = outer2_2(outer2_3[3]);
  yield obj.deleteGuildRoleSubscriptionListing(arg0, arg1, arg2);
  obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING", listingId: arg2 };
  outer2_1(outer2_3[4]).dispatch(obj);
}
async function _archiveSubscriptionListing(arg0, arg1, arg2, arg3) {
  const obj = outer2_2(outer2_3[3]);
  const tmp = yield outer2_2(outer2_3[3]).archiveGuildRoleSubscriptionListing(arg0, arg1, arg2);
  outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: tmp });
}
async function _updateSubscriptionTrial(arg0, arg1, arg2, arg3) {
  const obj = outer2_2(outer2_3[3]);
  const tmp = yield outer2_2(outer2_3[3]).updateGuildRoleSubscriptionsTrial(arg0, arg1, arg2);
  outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL", subscriptionTrial: tmp });
}
function fetchGuildRoleSubscriptionGroupListing() {
  return _fetchGuildRoleSubscriptionGroupListing(...arguments);
}
async function _fetchGuildRoleSubscriptionGroupListing(arg0, arg1, arg2) {
  let iter = (function*(arg0, arg1) {
    let obj = arg2;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const tmp2 = yield outer2_2(outer2_3[3]).getGuildRoleSubscriptionGroupListing(arg0, arg1, obj);
    const obj2 = outer2_2(outer2_3[3]);
    outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: tmp2 });
    return tmp2;
  })();
  iter.next();
  return iter;
}
async function _createSubscriptionListing(arg0, arg1) {
  let iter = (function*(arg0) {
    let analyticsContext;
    let data;
    let groupListingId;
    let guildId;
    let onBeforeDispatchNewListing;
    ({ guildId, groupListingId, analyticsContext, onBeforeDispatchNewListing, data } = arg0);
    yield undefined;
    let obj = outer2_2(outer2_3[3]);
    const tmp2 = yield obj.createGuildRoleSubscriptionListing(guildId, groupListingId, data);
    obj = { role_subscription_listing_id: tmp2.id, role_subscription_group_listing_id: groupListingId, template_name: analyticsContext.templateCategory, has_change_from_template: analyticsContext.hasChangeFromTemplate };
    const obj2 = outer2_1(outer2_3[7]);
    const merged = Object.assign(outer2_0(outer2_3[8]).collectGuildAnalyticsMetadata(guildId));
    obj2.track(outer2_6.ROLE_SUBSCRIPTION_LISTING_CREATED, obj);
    yield outer2_19(guildId, groupListingId, { includeArchivedListings: true });
    if (null != onBeforeDispatchNewListing) {
      const result = onBeforeDispatchNewListing(tmp2);
    }
    const obj4 = outer2_0(outer2_3[8]);
    outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: tmp2 });
    return tmp2;
  })();
  iter.next();
  return iter;
}
async function _updateSubscriptionListing(arg0, arg1) {
  let iter = (function*(arg0) {
    let data;
    let groupListingId;
    let guildId;
    let listingId;
    ({ guildId, listingId, groupListingId, data } = arg0);
    yield undefined;
    const tmp2 = yield outer2_2(outer2_3[3]).updateGuildRoleSubscriptionListing(guildId, groupListingId, listingId, data);
    const obj = outer2_2(outer2_3[3]);
    outer2_1(outer2_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: tmp2 });
    yield outer2_19(guildId, groupListingId, { includeArchivedListings: true });
    return tmp2;
  })();
  iter.next();
  return iter;
}
async function _fetchMonetizationRestrictions(arg0, arg1) {
  let iter = (function*(guildId) {
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    const signal = obj.signal;
    yield undefined;
    while (true) {
      let tmp2 = signal;
      let tmp3 = null;
      if (null == signal) {
        break;
      } else {
        let tmp4 = signal;
        if (!signal.aborted) {
          break;
        } else {
          let tmp16 = outer2_1;
          let tmp17 = outer2_3;
          let num2 = 4;
          let obj8 = outer2_1(outer2_3[4]);
          obj = {};
          let str3 = "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED";
          obj.type = "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED";
          let tmp18 = guildId;
          obj.guildId = guildId;
          let dispatchResult = obj8.dispatch(obj);
        }
      }
      let tmp5 = outer2_1;
      let tmp6 = outer2_3;
      let num = 4;
      let obj1 = outer2_1(outer2_3[4]);
      obj = {};
      let str = "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS";
      obj.type = "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS";
      let tmp7 = guildId;
      obj.guildId = guildId;
      let dispatchResult1 = obj1.dispatch(obj);
      let tmp9 = outer2_2;
      let obj4 = outer2_2(outer2_3[3]);
      obj1 = {};
      let tmp10 = signal;
      obj1.signal = signal;
      let restrictions = yield obj4.getGuildMonetizationRestrictions(guildId, obj1).restrictions;
      let tmp11 = restrictions;
      let tmp12 = outer2_1;
      let tmp13 = outer2_3;
      let obj6 = outer2_1(outer2_3[4]);
      let obj2 = {};
      let str2 = "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS";
      obj2.type = "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS";
      let tmp14 = guildId;
      obj2.guildId = guildId;
      obj2.restrictions = null != restrictions ? restrictions : [];
      let dispatchResult2 = obj6.dispatch(obj2);
      let flag = true;
      while (true) {
        break;
      }
    }
  })();
  iter.next();
  return iter;
}
let result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx");

export const fetchSubscriptionsSettings = function fetchSubscriptionsSettings(id) {
  return _fetchSubscriptionsSettings(...arguments);
};
export const updateSubscriptionsSettings = function updateSubscriptionsSettings(HeaderActionButton, arg1) {
  return _updateSubscriptionsSettings(...arguments);
};
export const fetchAllSubscriptionListingsDataForGuild = function fetchAllSubscriptionListingsDataForGuild(closure_0, arg1) {
  return _fetchAllSubscriptionListingsDataForGuild(...arguments);
};
export const createSubscriptionGroupListing = function createSubscriptionGroupListing() {
  return _createSubscriptionGroupListing(...arguments);
};
export const updateSubscriptionGroupListing = function updateSubscriptionGroupListing(arg0, arg1, arg2) {
  return _updateSubscriptionGroupListing(...arguments);
};
export const deleteSubscriptionGroupListing = function deleteSubscriptionGroupListing() {
  return _deleteSubscriptionGroupListing(...arguments);
};
export const fetchSubscriptionListingForPlan = function fetchSubscriptionListingForPlan() {
  return _fetchSubscriptionListingForPlan(...arguments);
};
export const deleteSubscriptionListing = function deleteSubscriptionListing() {
  return _deleteSubscriptionListing(...arguments);
};
export const archiveSubscriptionListing = function archiveSubscriptionListing() {
  return _archiveSubscriptionListing(...arguments);
};
export const updateSubscriptionTrial = function updateSubscriptionTrial(guildId, id, arg2) {
  return _updateSubscriptionTrial(...arguments);
};
export { fetchGuildRoleSubscriptionGroupListing };
export const createSubscriptionListing = function createSubscriptionListing(arg0) {
  return _createSubscriptionListing(...arguments);
};
export const updateSubscriptionListing = function updateSubscriptionListing(arg0) {
  return _updateSubscriptionListing(...arguments);
};
export const fetchMonetizationRestrictions = function fetchMonetizationRestrictions(id, arg1) {
  return _fetchMonetizationRestrictions(...arguments);
};
