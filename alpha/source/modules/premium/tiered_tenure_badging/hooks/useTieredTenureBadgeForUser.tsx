// Module ID: 10014
// Function ID: 10015
// Name: useTieredTenureBadgeForUser
// Dependencies: [7288, 1385, 504, 7297, 10015, 2]
// Exports: useTieredTenureBadgeForUser

// Module 10014 (useTieredTenureBadgeForUser)
import PremiumPerkGates from "PremiumPerkGates" /* 10015 */;
import UserProfileStore from "UserProfileStore" /* 7288 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export function useTieredTenureBadgeForUser(id) {
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
            let obj = PremiumPerkGates;
            earnedTenureBadge = null;
            const tmp10 = require;
            if (obj.canUseTenureBadge(currentUser)) {
              const tmp10Result = tmp10(7297);
              earnedTenureBadge = tmp10Result.getEarnedTenureBadge(premiumSince);
            }
          }
          return earnedTenureBadge;
        }
      }
    }
    return null;
  });
}
