// Module ID: 11080
// Function ID: 11081
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 11081, 11082, 11083, 11084, 11085, 11086, 11087, 11088, 11089, 11090, 11091, 11092, 11093, 11094, 11095, 11096, 11097, 11098, 11099, 11100, 11101, 11102, 11103, 11104, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11080 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 11081 */;
import _modDef11082 from "module_11082" /* 11082 */;
import _modDef11083 from "module_11083" /* 11083 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11084 */;
import _modDef11085 from "module_11085" /* 11085 */;
import _modDef11086 from "module_11086" /* 11086 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11087 */;
import _modDef11088 from "module_11088" /* 11088 */;
import _modDef11089 from "module_11089" /* 11089 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11090 */;
import _modDef11091 from "module_11091" /* 11091 */;
import _modDef11092 from "module_11092" /* 11092 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11093 */;
import _modDef11094 from "module_11094" /* 11094 */;
import _modDef11095 from "module_11095" /* 11095 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11096 */;
import _modDef11097 from "module_11097" /* 11097 */;
import _modDef11098 from "module_11098" /* 11098 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11099 */;
import _modDef11100 from "module_11100" /* 11100 */;
import _modDef11101 from "module_11101" /* 11101 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11102 */;
import _modDef11103 from "module_11103" /* 11103 */;
import _modDef11104 from "module_11104" /* 11104 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11082, large: _modDef11083 };
({ small: AssetRegistryDefault, medium: _modDef11082, large: _modDef11083 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11085, large: _modDef11086 };
({ small: AssetRegistryDefault2, medium: _modDef11085, large: _modDef11086 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11088, large: _modDef11089 };
({ small: AssetRegistryDefault3, medium: _modDef11088, large: _modDef11089 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11091, large: _modDef11092 };
({ small: AssetRegistryDefault4, medium: _modDef11091, large: _modDef11092 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11094, large: _modDef11095 };
({ small: AssetRegistryDefault5, medium: _modDef11094, large: _modDef11095 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11097, large: _modDef11098 };
({ small: AssetRegistryDefault6, medium: _modDef11097, large: _modDef11098 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11100, large: _modDef11101 };
({ small: AssetRegistryDefault7, medium: _modDef11100, large: _modDef11101 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11103, large: _modDef11104 };
({ small: AssetRegistryDefault8, medium: _modDef11103, large: _modDef11104 });
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
