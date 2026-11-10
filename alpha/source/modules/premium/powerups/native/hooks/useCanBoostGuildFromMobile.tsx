// Module ID: 14345
// Function ID: 14346
// Name: useCanBoostGuildFromMobile
// Dependencies: [7664, 2176, 504, 8540, 14346, 7665, 7668, 2]
// Exports: default

// Module 14345 (useCanBoostGuildFromMobile)
import get_initialized from "get initialized" /* 504 */;
import GuildBoostPurchasingUtils from "GuildBoostPurchasingUtils" /* 7665 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 7668 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8540 */;
import canBoostGuildFromMobileDefault from "canBoostGuildFromMobile" /* 14346 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7664 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useCanBoostGuildFromMobile.tsx");

export default function useCanBoostGuildFromMobile(boostsNeeded) {
  let availableBoostSlotCount;
  let hasFetchedBoostSlots;
  let hasFetchedSubscriptions;
  let obj4;
  let obj5;
  let premiumSubscription;
  let obj = get_initialized;
  const items = [SubscriptionStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { hasFetchedSubscriptions: SubscriptionStore.hasFetchedSubscriptions(), premiumSubscription: SubscriptionStore.getPremiumTypeSubscription() };
    return obj;
  });
  ({ hasFetchedSubscriptions, premiumSubscription } = stateFromStoresObject);
  let obj2 = get_initialized;
  const items1 = [GuildBoostSlotStore];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
    let num;
    const obj = { hasFetchedBoostSlots: GuildBoostSlotStore.hasFetched, availableBoostSlotCount: num };
    num = 0;
    if (GuildBoostSlotStore.hasFetched) {
      const obj2 = GuildBoostingUtils;
      num = obj2.getAvailableGuildBoostSlots(tmp.boostSlots).length;
    }
    return obj;
  });
  ({ hasFetchedBoostSlots, availableBoostSlotCount } = stateFromStoresObject1);
  const obj3 = { hasFetchedSubscriptions, isPurchaseBlocked: null != obj4.getMobileBoostPurchaseBlockedMessage(premiumSubscription), isWebRedirectCheckoutEnabled: obj5.isMobileWebRedirectCheckoutEnabled(), hasFetchedBoostSlots, availableBoostSlotCount, boostsNeeded };
  const tmp3 = canBoostGuildFromMobileDefault;
  obj4 = GuildBoostPurchasingUtils;
  obj5 = MobileWebRedirectCheckoutUtils;
  return tmp3(obj3);
};
