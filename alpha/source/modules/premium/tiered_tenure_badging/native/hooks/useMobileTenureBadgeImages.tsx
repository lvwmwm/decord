// Module ID: 11177
// Function ID: 11178
// Name: useMobileTenureBadgeImages
// Dependencies: [1391, 11178, 11179, 11180, 11181, 11182, 11183, 11184, 11185, 11186, 11187, 11188, 11189, 11190, 11191, 11192, 11193, 11194, 11195, 11196, 11197, 11198, 11199, 11200, 11201, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11177 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import AssetRegistryDefault from "AssetRegistry" /* 11178 */;
import _modDef11179 from "module_11179" /* 11179 */;
import _modDef11180 from "module_11180" /* 11180 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11181 */;
import _modDef11182 from "module_11182" /* 11182 */;
import _modDef11183 from "module_11183" /* 11183 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11184 */;
import _modDef11185 from "module_11185" /* 11185 */;
import _modDef11186 from "module_11186" /* 11186 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11187 */;
import _modDef11188 from "module_11188" /* 11188 */;
import _modDef11189 from "module_11189" /* 11189 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11190 */;
import _modDef11191 from "module_11191" /* 11191 */;
import _modDef11192 from "module_11192" /* 11192 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11193 */;
import _modDef11194 from "module_11194" /* 11194 */;
import _modDef11195 from "module_11195" /* 11195 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11196 */;
import _modDef11197 from "module_11197" /* 11197 */;
import _modDef11198 from "module_11198" /* 11198 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11199 */;
import _modDef11200 from "module_11200" /* 11200 */;
import _modDef11201 from "module_11201" /* 11201 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11179, large: _modDef11180 };
({ small: AssetRegistryDefault, medium: _modDef11179, large: _modDef11180 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11182, large: _modDef11183 };
({ small: AssetRegistryDefault2, medium: _modDef11182, large: _modDef11183 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11185, large: _modDef11186 };
({ small: AssetRegistryDefault3, medium: _modDef11185, large: _modDef11186 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11188, large: _modDef11189 };
({ small: AssetRegistryDefault4, medium: _modDef11188, large: _modDef11189 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11191, large: _modDef11192 };
({ small: AssetRegistryDefault5, medium: _modDef11191, large: _modDef11192 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11194, large: _modDef11195 };
({ small: AssetRegistryDefault6, medium: _modDef11194, large: _modDef11195 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11197, large: _modDef11198 };
({ small: AssetRegistryDefault7, medium: _modDef11197, large: _modDef11198 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11200, large: _modDef11201 };
({ small: AssetRegistryDefault8, medium: _modDef11200, large: _modDef11201 });
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
