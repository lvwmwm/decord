// Module ID: 10538
// Function ID: 10539
// Name: useMobileTenureBadgeImages
// Dependencies: [1392, 10539, 10540, 10541, 10542, 10543, 10544, 10545, 10546, 10547, 10548, 10549, 10550, 10551, 10552, 10553, 10554, 10555, 10556, 10557, 10558, 10559, 10560, 10561, 10562, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10538 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import AssetRegistryDefault from "AssetRegistry" /* 10539 */;
import _modDef10540 from "module_10540" /* 10540 */;
import _modDef10541 from "module_10541" /* 10541 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10542 */;
import _modDef10543 from "module_10543" /* 10543 */;
import _modDef10544 from "module_10544" /* 10544 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10545 */;
import _modDef10546 from "module_10546" /* 10546 */;
import _modDef10547 from "module_10547" /* 10547 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10548 */;
import _modDef10549 from "module_10549" /* 10549 */;
import _modDef10550 from "module_10550" /* 10550 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10551 */;
import _modDef10552 from "module_10552" /* 10552 */;
import _modDef10553 from "module_10553" /* 10553 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10554 */;
import _modDef10555 from "module_10555" /* 10555 */;
import _modDef10556 from "module_10556" /* 10556 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10557 */;
import _modDef10558 from "module_10558" /* 10558 */;
import _modDef10559 from "module_10559" /* 10559 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10560 */;
import _modDef10561 from "module_10561" /* 10561 */;
import _modDef10562 from "module_10562" /* 10562 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10540, large: _modDef10541 };
({ small: AssetRegistryDefault, medium: _modDef10540, large: _modDef10541 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10543, large: _modDef10544 };
({ small: AssetRegistryDefault2, medium: _modDef10543, large: _modDef10544 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10546, large: _modDef10547 };
({ small: AssetRegistryDefault3, medium: _modDef10546, large: _modDef10547 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10549, large: _modDef10550 };
({ small: AssetRegistryDefault4, medium: _modDef10549, large: _modDef10550 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10552, large: _modDef10553 };
({ small: AssetRegistryDefault5, medium: _modDef10552, large: _modDef10553 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10555, large: _modDef10556 };
({ small: AssetRegistryDefault6, medium: _modDef10555, large: _modDef10556 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10558, large: _modDef10559 };
({ small: AssetRegistryDefault7, medium: _modDef10558, large: _modDef10559 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10561, large: _modDef10562 };
({ small: AssetRegistryDefault8, medium: _modDef10561, large: _modDef10562 });
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
