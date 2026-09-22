// Module ID: 13733
// Function ID: 13734
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1372, 1374, 504, 11427, 5204, 8460, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 13733 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5204 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8460 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

const require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [UserStore];
  _require = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("initialize");
  importDefault = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountEffectDefault(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (tmp3) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  });
};
