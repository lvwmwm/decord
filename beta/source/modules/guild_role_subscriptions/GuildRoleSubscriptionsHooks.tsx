// Module ID: 14757
// Function ID: 14758
// Name: GuildRoleSubscriptionsHooks
// Dependencies: [5, 32, 19, 5589, 4462, 504, 6673, 5898, 14758, 14759, 11685, 1370, 2]
// Exports: useArchiveSubscriptionListing, useCreateSubscriptionGroupListing, useDeleteSubscriptionGroupListing, useDeleteSubscriptionListing, useFetchListingsForSubscriptions, useFetchSubscriptionsSettings, useGroupListingsForGuild, usePublishSubscriptionListing, useSubscriptionGroupListing, useSubscriptionListing, useSubscriptionListingsForGroup, useSubscriptionListingsForGuild, useSubscriptionTrial, useSubscriptionTrialsForGroup, useSubscriptionTrialsForGuild, useSubscriptionsSettings, useUpdateSubscriptionGroupListing, useUpdateSubscriptionsSettings, useUpdateSubscriptionsTrial

// Module 14757 (GuildRoleSubscriptionsHooks)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore" /* 4462 */;
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators" /* 6673 */;
import useRequestDefault from "useRequest" /* 11685 */;
import subscriptionUtils from "subscriptionUtils" /* 14759 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;
let _require, c3, c7, closure_4, closure_5, groupListingId, listingId;

function useFetchListingsForGuild(guildId) {
  let connected;
  let tmp5;
  _require = guildId;
  let obj = arg1;
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
  let ref;
  let obj2 = require("get initialized");
  const items = [GatewayConnectionStore];
  const stateFromStores = obj2.useStateFromStores(items, () => connected.isConnected());
  const items1 = [GuildRoleSubscriptionsStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let FETCHED;
    if (null != guildId) {
      FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
    } else {
      FETCHED = FetchState.FETCHED;
    }
    return FETCHED;
  });
  ref = ref.useRef(flag);
  const items2 = [stateFromStores, guildId, flag2, flag, countryCode, dontFetchWhileTrue];
  const effect = ref.useEffect(() => {
    const tmp = guildId;
    if (null != guildId) {
      const tmp13 = stateFromStores;
      if (tmp13) {
        if (true !== dontFetchWhileTrue) {
          const tmp5 = flag || tmp4 === FetchState.NOT_FETCHED;
          if (tmp5) {
            ref.current = false;
            const obj2 = { includeSoftDeleted: false, countryCode };
            const obj = GuildRoleSubscriptionsActionCreatorsAll;
            const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(tmp, obj2);
          }
        }
      }
    }
  }, items2);
  const listingsLoaded = stateFromStores1 === FetchState.FETCHED && true !== tmp5;
  return { listingsLoaded };
}
const FetchState = GuildRoleSubscriptionsStore2.FetchState;
let closure_10 = [];
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx");

export { useFetchListingsForGuild };
export const useCreateSubscriptionGroupListing = function useCreateSubscriptionGroupListing() {
  let closure_0;
  let first;
  let obj = function _createSubscriptionGroupListing() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_2;
      closure_0 = arg0;
      closure_1 = value;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c5;
        try {
          c6 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2_0(true);
              closure_2_1(null);
              c5 = 2;
              const obj3 = tmp(c3[6]);
              c3 = 3;
              c6 = 1;
              const obj5 = { value: obj3.createSubscriptionGroupListing(closure_0, closure_1), done: false };
              return obj5;
            }
          } else if (1 === c3) {
            c5 = 0;
            closure_130_0(false);
            throw closure_4;
          } else if (2 === c3) {
            closure_130_1(closure_4);
            c5 = 0;
            closure_130_0(false);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_130_0(false);
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c5 = 0;
            closure_130_0(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp32) {
          closure_4 = tmp32;
          if (0 === c5) {
            c6 = 3;
            throw tmp32;
          } else if (1 === tmp34) {
            c3 = 1;
          } else {
            c3 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_0] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  obj = {
    loading: first,
    createSubscriptionGroupListing(arg0, arg1) {
      return obj(...arguments);
    },
    error: tmp3[0]
  };
  return obj;
};
export const useUpdateSubscriptionGroupListing = function useUpdateSubscriptionGroupListing() {
  let closure_0;
  let closure_1;
  let first;
  let first1;
  [first, closure_0] = react.useState(false);
  [first1, closure_1] = react.useState(null);
  const useCallback = react.useCallback;
  closure_0 = _asyncToGenerator(async (arg0, value, arg2) => {
    let obj3;
    closure_0 = arg0;
    closure_1 = value;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c6;
      try {
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            closure_0(true);
            closure_1(null);
            c6 = 2;
            c4 = 3;
            c7 = 1;
            const obj5 = { value: obj3.updateSubscriptionGroupListing(closure_0, closure_1, closure_2), done: false };
            obj3 = GuildRoleSubscriptionsActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c4) {
          c6 = 0;
          closure_0(false);
          throw closure_5;
        } else if (2 === c4) {
          closure_1(closure_5);
          c6 = 0;
          closure_0(false);
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_0(false);
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c6 = 0;
          closure_0(false);
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp33) {
        closure_5 = tmp33;
        if (0 === c6) {
          c7 = 3;
          throw tmp33;
        } else if (1 === tmp35) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  let obj = {
    loading: first,
    updateSubscriptionGroupListing: useCallback(function(arg0, arg1, arg2) {
      return closure_0(...arguments);
    }, []),
    error: first1
  };
  return obj;
};
export const useSubscriptionListingsForGroup = function useSubscriptionListingsForGroup(id, arg1) {
  _require = id;
  let obj = arg1;
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
  const items = [GuildRoleSubscriptionsStore];
  const items1 = [id, flag, flag2];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items, () => {
    if (null == closure_0) {
      return [];
    } else {
      const subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp);
      if (null == subscriptionGroupListing) {
        return [];
      } else {
        const items = [];
        const subscription_listings_ids = subscriptionGroupListing.subscription_listings_ids;
        for (const item10009 of subscription_listings_ids) {
          let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10009);
          let tmp6 = subscriptionListing;
          if (null != subscriptionListing) {
            let soft_deleted = tmp6.soft_deleted;
            if (soft_deleted) {
              soft_deleted = !flag;
            }
            if (!soft_deleted) {
              let published = tmp6.published || flag2;
              if (published) {
                let arr = items.push(tmp6);
              }
            }
          }
          continue;
        }
        return items;
      }
    }
  }, items1);
};
export const useSubscriptionListing = function useSubscriptionListing(editStateId) {
  _require = editStateId;
  const items = [GuildRoleSubscriptionsStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let subscriptionListing = null;
    if (null != editStateId) {
      subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(tmp);
    }
    return subscriptionListing;
  });
};
export const useSubscriptionGroupListing = function useSubscriptionGroupListing(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildRoleSubscriptionsStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let subscriptionGroupListing = null;
    if (null != closure_0) {
      subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp);
    }
    return subscriptionGroupListing;
  });
};
export const useGroupListingsForGuild = function useGroupListingsForGuild(guildId) {
  _require = guildId;
  const obj = require("GroupListingsFetchContext");
  let closure_1 = obj.useGroupListingsFetchContext("useGroupListingsForGuild");
  const items = [GuildRoleSubscriptionsStore];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => {
    if (null != guildId) {
      let subscriptionGroupListingsForGuild;
      const tmp2 = closure_1;
      if (tmp2) {
        subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
      }
      return subscriptionGroupListingsForGuild;
    }
    subscriptionGroupListingsForGuild = closure_10;
  });
};
export const useSubscriptionListingsForGuild = function useSubscriptionListingsForGuild(guildId) {
  let obj;
  _require = guildId;
  useFetchListingsForGuild(guildId);
  const items = [GuildRoleSubscriptionsStore];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      let subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp2);
    } else {
      subscriptionGroupListingsForGuild = closure_2_10;
    }
    const items = [];
    for (const item10011 of subscriptionGroupListingsForGuild) {
      let subscription_listings_ids = item10011.subscription_listings_ids;
      for (const item10017 of subscription_listings_ids) {
        let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10017);
        let tmp9 = subscriptionListing;
        let tmp10 = null == subscriptionListing;
        if (!tmp10) {
          let includeSoftDeleted = closure_1.includeSoftDeleted;
          let soft_deleted = !includeSoftDeleted;
          if (soft_deleted) {
            soft_deleted = tmp9.soft_deleted;
          }
          tmp10 = soft_deleted;
        }
        if (!tmp10) {
          let arr = items.push(tmp9);
        }
        continue;
      }
      continue;
    }
    let tmp16 = items;
    if (closure_1.includeSoftDeleted) {
      tmp16 = items;
      if (closure_1.sortDeletedListingsLast) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, items.filter((soft_deleted) => !soft_deleted.soft_deleted), 0);
        HermesBuiltin.arraySpread(items1, items.filter((soft_deleted) => soft_deleted.soft_deleted), arraySpreadResult);
        tmp16 = items1;
      }
    }
    return tmp16;
  });
};
export const useFetchListingsForSubscriptions = (arg0) => {
  let closure_0;
  let closure_2;
  let loading;
  _require = arg0;
  [loading, closure_2] = react.useState(false);
  const items = [arg0];
  const memo = react.useMemo(() => closure_0.map(subscriptionUtils.getRoleSubscriptionPlanId), items);
  let obj = require("get initialized");
  const items1 = [GuildRoleSubscriptionsStore];
  const items2 = [memo];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    let didFetchListingForSubscriptionPlanId;
    return memo.filter((item) => !didFetchListingForSubscriptionPlanId.getDidFetchListingForSubscriptionPlanId(item));
  }, items2);
  const items3 = [loading, stateFromStoresArray];
  const effect = react.useEffect(() => {
    const tmp = !loading && stateFromStoresArray.length > 0;
    if (tmp) {
      closure_2(true);
      const allPromises = Promise.all(stateFromStoresArray.map((item) => {
        const obj = closure_1_2(memo[6]);
        return obj.fetchSubscriptionListingForPlan(item);
      }));
      const catchPromise = allPromises.catch(() => {

      });
      catchPromise.then(() => {
        closure_1_2(false);
      });
    }
  }, items3);
  return { loading };
};
export const useDeleteSubscriptionListing = function useDeleteSubscriptionListing() {
  let closure_0;
  let first;
  let obj = function _deleteSubscriptionListing() {
    obj = _asyncToGenerator(async (arg0, value, arg2) => {
      let obj2;
      closure_0 = arg0;
      closure_1 = value;
      let closure_2 = arg2;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c6;
        try {
          c7 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp;
              c6 = 2;
              closure_2_0(true);
              closure_2_1(null);
              c4 = 3;
              c7 = 1;
              const obj5 = { value: obj2.deleteSubscriptionListing(closure_0, closure_1, closure_2), done: false };
              obj2 = closure_2(closure_3[6]);
              return obj5;
            }
          } else if (1 === c4) {
            c6 = 0;
            closure_131_0(false);
            throw closure_5;
          } else if (2 === c4) {
            closure_131_1(closure_5);
            c6 = 0;
            closure_131_0(false);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_131_0(false);
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 0;
            closure_131_0(false);
            c7 = 3;
            return { value: true, done: true };
          }
        } catch (tmp33) {
          closure_5 = tmp33;
          if (0 === c6) {
            c7 = 3;
            throw tmp33;
          } else if (1 === tmp35) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_0] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  obj = {
    error: tmp3[0],
    submitting: first,
    deleteSubscriptionListing(arg0, arg1, arg2) {
      return obj(...arguments);
    }
  };
  return obj;
};
export const useArchiveSubscriptionListing = function useArchiveSubscriptionListing() {
  const tmp = useRequestDefault;
  const tmp2 = _slicedToArray(tmp(GuildRoleSubscriptionsActionCreatorsAll.archiveSubscriptionListing), 2);
  return { error: tmp2[1].error, submitting: tmp2[1].loading, archiveSubscriptionListing: tmp2[0] };
};
export const usePublishSubscriptionListing = function usePublishSubscriptionListing() {
  let closure_0;
  let first;
  let obj = function _publishSubscriptionListing() {
    obj = _asyncToGenerator(async (guildId) => {
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      const iter = (async (arg0, value) => {
        let c0;
        let c1;
        let c2;
        let obj6;
        let tmp12;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_1 = tmp12;
                guildId = undefined;
                groupListingId = undefined;
                listingId = undefined;
                ({ guildId: c0, groupListingId: c1, listingId: c2 } = closure_0);
                c5 = 1;
                c6 = 1;
                return { value: "flex", done: true };
              }
            } else if (1 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                c4 = 2;
                closure_130_0(true);
                closure_130_1(null);
                c5 = 4;
                c6 = 1;
                const obj5 = { guildId, groupListingId, listingId, data: { published: true } };
                const obj7 = { value: obj6.updateSubscriptionListing(obj5), done: false };
                obj6 = listingId(closure_3[6]);
                return obj7;
              }
            } else if (2 === c5) {
              c4 = 0;
              tmp12 = closure_130_0(false);
              throw closure_3;
            } else if (3 === c5) {
              tmp12 = closure_3;
              closure_130_1(closure_3);
              c4 = 0;
              closure_130_0(false);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_130_0(false);
              c6 = 3;
              return { value, done: true };
            } else {
              c4 = 0;
              closure_130_0(false);
              c6 = 3;
              return { value: true, done: true };
            }
          } catch (tmp24) {
            closure_3 = tmp24;
            if (0 === c4) {
              c6 = 3;
              throw tmp24;
            } else if (1 === tmp26) {
              c5 = 2;
            } else {
              c5 = 3;
            }
          }
        }
      })();
      iter.next();
      return iter;
    });
    return obj(...arguments);
  };
  [first, closure_0] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  obj = {
    error: tmp3[0],
    submitting: first,
    publishSubscriptionListing(arg0) {
      return obj(...arguments);
    },
    clearError() {
      return closure_1(null);
    }
  };
  return obj;
};
export const useSubscriptionsSettings = function useSubscriptionsSettings(guildId) {
  _require = guildId;
  const items = [GuildRoleSubscriptionsStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let subscriptionSettings;
    if (null != guildId) {
      subscriptionSettings = GuildRoleSubscriptionsStore.getSubscriptionSettings(tmp);
    }
    return subscriptionSettings;
  });
};
export const useUpdateSubscriptionsSettings = function useUpdateSubscriptionsSettings() {
  let closure_0;
  let closure_1;
  let first;
  let first1;
  [first, closure_0] = react.useState(false);
  [first1, closure_1] = react.useState(null);
  const useCallback = react.useCallback;
  closure_0 = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    closure_0 = arg0;
    closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_0(true);
            closure_1(null);
            c5 = 2;
            c3 = 3;
            c6 = 1;
            const obj5 = { value: obj2.updateSubscriptionsSettings(closure_0, closure_1), done: false };
            obj2 = GuildRoleSubscriptionsActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c3) {
          c5 = 0;
          closure_0(false);
          throw closure_4;
        } else {
          if (2 === c3) {
            c5 = 1;
            closure_1(closure_4);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c5 = 1;
          }
          c5 = 0;
          closure_0(false);
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp29) {
        closure_4 = tmp29;
        if (0 === c5) {
          c6 = 3;
          throw tmp29;
        } else if (1 === tmp31) {
          c3 = 1;
        } else {
          c3 = 2;
        }
      }
    }
  });
  let obj = {
    loading: first,
    updateSubscriptionsSettings: useCallback(function(arg0, arg1) {
      return closure_0(...arguments);
    }, []),
    error: first1
  };
  return obj;
};
export const useDeleteSubscriptionGroupListing = function useDeleteSubscriptionGroupListing() {
  let closure_0;
  let first;
  let obj = function _deleteSubscriptionGroupListing() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_2;
      closure_0 = arg0;
      closure_1 = value;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c5;
        try {
          c6 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c5 = 2;
              closure_2_0(true);
              closure_2_1(null);
              const obj3 = tmp(c3[6]);
              c3 = 3;
              c6 = 1;
              const obj5 = { value: obj3.deleteSubscriptionGroupListing(closure_0, closure_1), done: false };
              return obj5;
            }
          } else if (1 === c3) {
            c5 = 0;
            closure_130_0(false);
            throw closure_4;
          } else if (2 === c3) {
            closure_130_1(closure_4);
            c5 = 0;
            closure_130_0(false);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_130_0(false);
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c5 = 0;
            closure_130_0(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp32) {
          closure_4 = tmp32;
          if (0 === c5) {
            c6 = 3;
            throw tmp32;
          } else if (1 === tmp34) {
            c3 = 1;
          } else {
            c3 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_0] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  obj = {
    error: tmp3[0],
    submitting: first,
    deleteSubscriptionGroupListing(arg0, arg1) {
      return obj(...arguments);
    }
  };
  return obj;
};
export const useFetchSubscriptionsSettings = function useFetchSubscriptionsSettings() {
  let closure_0;
  let closure_1;
  let first;
  let first1;
  [first, closure_0] = react.useState(false);
  [first1, closure_1] = react.useState(null);
  const useCallback = react.useCallback;
  closure_0 = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        c5 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0(true);
            tmp(null);
            c4 = 2;
            c2 = 3;
            c5 = 1;
            const obj5 = { value: obj2.fetchSubscriptionsSettings(closure_0), done: false };
            obj2 = GuildRoleSubscriptionsActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c2) {
          c4 = 0;
          closure_0(false);
          throw closure_3;
        } else {
          if (2 === c2) {
            c4 = 1;
            tmp(closure_3);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_0(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c4 = 1;
          }
          c4 = 0;
          closure_0(false);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp28) {
        closure_3 = tmp28;
        if (0 === c4) {
          c5 = 3;
          throw tmp28;
        } else if (1 === tmp30) {
          c2 = 1;
        } else {
          c2 = 2;
        }
      }
    }
  });
  let obj = {
    loading: first,
    fetchSubscriptionsSettings: useCallback(function(arg0) {
      return closure_0(...arguments);
    }, []),
    error: first1
  };
  return obj;
};
export const useUpdateSubscriptionsTrial = function useUpdateSubscriptionsTrial() {
  let closure_0;
  let closure_1;
  let first;
  let first1;
  [first, closure_0] = react.useState(false);
  [first1, closure_1] = react.useState(null);
  const useCallback = react.useCallback;
  closure_0 = _asyncToGenerator(async (arg0, value, arg2) => {
    let obj2;
    closure_0 = arg0;
    closure_1 = value;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c6;
      try {
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            closure_0(true);
            closure_1(null);
            c6 = 2;
            c4 = 3;
            c7 = 1;
            const obj5 = { value: obj2.updateSubscriptionTrial(closure_0, closure_1, closure_2), done: false };
            obj2 = GuildRoleSubscriptionsActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c4) {
          c6 = 0;
          closure_0(false);
          throw closure_5;
        } else {
          if (2 === c4) {
            c6 = 1;
            closure_1(closure_5);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_0(false);
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c6 = 1;
          }
          c6 = 0;
          closure_0(false);
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp30) {
        closure_5 = tmp30;
        if (0 === c6) {
          c7 = 3;
          throw tmp30;
        } else if (1 === tmp32) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  let obj = {
    loading: first,
    updateSubscriptionTrial: useCallback(function(arg0, arg1, arg2) {
      return closure_0(...arguments);
    }, []),
    error: first1
  };
  return obj;
};
export const useSubscriptionTrial = function useSubscriptionTrial(editStateId) {
  _require = editStateId;
  const items = [GuildRoleSubscriptionsStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let subscriptionTrial = null;
    if (null != editStateId) {
      subscriptionTrial = GuildRoleSubscriptionsStore.getSubscriptionTrial(tmp);
    }
    return subscriptionTrial;
  });
};
export const useSubscriptionTrialsForGroup = function useSubscriptionTrialsForGroup(arg0) {
  let closure_0;
  _require = arg0;
  const obj = {};
  let flag = obj.includeSoftDeleted;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.includeUnpublished;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let items = [GuildRoleSubscriptionsStore];
  const items1 = [arg0, flag, flag2];
  const obj2 = require("get initialized");
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    if (null == closure_0) {
      return [];
    } else {
      const subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp);
      if (null == subscriptionGroupListing) {
        return [];
      } else {
        const items = [];
        const subscription_listings_ids = subscriptionGroupListing.subscription_listings_ids;
        for (const item10009 of subscription_listings_ids) {
          let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10009);
          let tmp6 = subscriptionListing;
          if (null != subscriptionListing) {
            let soft_deleted = tmp6.soft_deleted;
            if (soft_deleted) {
              soft_deleted = !flag;
            }
            if (!soft_deleted) {
              let published = tmp6.published || flag2;
              if (published) {
                let arr = items.push(tmp6);
              }
            }
          }
          continue;
        }
        return items;
      }
    }
  }, items1);
  const items2 = [GuildRoleSubscriptionsStore];
  const items3 = [stateFromStoresArray];
  const obj3 = require("get initialized");
  return obj3.useStateFromStoresArray(items2, () => {
    let subscriptionTrial;
    const mapped = stateFromStoresArray.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
    return mapped.filter(stateFromStoresArray(dependencyMap[11]).isNotNullish);
  }, items3);
};
export const useSubscriptionTrialsForGuild = function useSubscriptionTrialsForGuild(guildId) {
  let stateFromStoresArray;
  let closure_0 = guildId;
  let closure_1 = { includeSoftDeleted: false, sortDeletedListingsLast: false };
  useFetchListingsForGuild(guildId);
  let items = [GuildRoleSubscriptionsStore];
  const obj = stateFromStoresArray(504);
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      let subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp2);
    } else {
      subscriptionGroupListingsForGuild = closure_2_10;
    }
    const items = [];
    for (const item10011 of subscriptionGroupListingsForGuild) {
      let subscription_listings_ids = item10011.subscription_listings_ids;
      for (const item10017 of subscription_listings_ids) {
        let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10017);
        let tmp9 = subscriptionListing;
        let tmp10 = null == subscriptionListing;
        if (!tmp10) {
          let includeSoftDeleted = closure_1.includeSoftDeleted;
          let soft_deleted = !includeSoftDeleted;
          if (soft_deleted) {
            soft_deleted = tmp9.soft_deleted;
          }
          tmp10 = soft_deleted;
        }
        if (!tmp10) {
          let arr = items.push(tmp9);
        }
        continue;
      }
      continue;
    }
    let tmp16 = items;
    if (closure_1.includeSoftDeleted) {
      tmp16 = items;
      if (closure_1.sortDeletedListingsLast) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, items.filter((soft_deleted) => !soft_deleted.soft_deleted), 0);
        HermesBuiltin.arraySpread(items1, items.filter((soft_deleted) => soft_deleted.soft_deleted), arraySpreadResult);
        tmp16 = items1;
      }
    }
    return tmp16;
  });
  let items1 = [GuildRoleSubscriptionsStore];
  const items2 = [stateFromStoresArray];
  const obj2 = stateFromStoresArray(504);
  return obj2.useStateFromStoresArray(items1, () => {
    let subscriptionTrial;
    const mapped = stateFromStoresArray.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items2);
};
