// Module ID: 3752
// Function ID: 28609
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3753, 3754, 44, 566, 686, 2]

// Module 3752 (_isNativeReflectConstruct)
import sortedInsert from "sortedInsert";
import invariant from "invariant";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { DefaultCreatorMonetizationRestrictions as closure_7 } from "CreatorMonetizationRestrictions";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function makeGroupListingIndexGuildTag(guild_id) {
  return "guild:" + guild_id;
}
function makeGroupListingIndexSubscriptionListingTag(arg0) {
  return "subscription_listing:" + arg0;
}
function makeListingIndexApplicationTag(application_id) {
  return "application:" + application_id;
}
function makeListingIndexPlanTag(id) {
  return "plan:" + id;
}
function _getSubscriptionGroupListingsForGuild(guildId) {
  return secondaryIndexMap.values(makeGroupListingIndexGuildTag(guildId));
}
function saveGroupListing(groupListing) {
  let done;
  const result = secondaryIndexMap.set(groupListing.id, groupListing);
  const result1 = map.set(groupListing.guild_id, groupListing.application_id);
  let prop = groupListing.subscription_listings;
  if (null == prop) {
    prop = [];
  }
  const tmp3Result = _createForOfIteratorHelperLoose(prop);
  let iter = tmp3Result();
  if (!iter.done) {
    do {
      let tmp5 = saveListing;
      let tmp6 = saveListing(iter.value);
      let iter2 = tmp3Result();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function saveListing(listing) {
  const result = secondaryIndexMap1.set(listing.id, listing);
}
function saveBenefitChannels(benefitChannels) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(benefitChannels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = map1;
      let result = map1.set(value.id, value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
const secondaryIndexMap = new require("sortedInsert").SecondaryIndexMap((guild_id) => {
  const items = [makeGroupListingIndexGuildTag(guild_id.guild_id), ...prop.map(makeGroupListingIndexSubscriptionListingTag)];
  prop = guild_id.subscription_listings_ids;
  return items;
}, (id) => id.id);
const secondaryIndexMap1 = new require("sortedInsert").SecondaryIndexMap((application_id) => {
  const items = [makeListingIndexApplicationTag(application_id.application_id), makeListingIndexPlanTag(application_id.subscription_plans[0].id)];
  return items;
}, (id) => id.id);
let closure_11 = {};
let set = new Set();
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
const map = new Map();
const map1 = new Map();
let closure_19 = [];
let tmp7 = ((Store) => {
  class GuildRoleSubscriptionsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildRoleSubscriptionsStore);
      obj = outer1_5(GuildRoleSubscriptionsStore);
      tmp2 = outer1_4;
      if (outer1_20()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildRoleSubscriptionsStore, Store);
  let obj = {
    key: "getSubscriptionGroupListingsForGuildFetchState",
    value(arg0) {
      let NOT_FETCHED = outer1_11[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = outer1_8.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "getDidFetchListingForSubscriptionPlanId",
    value(arg0) {
      return outer1_12.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getSubscriptionGroupListing",
    value(arg0) {
      return outer1_9.get(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSubscriptionGroupListingsForGuild",
    value(arg0) {
      return outer1_27(arg0);
    }
  };
  items[4] = {
    key: "getSubscriptionGroupListingForSubscriptionListing",
    value(arg0) {
      const values = outer1_9.values(outer1_24(arg0));
      GuildRoleSubscriptionsStore(outer1_1[7])(values.length <= 1, "Found multiple group listings for listing");
      return values[0];
    }
  };
  items[5] = {
    key: "getSubscriptionListing",
    value(arg0) {
      return outer1_10.get(arg0);
    }
  };
  items[6] = {
    key: "getSubscriptionListingsForGuild",
    value(arg0) {
      const first = this.getSubscriptionGroupListingsForGuild(arg0)[0];
      let application_id;
      if (null != first) {
        application_id = first.application_id;
      }
      if (null != application_id) {
        let values = outer1_10.values(outer1_25(application_id));
      } else {
        values = outer1_19;
      }
      return values;
    }
  };
  items[7] = {
    key: "getSubscriptionListingForPlan",
    value(arg0) {
      const values = outer1_10.values(outer1_26(arg0));
      GuildRoleSubscriptionsStore(outer1_1[7])(values.length <= 1, "Found multiple listings for plan");
      return values[0];
    }
  };
  items[8] = {
    key: "getSubscriptionSettings",
    value(arg0) {
      return outer1_13[arg0];
    }
  };
  items[9] = {
    key: "getSubscriptionTrial",
    value(arg0) {
      return outer1_14[arg0];
    }
  };
  items[10] = {
    key: "getMonetizationRestrictions",
    value(arg0) {
      return outer1_15[arg0];
    }
  };
  items[11] = {
    key: "getMonetizationRestrictionsFetchState",
    value(arg0) {
      let NOT_FETCHED = outer1_16[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = outer1_8.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  items[12] = {
    key: "getApplicationIdForGuild",
    value(arg0) {
      return outer1_17.get(arg0);
    }
  };
  items[13] = {
    key: "getBenefitChannel",
    value(arg0) {
      return outer1_18.get(arg0);
    }
  };
  return callback(GuildRoleSubscriptionsStore, items);
})(require("initialize").Store);
tmp7.displayName = "GuildRoleSubscriptionsStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    secondaryIndexMap.clear();
    secondaryIndexMap1.clear();
    let closure_11 = {};
    set.clear();
    let closure_13 = {};
    let closure_14 = {};
    let closure_15 = {};
    let closure_16 = {};
    map.clear();
    map1.clear();
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function handleUpdateSettings(settings) {
    settings = settings.settings;
    closure_13[settings.guild_id] = settings;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function handleFetchListings(guildId) {
    let iter4;
    guildId = guildId.guildId;
    closure_11[guildId] = obj.FETCHING;
    const tmp = _createForOfIteratorHelperLoose(_getSubscriptionGroupListingsForGuild(guildId));
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = secondaryIndexMap;
        let deleteResult = secondaryIndexMap.delete(value.id);
        let tmp4 = _createForOfIteratorHelperLoose;
        let tmp5 = _createForOfIteratorHelperLoose(value.subscription_listings_ids);
        let iter2 = tmp5();
        if (!iter2.done) {
          do {
            let tmp6 = secondaryIndexMap1;
            let deleteResult1 = secondaryIndexMap1.delete(iter2.value);
            let iter3 = tmp5();
            iter2 = iter3;
            done = iter3.done;
          } while (!done);
        }
        iter4 = tmp();
        iter = iter4;
      } while (!iter4.done);
    }
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function handleFetchListingsSuccess(guildId) {
    let benefitChannels;
    let done;
    let done2;
    let settings;
    let subscriptionTrials;
    guildId = guildId.guildId;
    closure_11[guildId] = obj.FETCHED;
    ({ benefitChannels, settings, subscriptionTrials } = guildId);
    const tmp = _createForOfIteratorHelperLoose(guildId.groupListings);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = saveGroupListing;
        let tmp3 = saveGroupListing(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    closure_13[guildId] = settings;
    const tmp4 = _createForOfIteratorHelperLoose(subscriptionTrials);
    let iter3 = tmp4();
    if (!iter3.done) {
      do {
        let value = iter3.value;
        let tmp5 = closure_14;
        closure_14[value.id] = value;
        let iter4 = tmp4();
        iter3 = iter4;
        done2 = iter4.done;
      } while (!done2);
    }
    saveBenefitChannels(benefitChannels);
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function handleFetchListingsFailure(guildId) {
    closure_11[guildId.guildId] = obj.FETCHED;
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function handleUpdateGroupListing(listing) {
    listing = listing.listing;
    saveGroupListing(listing);
    if (null != listing.benefit_channels) {
      saveBenefitChannels(listing.benefit_channels);
    }
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function handleDeleteGroupListing(groupListingId) {
    secondaryIndexMap.delete(groupListingId.groupListingId);
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function handleFetchListingForPlan(planId) {
    set.add(planId.planId);
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function handleFetchListingForPlanSuccess(groupListing) {
    saveGroupListing(groupListing.groupListing);
  },
  GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function handleCreateListing(listing) {
    saveListing(listing.listing);
    saveGroupListing(listing.groupListing);
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function handleUpdateListing(listing) {
    saveListing(listing.listing);
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function handleDeleteListing(listingId) {
    return secondaryIndexMap1.delete(listingId.listingId);
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function handleUpdateSubscriptionTrial(subscriptionTrial) {
    subscriptionTrial = subscriptionTrial.subscriptionTrial;
    closure_14[subscriptionTrial.id] = subscriptionTrial;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function handleFetchRestrictions(guildId) {
    closure_16[guildId.guildId] = obj.FETCHING;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function handleFetchRestrictionsSuccess(guildId) {
    guildId = guildId.guildId;
    closure_15[guildId] = guildId.restrictions;
    closure_16[guildId] = obj.FETCHED;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function handleFetchRestrictionsFailure(guildId) {
    guildId = guildId.guildId;
    closure_16[guildId] = obj.FETCHED;
    closure_15[guildId] = closure_7;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function handleFetchRestrictionsAborted(guildId) {
    closure_16[guildId.guildId] = obj.NOT_FETCHED;
  }
};
tmp7 = new tmp7(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx");

export default tmp7;
export const FetchState = obj;
