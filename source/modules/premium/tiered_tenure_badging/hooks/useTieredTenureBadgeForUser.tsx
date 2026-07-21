// Module ID: 8551
// Function ID: 67982
// Name: useTieredTenureBadgeForUser
// Dependencies: []
// Exports: useTieredTenureBadgeForUser

// Module 8551 (useTieredTenureBadgeForUser)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export const useTieredTenureBadgeForUser = function useTieredTenureBadgeForUser(id) {
  const arg1 = id;
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let userProfile = null;
    if (null != arg0) {
      userProfile = userProfile.getUserProfile(arg0);
    }
    if (null != userProfile) {
      const premiumSince = userProfile.premiumSince;
    }
    let tmp4 = null;
    if (null != userProfile) {
      tmp4 = null;
      if (null != premiumSince) {
        let tmp5 = null == userProfile;
        if (!tmp5) {
          const badges = userProfile.badges;
          tmp5 = null == badges;
          const arr = badges;
        }
        if (!tmp5) {
          const item = arr.forEach((id) => {
            const tieredTenureBadge = tieredTenureBadge(closure_1[2]).getTieredTenureBadge(id.id);
          });
        }
        tmp4 = arg0;
      }
    }
    return tmp4;
  });
};
