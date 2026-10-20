// Module ID: 10539
// Function ID: 10540
// Name: useMobileTenureBadgeImages
// Dependencies: [1392, 10540, 10541, 10542, 10543, 10544, 10545, 10546, 10547, 10548, 10549, 10550, 10551, 10552, 10553, 10554, 10555, 10556, 10557, 10558, 10559, 10560, 10561, 10562, 10563, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10539 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import AssetRegistryDefault from "AssetRegistry" /* 10540 */;
import _modDef10541 from "module_10541" /* 10541 */;
import _modDef10542 from "module_10542" /* 10542 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10543 */;
import _modDef10544 from "module_10544" /* 10544 */;
import _modDef10545 from "module_10545" /* 10545 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10546 */;
import _modDef10547 from "module_10547" /* 10547 */;
import _modDef10548 from "module_10548" /* 10548 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10549 */;
import _modDef10550 from "module_10550" /* 10550 */;
import _modDef10551 from "module_10551" /* 10551 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10552 */;
import _modDef10553 from "module_10553" /* 10553 */;
import _modDef10554 from "module_10554" /* 10554 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10555 */;
import _modDef10556 from "module_10556" /* 10556 */;
import _modDef10557 from "module_10557" /* 10557 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10558 */;
import _modDef10559 from "module_10559" /* 10559 */;
import _modDef10560 from "module_10560" /* 10560 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10561 */;
import _modDef10562 from "module_10562" /* 10562 */;
import _modDef10563 from "module_10563" /* 10563 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10541, large: _modDef10542 };
({ small: AssetRegistryDefault, medium: _modDef10541, large: _modDef10542 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10544, large: _modDef10545 };
({ small: AssetRegistryDefault2, medium: _modDef10544, large: _modDef10545 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10547, large: _modDef10548 };
({ small: AssetRegistryDefault3, medium: _modDef10547, large: _modDef10548 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10550, large: _modDef10551 };
({ small: AssetRegistryDefault4, medium: _modDef10550, large: _modDef10551 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10553, large: _modDef10554 };
({ small: AssetRegistryDefault5, medium: _modDef10553, large: _modDef10554 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10556, large: _modDef10557 };
({ small: AssetRegistryDefault6, medium: _modDef10556, large: _modDef10557 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10559, large: _modDef10560 };
({ small: AssetRegistryDefault7, medium: _modDef10559, large: _modDef10560 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10562, large: _modDef10563 };
({ small: AssetRegistryDefault8, medium: _modDef10562, large: _modDef10563 });
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
