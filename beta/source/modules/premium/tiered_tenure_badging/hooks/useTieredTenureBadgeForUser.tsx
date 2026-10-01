// Module ID: 10647
// Function ID: 10648
// Name: useTieredTenureBadgeForUser
// Dependencies: [7035, 1372, 504, 7048, 2]
// Exports: useTieredTenureBadgeForUser

// Module 10647 (useTieredTenureBadgeForUser)
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7048 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export const useTieredTenureBadgeForUser = function useTieredTenureBadgeForUser(id) {
  _require = id;
  let obj = require("get initialized");
  const items = [UserProfileStore, UserStore];
  return obj.useStateFromStores(items, () => {
    let premiumSince;
    let tieredTenureBadge;
    let userProfile = null;
    if (null != closure_0) {
      userProfile = UserProfileStore.getUserProfile(tmp);
    }
    if (userProfile != null) {
      premiumSince = userProfile.premiumSince;
    }
    if (null != userProfile) {
      if (null != premiumSince) {
        if (userProfile != null) {
          const badges = userProfile.badges;
          if (badges != null) {
            const item = badges.forEach((id) => {
              const obj = id(closure_2_1[3]);
              tieredTenureBadge = obj.getTieredTenureBadge(id.id);
            });
          }
        }
        if (null != tieredTenureBadge) {
          return tieredTenureBadge;
        } else {
          const currentUser = UserStore.getCurrentUser();
          id = undefined;
          if (currentUser != null) {
            id = currentUser.id;
          }
          let earnedTenureBadge = null;
          if (closure_0 === id) {
            let result;
            if (currentUser != null) {
              result = currentUser.hasPaidTier2Subscription();
            }
            earnedTenureBadge = null;
            if (result) {
              const obj2 = TieredTenureBadgeUtils;
              earnedTenureBadge = obj2.getEarnedTenureBadge(premiumSince);
            }
          }
          return earnedTenureBadge;
        }
      }
    }
    return null;
  });
};
