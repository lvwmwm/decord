// Module ID: 13977
// Function ID: 106194
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useArchiveSubscriptionListing, useCreateSubscriptionGroupListing, useDeleteSubscriptionGroupListing, useDeleteSubscriptionListing, useFetchListingsForSubscriptions, useFetchSubscriptionsSettings, useGroupListingsForGuild, usePublishSubscriptionListing, useSubscriptionGroupListing, useSubscriptionListing, useSubscriptionTrial, useSubscriptionTrialsForGroup, useSubscriptionTrialsForGuild, useSubscriptionsSettings, useUpdateSubscriptionGroupListing, useUpdateSubscriptionsSettings, useUpdateSubscriptionsTrial

// Module 13977 (_createForOfIteratorHelperLoose)
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
function useFetchListingsForGuild(guildId) {
  let obj = arg1;
  const arg1 = guildId;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.refetchOnMount;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let flag2 = obj.includeSoftDeleted;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const importAll = flag2;
  const countryCode = obj.countryCode;
  const dependencyMap = countryCode;
  const dontFetchWhileTrue = obj.dontFetchWhileTrue;
  let closure_4 = dontFetchWhileTrue;
  let closure_5;
  let React;
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => connected.isConnected());
  closure_5 = stateFromStores;
  const obj2 = arg1(dependencyMap[5]);
  const items1 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    if (null != arg0) {
      let FETCHED = subscriptionGroupListingsForGuildFetchState.getSubscriptionGroupListingsForGuildFetchState(arg0);
    } else {
      FETCHED = constants.FETCHED;
    }
    return FETCHED;
  });
  const obj3 = arg1(dependencyMap[5]);
  React = React.useRef(flag);
  const items2 = [stateFromStores, guildId, flag2, flag, countryCode, dontFetchWhileTrue];
  const effect = React.useEffect(() => {
    if (null != arg0) {
      if (stateFromStores) {
        if (true !== dontFetchWhileTrue) {
          let tmp5 = flag;
          if (!flag) {
            tmp5 = tmp4 === constants.NOT_FETCHED;
          }
          if (tmp5) {
            ref.current = false;
            let obj = flag2(countryCode[6]);
            obj = { includeSoftDeleted: false, countryCode };
            const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(arg0, obj);
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
  arg1 = id;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.includeSoftDeleted;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let flag2 = obj.includeUnpublished;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const importAll = flag2;
  const items = [closure_8];
  const items1 = [id, flag, flag2];
  return arg1(dependencyMap[5]).useStateFromStoresArray(items, () => {
    let iter2;
    if (null == arg0) {
      return [];
    } else {
      const subscriptionGroupListing = subscriptionGroupListing.getSubscriptionGroupListing(arg0);
      if (null == subscriptionGroupListing) {
        return [];
      } else {
        const items = [];
        const tmp2 = callback(subscriptionGroupListing.subscription_listings_ids);
        let iter = tmp2();
        if (!iter.done) {
          do {
            let tmp3 = closure_8;
            let subscriptionListing = closure_8.getSubscriptionListing(iter.value);
            if (null != subscriptionListing) {
              let soft_deleted = subscriptionListing.soft_deleted;
              if (soft_deleted) {
                let tmp5 = closure_1;
                soft_deleted = !closure_1;
              }
              if (!soft_deleted) {
                let tmp6 = subscriptionListing.published || closure_2;
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
  arg1 = guildId;
  if (arg1 === undefined) {
    obj = { INVALID_PARAMETER: null, HTML5_ERROR: null };
  }
  const importDefault = obj;
  useFetchListingsForGuild(guildId);
  const items = [closure_8];
  return arg1(dependencyMap[5]).useStateFromStoresArray(items, () => {
    let iter5;
    const items = [];
    if (null != arg0) {
      let subscriptionGroupListingsForGuild = subscriptionGroupListingsForGuild.getSubscriptionGroupListingsForGuild(arg0);
    } else {
      subscriptionGroupListingsForGuild = closure_10;
    }
    const tmpResult = closure_11(subscriptionGroupListingsForGuild);
    const iter = tmpResult();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp6 = closure_11;
        let tmp7 = closure_11(iter2.value.subscription_listings_ids);
        let iter3 = tmp7();
        if (!iter3.done) {
          do {
            let tmp8 = closure_8;
            let subscriptionListing = closure_8.getSubscriptionListing(iter3.value);
            let tmp10 = null == subscriptionListing;
            if (!tmp10) {
              let tmp11 = closure_1;
              let tmp12 = !closure_1.includeSoftDeleted && subscriptionListing.soft_deleted;
              tmp10 = tmp12;
            }
            if (!tmp10) {
              let arr = items.push(subscriptionListing);
            }
            let iter4 = tmp7();
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
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const FetchState = arg1(dependencyMap[4]).FetchState;
let closure_10 = [];
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx");

export { useFetchListingsForGuild };
export const useCreateSubscriptionGroupListing = function useCreateSubscriptionGroupListing() {
  function _createSubscriptionGroupListing() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _createSubscriptionGroupListing = obj;
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
    updateSubscriptionGroupListing: React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    }(), []),
    error: tmp2[0]
  };
};
export { useSubscriptionListingsForGroup };
export const useSubscriptionListing = function useSubscriptionListing(editStateId) {
  const arg1 = editStateId;
  const items = [closure_8];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    let subscriptionListing = null;
    if (null != arg0) {
      subscriptionListing = subscriptionListing.getSubscriptionListing(arg0);
    }
    return subscriptionListing;
  });
};
export const useSubscriptionGroupListing = function useSubscriptionGroupListing(arg0) {
  const arg1 = arg0;
  const items = [closure_8];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    let subscriptionGroupListing = null;
    if (null != arg0) {
      subscriptionGroupListing = subscriptionGroupListing.getSubscriptionGroupListing(arg0);
    }
    return subscriptionGroupListing;
  });
};
export const useGroupListingsForGuild = function useGroupListingsForGuild(guildId) {
  const arg1 = guildId;
  let closure_1 = arg1(dependencyMap[8]).useGroupListingsFetchContext("useGroupListingsForGuild");
  const obj = arg1(dependencyMap[8]);
  const items = [closure_8];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    if (null != arg0) {
      if (closure_1) {
        let subscriptionGroupListingsForGuild = subscriptionGroupListingsForGuild.getSubscriptionGroupListingsForGuild(arg0);
      }
      return subscriptionGroupListingsForGuild;
    }
    subscriptionGroupListingsForGuild = closure_10;
  });
};
export { useSubscriptionListingsForGuild };
export const useFetchListingsForSubscriptions = (arg0) => {
  const arg1 = arg0;
  const tmp = callback(React.useState(false), 2);
  const loading = tmp[0];
  const importDefault = loading;
  let closure_2 = tmp[1];
  const items = [arg0];
  const memo = React.useMemo(() => arg0.map(arg0(memo[9]).getRoleSubscriptionPlanId), items);
  const dependencyMap = memo;
  const items1 = [closure_8];
  const items2 = [memo];
  const stateFromStoresArray = arg1(dependencyMap[5]).useStateFromStoresArray(items1, () => memo.filter((arg0) => !didFetchListingForSubscriptionPlanId.getDidFetchListingForSubscriptionPlanId(arg0)), items2);
  let closure_4 = stateFromStoresArray;
  const items3 = [loading, stateFromStoresArray];
  const effect = React.useEffect(() => {
    let tmp = !loading;
    if (tmp) {
      tmp = stateFromStoresArray.length > 0;
    }
    if (tmp) {
      callback(true);
      const allPromises = Promise.all(stateFromStoresArray.map((arg0) => callback(closure_3[6]).fetchSubscriptionListingForPlan(arg0)));
      Promise.all(stateFromStoresArray.map((arg0) => callback(closure_3[6]).fetchSubscriptionListingForPlan(arg0))).catch(() => {

      }).then(() => {
        callback(false);
      });
      const catchPromise = Promise.all(stateFromStoresArray.map((arg0) => callback(closure_3[6]).fetchSubscriptionListingForPlan(arg0))).catch(() => {

      });
    }
  }, items3);
  return { loading };
};
export const useDeleteSubscriptionListing = function useDeleteSubscriptionListing() {
  function _deleteSubscriptionListing() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _deleteSubscriptionListing = obj;
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
  const tmp2 = callback(importDefault(dependencyMap[10])(importAll(dependencyMap[6]).archiveSubscriptionListing), 2);
  return { error: tmp2[1].error, submitting: tmp2[1].loading, archiveSubscriptionListing: tmp2[0] };
};
export const usePublishSubscriptionListing = function usePublishSubscriptionListing() {
  function _publishSubscriptionListing() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback2(tmp);
    const _publishSubscriptionListing = obj;
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
  const arg1 = guildId;
  const items = [closure_8];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    let subscriptionSettings;
    if (null != arg0) {
      subscriptionSettings = subscriptionSettings.getSubscriptionSettings(arg0);
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
    updateSubscriptionsSettings: React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function(arg0, arg1) {
        return callback(...arguments);
      };
    }(), []),
    error: tmp2[0]
  };
};
export const useDeleteSubscriptionGroupListing = function useDeleteSubscriptionGroupListing() {
  function _deleteSubscriptionGroupListing() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _deleteSubscriptionGroupListing = obj;
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
    fetchSubscriptionsSettings: React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function(arg0) {
        return callback(...arguments);
      };
    }(), []),
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
    updateSubscriptionTrial: React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    }(), []),
    error: tmp2[0]
  };
};
export const useSubscriptionTrial = function useSubscriptionTrial(editStateId) {
  const arg1 = editStateId;
  const items = [closure_8];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    let subscriptionTrial = null;
    if (null != arg0) {
      subscriptionTrial = subscriptionTrial.getSubscriptionTrial(arg0);
    }
    return subscriptionTrial;
  });
};
export const useSubscriptionTrialsForGroup = function useSubscriptionTrialsForGroup(id) {
  const tmp = useSubscriptionListingsForGroup(id);
  const arg1 = tmp;
  const items = [closure_8];
  const items1 = [tmp];
  return arg1(dependencyMap[5]).useStateFromStoresArray(items, () => {
    const mapped = tmp.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
    return mapped.filter(tmp(closure_3[11]).isNotNullish);
  }, items1);
};
export const useSubscriptionTrialsForGuild = function useSubscriptionTrialsForGuild(guildId) {
  const tmp = useSubscriptionListingsForGuild(guildId);
  const arg1 = tmp;
  const items = [closure_8];
  const items1 = [tmp];
  return arg1(dependencyMap[5]).useStateFromStoresArray(items, () => {
    const mapped = tmp.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
    return mapped.filter(tmp(closure_3[11]).isNotNullish);
  }, items1);
};
