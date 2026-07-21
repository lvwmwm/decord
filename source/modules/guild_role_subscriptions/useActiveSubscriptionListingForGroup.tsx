// Module ID: 15141
// Function ID: 114261
// Name: _createForOfIteratorHelperLoose
// Dependencies: [992935936, 325386240, 79429632, 917831680, 131072, 468713472, 5, 57, 31]
// Exports: default

// Module 15141 (_createForOfIteratorHelperLoose)
import module_31 from "module_31";

function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const SubscriptionTypes = arg1(dependencyMap[4]).SubscriptionTypes;
const result = module_31.fileFinishedImporting("modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx");

export default function useActiveSubscriptionListingForGroup(arg0) {
  const arg1 = arg0;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => sku_id.getSubscriptions());
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores];
  const React = React.useMemo(() => {
    if (null == stateFromStores) {
      return {};
    } else {
      const obj = {};
      const _Object = Object;
      const values = Object.values(stateFromStores);
      let num = 0;
      if (0 < values.length) {
        do {
          let tmp3 = values[num];
          let tmp4 = closure_6;
          if (tmp3.type === closure_6.GUILD) {
            let tmp5 = closure_0;
            let tmp6 = closure_1;
            let obj2 = closure_0(closure_1[6]);
            obj[obj2.getRoleSubscriptionPlanId(tmp3)] = tmp3;
          }
          num = num + 1;
        } while (num < values.length);
      }
      return obj;
    }
  }, items1);
  const obj = arg1(dependencyMap[5]);
  const items2 = [closure_5];
  const activeSubscription = arg1(dependencyMap[5]).useStateFromStoresObject(items2, () => {
    let subscriptionGroupListing = null;
    if (null != arg0) {
      subscriptionGroupListing = activeSubscriptionPlanFromStore.getSubscriptionGroupListing(arg0);
    }
    let prop;
    if (null != subscriptionGroupListing) {
      prop = subscriptionGroupListing.subscription_listings_ids;
    }
    if (null == prop) {
      prop = [];
    }
    const tmp4Result = closure_7(prop);
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
          let tmp11 = closure_2;
          let tmp12 = closure_2[id];
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
  let closure_3 = id;
  let sku_id;
  if (null != first) {
    sku_id = first.sku_id;
  }
  closure_4 = sku_id;
  const obj2 = arg1(dependencyMap[5]);
  const items3 = [closure_3];
  const activeSubscriptionPlanFromStore = arg1(dependencyMap[5]).useStateFromStores(items3, () => {
    let value = null;
    if (null != id) {
      value = id.get(id);
    }
    return value;
  });
  closure_5 = activeSubscriptionPlanFromStore;
  let soft_deleted;
  if (null != activeSubscriptionListing) {
    soft_deleted = activeSubscriptionListing.soft_deleted;
  }
  const SubscriptionTypes = soft_deleted;
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
      const obj = arg0(stateFromStores[7]);
      const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(sku_id, undefined, undefined, soft_deleted);
    }
  }, items4);
  return { activeSubscription: activeSubscription.activeSubscription, activeSubscriptionListing, activeSubscriptionPlanFromStore };
};
