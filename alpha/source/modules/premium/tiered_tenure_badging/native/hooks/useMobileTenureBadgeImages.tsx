// Module ID: 11418
// Function ID: 11419
// Name: useMobileTenureBadgeImages
// Dependencies: [1385, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11418 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import AssetRegistryDefault from "AssetRegistry" /* 11419 */;
import _modDef11420 from "module_11420" /* 11420 */;
import _modDef11421 from "module_11421" /* 11421 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11422 */;
import _modDef11423 from "module_11423" /* 11423 */;
import _modDef11424 from "module_11424" /* 11424 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11425 */;
import _modDef11426 from "module_11426" /* 11426 */;
import _modDef11427 from "module_11427" /* 11427 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11428 */;
import _modDef11429 from "module_11429" /* 11429 */;
import _modDef11430 from "module_11430" /* 11430 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11431 */;
import _modDef11432 from "module_11432" /* 11432 */;
import _modDef11433 from "module_11433" /* 11433 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11434 */;
import _modDef11435 from "module_11435" /* 11435 */;
import _modDef11436 from "module_11436" /* 11436 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11437 */;
import _modDef11438 from "module_11438" /* 11438 */;
import _modDef11439 from "module_11439" /* 11439 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11440 */;
import _modDef11441 from "module_11441" /* 11441 */;
import _modDef11442 from "module_11442" /* 11442 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11420, large: _modDef11421 };
({ small: AssetRegistryDefault, medium: _modDef11420, large: _modDef11421 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11423, large: _modDef11424 };
({ small: AssetRegistryDefault2, medium: _modDef11423, large: _modDef11424 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11426, large: _modDef11427 };
({ small: AssetRegistryDefault3, medium: _modDef11426, large: _modDef11427 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11429, large: _modDef11430 };
({ small: AssetRegistryDefault4, medium: _modDef11429, large: _modDef11430 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11432, large: _modDef11433 };
({ small: AssetRegistryDefault5, medium: _modDef11432, large: _modDef11433 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11435, large: _modDef11436 };
({ small: AssetRegistryDefault6, medium: _modDef11435, large: _modDef11436 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11438, large: _modDef11439 };
({ small: AssetRegistryDefault7, medium: _modDef11438, large: _modDef11439 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11441, large: _modDef11442 };
({ small: AssetRegistryDefault8, medium: _modDef11441, large: _modDef11442 });
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
