// Module ID: 11419
// Function ID: 11420
// Name: useMobileTenureBadgeImages
// Dependencies: [1385, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11419 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import AssetRegistryDefault from "AssetRegistry" /* 11420 */;
import _modDef11421 from "module_11421" /* 11421 */;
import _modDef11422 from "module_11422" /* 11422 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11423 */;
import _modDef11424 from "module_11424" /* 11424 */;
import _modDef11425 from "module_11425" /* 11425 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11426 */;
import _modDef11427 from "module_11427" /* 11427 */;
import _modDef11428 from "module_11428" /* 11428 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11429 */;
import _modDef11430 from "module_11430" /* 11430 */;
import _modDef11431 from "module_11431" /* 11431 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11432 */;
import _modDef11433 from "module_11433" /* 11433 */;
import _modDef11434 from "module_11434" /* 11434 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11435 */;
import _modDef11436 from "module_11436" /* 11436 */;
import _modDef11437 from "module_11437" /* 11437 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11438 */;
import _modDef11439 from "module_11439" /* 11439 */;
import _modDef11440 from "module_11440" /* 11440 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11441 */;
import _modDef11442 from "module_11442" /* 11442 */;
import _modDef11443 from "module_11443" /* 11443 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11421, large: _modDef11422 };
({ small: AssetRegistryDefault, medium: _modDef11421, large: _modDef11422 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11424, large: _modDef11425 };
({ small: AssetRegistryDefault2, medium: _modDef11424, large: _modDef11425 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11427, large: _modDef11428 };
({ small: AssetRegistryDefault3, medium: _modDef11427, large: _modDef11428 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11430, large: _modDef11431 };
({ small: AssetRegistryDefault4, medium: _modDef11430, large: _modDef11431 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11433, large: _modDef11434 };
({ small: AssetRegistryDefault5, medium: _modDef11433, large: _modDef11434 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11436, large: _modDef11437 };
({ small: AssetRegistryDefault6, medium: _modDef11436, large: _modDef11437 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11439, large: _modDef11440 };
({ small: AssetRegistryDefault7, medium: _modDef11439, large: _modDef11440 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11442, large: _modDef11443 };
({ small: AssetRegistryDefault8, medium: _modDef11442, large: _modDef11443 });
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
