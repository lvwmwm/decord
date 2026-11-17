// Module ID: 15263
// Function ID: 15264
// Name: useMobileTenureBadgeImages
// Dependencies: [1390, 15264, 15265, 15266, 15267, 15268, 15269, 15270, 15271, 15272, 15273, 15274, 15275, 15276, 15277, 15278, 15279, 15280, 15281, 15282, 15283, 15284, 15285, 15286, 15287, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 15263 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import AssetRegistryDefault from "AssetRegistry" /* 15264 */;
import _modDef15265 from "module_15265" /* 15265 */;
import _modDef15266 from "module_15266" /* 15266 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15267 */;
import _modDef15268 from "module_15268" /* 15268 */;
import _modDef15269 from "module_15269" /* 15269 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 15270 */;
import _modDef15271 from "module_15271" /* 15271 */;
import _modDef15272 from "module_15272" /* 15272 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 15273 */;
import _modDef15274 from "module_15274" /* 15274 */;
import _modDef15275 from "module_15275" /* 15275 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 15276 */;
import _modDef15277 from "module_15277" /* 15277 */;
import _modDef15278 from "module_15278" /* 15278 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 15279 */;
import _modDef15280 from "module_15280" /* 15280 */;
import _modDef15281 from "module_15281" /* 15281 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 15282 */;
import _modDef15283 from "module_15283" /* 15283 */;
import _modDef15284 from "module_15284" /* 15284 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 15285 */;
import _modDef15286 from "module_15286" /* 15286 */;
import _modDef15287 from "module_15287" /* 15287 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef15265, large: _modDef15266 };
({ small: AssetRegistryDefault, medium: _modDef15265, large: _modDef15266 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef15268, large: _modDef15269 };
({ small: AssetRegistryDefault2, medium: _modDef15268, large: _modDef15269 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef15271, large: _modDef15272 };
({ small: AssetRegistryDefault3, medium: _modDef15271, large: _modDef15272 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef15274, large: _modDef15275 };
({ small: AssetRegistryDefault4, medium: _modDef15274, large: _modDef15275 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef15277, large: _modDef15278 };
({ small: AssetRegistryDefault5, medium: _modDef15277, large: _modDef15278 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef15280, large: _modDef15281 };
({ small: AssetRegistryDefault6, medium: _modDef15280, large: _modDef15281 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef15283, large: _modDef15284 };
({ small: AssetRegistryDefault7, medium: _modDef15283, large: _modDef15284 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef15286, large: _modDef15287 };
({ small: AssetRegistryDefault8, medium: _modDef15286, large: _modDef15287 });
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

export function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
}
export function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
}
