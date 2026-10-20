// Module ID: 10876
// Function ID: 10877
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 10877, 10878, 10879, 10880, 10881, 10882, 10883, 10884, 10885, 10886, 10887, 10888, 10889, 10890, 10891, 10892, 10893, 10894, 10895, 10896, 10897, 10898, 10899, 10900, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10876 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 10877 */;
import _modDef10878 from "module_10878" /* 10878 */;
import _modDef10879 from "module_10879" /* 10879 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10880 */;
import _modDef10881 from "module_10881" /* 10881 */;
import _modDef10882 from "module_10882" /* 10882 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10883 */;
import _modDef10884 from "module_10884" /* 10884 */;
import _modDef10885 from "module_10885" /* 10885 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10886 */;
import _modDef10887 from "module_10887" /* 10887 */;
import _modDef10888 from "module_10888" /* 10888 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10889 */;
import _modDef10890 from "module_10890" /* 10890 */;
import _modDef10891 from "module_10891" /* 10891 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10892 */;
import _modDef10893 from "module_10893" /* 10893 */;
import _modDef10894 from "module_10894" /* 10894 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10895 */;
import _modDef10896 from "module_10896" /* 10896 */;
import _modDef10897 from "module_10897" /* 10897 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10898 */;
import _modDef10899 from "module_10899" /* 10899 */;
import _modDef10900 from "module_10900" /* 10900 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10878, large: _modDef10879 };
({ small: AssetRegistryDefault, medium: _modDef10878, large: _modDef10879 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10881, large: _modDef10882 };
({ small: AssetRegistryDefault2, medium: _modDef10881, large: _modDef10882 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10884, large: _modDef10885 };
({ small: AssetRegistryDefault3, medium: _modDef10884, large: _modDef10885 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10887, large: _modDef10888 };
({ small: AssetRegistryDefault4, medium: _modDef10887, large: _modDef10888 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10890, large: _modDef10891 };
({ small: AssetRegistryDefault5, medium: _modDef10890, large: _modDef10891 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10893, large: _modDef10894 };
({ small: AssetRegistryDefault6, medium: _modDef10893, large: _modDef10894 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10896, large: _modDef10897 };
({ small: AssetRegistryDefault7, medium: _modDef10896, large: _modDef10897 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10899, large: _modDef10900 };
({ small: AssetRegistryDefault8, medium: _modDef10899, large: _modDef10900 });
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
