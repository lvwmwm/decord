// Module ID: 13545
// Function ID: 13546
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1371, 1373, 504, 11294, 5073, 8304, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 13545 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5073 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8304 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

const require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
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
