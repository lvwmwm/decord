// Module ID: 14879
// Function ID: 14880
// Name: useGuildTagCreationUpsell
// Dependencies: [19, 2087, 4750, 1390, 4771, 4775, 558, 576, 12, 8289, 12247, 504, 1989, 5724, 14880, 2]

// Module 14879 (useGuildTagCreationUpsell)
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1989 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UserStore from "UserStore" /* 1390 */;
import BillingInfoStore from "BillingInfoStore" /* 4771 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildsArray;

let tmp;
const get_initialized = tmp(504);
const ServerTagUpsellOnProfileExperiment = tmp(14880);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildTagCreationUpsell(arg0) {
  let combined;
  let enabled;
  let ignoreSubscriptionPlatform;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    const fn = function h() {
      let tmp = _modDef12;
      const sortBy = tmp.sortBy;
      guildsArray = guildsArray.getGuildsArray();
      return sortBy(guildsArray.filter((item) => {
        const obj = closure_1_0(closure_1_2[9]);
        let tmp4 = !obj.guildSupportsTags(item);
        obj.guildSupportsTags(item);
        const tmp = closure_1_0;
        const tmp2 = closure_1_2;
        if (tmp4) {
          const tmpResult = tmp(tmp2[10]);
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
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmpResult = get_initialized;
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore, SubscriptionStore];
    const fn2 = function f() {
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
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = get_initialized;
  let stateFromStores = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function y() {
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
        const tmpResult = tmp(tmp2[13]);
        const subscriptions = tmpResult.fetchSubscriptions();
        subscriptions.catch(() => {

        });
      }
    };
    const items2 = [];
    cResult[4] = fn3;
    cResult[5] = items2;
    tmp14 = items2;
    tmp13 = fn3;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const effect = react.useEffect(tmp13, tmp14);
  if (stateFromStoresArray.length <= 0) {
    const _HermesInternal = HermesInternal;
    let str = "-Disabled";
    combined = "" + arg0 + "-Disabled";
  } else {
    combined = arg0;
  }
  if (cResult[6] !== combined) {
    let obj2 = { location: combined };
    cResult[6] = combined;
    cResult[7] = obj2;
    tmp18 = obj2;
  } else {
    tmp18 = cResult[7];
  }
  const tmpResult4 = ServerTagUpsellOnProfileExperiment;
  const serverTagUpsellOnProfileConfig = tmpResult4.useServerTagUpsellOnProfileConfig(tmp18);
  ({ enabled, ignoreSubscriptionPlatform } = serverTagUpsellOnProfileConfig);
  if (enabled) {
    enabled = tmp16;
  }
  if (enabled) {
    if (!stateFromStores) {
      stateFromStores = ignoreSubscriptionPlatform;
    }
    enabled = stateFromStores;
  }
  if (cResult[8] === stateFromStoresArray) {
    let tmp20;
    if (cResult[9] === enabled) {
      tmp20 = cResult[10];
    }
    return tmp20;
  }
  const obj3 = { creatableGuilds: stateFromStoresArray, isUpsellVisible: enabled };
  cResult[8] = stateFromStoresArray;
  cResult[9] = enabled;
  cResult[10] = obj3;
  tmp20 = obj3;
}) : (function useGuildTagCreationUpsell(arg0) {
  let combined;
  let obj = get_initialized;
  const items = [GuildStore, PermissionStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let tmp = _modDef12;
    const sortBy = tmp.sortBy;
    guildsArray = guildsArray.getGuildsArray();
    return sortBy(guildsArray.filter((item) => {
      const obj = closure_1_0(closure_1_2[9]);
      let tmp4 = !obj.guildSupportsTags(item);
      obj.guildSupportsTags(item);
      const tmp = closure_1_0;
      const tmp2 = closure_1_2;
      if (tmp4) {
        const tmpResult = tmp(tmp2[10]);
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
      const tmpResult = tmp(tmp2[13]);
      const subscriptions = tmpResult.fetchSubscriptions();
      subscriptions.catch(() => {

      });
    }
  }, []);
  let tmp4 = ServerTagUpsellOnProfileExperiment;
  const useServerTagUpsellOnProfileConfig = tmp4.useServerTagUpsellOnProfileConfig;
  if (stateFromStoresArray.length <= 0) {
    const tmp6 = globalThis;
    const _HermesInternal = HermesInternal;
    let str = "-Disabled";
    combined = "" + arg0 + "-Disabled";
  } else {
    combined = arg0;
  }
  const serverTagUpsellOnProfileConfig = useServerTagUpsellOnProfileConfig({ location: combined });
  let enabled = serverTagUpsellOnProfileConfig.enabled;
  const ignoreSubscriptionPlatform = serverTagUpsellOnProfileConfig.ignoreSubscriptionPlatform;
  const obj3 = { creatableGuilds: stateFromStoresArray, isUpsellVisible: enabled };
  if (enabled) {
    enabled = tmp3;
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
