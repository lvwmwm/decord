// Module ID: 13891
// Function ID: 13892
// Name: useMobileTenureBadgeImages
// Dependencies: [1390, 13892, 13893, 13894, 13895, 13896, 13897, 13898, 13899, 13900, 13901, 13902, 13903, 13904, 13905, 13906, 13907, 13908, 13909, 13910, 13911, 13912, 13913, 13914, 13915, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 13891 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import AssetRegistryDefault from "AssetRegistry" /* 13892 */;
import _modDef13893 from "module_13893" /* 13893 */;
import _modDef13894 from "module_13894" /* 13894 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13895 */;
import _modDef13896 from "module_13896" /* 13896 */;
import _modDef13897 from "module_13897" /* 13897 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13898 */;
import _modDef13899 from "module_13899" /* 13899 */;
import _modDef13900 from "module_13900" /* 13900 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13901 */;
import _modDef13902 from "module_13902" /* 13902 */;
import _modDef13903 from "module_13903" /* 13903 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13904 */;
import _modDef13905 from "module_13905" /* 13905 */;
import _modDef13906 from "module_13906" /* 13906 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13907 */;
import _modDef13908 from "module_13908" /* 13908 */;
import _modDef13909 from "module_13909" /* 13909 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13910 */;
import _modDef13911 from "module_13911" /* 13911 */;
import _modDef13912 from "module_13912" /* 13912 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13913 */;
import _modDef13914 from "module_13914" /* 13914 */;
import _modDef13915 from "module_13915" /* 13915 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef13893, large: _modDef13894 };
({ small: AssetRegistryDefault, medium: _modDef13893, large: _modDef13894 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef13896, large: _modDef13897 };
({ small: AssetRegistryDefault2, medium: _modDef13896, large: _modDef13897 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef13899, large: _modDef13900 };
({ small: AssetRegistryDefault3, medium: _modDef13899, large: _modDef13900 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef13902, large: _modDef13903 };
({ small: AssetRegistryDefault4, medium: _modDef13902, large: _modDef13903 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef13905, large: _modDef13906 };
({ small: AssetRegistryDefault5, medium: _modDef13905, large: _modDef13906 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef13908, large: _modDef13909 };
({ small: AssetRegistryDefault6, medium: _modDef13908, large: _modDef13909 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef13911, large: _modDef13912 };
({ small: AssetRegistryDefault7, medium: _modDef13911, large: _modDef13912 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef13914, large: _modDef13915 };
({ small: AssetRegistryDefault8, medium: _modDef13914, large: _modDef13915 });
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
