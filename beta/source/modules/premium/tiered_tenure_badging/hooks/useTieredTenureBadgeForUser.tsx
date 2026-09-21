// Module ID: 11440
// Function ID: 11441
// Name: useTieredTenureBadgeForUser
// Dependencies: [7862, 558, 568, 7875, 504, 2]

// Module 11440 (useTieredTenureBadgeForUser)
import UserProfileStore from "UserProfileStore" /* 7862 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx");

export const useTieredTenureBadgeForUser = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function t() {
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
                tieredTenureBadge = tieredTenureBadge(dependencyMap[3]).getTieredTenureBadge(id.id);
              });
            }
          }
          tmp4 = tieredTenureBadge;
        }
      }
      return tmp4;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
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
              tieredTenureBadge = tieredTenureBadge(dependencyMap[3]).getTieredTenureBadge(id.id);
            });
          }
        }
        tmp4 = tieredTenureBadge;
      }
    }
    return tmp4;
  });
});
