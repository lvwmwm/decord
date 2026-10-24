// Module ID: 11081
// Function ID: 11082
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 11082, 11083, 11084, 11085, 11086, 11087, 11088, 11089, 11090, 11091, 11092, 11093, 11094, 11095, 11096, 11097, 11098, 11099, 11100, 11101, 11102, 11103, 11104, 11105, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11081 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 11082 */;
import _modDef11083 from "module_11083" /* 11083 */;
import _modDef11084 from "module_11084" /* 11084 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11085 */;
import _modDef11086 from "module_11086" /* 11086 */;
import _modDef11087 from "module_11087" /* 11087 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11088 */;
import _modDef11089 from "module_11089" /* 11089 */;
import _modDef11090 from "module_11090" /* 11090 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11091 */;
import _modDef11092 from "module_11092" /* 11092 */;
import _modDef11093 from "module_11093" /* 11093 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11094 */;
import _modDef11095 from "module_11095" /* 11095 */;
import _modDef11096 from "module_11096" /* 11096 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11097 */;
import _modDef11098 from "module_11098" /* 11098 */;
import _modDef11099 from "module_11099" /* 11099 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11100 */;
import _modDef11101 from "module_11101" /* 11101 */;
import _modDef11102 from "module_11102" /* 11102 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11103 */;
import _modDef11104 from "module_11104" /* 11104 */;
import _modDef11105 from "module_11105" /* 11105 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11083, large: _modDef11084 };
({ small: AssetRegistryDefault, medium: _modDef11083, large: _modDef11084 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11086, large: _modDef11087 };
({ small: AssetRegistryDefault2, medium: _modDef11086, large: _modDef11087 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11089, large: _modDef11090 };
({ small: AssetRegistryDefault3, medium: _modDef11089, large: _modDef11090 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11092, large: _modDef11093 };
({ small: AssetRegistryDefault4, medium: _modDef11092, large: _modDef11093 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11095, large: _modDef11096 };
({ small: AssetRegistryDefault5, medium: _modDef11095, large: _modDef11096 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11098, large: _modDef11099 };
({ small: AssetRegistryDefault6, medium: _modDef11098, large: _modDef11099 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11101, large: _modDef11102 };
({ small: AssetRegistryDefault7, medium: _modDef11101, large: _modDef11102 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11104, large: _modDef11105 };
({ small: AssetRegistryDefault8, medium: _modDef11104, large: _modDef11105 });
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
