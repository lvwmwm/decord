// Module ID: 8603
// Function ID: 68261
// Name: useTieredTenureBadgeForUser
// Dependencies: [6855, 566, 6876, 2]
// Exports: useTieredTenureBadgeForUser

// Module 8603 (useTieredTenureBadgeForUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getTieredTenureBadgeData").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export const useTieredTenureBadgeForUser = function useTieredTenureBadgeForUser(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let userProfile = null;
    if (null != closure_0) {
      userProfile = outer1_2.getUserProfile(closure_0);
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
            const tieredTenureBadge = callback(outer2_1[2]).getTieredTenureBadge(id.id);
          });
        }
        tmp4 = closure_0;
      }
    }
    return tmp4;
  });
};
