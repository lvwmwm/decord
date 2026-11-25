// Module ID: 9782
// Function ID: 9783
// Name: useMobileTenureBadgeImages
// Dependencies: [1388, 9783, 9784, 9785, 9786, 9787, 9788, 9789, 9790, 9791, 9792, 9793, 9794, 9795, 9796, 9797, 9798, 9799, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 9782 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import AssetRegistryDefault from "AssetRegistry" /* 9783 */;
import _modDef9784 from "module_9784" /* 9784 */;
import _modDef9785 from "module_9785" /* 9785 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9786 */;
import _modDef9787 from "module_9787" /* 9787 */;
import _modDef9788 from "module_9788" /* 9788 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9789 */;
import _modDef9790 from "module_9790" /* 9790 */;
import _modDef9791 from "module_9791" /* 9791 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9792 */;
import _modDef9793 from "module_9793" /* 9793 */;
import _modDef9794 from "module_9794" /* 9794 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9795 */;
import _modDef9796 from "module_9796" /* 9796 */;
import _modDef9797 from "module_9797" /* 9797 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9798 */;
import _modDef9799 from "module_9799" /* 9799 */;
import _modDef9800 from "module_9800" /* 9800 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9801 */;
import _modDef9802 from "module_9802" /* 9802 */;
import _modDef9803 from "module_9803" /* 9803 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9804 */;
import _modDef9805 from "module_9805" /* 9805 */;
import _modDef9806 from "module_9806" /* 9806 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef9784, large: _modDef9785 };
({ small: AssetRegistryDefault, medium: _modDef9784, large: _modDef9785 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef9787, large: _modDef9788 };
({ small: AssetRegistryDefault2, medium: _modDef9787, large: _modDef9788 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef9790, large: _modDef9791 };
({ small: AssetRegistryDefault3, medium: _modDef9790, large: _modDef9791 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef9793, large: _modDef9794 };
({ small: AssetRegistryDefault4, medium: _modDef9793, large: _modDef9794 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef9796, large: _modDef9797 };
({ small: AssetRegistryDefault5, medium: _modDef9796, large: _modDef9797 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef9799, large: _modDef9800 };
({ small: AssetRegistryDefault6, medium: _modDef9799, large: _modDef9800 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef9802, large: _modDef9803 };
({ small: AssetRegistryDefault7, medium: _modDef9802, large: _modDef9803 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef9805, large: _modDef9806 };
({ small: AssetRegistryDefault8, medium: _modDef9805, large: _modDef9806 });
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
