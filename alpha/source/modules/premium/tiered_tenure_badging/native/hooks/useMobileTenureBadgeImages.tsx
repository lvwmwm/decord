// Module ID: 10019
// Function ID: 10020
// Name: useMobileTenureBadgeImages
// Dependencies: [1387, 10020, 10021, 10022, 10023, 10024, 10025, 10026, 10027, 10028, 10029, 10030, 10031, 10032, 10033, 10034, 10035, 10036, 10037, 10038, 10039, 10040, 10041, 10042, 10043, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10019 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import AssetRegistryDefault from "AssetRegistry" /* 10020 */;
import _modDef10021 from "module_10021" /* 10021 */;
import _modDef10022 from "module_10022" /* 10022 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10023 */;
import _modDef10024 from "module_10024" /* 10024 */;
import _modDef10025 from "module_10025" /* 10025 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10026 */;
import _modDef10027 from "module_10027" /* 10027 */;
import _modDef10028 from "module_10028" /* 10028 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10029 */;
import _modDef10030 from "module_10030" /* 10030 */;
import _modDef10031 from "module_10031" /* 10031 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10032 */;
import _modDef10033 from "module_10033" /* 10033 */;
import _modDef10034 from "module_10034" /* 10034 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10035 */;
import _modDef10036 from "module_10036" /* 10036 */;
import _modDef10037 from "module_10037" /* 10037 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10038 */;
import _modDef10039 from "module_10039" /* 10039 */;
import _modDef10040 from "module_10040" /* 10040 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10041 */;
import _modDef10042 from "module_10042" /* 10042 */;
import _modDef10043 from "module_10043" /* 10043 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10021, large: _modDef10022 };
({ small: AssetRegistryDefault, medium: _modDef10021, large: _modDef10022 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10024, large: _modDef10025 };
({ small: AssetRegistryDefault2, medium: _modDef10024, large: _modDef10025 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10027, large: _modDef10028 };
({ small: AssetRegistryDefault3, medium: _modDef10027, large: _modDef10028 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10030, large: _modDef10031 };
({ small: AssetRegistryDefault4, medium: _modDef10030, large: _modDef10031 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10033, large: _modDef10034 };
({ small: AssetRegistryDefault5, medium: _modDef10033, large: _modDef10034 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10036, large: _modDef10037 };
({ small: AssetRegistryDefault6, medium: _modDef10036, large: _modDef10037 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10039, large: _modDef10040 };
({ small: AssetRegistryDefault7, medium: _modDef10039, large: _modDef10040 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10042, large: _modDef10043 };
({ small: AssetRegistryDefault8, medium: _modDef10042, large: _modDef10043 });
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
