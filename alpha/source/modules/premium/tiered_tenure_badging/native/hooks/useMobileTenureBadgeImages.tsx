// Module ID: 10864
// Function ID: 10865
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 10865, 10866, 10867, 10868, 10869, 10870, 10871, 10872, 10873, 10874, 10875, 10876, 10877, 10878, 10879, 10880, 10881, 10882, 10883, 10884, 10885, 10886, 10887, 10888, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10864 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 10865 */;
import _modDef10866 from "module_10866" /* 10866 */;
import _modDef10867 from "module_10867" /* 10867 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10868 */;
import _modDef10869 from "module_10869" /* 10869 */;
import _modDef10870 from "module_10870" /* 10870 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10871 */;
import _modDef10872 from "module_10872" /* 10872 */;
import _modDef10873 from "module_10873" /* 10873 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10874 */;
import _modDef10875 from "module_10875" /* 10875 */;
import _modDef10876 from "module_10876" /* 10876 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10877 */;
import _modDef10878 from "module_10878" /* 10878 */;
import _modDef10879 from "module_10879" /* 10879 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10880 */;
import _modDef10881 from "module_10881" /* 10881 */;
import _modDef10882 from "module_10882" /* 10882 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10883 */;
import _modDef10884 from "module_10884" /* 10884 */;
import _modDef10885 from "module_10885" /* 10885 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10886 */;
import _modDef10887 from "module_10887" /* 10887 */;
import _modDef10888 from "module_10888" /* 10888 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10866, large: _modDef10867 };
({ small: AssetRegistryDefault, medium: _modDef10866, large: _modDef10867 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10869, large: _modDef10870 };
({ small: AssetRegistryDefault2, medium: _modDef10869, large: _modDef10870 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10872, large: _modDef10873 };
({ small: AssetRegistryDefault3, medium: _modDef10872, large: _modDef10873 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10875, large: _modDef10876 };
({ small: AssetRegistryDefault4, medium: _modDef10875, large: _modDef10876 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10878, large: _modDef10879 };
({ small: AssetRegistryDefault5, medium: _modDef10878, large: _modDef10879 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10881, large: _modDef10882 };
({ small: AssetRegistryDefault6, medium: _modDef10881, large: _modDef10882 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10884, large: _modDef10885 };
({ small: AssetRegistryDefault7, medium: _modDef10884, large: _modDef10885 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10887, large: _modDef10888 };
({ small: AssetRegistryDefault8, medium: _modDef10887, large: _modDef10888 });
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
