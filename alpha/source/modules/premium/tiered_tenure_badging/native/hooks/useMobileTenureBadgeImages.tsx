// Module ID: 11048
// Function ID: 11049
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 11049, 11050, 11051, 11052, 11053, 11054, 11055, 11056, 11057, 11058, 11059, 11060, 11061, 11062, 11063, 11064, 11065, 11066, 11067, 11068, 11069, 11070, 11071, 11072, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11048 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 11049 */;
import _modDef11050 from "module_11050" /* 11050 */;
import _modDef11051 from "module_11051" /* 11051 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11052 */;
import _modDef11053 from "module_11053" /* 11053 */;
import _modDef11054 from "module_11054" /* 11054 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11055 */;
import _modDef11056 from "module_11056" /* 11056 */;
import _modDef11057 from "module_11057" /* 11057 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11058 */;
import _modDef11059 from "module_11059" /* 11059 */;
import _modDef11060 from "module_11060" /* 11060 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11061 */;
import _modDef11062 from "module_11062" /* 11062 */;
import _modDef11063 from "module_11063" /* 11063 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11064 */;
import _modDef11065 from "module_11065" /* 11065 */;
import _modDef11066 from "module_11066" /* 11066 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11067 */;
import _modDef11068 from "module_11068" /* 11068 */;
import _modDef11069 from "module_11069" /* 11069 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11070 */;
import _modDef11071 from "module_11071" /* 11071 */;
import _modDef11072 from "module_11072" /* 11072 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11050, large: _modDef11051 };
({ small: AssetRegistryDefault, medium: _modDef11050, large: _modDef11051 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11053, large: _modDef11054 };
({ small: AssetRegistryDefault2, medium: _modDef11053, large: _modDef11054 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11056, large: _modDef11057 };
({ small: AssetRegistryDefault3, medium: _modDef11056, large: _modDef11057 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11059, large: _modDef11060 };
({ small: AssetRegistryDefault4, medium: _modDef11059, large: _modDef11060 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11062, large: _modDef11063 };
({ small: AssetRegistryDefault5, medium: _modDef11062, large: _modDef11063 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11065, large: _modDef11066 };
({ small: AssetRegistryDefault6, medium: _modDef11065, large: _modDef11066 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11068, large: _modDef11069 };
({ small: AssetRegistryDefault7, medium: _modDef11068, large: _modDef11069 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11071, large: _modDef11072 };
({ small: AssetRegistryDefault8, medium: _modDef11071, large: _modDef11072 });
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

export const useMobileTenureBadgeImages = function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
};
export const getMobileTenureBadgeImages = function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
};
