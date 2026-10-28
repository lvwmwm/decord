// Module ID: 11123
// Function ID: 11124
// Name: useMobileTenureBadgeImages
// Dependencies: [1391, 11124, 11125, 11126, 11127, 11128, 11129, 11130, 11131, 11132, 11133, 11134, 11135, 11136, 11137, 11138, 11139, 11140, 11141, 11142, 11143, 11144, 11145, 11146, 11147, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11123 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import AssetRegistryDefault from "AssetRegistry" /* 11124 */;
import _modDef11125 from "module_11125" /* 11125 */;
import _modDef11126 from "module_11126" /* 11126 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11127 */;
import _modDef11128 from "module_11128" /* 11128 */;
import _modDef11129 from "module_11129" /* 11129 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11130 */;
import _modDef11131 from "module_11131" /* 11131 */;
import _modDef11132 from "module_11132" /* 11132 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11133 */;
import _modDef11134 from "module_11134" /* 11134 */;
import _modDef11135 from "module_11135" /* 11135 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11136 */;
import _modDef11137 from "module_11137" /* 11137 */;
import _modDef11138 from "module_11138" /* 11138 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11139 */;
import _modDef11140 from "module_11140" /* 11140 */;
import _modDef11141 from "module_11141" /* 11141 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11142 */;
import _modDef11143 from "module_11143" /* 11143 */;
import _modDef11144 from "module_11144" /* 11144 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11145 */;
import _modDef11146 from "module_11146" /* 11146 */;
import _modDef11147 from "module_11147" /* 11147 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11125, large: _modDef11126 };
({ small: AssetRegistryDefault, medium: _modDef11125, large: _modDef11126 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11128, large: _modDef11129 };
({ small: AssetRegistryDefault2, medium: _modDef11128, large: _modDef11129 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11131, large: _modDef11132 };
({ small: AssetRegistryDefault3, medium: _modDef11131, large: _modDef11132 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11134, large: _modDef11135 };
({ small: AssetRegistryDefault4, medium: _modDef11134, large: _modDef11135 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11137, large: _modDef11138 };
({ small: AssetRegistryDefault5, medium: _modDef11137, large: _modDef11138 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11140, large: _modDef11141 };
({ small: AssetRegistryDefault6, medium: _modDef11140, large: _modDef11141 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11143, large: _modDef11144 };
({ small: AssetRegistryDefault7, medium: _modDef11143, large: _modDef11144 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11146, large: _modDef11147 };
({ small: AssetRegistryDefault8, medium: _modDef11146, large: _modDef11147 });
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
