// Module ID: 13197
// Function ID: 13198
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1372, 1374, 504, 10821, 5494, 7827, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 13197 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5494 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7827 */;
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
