// Module ID: 10548
// Function ID: 10549
// Name: useMobileTenureBadgeImages
// Dependencies: [1392, 10549, 10550, 10551, 10552, 10553, 10554, 10555, 10556, 10557, 10558, 10559, 10560, 10561, 10562, 10563, 10564, 10565, 10566, 10567, 10568, 10569, 10570, 10571, 10572, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10548 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import AssetRegistryDefault from "AssetRegistry" /* 10549 */;
import _modDef10550 from "module_10550" /* 10550 */;
import _modDef10551 from "module_10551" /* 10551 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10552 */;
import _modDef10553 from "module_10553" /* 10553 */;
import _modDef10554 from "module_10554" /* 10554 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10555 */;
import _modDef10556 from "module_10556" /* 10556 */;
import _modDef10557 from "module_10557" /* 10557 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10558 */;
import _modDef10559 from "module_10559" /* 10559 */;
import _modDef10560 from "module_10560" /* 10560 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10561 */;
import _modDef10562 from "module_10562" /* 10562 */;
import _modDef10563 from "module_10563" /* 10563 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10564 */;
import _modDef10565 from "module_10565" /* 10565 */;
import _modDef10566 from "module_10566" /* 10566 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10567 */;
import _modDef10568 from "module_10568" /* 10568 */;
import _modDef10569 from "module_10569" /* 10569 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10570 */;
import _modDef10571 from "module_10571" /* 10571 */;
import _modDef10572 from "module_10572" /* 10572 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10550, large: _modDef10551 };
({ small: AssetRegistryDefault, medium: _modDef10550, large: _modDef10551 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10553, large: _modDef10554 };
({ small: AssetRegistryDefault2, medium: _modDef10553, large: _modDef10554 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10556, large: _modDef10557 };
({ small: AssetRegistryDefault3, medium: _modDef10556, large: _modDef10557 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10559, large: _modDef10560 };
({ small: AssetRegistryDefault4, medium: _modDef10559, large: _modDef10560 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10562, large: _modDef10563 };
({ small: AssetRegistryDefault5, medium: _modDef10562, large: _modDef10563 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10565, large: _modDef10566 };
({ small: AssetRegistryDefault6, medium: _modDef10565, large: _modDef10566 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10568, large: _modDef10569 };
({ small: AssetRegistryDefault7, medium: _modDef10568, large: _modDef10569 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10571, large: _modDef10572 };
({ small: AssetRegistryDefault8, medium: _modDef10571, large: _modDef10572 });
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
