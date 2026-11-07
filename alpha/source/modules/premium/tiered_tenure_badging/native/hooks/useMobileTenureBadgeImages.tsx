// Module ID: 11560
// Function ID: 11561
// Name: useMobileTenureBadgeImages
// Dependencies: [1387, 11561, 11562, 11563, 11564, 11565, 11566, 11567, 11568, 11569, 11570, 11571, 11572, 11573, 11574, 11575, 11576, 11577, 11578, 11579, 11580, 11581, 11582, 11583, 11584, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11560 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import AssetRegistryDefault from "AssetRegistry" /* 11561 */;
import _modDef11562 from "module_11562" /* 11562 */;
import _modDef11563 from "module_11563" /* 11563 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11564 */;
import _modDef11565 from "module_11565" /* 11565 */;
import _modDef11566 from "module_11566" /* 11566 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11567 */;
import _modDef11568 from "module_11568" /* 11568 */;
import _modDef11569 from "module_11569" /* 11569 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11570 */;
import _modDef11571 from "module_11571" /* 11571 */;
import _modDef11572 from "module_11572" /* 11572 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11573 */;
import _modDef11574 from "module_11574" /* 11574 */;
import _modDef11575 from "module_11575" /* 11575 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11576 */;
import _modDef11577 from "module_11577" /* 11577 */;
import _modDef11578 from "module_11578" /* 11578 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11579 */;
import _modDef11580 from "module_11580" /* 11580 */;
import _modDef11581 from "module_11581" /* 11581 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11582 */;
import _modDef11583 from "module_11583" /* 11583 */;
import _modDef11584 from "module_11584" /* 11584 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11562, large: _modDef11563 };
({ small: AssetRegistryDefault, medium: _modDef11562, large: _modDef11563 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11565, large: _modDef11566 };
({ small: AssetRegistryDefault2, medium: _modDef11565, large: _modDef11566 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11568, large: _modDef11569 };
({ small: AssetRegistryDefault3, medium: _modDef11568, large: _modDef11569 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11571, large: _modDef11572 };
({ small: AssetRegistryDefault4, medium: _modDef11571, large: _modDef11572 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11574, large: _modDef11575 };
({ small: AssetRegistryDefault5, medium: _modDef11574, large: _modDef11575 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11577, large: _modDef11578 };
({ small: AssetRegistryDefault6, medium: _modDef11577, large: _modDef11578 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11580, large: _modDef11581 };
({ small: AssetRegistryDefault7, medium: _modDef11580, large: _modDef11581 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11583, large: _modDef11584 };
({ small: AssetRegistryDefault8, medium: _modDef11583, large: _modDef11584 });
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
