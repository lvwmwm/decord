// Module ID: 13964
// Function ID: 13965
// Name: useMobileTenureBadgeImages
// Dependencies: [1388, 13965, 13966, 13967, 13968, 13969, 13970, 13971, 13972, 13973, 13974, 13975, 13976, 13977, 13978, 13979, 13980, 13981, 13982, 13983, 13984, 13985, 13986, 13987, 13988, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 13964 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import AssetRegistryDefault from "AssetRegistry" /* 13965 */;
import _modDef13966 from "module_13966" /* 13966 */;
import _modDef13967 from "module_13967" /* 13967 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13968 */;
import _modDef13969 from "module_13969" /* 13969 */;
import _modDef13970 from "module_13970" /* 13970 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13971 */;
import _modDef13972 from "module_13972" /* 13972 */;
import _modDef13973 from "module_13973" /* 13973 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13974 */;
import _modDef13975 from "module_13975" /* 13975 */;
import _modDef13976 from "module_13976" /* 13976 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13977 */;
import _modDef13978 from "module_13978" /* 13978 */;
import _modDef13979 from "module_13979" /* 13979 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13980 */;
import _modDef13981 from "module_13981" /* 13981 */;
import _modDef13982 from "module_13982" /* 13982 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13983 */;
import _modDef13984 from "module_13984" /* 13984 */;
import _modDef13985 from "module_13985" /* 13985 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13986 */;
import _modDef13987 from "module_13987" /* 13987 */;
import _modDef13988 from "module_13988" /* 13988 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef13966, large: _modDef13967 };
({ small: AssetRegistryDefault, medium: _modDef13966, large: _modDef13967 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef13969, large: _modDef13970 };
({ small: AssetRegistryDefault2, medium: _modDef13969, large: _modDef13970 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef13972, large: _modDef13973 };
({ small: AssetRegistryDefault3, medium: _modDef13972, large: _modDef13973 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef13975, large: _modDef13976 };
({ small: AssetRegistryDefault4, medium: _modDef13975, large: _modDef13976 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef13978, large: _modDef13979 };
({ small: AssetRegistryDefault5, medium: _modDef13978, large: _modDef13979 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef13981, large: _modDef13982 };
({ small: AssetRegistryDefault6, medium: _modDef13981, large: _modDef13982 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef13984, large: _modDef13985 };
({ small: AssetRegistryDefault7, medium: _modDef13984, large: _modDef13985 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef13987, large: _modDef13988 };
({ small: AssetRegistryDefault8, medium: _modDef13987, large: _modDef13988 });
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
