// Module ID: 13968
// Function ID: 13969
// Name: useMobileTenureBadgeImages
// Dependencies: [1388, 13969, 13970, 13971, 13972, 13973, 13974, 13975, 13976, 13977, 13978, 13979, 13980, 13981, 13982, 13983, 13984, 13985, 13986, 13987, 13988, 13989, 13990, 13991, 13992, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 13968 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import AssetRegistryDefault from "AssetRegistry" /* 13969 */;
import _modDef13970 from "module_13970" /* 13970 */;
import _modDef13971 from "module_13971" /* 13971 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13972 */;
import _modDef13973 from "module_13973" /* 13973 */;
import _modDef13974 from "module_13974" /* 13974 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13975 */;
import _modDef13976 from "module_13976" /* 13976 */;
import _modDef13977 from "module_13977" /* 13977 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13978 */;
import _modDef13979 from "module_13979" /* 13979 */;
import _modDef13980 from "module_13980" /* 13980 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13981 */;
import _modDef13982 from "module_13982" /* 13982 */;
import _modDef13983 from "module_13983" /* 13983 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13984 */;
import _modDef13985 from "module_13985" /* 13985 */;
import _modDef13986 from "module_13986" /* 13986 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13987 */;
import _modDef13988 from "module_13988" /* 13988 */;
import _modDef13989 from "module_13989" /* 13989 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13990 */;
import _modDef13991 from "module_13991" /* 13991 */;
import _modDef13992 from "module_13992" /* 13992 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef13970, large: _modDef13971 };
({ small: AssetRegistryDefault, medium: _modDef13970, large: _modDef13971 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef13973, large: _modDef13974 };
({ small: AssetRegistryDefault2, medium: _modDef13973, large: _modDef13974 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef13976, large: _modDef13977 };
({ small: AssetRegistryDefault3, medium: _modDef13976, large: _modDef13977 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef13979, large: _modDef13980 };
({ small: AssetRegistryDefault4, medium: _modDef13979, large: _modDef13980 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef13982, large: _modDef13983 };
({ small: AssetRegistryDefault5, medium: _modDef13982, large: _modDef13983 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef13985, large: _modDef13986 };
({ small: AssetRegistryDefault6, medium: _modDef13985, large: _modDef13986 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef13988, large: _modDef13989 };
({ small: AssetRegistryDefault7, medium: _modDef13988, large: _modDef13989 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef13991, large: _modDef13992 };
({ small: AssetRegistryDefault8, medium: _modDef13991, large: _modDef13992 });
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
