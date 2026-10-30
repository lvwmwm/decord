// Module ID: 11382
// Function ID: 11383
// Name: useMobileTenureBadgeImages
// Dependencies: [1386, 11383, 11384, 11385, 11386, 11387, 11388, 11389, 11390, 11391, 11392, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11382 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import AssetRegistryDefault from "AssetRegistry" /* 11383 */;
import _modDef11384 from "module_11384" /* 11384 */;
import _modDef11385 from "module_11385" /* 11385 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11386 */;
import _modDef11387 from "module_11387" /* 11387 */;
import _modDef11388 from "module_11388" /* 11388 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11389 */;
import _modDef11390 from "module_11390" /* 11390 */;
import _modDef11391 from "module_11391" /* 11391 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11392 */;
import _modDef11393 from "module_11393" /* 11393 */;
import _modDef11394 from "module_11394" /* 11394 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11395 */;
import _modDef11396 from "module_11396" /* 11396 */;
import _modDef11397 from "module_11397" /* 11397 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11398 */;
import _modDef11399 from "module_11399" /* 11399 */;
import _modDef11400 from "module_11400" /* 11400 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11401 */;
import _modDef11402 from "module_11402" /* 11402 */;
import _modDef11403 from "module_11403" /* 11403 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11404 */;
import _modDef11405 from "module_11405" /* 11405 */;
import _modDef11406 from "module_11406" /* 11406 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11384, large: _modDef11385 };
({ small: AssetRegistryDefault, medium: _modDef11384, large: _modDef11385 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11387, large: _modDef11388 };
({ small: AssetRegistryDefault2, medium: _modDef11387, large: _modDef11388 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11390, large: _modDef11391 };
({ small: AssetRegistryDefault3, medium: _modDef11390, large: _modDef11391 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11393, large: _modDef11394 };
({ small: AssetRegistryDefault4, medium: _modDef11393, large: _modDef11394 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11396, large: _modDef11397 };
({ small: AssetRegistryDefault5, medium: _modDef11396, large: _modDef11397 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11399, large: _modDef11400 };
({ small: AssetRegistryDefault6, medium: _modDef11399, large: _modDef11400 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11402, large: _modDef11403 };
({ small: AssetRegistryDefault7, medium: _modDef11402, large: _modDef11403 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11405, large: _modDef11406 };
({ small: AssetRegistryDefault8, medium: _modDef11405, large: _modDef11406 });
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
