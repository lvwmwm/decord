// Module ID: 15000
// Function ID: 15001
// Name: useGuildTagCreationUpsell
// Dependencies: [19, 5041, 5102, 1385, 2172, 2176, 15001, 504, 12, 8840, 14362, 2107, 6621, 2]
// Exports: useGuildTagCreationUpsell

// Module 15000 (useGuildTagCreationUpsell)
import _modDef12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2107 */;
import ServerTagUpsellOnProfileExperimentDefault from "ServerTagUpsellOnProfileExperiment" /* 15001 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5041 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import UserStore from "UserStore" /* 1385 */;
import BillingInfoStore from "BillingInfoStore" /* 2172 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import size from "module_2" /* 2 */;

let guildsArray;

let result = size.fileFinishedImporting("modules/guild_tag/useGuildTagCreationUpsell.tsx");

export function useGuildTagCreationUpsell(GuildProfileCreateTagUpsell, arg1) {
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
      const tmpResult = tmp(tmp2[12]);
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
    combined = "" + GuildProfileCreateTagUpsell + "-Disabled";
  } else {
    combined = GuildProfileCreateTagUpsell;
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
}
