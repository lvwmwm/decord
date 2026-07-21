// Module ID: 12534
// Function ID: 96288
// Name: hasCrepeMonthlyOrbsPerk
// Dependencies: [872415253, 3137339413, 17, 4261412880, 671088688, 33554448, 1946157056]
// Exports: useHasXboxMonthlyOrbsPerk

// Module 12534 (hasCrepeMonthlyOrbsPerk)
function hasCrepeMonthlyOrbsPerk(currentUser) {
  if (obj.canUseMonthlyOrbs(currentUser)) {
    if (!obj2.isPremiumExactly(currentUser, PremiumTypes.TIER_2)) {
      let perks;
      if (null != currentUser) {
        perks = currentUser.perks;
      }
      const perkSource = arg1(dependencyMap[3]).getPerkSource(perks, arg1(dependencyMap[4]).Perk.MONTHLY_ORBS);
      let hasItem = null != perkSource;
      if (hasItem) {
        hasItem = perkSource.includes(arg1(dependencyMap[4]).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
      }
      return hasItem;
    }
    const obj2 = arg1(dependencyMap[2]);
  }
  return false;
}
let closure_3 = importDefault(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/rewards/hooks/useHasXboxMonthlyOrbsPerk.tsx");

export { hasCrepeMonthlyOrbsPerk };
export const useHasXboxMonthlyOrbsPerk = function useHasXboxMonthlyOrbsPerk() {
  const items = [closure_3];
  return hasCrepeMonthlyOrbsPerk(arg1(dependencyMap[5]).useStateFromStores(items, () => currentUser.getCurrentUser()));
};
