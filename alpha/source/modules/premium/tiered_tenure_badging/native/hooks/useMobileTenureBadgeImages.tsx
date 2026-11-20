// Module ID: 13842
// Function ID: 13843
// Name: useMobileTenureBadgeImages
// Dependencies: [1388, 13843, 13844, 13845, 13846, 13847, 13848, 13849, 13850, 13851, 13852, 13853, 13854, 13855, 13856, 13857, 13858, 13859, 13860, 13861, 13862, 13863, 13864, 13865, 13866, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 13842 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import AssetRegistryDefault from "AssetRegistry" /* 13843 */;
import _modDef13844 from "module_13844" /* 13844 */;
import _modDef13845 from "module_13845" /* 13845 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13846 */;
import _modDef13847 from "module_13847" /* 13847 */;
import _modDef13848 from "module_13848" /* 13848 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13849 */;
import _modDef13850 from "module_13850" /* 13850 */;
import _modDef13851 from "module_13851" /* 13851 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13852 */;
import _modDef13853 from "module_13853" /* 13853 */;
import _modDef13854 from "module_13854" /* 13854 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13855 */;
import _modDef13856 from "module_13856" /* 13856 */;
import _modDef13857 from "module_13857" /* 13857 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13858 */;
import _modDef13859 from "module_13859" /* 13859 */;
import _modDef13860 from "module_13860" /* 13860 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13861 */;
import _modDef13862 from "module_13862" /* 13862 */;
import _modDef13863 from "module_13863" /* 13863 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13864 */;
import _modDef13865 from "module_13865" /* 13865 */;
import _modDef13866 from "module_13866" /* 13866 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef13844, large: _modDef13845 };
({ small: AssetRegistryDefault, medium: _modDef13844, large: _modDef13845 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef13847, large: _modDef13848 };
({ small: AssetRegistryDefault2, medium: _modDef13847, large: _modDef13848 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef13850, large: _modDef13851 };
({ small: AssetRegistryDefault3, medium: _modDef13850, large: _modDef13851 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef13853, large: _modDef13854 };
({ small: AssetRegistryDefault4, medium: _modDef13853, large: _modDef13854 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef13856, large: _modDef13857 };
({ small: AssetRegistryDefault5, medium: _modDef13856, large: _modDef13857 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef13859, large: _modDef13860 };
({ small: AssetRegistryDefault6, medium: _modDef13859, large: _modDef13860 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef13862, large: _modDef13863 };
({ small: AssetRegistryDefault7, medium: _modDef13862, large: _modDef13863 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef13865, large: _modDef13866 };
({ small: AssetRegistryDefault8, medium: _modDef13865, large: _modDef13866 });
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
