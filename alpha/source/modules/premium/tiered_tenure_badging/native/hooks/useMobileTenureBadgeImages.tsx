// Module ID: 11088
// Function ID: 11089
// Name: useMobileTenureBadgeImages
// Dependencies: [1391, 11089, 11090, 11091, 11092, 11093, 11094, 11095, 11096, 11097, 11098, 11099, 11100, 11101, 11102, 11103, 11104, 11105, 11106, 11107, 11108, 11109, 11110, 11111, 11112, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11088 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import AssetRegistryDefault from "AssetRegistry" /* 11089 */;
import _modDef11090 from "module_11090" /* 11090 */;
import _modDef11091 from "module_11091" /* 11091 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11092 */;
import _modDef11093 from "module_11093" /* 11093 */;
import _modDef11094 from "module_11094" /* 11094 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11095 */;
import _modDef11096 from "module_11096" /* 11096 */;
import _modDef11097 from "module_11097" /* 11097 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11098 */;
import _modDef11099 from "module_11099" /* 11099 */;
import _modDef11100 from "module_11100" /* 11100 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11101 */;
import _modDef11102 from "module_11102" /* 11102 */;
import _modDef11103 from "module_11103" /* 11103 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11104 */;
import _modDef11105 from "module_11105" /* 11105 */;
import _modDef11106 from "module_11106" /* 11106 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11107 */;
import _modDef11108 from "module_11108" /* 11108 */;
import _modDef11109 from "module_11109" /* 11109 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11110 */;
import _modDef11111 from "module_11111" /* 11111 */;
import _modDef11112 from "module_11112" /* 11112 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11090, large: _modDef11091 };
({ small: AssetRegistryDefault, medium: _modDef11090, large: _modDef11091 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11093, large: _modDef11094 };
({ small: AssetRegistryDefault2, medium: _modDef11093, large: _modDef11094 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11096, large: _modDef11097 };
({ small: AssetRegistryDefault3, medium: _modDef11096, large: _modDef11097 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11099, large: _modDef11100 };
({ small: AssetRegistryDefault4, medium: _modDef11099, large: _modDef11100 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11102, large: _modDef11103 };
({ small: AssetRegistryDefault5, medium: _modDef11102, large: _modDef11103 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11105, large: _modDef11106 };
({ small: AssetRegistryDefault6, medium: _modDef11105, large: _modDef11106 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11108, large: _modDef11109 };
({ small: AssetRegistryDefault7, medium: _modDef11108, large: _modDef11109 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11111, large: _modDef11112 };
({ small: AssetRegistryDefault8, medium: _modDef11111, large: _modDef11112 });
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
