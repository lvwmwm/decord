// Module ID: 13420
// Function ID: 103227
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 653, 686, 10817, 5638, 2]
// Exports: dismissApplicationSubscriptionExpirationNotice, fetchAllSubscriptionListingsDataForApplication, fetchEntitlementsForGuild

// Module 13420 (_createForOfIteratorHelperLoose)
import set from "set";
import ME from "ME";

let closure_4;
let closure_5;
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
function transformSubscriptionListingToSku(id) {
  return { id: id.id, type: constants2.SUBSCRIPTION, application_id: id.application_id, product_line: constants.APPLICATION, name: id.name, summary: "", description: id.description, flags: id.sku_flags, manifests: [], available_regions: [], legal_notice: "", deleted: id.soft_deleted, price_tier: 0, show_age_gate: false, restricted: false };
}
function transformSubscriptionListingToStoreListing(id) {
  const obj = { id: id.id, sku: transformSubscriptionListingToSku(id), summary: id.description, description: id.description };
  let prop = id.store_listing_benefits;
  if (null == prop) {
    prop = [];
  }
  obj.benefits = prop;
  ({ image_asset: obj.thumbnail, published: obj.published } = id);
  return obj;
}
function dispatchCompat(arr) {
  let done;
  let obj = importDefault(686);
  obj = { type: "SKUS_FETCH_SUCCESS", skus: arr.map(transformSubscriptionListingToSku) };
  obj.dispatch(obj);
  obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: arr.map(transformSubscriptionListingToStoreListing) };
  importDefault(686).dispatch(obj);
  const tmp3 = _createForOfIteratorHelperLoose(arr);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp4 = importDefault;
      let tmp5 = dependencyMap;
      let obj5 = importDefault(686);
      let obj1 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: value.id, subscriptionPlans: value.subscription_plans };
      let dispatchResult2 = obj5.dispatch(obj1);
      let iter2 = tmp3();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function _fetchAllSubscriptionListingsDataForApplication() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchEntitlementsForGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function fetchSubscriptionListingForPlan() {
  return _fetchSubscriptionListingForPlan(...arguments);
}
function _fetchSubscriptionListingForPlan() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ SKUProductLines: closure_4, SKUTypes: closure_5 } = ME);
const result = require("dispatcher").fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx");

export const fetchAllSubscriptionListingsDataForApplication = function fetchAllSubscriptionListingsDataForApplication(arg0, id) {
  return _fetchAllSubscriptionListingsDataForApplication(...arguments);
};
export const fetchEntitlementsForGuild = function fetchEntitlementsForGuild() {
  return _fetchEntitlementsForGuild(...arguments);
};
export const dismissApplicationSubscriptionExpirationNotice = function dismissApplicationSubscriptionExpirationNotice(guildId) {
  let obj = importDefault(686);
  obj = { type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId };
  obj.dispatch(obj);
};
export { fetchSubscriptionListingForPlan };
