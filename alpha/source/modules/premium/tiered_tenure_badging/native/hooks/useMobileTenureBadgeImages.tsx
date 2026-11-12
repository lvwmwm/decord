// Module ID: 10018
// Function ID: 10019
// Name: useMobileTenureBadgeImages
// Dependencies: [1387, 10019, 10020, 10021, 10022, 10023, 10024, 10025, 10026, 10027, 10028, 10029, 10030, 10031, 10032, 10033, 10034, 10035, 10036, 10037, 10038, 10039, 10040, 10041, 10042, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10018 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import AssetRegistryDefault from "AssetRegistry" /* 10019 */;
import _modDef10020 from "module_10020" /* 10020 */;
import _modDef10021 from "module_10021" /* 10021 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10022 */;
import _modDef10023 from "module_10023" /* 10023 */;
import _modDef10024 from "module_10024" /* 10024 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10025 */;
import _modDef10026 from "module_10026" /* 10026 */;
import _modDef10027 from "module_10027" /* 10027 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10028 */;
import _modDef10029 from "module_10029" /* 10029 */;
import _modDef10030 from "module_10030" /* 10030 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10031 */;
import _modDef10032 from "module_10032" /* 10032 */;
import _modDef10033 from "module_10033" /* 10033 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10034 */;
import _modDef10035 from "module_10035" /* 10035 */;
import _modDef10036 from "module_10036" /* 10036 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10037 */;
import _modDef10038 from "module_10038" /* 10038 */;
import _modDef10039 from "module_10039" /* 10039 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10040 */;
import _modDef10041 from "module_10041" /* 10041 */;
import _modDef10042 from "module_10042" /* 10042 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10020, large: _modDef10021 };
({ small: AssetRegistryDefault, medium: _modDef10020, large: _modDef10021 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10023, large: _modDef10024 };
({ small: AssetRegistryDefault2, medium: _modDef10023, large: _modDef10024 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10026, large: _modDef10027 };
({ small: AssetRegistryDefault3, medium: _modDef10026, large: _modDef10027 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10029, large: _modDef10030 };
({ small: AssetRegistryDefault4, medium: _modDef10029, large: _modDef10030 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10032, large: _modDef10033 };
({ small: AssetRegistryDefault5, medium: _modDef10032, large: _modDef10033 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10035, large: _modDef10036 };
({ small: AssetRegistryDefault6, medium: _modDef10035, large: _modDef10036 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10038, large: _modDef10039 };
({ small: AssetRegistryDefault7, medium: _modDef10038, large: _modDef10039 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10041, large: _modDef10042 };
({ small: AssetRegistryDefault8, medium: _modDef10041, large: _modDef10042 });
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
