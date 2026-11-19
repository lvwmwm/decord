// Module ID: 13873
// Function ID: 13874
// Name: useMobileTenureBadgeImages
// Dependencies: [1390, 13874, 13875, 13876, 13877, 13878, 13879, 13880, 13881, 13882, 13883, 13884, 13885, 13886, 13887, 13888, 13889, 13890, 13891, 13892, 13893, 13894, 13895, 13896, 13897, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 13873 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import AssetRegistryDefault from "AssetRegistry" /* 13874 */;
import _modDef13875 from "module_13875" /* 13875 */;
import _modDef13876 from "module_13876" /* 13876 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13877 */;
import _modDef13878 from "module_13878" /* 13878 */;
import _modDef13879 from "module_13879" /* 13879 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13880 */;
import _modDef13881 from "module_13881" /* 13881 */;
import _modDef13882 from "module_13882" /* 13882 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13883 */;
import _modDef13884 from "module_13884" /* 13884 */;
import _modDef13885 from "module_13885" /* 13885 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13886 */;
import _modDef13887 from "module_13887" /* 13887 */;
import _modDef13888 from "module_13888" /* 13888 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13889 */;
import _modDef13890 from "module_13890" /* 13890 */;
import _modDef13891 from "module_13891" /* 13891 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13892 */;
import _modDef13893 from "module_13893" /* 13893 */;
import _modDef13894 from "module_13894" /* 13894 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13895 */;
import _modDef13896 from "module_13896" /* 13896 */;
import _modDef13897 from "module_13897" /* 13897 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef13875, large: _modDef13876 };
({ small: AssetRegistryDefault, medium: _modDef13875, large: _modDef13876 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef13878, large: _modDef13879 };
({ small: AssetRegistryDefault2, medium: _modDef13878, large: _modDef13879 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef13881, large: _modDef13882 };
({ small: AssetRegistryDefault3, medium: _modDef13881, large: _modDef13882 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef13884, large: _modDef13885 };
({ small: AssetRegistryDefault4, medium: _modDef13884, large: _modDef13885 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef13887, large: _modDef13888 };
({ small: AssetRegistryDefault5, medium: _modDef13887, large: _modDef13888 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef13890, large: _modDef13891 };
({ small: AssetRegistryDefault6, medium: _modDef13890, large: _modDef13891 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef13893, large: _modDef13894 };
({ small: AssetRegistryDefault7, medium: _modDef13893, large: _modDef13894 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef13896, large: _modDef13897 };
({ small: AssetRegistryDefault8, medium: _modDef13896, large: _modDef13897 });
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
