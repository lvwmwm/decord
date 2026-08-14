// Module ID: 12814
// Function ID: 12815
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1922, 1924, 589, 9545, 4793, 8378, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 12814 (useMaybeFetchTieredTenureBadgeData)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [mergeGuildAvatar];
  _require = _require(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = _require(589);
  const importDefault = _require(9545).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  importDefault(4793)(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (tmp3) {
      callback(outer1_2[5])(tmp.id);
    }
  });
};
