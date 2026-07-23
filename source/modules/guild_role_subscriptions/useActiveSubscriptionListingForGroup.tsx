// Module ID: 15264
// Function ID: 116473
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 3781, 3782, 3752, 653, 566, 14103, 5638, 2]
// Exports: default

// Module 15264 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { SubscriptionTypes } from "ME";

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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx");

export default function useActiveSubscriptionListingForGroup(arg0) {
  const _require = arg0;
  const items = [sku_id];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => sku_id.getSubscriptions());
  const items1 = [stateFromStores];
  React = React.useMemo(() => {
    if (null == stateFromStores) {
      return {};
    } else {
      const obj = {};
      const _Object = Object;
      const values = Object.values(stateFromStores);
      for (let num = 0; num < values.length; num = num + 1) {
        let tmp3 = values[num];
        let tmp4 = soft_deleted;
        if (tmp3.type === soft_deleted.GUILD) {
          let tmp5 = callback;
          let tmp6 = stateFromStores;
          let obj2 = callback(stateFromStores[6]);
          obj[obj2.getRoleSubscriptionPlanId(tmp3)] = tmp3;
        }
      }
      return obj;
    }
  }, items1);
  let obj = _require(stateFromStores[5]);
  const items2 = [activeSubscriptionPlanFromStore];
  const activeSubscription = _require(stateFromStores[5]).useStateFromStoresObject(items2, () => {
    let subscriptionGroupListing = null;
    if (null != closure_0) {
      subscriptionGroupListing = activeSubscriptionPlanFromStore.getSubscriptionGroupListing(closure_0);
    }
    let prop;
    if (null != subscriptionGroupListing) {
      prop = subscriptionGroupListing.subscription_listings_ids;
    }
    if (null == prop) {
      prop = [];
    }
    const tmp4Result = outer1_7(prop);
    const iter = tmp4Result();
    let iter2 = iter;
    let tmp6;
    let tmp7 = null;
    if (!iter.done) {
      while (true) {
        let tmp8 = activeSubscriptionPlanFromStore;
        let subscriptionListing = activeSubscriptionPlanFromStore.getSubscriptionListing(iter2.value);
        let id;
        if (null != subscriptionListing) {
          id = subscriptionListing.subscription_plans[0].id;
        }
        if (null == id) {
          let iter3 = tmp4Result();
          iter2 = iter3;
          tmp7 = null;
          if (iter3.done) {
            break;
          }
        } else {
          let tmp11 = table;
          let tmp12 = table[id];
          tmp6 = subscriptionListing;
          tmp7 = tmp12;
          if (null != tmp12) {
            break;
          }
        }
        break;
      }
    }
    const obj = { activeSubscription: tmp7, activeSubscriptionListing: tmp6 };
    return obj;
  });
  const activeSubscriptionListing = activeSubscription.activeSubscriptionListing;
  let first;
  if (null != activeSubscriptionListing) {
    first = activeSubscriptionListing.subscription_plans[0];
  }
  let id;
  if (null != first) {
    id = first.id;
  }
  sku_id = undefined;
  if (null != first) {
    sku_id = first.sku_id;
  }
  let obj2 = _require(stateFromStores[5]);
  const items3 = [id];
  activeSubscriptionPlanFromStore = _require(stateFromStores[5]).useStateFromStores(items3, () => {
    let value = null;
    if (null != id) {
      value = id.get(id);
    }
    return value;
  });
  let soft_deleted;
  if (null != activeSubscriptionListing) {
    soft_deleted = activeSubscriptionListing.soft_deleted;
  }
  const items4 = [activeSubscriptionPlanFromStore, sku_id, soft_deleted];
  const effect = React.useEffect(() => {
    let isFetchingForSKUResult = null != activeSubscriptionPlanFromStore;
    if (!isFetchingForSKUResult) {
      isFetchingForSKUResult = null == sku_id;
    }
    if (!isFetchingForSKUResult) {
      isFetchingForSKUResult = id.isFetchingForSKU(sku_id);
    }
    if (!isFetchingForSKUResult) {
      const obj = callback(stateFromStores[7]);
      const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(sku_id, undefined, undefined, soft_deleted);
    }
  }, items4);
  return { activeSubscription: activeSubscription.activeSubscription, activeSubscriptionListing, activeSubscriptionPlanFromStore };
};
