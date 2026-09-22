// Module ID: 11323
// Function ID: 11324
// Name: useTieredTenureBadgeForUser
// Dependencies: [7723, 504, 7736, 2]
// Exports: useTieredTenureBadgeForUser

// Module 11323 (useTieredTenureBadgeForUser)
import UserProfileStore from "UserProfileStore" /* 7723 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export const useTieredTenureBadgeForUser = function useTieredTenureBadgeForUser(id) {
  _require = id;
  const items = [UserProfileStore];
  return require("initialize").useStateFromStores(items, () => {
    let userProfile = null;
    if (null != tieredTenureBadge) {
      userProfile = UserProfileStore.getUserProfile(tmp);
    }
    if (userProfile != null) {
      const premiumSince = userProfile.premiumSince;
    }
    let tmp4 = null;
    if (null != userProfile) {
      tmp4 = null;
      if (null != premiumSince) {
        if (userProfile != null) {
          const badges = userProfile.badges;
          if (badges != null) {
            const item = badges.forEach((id) => {
              tieredTenureBadge = tieredTenureBadge(dependencyMap[2]).getTieredTenureBadge(id.id);
            });
          }
        }
        tmp4 = tieredTenureBadge;
      }
    }
    return tmp4;
  });
};
