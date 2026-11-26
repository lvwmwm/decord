// Module ID: 9851
// Function ID: 9852
// Name: useTieredTenureBadgeForUser
// Dependencies: [6163, 1387, 504, 6176, 9821, 2]
// Exports: useTieredTenureBadgeForUser

// Module 9851 (useTieredTenureBadgeForUser)
import PremiumPerkGates from "PremiumPerkGates" /* 9821 */;
import UserProfileStore from "UserProfileStore" /* 6163 */;
import UserStore from "UserStore" /* 1387 */;
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
              const tmp10Result = tmp10(6176);
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
