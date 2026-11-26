// Module ID: 10085
// Function ID: 10086
// Name: useMobileTenureBadgeImages
// Dependencies: [1390, 10086, 10087, 10088, 10089, 10090, 10091, 10092, 10093, 10094, 10095, 10096, 10097, 10098, 10099, 10100, 10101, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10085 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import AssetRegistryDefault from "AssetRegistry" /* 10086 */;
import _modDef10087 from "module_10087" /* 10087 */;
import _modDef10088 from "module_10088" /* 10088 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10089 */;
import _modDef10090 from "module_10090" /* 10090 */;
import _modDef10091 from "module_10091" /* 10091 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10092 */;
import _modDef10093 from "module_10093" /* 10093 */;
import _modDef10094 from "module_10094" /* 10094 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10095 */;
import _modDef10096 from "module_10096" /* 10096 */;
import _modDef10097 from "module_10097" /* 10097 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10098 */;
import _modDef10099 from "module_10099" /* 10099 */;
import _modDef10100 from "module_10100" /* 10100 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10101 */;
import _modDef10102 from "module_10102" /* 10102 */;
import _modDef10103 from "module_10103" /* 10103 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10104 */;
import _modDef10105 from "module_10105" /* 10105 */;
import _modDef10106 from "module_10106" /* 10106 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10107 */;
import _modDef10108 from "module_10108" /* 10108 */;
import _modDef10109 from "module_10109" /* 10109 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10087, large: _modDef10088 };
({ small: AssetRegistryDefault, medium: _modDef10087, large: _modDef10088 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10090, large: _modDef10091 };
({ small: AssetRegistryDefault2, medium: _modDef10090, large: _modDef10091 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10093, large: _modDef10094 };
({ small: AssetRegistryDefault3, medium: _modDef10093, large: _modDef10094 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10096, large: _modDef10097 };
({ small: AssetRegistryDefault4, medium: _modDef10096, large: _modDef10097 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10099, large: _modDef10100 };
({ small: AssetRegistryDefault5, medium: _modDef10099, large: _modDef10100 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10102, large: _modDef10103 };
({ small: AssetRegistryDefault6, medium: _modDef10102, large: _modDef10103 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10105, large: _modDef10106 };
({ small: AssetRegistryDefault7, medium: _modDef10105, large: _modDef10106 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10108, large: _modDef10109 };
({ small: AssetRegistryDefault8, medium: _modDef10108, large: _modDef10109 });
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
