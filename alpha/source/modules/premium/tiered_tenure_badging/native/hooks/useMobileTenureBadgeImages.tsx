// Module ID: 10887
// Function ID: 10888
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 10888, 10889, 10890, 10891, 10892, 10893, 10894, 10895, 10896, 10897, 10898, 10899, 10900, 10901, 10902, 10903, 10904, 10905, 10906, 10907, 10908, 10909, 10910, 10911, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10887 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 10888 */;
import _modDef10889 from "module_10889" /* 10889 */;
import _modDef10890 from "module_10890" /* 10890 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10891 */;
import _modDef10892 from "module_10892" /* 10892 */;
import _modDef10893 from "module_10893" /* 10893 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10894 */;
import _modDef10895 from "module_10895" /* 10895 */;
import _modDef10896 from "module_10896" /* 10896 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10897 */;
import _modDef10898 from "module_10898" /* 10898 */;
import _modDef10899 from "module_10899" /* 10899 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10900 */;
import _modDef10901 from "module_10901" /* 10901 */;
import _modDef10902 from "module_10902" /* 10902 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10903 */;
import _modDef10904 from "module_10904" /* 10904 */;
import _modDef10905 from "module_10905" /* 10905 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10906 */;
import _modDef10907 from "module_10907" /* 10907 */;
import _modDef10908 from "module_10908" /* 10908 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10909 */;
import _modDef10910 from "module_10910" /* 10910 */;
import _modDef10911 from "module_10911" /* 10911 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10889, large: _modDef10890 };
({ small: AssetRegistryDefault, medium: _modDef10889, large: _modDef10890 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10892, large: _modDef10893 };
({ small: AssetRegistryDefault2, medium: _modDef10892, large: _modDef10893 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10895, large: _modDef10896 };
({ small: AssetRegistryDefault3, medium: _modDef10895, large: _modDef10896 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10898, large: _modDef10899 };
({ small: AssetRegistryDefault4, medium: _modDef10898, large: _modDef10899 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10901, large: _modDef10902 };
({ small: AssetRegistryDefault5, medium: _modDef10901, large: _modDef10902 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10904, large: _modDef10905 };
({ small: AssetRegistryDefault6, medium: _modDef10904, large: _modDef10905 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10907, large: _modDef10908 };
({ small: AssetRegistryDefault7, medium: _modDef10907, large: _modDef10908 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10910, large: _modDef10911 };
({ small: AssetRegistryDefault8, medium: _modDef10910, large: _modDef10911 });
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
