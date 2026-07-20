// Module ID: 6626
// Function ID: 50827
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6626 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function addEntitlement(entitlement) {
  closure_14[entitlement.id] = closure_8.createFromServer(entitlement);
  if (null == closure_16[entitlement.sku_id]) {
    const _Set = Set;
    const set = new Set();
    closure_16[entitlement.sku_id] = set;
  }
  if (null == closure_17[entitlement.application_id]) {
    const _Set2 = Set;
    const set1 = new Set();
    closure_17[entitlement.application_id] = set1;
  }
  if (null != entitlement.subscription_id) {
    if (null == closure_23[entitlement.subscription_id]) {
      const _Set3 = Set;
      const set2 = new Set();
      closure_23[entitlement.subscription_id] = set2;
    }
    closure_23[entitlement.subscription_id].add(entitlement.id);
    const obj = closure_23[entitlement.subscription_id];
  }
  closure_17[entitlement.application_id].add(entitlement.id);
  closure_16[entitlement.sku_id].add(entitlement.id);
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
      let tmp2 = closure_27;
      let tmp3 = closure_27(iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function handleEntitlementUpdate(entitlement) {
  addEntitlement(entitlement.entitlement);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ EntitlementSourceTypes: closure_11, EntitlementTypes: closure_12 } = arg1(dependencyMap[8]));
let closure_13 = arg1(dependencyMap[9]).PREMIUM_SUBSCRIPTION_APPLICATION;
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let closure_18 = false;
let closure_19 = false;
let closure_20 = false;
const set = new Set();
const set1 = new Set();
let closure_23 = {};
let tmp5 = (Store) => {
  class EntitlementStore {
    constructor() {
      self = this;
      tmp = closure_3(this, EntitlementStore);
      obj = closure_6(EntitlementStore);
      tmp2 = closure_5;
      if (closure_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = EntitlementStore;
  callback2(EntitlementStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [closure_9];
      this.syncWith(items, () => true);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "get",
    value(arg0) {
      return closure_14[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getGiftable",
    value() {
      return callback(closure_2[10]).values(closure_15);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getForApplication",
    value(arg0) {
      let done;
      if (null == closure_17[arg0]) {
        return null;
      } else {
        const _Set = Set;
        const set = new Set();
        const tmp7 = callback5(tmp);
        let iter = tmp7();
        if (!iter.done) {
          do {
            let tmp8 = closure_14;
            let addResult = set.add(closure_14[iter.value]);
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
      if (null == closure_16[arg0]) {
        return null;
      } else {
        const _Set = Set;
        const set = new Set();
        const tmp7 = callback5(tmp);
        let iter = tmp7();
        if (!iter.done) {
          do {
            let tmp8 = closure_14;
            let addResult = set.add(closure_14[iter.value]);
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
      return closure_18;
    }
  };
  items[6] = {
    key: "fetchedAllEntitlements",
    get() {
      return closure_19;
    }
  };
  items[7] = {
    key: "fetchedEndedEntitlements",
    get() {
      return closure_20;
    }
  };
  items[8] = {
    key: "applicationIdsFetching",
    get() {
      return closure_21;
    }
  };
  items[9] = {
    key: "applicationIdsFetched",
    get() {
      return closure_22;
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
      if (null == closure_23[arg0]) {
        return null;
      } else {
        const _Set = Set;
        const set = new Set();
        const tmp7 = callback5(tmp);
        let iter = tmp7();
        if (!iter.done) {
          do {
            let tmp8 = closure_14;
            let addResult = set.add(closure_14[iter.value]);
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
      if (null != closure_16[arg1]) {
        const tmp4 = callback5(tmp2);
        let iter = tmp4();
        if (!iter.done) {
          while (true) {
            let tmp5 = closure_14;
            let obj = closure_14[iter.value];
            if (null != obj) {
              let tmp6 = closure_10;
              if (obj.isValid(arg0, closure_10, tmp)) {
                break;
              }
            }
            let iter2 = tmp4();
            iter = iter2;
          }
          return true;
        }
      }
      if (set.has(arg2)) {
        return false;
      } else {
        if (null != tmp) {
          let libraryApplication = store.getLibraryApplication(arg2, tmp);
        } else {
          libraryApplication = store.getActiveLibraryApplication(arg2);
        }
        let tmp10 = null == libraryApplication || libraryApplication.sku.id !== arg1;
        if (!tmp10) {
          tmp10 = !EntitlementStore(closure_2[11]).isUserEntitledToLibraryApplication(libraryApplication);
          const obj2 = EntitlementStore(closure_2[11]);
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
      return arr.every((arg0) => set.has(arg0));
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
      const EntitlementStore = flag;
      let flag2 = obj.excludeReverseTrial;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let date;
      const items = [];
      date = new Date();
      const forApplication = self.getForApplication(closure_13);
      if (null != forApplication) {
        const item = forApplication.forEach((endsAt) => {
          let tmp = null != endsAt.endsAt;
          if (tmp) {
            tmp = endsAt.endsAt < date;
          }
          let tmp4 = endsAt.type !== constants2.FRACTIONAL_REDEMPTION;
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
      const EntitlementStore = items;
      const forApplication = this.getForApplication(closure_13);
      if (null != forApplication) {
        const item = forApplication.forEach((skuId) => {
          const ACTIVE_FRACTIONAL_PREMIUM_SKUS = items(closure_2[12]).FractionalPremiumSKUsSets.ACTIVE_FRACTIONAL_PREMIUM_SKUS;
          if (tmp) {
            items.push(skuId);
          }
        });
      }
      return items;
    }
  };
  return callback(EntitlementStore, items);
}(importAll(dependencyMap[13]).Store);
tmp5.displayName = "EntitlementStore";
tmp5 = new tmp5(importDefault(dependencyMap[14]), {
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
          let tmp4 = closure_27;
          let tmp5 = closure_27(value);
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
          let tmp2 = closure_25;
          let tmp3 = closure_25(value.entitlements);
          let iter3 = tmp3();
          let iter4 = iter3;
          let tmp4 = iter3;
          let tmp5 = tmp3;
          if (!iter3.done) {
            do {
              let tmp6 = closure_27;
              let tmp7 = closure_27(iter4.value);
              let iter5 = tmp3();
              iter4 = iter5;
              let tmp8 = iter5;
              let tmp9 = tmp3;
              let done = iter5.done;
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
    delete r3[r1];
    if (null != closure_17[entitlement.application_id]) {
      obj.delete(entitlement.id);
    }
    if (null != closure_16[entitlement.sku_id]) {
      obj2.delete(entitlement.id);
    }
    if (null != entitlement.subscription_id) {
      if (null != closure_23[entitlement.subscription_id]) {
        obj3.delete(entitlement.id);
      }
    }
  },
  LOGOUT: function handleLogout() {
    let closure_14 = {};
    let closure_16 = {};
    let closure_17 = {};
    let closure_18 = false;
    let closure_19 = false;
    let closure_20 = false;
    const set = new Set();
    const set1 = new Set();
  },
  ENTITLEMENTS_FETCH_FOR_USER_START: function handleUserEntitlementsStart() {
    let closure_18 = true;
  },
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function handleUserEntitlementsSuccess(excludeEnded) {
    let done;
    let closure_19 = true;
    let closure_18 = false;
    let closure_20 = !excludeEnded.excludeEnded;
    const tmp = _createForOfIteratorHelperLoose(excludeEnded.entitlements);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_27;
        let tmp3 = closure_27(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: function handleUserEntitlementsFail() {
    let closure_19 = false;
    let closure_18 = false;
    let closure_20 = false;
  }
});
const obj = {
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
          let tmp4 = closure_27;
          let tmp5 = closure_27(value);
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
          let tmp2 = closure_25;
          let tmp3 = closure_25(value.entitlements);
          let iter3 = tmp3();
          let iter4 = iter3;
          let tmp4 = iter3;
          let tmp5 = tmp3;
          if (!iter3.done) {
            do {
              let tmp6 = closure_27;
              let tmp7 = closure_27(iter4.value);
              let iter5 = tmp3();
              iter4 = iter5;
              let tmp8 = iter5;
              let tmp9 = tmp3;
              let done = iter5.done;
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
    delete r3[r1];
    if (null != closure_17[entitlement.application_id]) {
      obj.delete(entitlement.id);
    }
    if (null != closure_16[entitlement.sku_id]) {
      obj2.delete(entitlement.id);
    }
    if (null != entitlement.subscription_id) {
      if (null != closure_23[entitlement.subscription_id]) {
        obj3.delete(entitlement.id);
      }
    }
  },
  LOGOUT: function handleLogout() {
    let closure_14 = {};
    let closure_16 = {};
    let closure_17 = {};
    let closure_18 = false;
    let closure_19 = false;
    let closure_20 = false;
    const set = new Set();
    const set1 = new Set();
  },
  ENTITLEMENTS_FETCH_FOR_USER_START: function handleUserEntitlementsStart() {
    let closure_18 = true;
  },
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function handleUserEntitlementsSuccess(excludeEnded) {
    let done;
    let closure_19 = true;
    let closure_18 = false;
    let closure_20 = !excludeEnded.excludeEnded;
    const tmp = _createForOfIteratorHelperLoose(excludeEnded.entitlements);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_27;
        let tmp3 = closure_27(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: function handleUserEntitlementsFail() {
    let closure_19 = false;
    let closure_18 = false;
    let closure_20 = false;
  }
};
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("stores/game_store/EntitlementStore.tsx");

export default tmp5;
