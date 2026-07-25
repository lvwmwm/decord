// Module ID: 12424
// Function ID: 96413
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1850, 1852, 566, 8334, 4560, 7923, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 12424 (useMaybeFetchTieredTenureBadgeData)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [_isNativeReflectConstruct];
  _require = _require(566).useStateFromStores(items, () => outer1_3.getCurrentUser());
  const obj = _require(566);
  const importDefault = _require(8334).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  importDefault(4560)(() => {
    let id;
    if (null != user) {
      id = user.id;
    }
    if (tmp3) {
      callback(outer1_2[5])(user.id);
    }
  });
};
