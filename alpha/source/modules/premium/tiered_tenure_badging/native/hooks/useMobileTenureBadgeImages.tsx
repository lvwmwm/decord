// Module ID: 11569
// Function ID: 11570
// Name: useMobileTenureBadgeImages
// Dependencies: [1387, 11570, 11571, 11572, 11573, 11574, 11575, 11576, 11577, 11578, 11579, 11580, 11581, 11582, 11583, 11584, 11585, 11586, 11587, 11588, 11589, 11590, 11591, 11592, 11593, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11569 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import AssetRegistryDefault from "AssetRegistry" /* 11570 */;
import _modDef11571 from "module_11571" /* 11571 */;
import _modDef11572 from "module_11572" /* 11572 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11573 */;
import _modDef11574 from "module_11574" /* 11574 */;
import _modDef11575 from "module_11575" /* 11575 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11576 */;
import _modDef11577 from "module_11577" /* 11577 */;
import _modDef11578 from "module_11578" /* 11578 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11579 */;
import _modDef11580 from "module_11580" /* 11580 */;
import _modDef11581 from "module_11581" /* 11581 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11582 */;
import _modDef11583 from "module_11583" /* 11583 */;
import _modDef11584 from "module_11584" /* 11584 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11585 */;
import _modDef11586 from "module_11586" /* 11586 */;
import _modDef11587 from "module_11587" /* 11587 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11588 */;
import _modDef11589 from "module_11589" /* 11589 */;
import _modDef11590 from "module_11590" /* 11590 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11591 */;
import _modDef11592 from "module_11592" /* 11592 */;
import _modDef11593 from "module_11593" /* 11593 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11571, large: _modDef11572 };
({ small: AssetRegistryDefault, medium: _modDef11571, large: _modDef11572 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11574, large: _modDef11575 };
({ small: AssetRegistryDefault2, medium: _modDef11574, large: _modDef11575 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11577, large: _modDef11578 };
({ small: AssetRegistryDefault3, medium: _modDef11577, large: _modDef11578 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11580, large: _modDef11581 };
({ small: AssetRegistryDefault4, medium: _modDef11580, large: _modDef11581 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11583, large: _modDef11584 };
({ small: AssetRegistryDefault5, medium: _modDef11583, large: _modDef11584 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11586, large: _modDef11587 };
({ small: AssetRegistryDefault6, medium: _modDef11586, large: _modDef11587 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11589, large: _modDef11590 };
({ small: AssetRegistryDefault7, medium: _modDef11589, large: _modDef11590 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11592, large: _modDef11593 };
({ small: AssetRegistryDefault8, medium: _modDef11592, large: _modDef11593 });
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
