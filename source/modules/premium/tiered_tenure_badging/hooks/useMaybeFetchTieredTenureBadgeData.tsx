// Module ID: 13354
// Function ID: 13355
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1921, 1923, 586, 8956, 4946, 8126, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 13354 (useMaybeFetchTieredTenureBadgeData)
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4946 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import { PremiumTypes } from "GuildFeatures" /* 1923 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [closure_3];
  _require = _require(586).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = _require(586);
  importDefault = _require(8956).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountLayoutEffectDefault(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (tmp3) {
      callback(closure_1_2[5])(tmp.id);
    }
  });
};
