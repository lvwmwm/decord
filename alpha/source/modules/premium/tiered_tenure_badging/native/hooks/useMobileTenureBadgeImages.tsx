// Module ID: 11031
// Function ID: 11032
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 11032, 11033, 11034, 11035, 11036, 11037, 11038, 11039, 11040, 11041, 11042, 11043, 11044, 11045, 11046, 11047, 11048, 11049, 11050, 11051, 11052, 11053, 11054, 11055, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11031 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 11032 */;
import _modDef11033 from "module_11033" /* 11033 */;
import _modDef11034 from "module_11034" /* 11034 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11035 */;
import _modDef11036 from "module_11036" /* 11036 */;
import _modDef11037 from "module_11037" /* 11037 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11038 */;
import _modDef11039 from "module_11039" /* 11039 */;
import _modDef11040 from "module_11040" /* 11040 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11041 */;
import _modDef11042 from "module_11042" /* 11042 */;
import _modDef11043 from "module_11043" /* 11043 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11044 */;
import _modDef11045 from "module_11045" /* 11045 */;
import _modDef11046 from "module_11046" /* 11046 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11047 */;
import _modDef11048 from "module_11048" /* 11048 */;
import _modDef11049 from "module_11049" /* 11049 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11050 */;
import _modDef11051 from "module_11051" /* 11051 */;
import _modDef11052 from "module_11052" /* 11052 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11053 */;
import _modDef11054 from "module_11054" /* 11054 */;
import _modDef11055 from "module_11055" /* 11055 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11033, large: _modDef11034 };
({ small: AssetRegistryDefault, medium: _modDef11033, large: _modDef11034 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11036, large: _modDef11037 };
({ small: AssetRegistryDefault2, medium: _modDef11036, large: _modDef11037 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11039, large: _modDef11040 };
({ small: AssetRegistryDefault3, medium: _modDef11039, large: _modDef11040 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11042, large: _modDef11043 };
({ small: AssetRegistryDefault4, medium: _modDef11042, large: _modDef11043 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11045, large: _modDef11046 };
({ small: AssetRegistryDefault5, medium: _modDef11045, large: _modDef11046 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11048, large: _modDef11049 };
({ small: AssetRegistryDefault6, medium: _modDef11048, large: _modDef11049 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11051, large: _modDef11052 };
({ small: AssetRegistryDefault7, medium: _modDef11051, large: _modDef11052 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11054, large: _modDef11055 };
({ small: AssetRegistryDefault8, medium: _modDef11054, large: _modDef11055 });
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
