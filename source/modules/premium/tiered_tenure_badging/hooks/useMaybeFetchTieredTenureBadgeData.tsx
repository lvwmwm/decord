// Module ID: 12266
// Function ID: 94055
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: []
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 12266 (useMaybeFetchTieredTenureBadgeData)
let closure_3 = importDefault(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [closure_3];
  const callback = callback(dependencyMap[2]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = callback(dependencyMap[2]);
  const importDefault = callback(dependencyMap[3]).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  importDefault(dependencyMap[4])(() => {
    let id;
    if (null != user) {
      id = user.id;
    }
    if (tmp3) {
      callback(closure_2[5])(user.id);
    }
  });
};
