// Module ID: 9824
// Function ID: 9825
// Name: useMobileTenureBadgeImages
// Dependencies: [1389, 9825, 9826, 9827, 9828, 9829, 9830, 9831, 9832, 9833, 9834, 9835, 9836, 9837, 9838, 9839, 9840, 9841, 9842, 9843, 9844, 9845, 9846, 9847, 9848, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 9824 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1389 */;
import AssetRegistryDefault from "AssetRegistry" /* 9825 */;
import _modDef9826 from "module_9826" /* 9826 */;
import _modDef9827 from "module_9827" /* 9827 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9828 */;
import _modDef9829 from "module_9829" /* 9829 */;
import _modDef9830 from "module_9830" /* 9830 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9831 */;
import _modDef9832 from "module_9832" /* 9832 */;
import _modDef9833 from "module_9833" /* 9833 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9834 */;
import _modDef9835 from "module_9835" /* 9835 */;
import _modDef9836 from "module_9836" /* 9836 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9837 */;
import _modDef9838 from "module_9838" /* 9838 */;
import _modDef9839 from "module_9839" /* 9839 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9840 */;
import _modDef9841 from "module_9841" /* 9841 */;
import _modDef9842 from "module_9842" /* 9842 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9843 */;
import _modDef9844 from "module_9844" /* 9844 */;
import _modDef9845 from "module_9845" /* 9845 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9846 */;
import _modDef9847 from "module_9847" /* 9847 */;
import _modDef9848 from "module_9848" /* 9848 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef9826, large: _modDef9827 };
({ small: AssetRegistryDefault, medium: _modDef9826, large: _modDef9827 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef9829, large: _modDef9830 };
({ small: AssetRegistryDefault2, medium: _modDef9829, large: _modDef9830 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef9832, large: _modDef9833 };
({ small: AssetRegistryDefault3, medium: _modDef9832, large: _modDef9833 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef9835, large: _modDef9836 };
({ small: AssetRegistryDefault4, medium: _modDef9835, large: _modDef9836 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef9838, large: _modDef9839 };
({ small: AssetRegistryDefault5, medium: _modDef9838, large: _modDef9839 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef9841, large: _modDef9842 };
({ small: AssetRegistryDefault6, medium: _modDef9841, large: _modDef9842 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef9844, large: _modDef9845 };
({ small: AssetRegistryDefault7, medium: _modDef9844, large: _modDef9845 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef9847, large: _modDef9848 };
({ small: AssetRegistryDefault8, medium: _modDef9847, large: _modDef9848 });
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
