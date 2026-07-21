// Module ID: 14874
// Function ID: 112041
// Name: checkPowerupUpsellEligibility
// Dependencies: []
// Exports: default, getIsCurrentUserEligibleForPowerupUpsells

// Module 14874 (checkPowerupUpsellEligibility)
function checkPowerupUpsellEligibility(stateFromStores, stateFromStoresArray, arr2) {
  stateFromStoresArray = stateFromStores;
  let tmp = null != stateFromStores;
  if (tmp) {
    let tmp2 = !stateFromStores.isPremiumGroupMember();
    if (tmp2) {
      const tmp6 = !stateFromStoresArray(dependencyMap[5]).isPremium(stateFromStores, PremiumTypes.TIER_2);
      let tmp7 = !tmp6;
      if (tmp6) {
        const tmp8 = !stateFromStoresArray.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
        let someResult = !tmp8;
        if (tmp8) {
          someResult = arr2.some((guildId) => {
            const member = member.getMember(guildId, guildId.id);
            let premiumSince;
            if (null != member) {
              premiumSince = member.premiumSince;
            }
            return null != premiumSince;
          });
        }
        tmp7 = someResult;
      }
      tmp2 = tmp7;
      const obj = stateFromStoresArray(dependencyMap[5]);
    }
    tmp = tmp2;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const PremiumTypes = arg1(dependencyMap[4]).PremiumTypes;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx");

export default function useIsCurrentUserEligibleForPowerupUpsells() {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[6]);
  const items1 = [closure_5];
  const stateFromStoresArray = arg1(dependencyMap[6]).useStateFromStoresArray(items1, () => {
    if (closure_5.hasFetched) {
      const _Object = Object;
      let items = Object.values(closure_5.boostSlots);
    } else {
      items = [];
    }
    return items;
  });
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [closure_3];
  return checkPowerupUpsellEligibility(stateFromStores, stateFromStoresArray, arg1(dependencyMap[6]).useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds()));
};
export const getIsCurrentUserEligibleForPowerupUpsells = function getIsCurrentUserEligibleForPowerupUpsells() {
  const currentUser = currentUser.getCurrentUser();
  if (closure_5.hasFetched) {
    const _Object = Object;
    let items = Object.values(closure_5.boostSlots);
  } else {
    items = [];
  }
  return checkPowerupUpsellEligibility(currentUser, items, flattenedGuildIds.getFlattenedGuildIds());
};
