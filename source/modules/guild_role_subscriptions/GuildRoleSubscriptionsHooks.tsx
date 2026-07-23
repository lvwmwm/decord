// Module ID: 14101
// Function ID: 108422
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 4808, 3752, 566, 5636, 5122, 14102, 14103, 11323, 1327, 2]
// Exports: useArchiveSubscriptionListing, useCreateSubscriptionGroupListing, useDeleteSubscriptionGroupListing, useDeleteSubscriptionListing, useFetchListingsForSubscriptions, useFetchSubscriptionsSettings, useGroupListingsForGuild, usePublishSubscriptionListing, useSubscriptionGroupListing, useSubscriptionListing, useSubscriptionTrial, useSubscriptionTrialsForGroup, useSubscriptionTrialsForGuild, useSubscriptionsSettings, useUpdateSubscriptionGroupListing, useUpdateSubscriptionsSettings, useUpdateSubscriptionsTrial

// Module 14101 (_createForOfIteratorHelperLoose)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";

let require = arg1;
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
function useFetchListingsForGuild(guildId) {
  let obj = arg1;
  const _require = guildId;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.refetchOnMount;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.includeSoftDeleted;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const countryCode = obj.countryCode;
  const dontFetchWhileTrue = obj.dontFetchWhileTrue;
  let stateFromStores;
  let ref;
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(countryCode[5]).useStateFromStores(items, () => outer1_7.isConnected());
  const obj2 = _require(countryCode[5]);
  const items1 = [closure_8];
  const stateFromStores1 = _require(countryCode[5]).useStateFromStores(items1, () => {
    if (null != closure_0) {
      let FETCHED = outer1_8.getSubscriptionGroupListingsForGuildFetchState(closure_0);
    } else {
      FETCHED = outer1_9.FETCHED;
    }
    return FETCHED;
  });
  ref = ref.useRef(flag);
  const items2 = [stateFromStores, guildId, flag2, flag, countryCode, dontFetchWhileTrue];
  const effect = ref.useEffect(() => {
    if (null != closure_0) {
      if (stateFromStores) {
        if (true !== dontFetchWhileTrue) {
          let tmp5 = flag;
          if (!flag) {
            tmp5 = tmp4 === outer1_9.NOT_FETCHED;
          }
          if (tmp5) {
            ref.current = false;
            let obj = flag2(countryCode[6]);
            obj = { includeSoftDeleted: false, countryCode };
            const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(closure_0, obj);
          }
        }
      }
    }
  }, items2);
  obj = {};
  let tmp6 = stateFromStores1 === FetchState.FETCHED;
  if (tmp6) {
    tmp6 = true !== tmp5;
  }
  obj.listingsLoaded = tmp6;
  return obj;
}
function useSubscriptionListingsForGroup(id, arg1) {
  let obj = arg1;
  const _require = id;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.includeSoftDeleted;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.includeUnpublished;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let items = [closure_8];
  const items1 = [id, flag, flag2];
  return _require(566).useStateFromStoresArray(items, () => {
    let iter2;
    if (null == closure_0) {
      return [];
    } else {
      const subscriptionGroupListing = outer1_8.getSubscriptionGroupListing(closure_0);
      if (null == subscriptionGroupListing) {
        return [];
      } else {
        const items = [];
        const tmp2 = outer1_11(subscriptionGroupListing.subscription_listings_ids);
        let iter = tmp2();
        if (!iter.done) {
          do {
            let tmp3 = outer1_8;
            let subscriptionListing = outer1_8.getSubscriptionListing(iter.value);
            if (null != subscriptionListing) {
              let soft_deleted = subscriptionListing.soft_deleted;
              if (soft_deleted) {
                let tmp5 = flag;
                soft_deleted = !flag;
              }
              if (!soft_deleted) {
                let tmp6 = subscriptionListing.published || flag2;
                if (tmp6) {
                  let arr = items.push(subscriptionListing);
                }
              }
            }
            iter2 = tmp2();
            iter = iter2;
          } while (!iter2.done);
        }
        return items;
      }
    }
  }, items1);
}
function useSubscriptionListingsForGuild(guildId, arg1) {
  let obj = arg1;
  const _require = guildId;
  if (arg1 === undefined) {
    obj = { includeSoftDeleted: false, sortDeletedListingsLast: false };
  }
  useFetchListingsForGuild(guildId);
  let items = [closure_8];
  return _require(566).useStateFromStoresArray(items, () => {
    let iter5;
    const items = [];
    if (null != closure_0) {
      let subscriptionGroupListingsForGuild = outer1_8.getSubscriptionGroupListingsForGuild(closure_0);
    } else {
      subscriptionGroupListingsForGuild = outer1_10;
    }
    const tmpResult = outer1_11(subscriptionGroupListingsForGuild);
    const iter = tmpResult();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp6 = outer1_11;
        let tmp7 = outer1_11(iter2.value.subscription_listings_ids);
        let iter3 = tmp7();
        if (!iter3.done) {
          do {
            let tmp8 = outer1_8;
            let subscriptionListing = outer1_8.getSubscriptionListing(iter3.value);
            let tmp10 = null == subscriptionListing;
            if (!tmp10) {
              let tmp11 = obj;
              let tmp12 = !obj.includeSoftDeleted && subscriptionListing.soft_deleted;
              tmp10 = tmp12;
            }
            if (!tmp10) {
              let arr = items.push(subscriptionListing);
            }
            iter4 = tmp7();
            iter3 = iter4;
            let tmp14 = subscriptionListing;
          } while (!iter4.done);
        }
        iter5 = tmpResult();
        iter2 = iter5;
      } while (!iter5.done);
    }
    let tmp15 = items;
    if (obj.includeSoftDeleted) {
      tmp15 = items;
      if (obj.sortDeletedListingsLast) {
        const items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items.filter((soft_deleted) => !soft_deleted.soft_deleted), 0);
        arraySpreadResult = HermesBuiltin.arraySpread(items.filter((soft_deleted) => soft_deleted.soft_deleted), arraySpreadResult);
        tmp15 = items1;
      }
    }
    return tmp15;
  });
}
let closure_10 = [];
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx");

export { useFetchListingsForGuild };
export const useCreateSubscriptionGroupListing = function useCreateSubscriptionGroupListing() {
  function _createSubscriptionGroupListing() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_4(tmp);
    return obj(...arguments);
  }
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  return {
    loading: tmp[0],
    createSubscriptionGroupListing(arg0, arg1) {
      return _createSubscriptionGroupListing(...arguments);
    },
    error: tmp2[0]
  };
};
export const useUpdateSubscriptionGroupListing = function useUpdateSubscriptionGroupListing() {
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  return {
    loading: tmp[0],
    updateSubscriptionGroupListing: React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_4(tmp);
      return function(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    })(), []),
    error: tmp2[0]
  };
};
export { useSubscriptionListingsForGroup };
export const useSubscriptionListing = function useSubscriptionListing(editStateId) {
  const _require = editStateId;
  const items = [closure_8];
  return _require(566).useStateFromStores(items, () => {
    let subscriptionListing = null;
    if (null != closure_0) {
      subscriptionListing = outer1_8.getSubscriptionListing(closure_0);
    }
    return subscriptionListing;
  });
};
export const useSubscriptionGroupListing = function useSubscriptionGroupListing(arg0) {
  const _require = arg0;
  const items = [closure_8];
  return _require(566).useStateFromStores(items, () => {
    let subscriptionGroupListing = null;
    if (null != closure_0) {
      subscriptionGroupListing = outer1_8.getSubscriptionGroupListing(closure_0);
    }
    return subscriptionGroupListing;
  });
};
export const useGroupListingsForGuild = function useGroupListingsForGuild(guildId) {
  const _require = guildId;
  let closure_1 = _require(14102).useGroupListingsFetchContext("useGroupListingsForGuild");
  const obj = _require(14102);
  const items = [closure_8];
  return _require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      if (closure_1) {
        let subscriptionGroupListingsForGuild = outer1_8.getSubscriptionGroupListingsForGuild(closure_0);
      }
      return subscriptionGroupListingsForGuild;
    }
    subscriptionGroupListingsForGuild = outer1_10;
  });
};
export { useSubscriptionListingsForGuild };
export const useFetchListingsForSubscriptions = (arg0) => {
  const _require = arg0;
  let tmp = callback(React.useState(false), 2);
  const loading = tmp[0];
  let closure_2 = tmp[1];
  const items = [arg0];
  const memo = React.useMemo(() => lib.map(lib(memo[9]).getRoleSubscriptionPlanId), items);
  const items1 = [closure_8];
  const items2 = [memo];
  const stateFromStoresArray = _require(memo[5]).useStateFromStoresArray(items1, () => memo.filter((arg0) => !outer2_8.getDidFetchListingForSubscriptionPlanId(arg0)), items2);
  const items3 = [loading, stateFromStoresArray];
  const effect = React.useEffect(() => {
    let tmp = !loading;
    if (tmp) {
      tmp = stateFromStoresArray.length > 0;
    }
    if (tmp) {
      callback(true);
      const allPromises = Promise.all(stateFromStoresArray.map((arg0) => callback(memo[6]).fetchSubscriptionListingForPlan(arg0)));
      Promise.all(stateFromStoresArray.map((arg0) => callback(memo[6]).fetchSubscriptionListingForPlan(arg0))).catch(() => {

      }).then(() => {
        outer1_2(false);
      });
      const catchPromise = Promise.all(stateFromStoresArray.map((arg0) => callback(memo[6]).fetchSubscriptionListingForPlan(arg0))).catch(() => {

      });
    }
  }, items3);
  return { loading };
};
export const useDeleteSubscriptionListing = function useDeleteSubscriptionListing() {
  function _deleteSubscriptionListing() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_4(tmp);
    return obj(...arguments);
  }
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  return {
    error: tmp2[0],
    submitting: tmp[0],
    deleteSubscriptionListing(arg0, arg1, arg2) {
      return _deleteSubscriptionListing(...arguments);
    }
  };
};
export const useArchiveSubscriptionListing = function useArchiveSubscriptionListing() {
  const tmp2 = callback(importDefault(11323)(importAll(5636).archiveSubscriptionListing), 2);
  return { error: tmp2[1].error, submitting: tmp2[1].loading, archiveSubscriptionListing: tmp2[0] };
};
export const usePublishSubscriptionListing = function usePublishSubscriptionListing() {
  function _publishSubscriptionListing() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_4(tmp);
    return obj(...arguments);
  }
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  return {
    error: tmp2[0],
    submitting: tmp[0],
    publishSubscriptionListing(arg0) {
      return _publishSubscriptionListing(...arguments);
    },
    clearError() {
      return callback(null);
    }
  };
};
export const useSubscriptionsSettings = function useSubscriptionsSettings(guildId) {
  const _require = guildId;
  const items = [closure_8];
  return _require(566).useStateFromStores(items, () => {
    let subscriptionSettings;
    if (null != closure_0) {
      subscriptionSettings = outer1_8.getSubscriptionSettings(closure_0);
    }
    return subscriptionSettings;
  });
};
export const useUpdateSubscriptionsSettings = function useUpdateSubscriptionsSettings() {
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  return {
    loading: tmp[0],
    updateSubscriptionsSettings: React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_4(tmp);
      return function(arg0, arg1) {
        return callback(...arguments);
      };
    })(), []),
    error: tmp2[0]
  };
};
export const useDeleteSubscriptionGroupListing = function useDeleteSubscriptionGroupListing() {
  function _deleteSubscriptionGroupListing() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_4(tmp);
    return obj(...arguments);
  }
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  return {
    error: tmp2[0],
    submitting: tmp[0],
    deleteSubscriptionGroupListing(arg0, arg1) {
      return _deleteSubscriptionGroupListing(...arguments);
    }
  };
};
export const useFetchSubscriptionsSettings = function useFetchSubscriptionsSettings() {
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  return {
    loading: tmp[0],
    fetchSubscriptionsSettings: React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_4(tmp);
      return function(arg0) {
        return callback(...arguments);
      };
    })(), []),
    error: tmp2[0]
  };
};
export const useUpdateSubscriptionsTrial = function useUpdateSubscriptionsTrial() {
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  return {
    loading: tmp[0],
    updateSubscriptionTrial: React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_4(tmp);
      return function(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    })(), []),
    error: tmp2[0]
  };
};
export const useSubscriptionTrial = function useSubscriptionTrial(editStateId) {
  const _require = editStateId;
  const items = [closure_8];
  return _require(566).useStateFromStores(items, () => {
    let subscriptionTrial = null;
    if (null != closure_0) {
      subscriptionTrial = outer1_8.getSubscriptionTrial(closure_0);
    }
    return subscriptionTrial;
  });
};
export const useSubscriptionTrialsForGroup = function useSubscriptionTrialsForGroup(id) {
  const tmp = useSubscriptionListingsForGroup(id);
  const require = tmp;
  const items = [closure_8];
  const items1 = [tmp];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => {
    const mapped = tmp.map((id) => outer2_8.getSubscriptionTrial(id.id));
    return mapped.filter(tmp(outer1_3[11]).isNotNullish);
  }, items1);
};
export const useSubscriptionTrialsForGuild = function useSubscriptionTrialsForGuild(guildId) {
  const tmp = useSubscriptionListingsForGuild(guildId);
  const require = tmp;
  const items = [closure_8];
  const items1 = [tmp];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => {
    const mapped = tmp.map((id) => outer2_8.getSubscriptionTrial(id.id));
    return mapped.filter(tmp(outer1_3[11]).isNotNullish);
  }, items1);
};
