// Module ID: 12385
// Function ID: 96234
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1849, 1851, 566, 8529, 4559, 7888, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 12385 (useMaybeFetchTieredTenureBadgeData)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [_isNativeReflectConstruct];
  _require = _require(566).useStateFromStores(items, () => outer1_3.getCurrentUser());
  const obj = _require(566);
  const importDefault = _require(8529).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  importDefault(4559)(() => {
    let id;
    if (null != user) {
      id = user.id;
    }
    if (tmp3) {
      callback(outer1_2[5])(user.id);
    }
  });
};
