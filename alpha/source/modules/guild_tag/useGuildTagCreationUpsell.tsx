// Module ID: 14655
// Function ID: 14656
// Name: useGuildTagCreationUpsell
// Dependencies: [19, 4879, 4937, 1389, 2052, 2056, 558, 576, 14656, 12, 8694, 13903, 504, 1989, 6522, 2]

// Module 14655 (useGuildTagCreationUpsell)
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1989 */;
import ServerTagUpsellOnProfileExperimentDefault from "ServerTagUpsellOnProfileExperiment" /* 14656 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4879 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import UserStore from "UserStore" /* 1389 */;
import BillingInfoStore from "BillingInfoStore" /* 2052 */;
import SubscriptionStore from "SubscriptionStore" /* 2056 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildsArray;

let tmp;
const get_initialized = tmp(504);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildTagCreationUpsell(arg0, arg1) {
  let combined;
  let enabled;
  let ignoreSubscriptionPlatform;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = arg1;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj2 = react2;
  const cResult = obj2.c(11);
  if (undefined === arg1) {
    let tmp4 = importDefault;
    obj = ServerTagUpsellOnProfileExperimentDefault;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    const fn = function b() {
      let tmp = _modDef12;
      const sortBy = tmp.sortBy;
      guildsArray = guildsArray.getGuildsArray();
      return sortBy(guildsArray.filter((item) => {
        const obj = closure_1_0(closure_1_2[10]);
        let tmp4 = !obj.guildSupportsTags(item);
        obj.guildSupportsTags(item);
        const tmp = closure_1_0;
        const tmp2 = closure_1_2;
        if (tmp4) {
          const tmpResult = tmp(tmp2[11]);
          tmp4 = true === tmpResult.getHasAllocateBoostPermission(closure_1_5, item);
        }
        return tmp4;
      }), (name) => {
        const str = name.name;
        return str.toLowerCase();
      });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = fn;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let tmpResult = get_initialized;
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore, SubscriptionStore];
    const fn2 = function y() {
      const obj = PremiumTypeUtils;
      const isPremiumResult = obj.isPremium(authStore.getCurrentUser());
      let tmp2 = !isPremiumResult;
      if (isPremiumResult) {
        let result = SubscriptionStore.hasFetchedSubscriptions();
        const obj2 = SubscriptionStore;
        if (result) {
          const premiumTypeSubscription = obj2.getPremiumTypeSubscription();
          result = null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
        }
        tmp2 = result;
      }
      return tmp2;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  let stateFromStores = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function v() {
      const obj = PremiumTypeUtils;
      const isPremiumResult = obj.isPremium(authStore.getCurrentUser());
      let isSubscriptionFetching = !isPremiumResult;
      const tmp = require;
      const tmp2 = dependencyMap;
      if (isPremiumResult) {
        isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions();
      }
      if (!isSubscriptionFetching) {
        isSubscriptionFetching = BillingInfoStore.isSubscriptionFetching;
      }
      if (!isSubscriptionFetching) {
        const tmpResult = tmp(tmp2[14]);
        const subscriptions = tmpResult.fetchSubscriptions();
        subscriptions.catch(() => {

        });
      }
    };
    const items2 = [];
    cResult[4] = fn3;
    cResult[5] = items2;
    tmp15 = items2;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const effect = react.useEffect(tmp14, tmp15);
  if (stateFromStoresArray.length <= 0) {
    const _HermesInternal = HermesInternal;
    let str = "-Disabled";
    combined = "" + arg0 + "-Disabled";
  } else {
    combined = arg0;
  }
  if (cResult[6] !== combined) {
    const obj3 = { location: combined };
    cResult[6] = combined;
    cResult[7] = obj3;
    tmp19 = obj3;
  } else {
    tmp19 = cResult[7];
  }
  const config = obj.useConfig(tmp19);
  ({ enabled, ignoreSubscriptionPlatform } = config);
  if (enabled) {
    enabled = tmp17;
  }
  if (enabled) {
    if (!stateFromStores) {
      stateFromStores = ignoreSubscriptionPlatform;
    }
    enabled = stateFromStores;
  }
  if (cResult[8] === stateFromStoresArray) {
    let tmp21;
    if (cResult[9] === enabled) {
      tmp21 = cResult[10];
    }
    return tmp21;
  }
  const obj4 = { creatableGuilds: stateFromStoresArray, isUpsellVisible: enabled };
  cResult[8] = stateFromStoresArray;
  cResult[9] = enabled;
  cResult[10] = obj4;
  tmp21 = obj4;
}) : (function useGuildTagCreationUpsell(arg0) {
  let combined;
  let tmp = arg1;
  if (arg1 === undefined) {
    let tmp2 = importDefault;
    tmp = ServerTagUpsellOnProfileExperimentDefault;
  }
  let obj = get_initialized;
  const items = [GuildStore, PermissionStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let tmp = _modDef12;
    const sortBy = tmp.sortBy;
    guildsArray = guildsArray.getGuildsArray();
    return sortBy(guildsArray.filter((item) => {
      const obj = closure_1_0(closure_1_2[10]);
      let tmp4 = !obj.guildSupportsTags(item);
      obj.guildSupportsTags(item);
      const tmp = closure_1_0;
      const tmp2 = closure_1_2;
      if (tmp4) {
        const tmpResult = tmp(tmp2[11]);
        tmp4 = true === tmpResult.getHasAllocateBoostPermission(closure_1_5, item);
      }
      return tmp4;
    }), (name) => {
      const str = name.name;
      return str.toLowerCase();
    });
  });
  let obj2 = get_initialized;
  const items1 = [UserStore, SubscriptionStore];
  let stateFromStores = obj2.useStateFromStores(items1, () => {
    const obj = PremiumTypeUtils;
    const isPremiumResult = obj.isPremium(authStore.getCurrentUser());
    let tmp2 = !isPremiumResult;
    if (isPremiumResult) {
      let result = SubscriptionStore.hasFetchedSubscriptions();
      const obj2 = SubscriptionStore;
      if (result) {
        const premiumTypeSubscription = obj2.getPremiumTypeSubscription();
        result = null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
      }
      tmp2 = result;
    }
    return tmp2;
  });
  const effect = react.useEffect(() => {
    const obj = PremiumTypeUtils;
    const isPremiumResult = obj.isPremium(authStore.getCurrentUser());
    let isSubscriptionFetching = !isPremiumResult;
    const tmp = require;
    const tmp2 = dependencyMap;
    if (isPremiumResult) {
      isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions();
    }
    if (!isSubscriptionFetching) {
      isSubscriptionFetching = BillingInfoStore.isSubscriptionFetching;
    }
    if (!isSubscriptionFetching) {
      const tmpResult = tmp(tmp2[14]);
      const subscriptions = tmpResult.fetchSubscriptions();
      subscriptions.catch(() => {

      });
    }
  }, []);
  const tmp6 = stateFromStoresArray.length > 0;
  const useConfig = tmp.useConfig;
  if (!tmp6) {
    const _HermesInternal = HermesInternal;
    let str = "-Disabled";
    combined = "" + arg0 + "-Disabled";
  } else {
    combined = arg0;
  }
  const config = useConfig({ location: combined });
  let enabled = config.enabled;
  const ignoreSubscriptionPlatform = config.ignoreSubscriptionPlatform;
  const obj3 = { creatableGuilds: stateFromStoresArray, isUpsellVisible: enabled };
  if (enabled) {
    enabled = tmp6;
  }
  if (enabled) {
    if (!stateFromStores) {
      stateFromStores = ignoreSubscriptionPlatform;
    }
    enabled = stateFromStores;
  }
  return obj3;
});
let result = size.fileFinishedImporting("modules/guild_tag/useGuildTagCreationUpsell.tsx");

export const useGuildTagCreationUpsell = tmp2;
