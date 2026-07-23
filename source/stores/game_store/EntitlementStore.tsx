// Module ID: 6637
// Function ID: 50924
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4168, 4165, 4175, 653, 1851, 22, 4174, 656, 566, 686, 2]

// Module 6637 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_13 } from "GuildFeatures";
import set from "_possibleConstructorReturn";

let closure_11;
let closure_12;
const require = arg1;
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
function addEntitlement(value) {
  closure_14[value.id] = closure_8.createFromServer(value);
  if (null == dependencyMap[value.sku_id]) {
    const _Set = Set;
    const set = new Set();
    dependencyMap[value.sku_id] = set;
  }
  if (null == dependencyMap2[value.application_id]) {
    const _Set2 = Set;
    const set1 = new Set();
    dependencyMap2[value.application_id] = set1;
  }
  if (null != value.subscription_id) {
    if (null == dependencyMap3[value.subscription_id]) {
      const _Set3 = Set;
      const set2 = new Set();
      dependencyMap3[value.subscription_id] = set2;
    }
    dependencyMap3[value.subscription_id].add(value.id);
    const obj = dependencyMap3[value.subscription_id];
  }
  dependencyMap2[value.application_id].add(value.id);
  dependencyMap[value.sku_id].add(value.id);
}
function addGiftEntitlement(id) {
  closure_15[id.id] = closure_8.createFromServer(id);
}
function handlePurchaseSuccess(entitlements) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(entitlements.entitlements);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = addEntitlement;
      let tmp3 = addEntitlement(iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function handleEntitlementUpdate(entitlement) {
  addEntitlement(entitlement.entitlement);
}
({ EntitlementSourceTypes: closure_11, EntitlementTypes: closure_12 } = ME);
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let c18 = false;
let c19 = false;
let c20 = false;
let set = new Set();
let set1 = new Set();
let closure_23 = {};
let tmp5 = ((Store) => {
  class EntitlementStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, EntitlementStore);
      obj = outer1_6(EntitlementStore);
      tmp2 = outer1_5;
      if (outer1_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(EntitlementStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [outer1_9];
      this.syncWith(items, () => true);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "get",
    value(arg0) {
      return outer1_14[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getGiftable",
    value() {
      return outer1_1(outer1_2[10]).values(outer1_15);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getForApplication",
    value(arg0) {
      let done;
      if (null == outer1_17[arg0]) {
        return null;
      } else {
        const _Set = Set;
        const set = new Set();
        const tmp7 = outer1_25(tmp);
        let iter = tmp7();
        if (!iter.done) {
          do {
            let tmp8 = outer1_14;
            let addResult = set.add(outer1_14[iter.value]);
            let iter2 = tmp7();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        return set;
      }
    }
  };
  items[4] = {
    key: "getForSku",
    value(arg0) {
      let done;
      if (null == outer1_16[arg0]) {
        return null;
      } else {
        const _Set = Set;
        const set = new Set();
        const tmp7 = outer1_25(tmp);
        let iter = tmp7();
        if (!iter.done) {
          do {
            let tmp8 = outer1_14;
            let addResult = set.add(outer1_14[iter.value]);
            let iter2 = tmp7();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        return set;
      }
    }
  };
  items[5] = {
    key: "fetchingAllEntitlements",
    get() {
      return outer1_18;
    }
  };
  items[6] = {
    key: "fetchedAllEntitlements",
    get() {
      return outer1_19;
    }
  };
  items[7] = {
    key: "fetchedEndedEntitlements",
    get() {
      return outer1_20;
    }
  };
  items[8] = {
    key: "applicationIdsFetching",
    get() {
      return outer1_21;
    }
  };
  items[9] = {
    key: "applicationIdsFetched",
    get() {
      return outer1_22;
    }
  };
  items[10] = {
    key: "isFetchingForApplication",
    value(arg0) {
      let fetchingAllEntitlements = this.fetchingAllEntitlements;
      if (!fetchingAllEntitlements) {
        let hasItem = null != arg0;
        if (hasItem) {
          const applicationIdsFetching = tmp.applicationIdsFetching;
          hasItem = applicationIdsFetching.has(arg0);
        }
        fetchingAllEntitlements = hasItem;
      }
      return fetchingAllEntitlements;
    }
  };
  items[11] = {
    key: "isFetchedForApplication",
    value(arg0) {
      let fetchedAllEntitlements = this.fetchedAllEntitlements;
      if (!fetchedAllEntitlements) {
        let hasItem = null != arg0;
        if (hasItem) {
          const applicationIdsFetched = tmp.applicationIdsFetched;
          hasItem = applicationIdsFetched.has(arg0);
        }
        fetchedAllEntitlements = hasItem;
      }
      return fetchedAllEntitlements;
    }
  };
  items[12] = {
    key: "getForSubscription",
    value(arg0) {
      let done;
      if (null == outer1_23[arg0]) {
        return null;
      } else {
        const _Set = Set;
        const set = new Set();
        const tmp7 = outer1_25(tmp);
        let iter = tmp7();
        if (!iter.done) {
          do {
            let tmp8 = outer1_14;
            let addResult = set.add(outer1_14[iter.value]);
            let iter2 = tmp7();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        return set;
      }
    }
  };
  items[13] = {
    key: "isEntitledToSku",
    value(arg0, arg1, arg2) {
      let tmp = arg3;
      if (arg3 === undefined) {
        tmp = null;
      }
      if (null != outer1_16[arg1]) {
        const tmp4 = outer1_25(tmp2);
        let iter = tmp4();
        if (!iter.done) {
          while (true) {
            let tmp5 = outer1_14;
            let obj = outer1_14[iter.value];
            if (null != obj) {
              let tmp6 = outer1_10;
              if (obj.isValid(arg0, outer1_10, tmp)) {
                break;
              }
            }
            let iter2 = tmp4();
            iter = iter2;
          }
          return true;
        }
      }
      if (outer1_22.has(arg2)) {
        return false;
      } else {
        if (null != tmp) {
          let libraryApplication = outer1_9.getLibraryApplication(arg2, tmp);
        } else {
          libraryApplication = outer1_9.getActiveLibraryApplication(arg2);
        }
        let tmp10 = null == libraryApplication || libraryApplication.sku.id !== arg1;
        if (!tmp10) {
          tmp10 = !EntitlementStore(outer1_2[11]).isUserEntitledToLibraryApplication(libraryApplication);
          const obj2 = EntitlementStore(outer1_2[11]);
        }
        let tmp13 = !tmp10;
        if (tmp10) {
          tmp13 = null;
        }
        return tmp13;
      }
    }
  };
  items[14] = {
    key: "hasFetchedForApplicationIds",
    value(arr) {
      return arr.every((arg0) => outer2_22.has(arg0));
    }
  };
  items[15] = {
    key: "getFractionalPremium",
    value() {
      let obj = arg0;
      const self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.includeEnded;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = obj.excludeReverseTrial;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let date;
      const items = [];
      date = new Date();
      const forApplication = self.getForApplication(outer1_13);
      if (null != forApplication) {
        const item = forApplication.forEach((endsAt) => {
          let tmp = null != endsAt.endsAt;
          if (tmp) {
            tmp = endsAt.endsAt < date;
          }
          let tmp4 = endsAt.type !== outer2_12.FRACTIONAL_REDEMPTION;
          if (!tmp4) {
            if (tmp) {
              tmp = !flag;
            }
            tmp4 = tmp;
          }
          if (!tmp4) {
            tmp4 = tmp3;
          }
          if (!tmp4) {
            items.push(endsAt);
          }
        });
      }
      return items;
    }
  };
  items[16] = {
    key: "isFractionalPremiumActive",
    value() {
      let obj = arg0;
      const self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.excludeReverseTrial;
      if (flag === undefined) {
        flag = false;
      }
      obj = { includeEnded: false, excludeReverseTrial: flag };
      return self.getFractionalPremium(obj).length > 0;
    }
  };
  items[17] = {
    key: "getUnactivatedFractionalPremiumUnits",
    value() {
      const items = [];
      const forApplication = this.getForApplication(outer1_13);
      if (null != forApplication) {
        const item = forApplication.forEach((skuId) => {
          const ACTIVE_FRACTIONAL_PREMIUM_SKUS = EntitlementStore(outer2_2[12]).FractionalPremiumSKUsSets.ACTIVE_FRACTIONAL_PREMIUM_SKUS;
          if (tmp) {
            items.push(skuId);
          }
        });
      }
      return items;
    }
  };
  return callback(EntitlementStore, items);
})(require("initialize").Store);
tmp5.displayName = "EntitlementStore";
tmp5 = new tmp5(require("dispatcher"), {
  ENTITLEMENT_FETCH_APPLICATION_START: function handleEntitlementApplicationStart(applicationId) {
    set.add(applicationId.applicationId);
  },
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function handleEntitlementApplicationFetch(applicationId) {
    let iter2;
    applicationId = applicationId.applicationId;
    set.delete(applicationId);
    set1.add(applicationId);
    const tmp3 = _createForOfIteratorHelperLoose(applicationId.entitlements);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (true !== value.consumed) {
          let tmp4 = addEntitlement;
          let tmp5 = addEntitlement(value);
        }
        iter2 = tmp3();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  ENTITLEMENT_FETCH_APPLICATION_FAIL: function handleEntitlementApplicationFail() {

  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function handleEntitlementsGiftableFetchSuccess(entitlements) {
    entitlements = entitlements.entitlements;
    let closure_15 = {};
    const item = entitlements.forEach(addGiftEntitlement);
  },
  SKU_PURCHASE_SUCCESS: handlePurchaseSuccess,
  VIRTUAL_CURRENCY_REDEEM_SUCCESS: handlePurchaseSuccess,
  LIBRARY_FETCH_SUCCESS: function handleLibraryFetchSuccess(libraryApplications) {
    let iter6;
    const tmp = _createForOfIteratorHelperLoose(libraryApplications.libraryApplications);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        if (null != value.entitlements) {
          let tmp2 = _createForOfIteratorHelperLoose;
          let tmp3 = _createForOfIteratorHelperLoose(value.entitlements);
          let iter3 = tmp3();
          let iter4 = iter3;
          let tmp4 = iter3;
          let tmp5 = tmp3;
          if (!iter3.done) {
            do {
              let tmp6 = addEntitlement;
              let tmp7 = addEntitlement(iter4.value);
              let iter5 = tmp3();
              iter4 = iter5;
              let tmp8 = iter5;
              let tmp9 = tmp3;
              done = iter5.done;
            } while (!done);
          }
        }
        iter6 = tmp();
        iter2 = iter6;
      } while (!iter6.done);
    }
  },
  ENTITLEMENT_CREATE: handleEntitlementUpdate,
  ENTITLEMENT_UPDATE: handleEntitlementUpdate,
  ENTITLEMENT_DELETE: function handleEntitlementDelete(entitlement) {
    entitlement = entitlement.entitlement;
    delete tmp2[tmp];
    if (null != dependencyMap2[entitlement.application_id]) {
      obj.delete(entitlement.id);
    }
    if (null != dependencyMap[entitlement.sku_id]) {
      obj2.delete(entitlement.id);
    }
    if (null != entitlement.subscription_id) {
      if (null != dependencyMap3[entitlement.subscription_id]) {
        obj3.delete(entitlement.id);
      }
    }
  },
  LOGOUT: function handleLogout() {
    let closure_14 = {};
    let closure_16 = {};
    let closure_17 = {};
    let c18 = false;
    let c19 = false;
    let c20 = false;
    const set = new Set();
    const set1 = new Set();
  },
  ENTITLEMENTS_FETCH_FOR_USER_START: function handleUserEntitlementsStart() {
    let c18 = true;
  },
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function handleUserEntitlementsSuccess(excludeEnded) {
    let done;
    let c19 = true;
    let c18 = false;
    let closure_20 = !excludeEnded.excludeEnded;
    const tmp = _createForOfIteratorHelperLoose(excludeEnded.entitlements);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = addEntitlement;
        let tmp3 = addEntitlement(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: function handleUserEntitlementsFail() {
    let c19 = false;
    let c18 = false;
    let c20 = false;
  }
});
let result = set.fileFinishedImporting("stores/game_store/EntitlementStore.tsx");

export default tmp5;
