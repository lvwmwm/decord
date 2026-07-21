// Module ID: 13299
// Function ID: 101038
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: dismissApplicationSubscriptionExpirationNotice, fetchAllSubscriptionListingsDataForApplication, fetchEntitlementsForGuild

// Module 13299 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "SKUS_FETCH_SUCCESS", skus: arr.map(transformSubscriptionListingToSku) };
  obj.dispatch(obj);
  obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: arr.map(transformSubscriptionListingToStoreListing) };
  importDefault(dependencyMap[2]).dispatch(obj);
  const tmp3 = _createForOfIteratorHelperLoose(arr);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp4 = closure_0;
      let tmp5 = closure_2;
      let obj5 = closure_0(closure_2[2]);
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
  const _fetchAllSubscriptionListingsDataForApplication = obj;
  return obj(...arguments);
}
function _fetchEntitlementsForGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchEntitlementsForGuild = obj;
  return obj(...arguments);
}
function fetchSubscriptionListingForPlan() {
  return _fetchSubscriptionListingForPlan(...arguments);
}
function _fetchSubscriptionListingForPlan() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchSubscriptionListingForPlan = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
({ SKUProductLines: closure_4, SKUTypes: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx");

export const fetchAllSubscriptionListingsDataForApplication = function fetchAllSubscriptionListingsDataForApplication(arg0, id) {
  return _fetchAllSubscriptionListingsDataForApplication(...arguments);
};
export const fetchEntitlementsForGuild = function fetchEntitlementsForGuild() {
  return _fetchEntitlementsForGuild(...arguments);
};
export const dismissApplicationSubscriptionExpirationNotice = function dismissApplicationSubscriptionExpirationNotice(guildId) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId };
  obj.dispatch(obj);
};
export { fetchSubscriptionListingForPlan };
