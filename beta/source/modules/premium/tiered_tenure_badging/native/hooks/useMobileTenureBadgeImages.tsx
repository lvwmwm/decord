// Module ID: 11116
// Function ID: 11117
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 11117, 11118, 11119, 11120, 11121, 11122, 11123, 11124, 11125, 11126, 11127, 11128, 11129, 11130, 11131, 11132, 11133, 11134, 11135, 11136, 11137, 11138, 11139, 11140, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11116 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 11117 */;
import _modDef11118 from "module_11118" /* 11118 */;
import _modDef11119 from "module_11119" /* 11119 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11120 */;
import _modDef11121 from "module_11121" /* 11121 */;
import _modDef11122 from "module_11122" /* 11122 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11123 */;
import _modDef11124 from "module_11124" /* 11124 */;
import _modDef11125 from "module_11125" /* 11125 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11126 */;
import _modDef11127 from "module_11127" /* 11127 */;
import _modDef11128 from "module_11128" /* 11128 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11129 */;
import _modDef11130 from "module_11130" /* 11130 */;
import _modDef11131 from "module_11131" /* 11131 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11132 */;
import _modDef11133 from "module_11133" /* 11133 */;
import _modDef11134 from "module_11134" /* 11134 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11135 */;
import _modDef11136 from "module_11136" /* 11136 */;
import _modDef11137 from "module_11137" /* 11137 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11138 */;
import _modDef11139 from "module_11139" /* 11139 */;
import _modDef11140 from "module_11140" /* 11140 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11118, large: _modDef11119 };
({ small: AssetRegistryDefault, medium: _modDef11118, large: _modDef11119 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11121, large: _modDef11122 };
({ small: AssetRegistryDefault2, medium: _modDef11121, large: _modDef11122 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11124, large: _modDef11125 };
({ small: AssetRegistryDefault3, medium: _modDef11124, large: _modDef11125 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11127, large: _modDef11128 };
({ small: AssetRegistryDefault4, medium: _modDef11127, large: _modDef11128 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11130, large: _modDef11131 };
({ small: AssetRegistryDefault5, medium: _modDef11130, large: _modDef11131 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11133, large: _modDef11134 };
({ small: AssetRegistryDefault6, medium: _modDef11133, large: _modDef11134 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11136, large: _modDef11137 };
({ small: AssetRegistryDefault7, medium: _modDef11136, large: _modDef11137 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11139, large: _modDef11140 };
({ small: AssetRegistryDefault8, medium: _modDef11139, large: _modDef11140 });
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
