// Module ID: 18545
// Function ID: 18546
// Name: useIsCurrentUserEligibleForPowerupUpsells
// Dependencies: [5052, 6827, 1385, 7661, 1387, 2107, 504, 2]
// Exports: default, getIsCurrentUserEligibleForPowerupUpsells

// Module 18545 (useIsCurrentUserEligibleForPowerupUpsells)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import GuildMemberStore from "GuildMemberStore" /* 5052 */;
import SortedGuildStore from "SortedGuildStore" /* 6827 */;
import UserStore from "UserStore" /* 1385 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7661 */;
import size from "module_2" /* 2 */;

const f115815 = (premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription;
const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx");

export default function useIsCurrentUserEligibleForPowerupUpsells() {
  let currentUser;
  let flattenedGuildIds;
  let hasFetched;
  let stateFromStores;
  const tmp = stateFromStores;
  let items = [UserStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildBoostSlotStore];
  const obj3 = stateFromStores(504);
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    let items;
    if (hasFetched.hasFetched) {
      const _Object = Object;
      items = Object.values(tmp.boostSlots);
    } else {
      items = [];
    }
    return items;
  });
  const items2 = [SortedGuildStore];
  const obj5 = stateFromStores(504);
  const stateFromStores1 = obj5.useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
  let tmp3 = null != stateFromStores;
  if (tmp3) {
    let tmp5 = !stateFromStores.isPremiumGroupMember();
    stateFromStores.isPremiumGroupMember();
    if (tmp5) {
      const tmpResult = tmp(2107);
      let isPremiumResult = tmpResult.isPremium(stateFromStores, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = stateFromStoresArray.some(f115815) || stateFromStores1.some((item) => {
          const member = GuildMemberStore.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        stateFromStoresArray.some(f115815) || stateFromStores1.some((item) => {
          const member = GuildMemberStore.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export function getIsCurrentUserEligibleForPowerupUpsells() {
  let items;
  const currentUser = UserStore.getCurrentUser();
  if (GuildBoostSlotStore.hasFetched) {
    const _Object = Object;
    items = Object.values(tmp.boostSlots);
  } else {
    items = [];
  }
  const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
  let tmp3 = null != currentUser;
  if (tmp3) {
    let tmp5 = !currentUser.isPremiumGroupMember();
    currentUser.isPremiumGroupMember();
    if (tmp5) {
      const obj3 = currentUser(2107);
      let isPremiumResult = obj3.isPremium(currentUser, PremiumTypes.TIER_2);
      if (!isPremiumResult) {
        isPremiumResult = items.some(f115815) || flattenedGuildIds.some((item) => {
          const member = GuildMemberStore.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
        items.some(f115815) || flattenedGuildIds.some((item) => {
          const member = GuildMemberStore.getMember(item, currentUser.id);
          let premiumSince;
          if (member != null) {
            premiumSince = member.premiumSince;
          }
          return null != premiumSince;
        });
      }
      tmp5 = isPremiumResult;
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
