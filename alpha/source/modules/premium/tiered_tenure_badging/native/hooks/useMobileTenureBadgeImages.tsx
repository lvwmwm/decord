// Module ID: 10537
// Function ID: 10538
// Name: useMobileTenureBadgeImages
// Dependencies: [1392, 10538, 10539, 10540, 10541, 10542, 10543, 10544, 10545, 10546, 10547, 10548, 10549, 10550, 10551, 10552, 10553, 10554, 10555, 10556, 10557, 10558, 10559, 10560, 10561, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10537 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import AssetRegistryDefault from "AssetRegistry" /* 10538 */;
import _modDef10539 from "module_10539" /* 10539 */;
import _modDef10540 from "module_10540" /* 10540 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10541 */;
import _modDef10542 from "module_10542" /* 10542 */;
import _modDef10543 from "module_10543" /* 10543 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10544 */;
import _modDef10545 from "module_10545" /* 10545 */;
import _modDef10546 from "module_10546" /* 10546 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10547 */;
import _modDef10548 from "module_10548" /* 10548 */;
import _modDef10549 from "module_10549" /* 10549 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10550 */;
import _modDef10551 from "module_10551" /* 10551 */;
import _modDef10552 from "module_10552" /* 10552 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10553 */;
import _modDef10554 from "module_10554" /* 10554 */;
import _modDef10555 from "module_10555" /* 10555 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10556 */;
import _modDef10557 from "module_10557" /* 10557 */;
import _modDef10558 from "module_10558" /* 10558 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10559 */;
import _modDef10560 from "module_10560" /* 10560 */;
import _modDef10561 from "module_10561" /* 10561 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10539, large: _modDef10540 };
({ small: AssetRegistryDefault, medium: _modDef10539, large: _modDef10540 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10542, large: _modDef10543 };
({ small: AssetRegistryDefault2, medium: _modDef10542, large: _modDef10543 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10545, large: _modDef10546 };
({ small: AssetRegistryDefault3, medium: _modDef10545, large: _modDef10546 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10548, large: _modDef10549 };
({ small: AssetRegistryDefault4, medium: _modDef10548, large: _modDef10549 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10551, large: _modDef10552 };
({ small: AssetRegistryDefault5, medium: _modDef10551, large: _modDef10552 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10554, large: _modDef10555 };
({ small: AssetRegistryDefault6, medium: _modDef10554, large: _modDef10555 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10557, large: _modDef10558 };
({ small: AssetRegistryDefault7, medium: _modDef10557, large: _modDef10558 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10560, large: _modDef10561 };
({ small: AssetRegistryDefault8, medium: _modDef10560, large: _modDef10561 });
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
