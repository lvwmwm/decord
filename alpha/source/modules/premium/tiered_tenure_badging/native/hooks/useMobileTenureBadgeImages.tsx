// Module ID: 10848
// Function ID: 10849
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 10849, 10850, 10851, 10852, 10853, 10854, 10855, 10856, 10857, 10858, 10859, 10860, 10861, 10862, 10863, 10864, 10865, 10866, 10867, 10868, 10869, 10870, 10871, 10872, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10848 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 10849 */;
import _modDef10850 from "module_10850" /* 10850 */;
import _modDef10851 from "module_10851" /* 10851 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10852 */;
import _modDef10853 from "module_10853" /* 10853 */;
import _modDef10854 from "module_10854" /* 10854 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10855 */;
import _modDef10856 from "module_10856" /* 10856 */;
import _modDef10857 from "module_10857" /* 10857 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10858 */;
import _modDef10859 from "module_10859" /* 10859 */;
import _modDef10860 from "module_10860" /* 10860 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10861 */;
import _modDef10862 from "module_10862" /* 10862 */;
import _modDef10863 from "module_10863" /* 10863 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10864 */;
import _modDef10865 from "module_10865" /* 10865 */;
import _modDef10866 from "module_10866" /* 10866 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10867 */;
import _modDef10868 from "module_10868" /* 10868 */;
import _modDef10869 from "module_10869" /* 10869 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10870 */;
import _modDef10871 from "module_10871" /* 10871 */;
import _modDef10872 from "module_10872" /* 10872 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10850, large: _modDef10851 };
({ small: AssetRegistryDefault, medium: _modDef10850, large: _modDef10851 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10853, large: _modDef10854 };
({ small: AssetRegistryDefault2, medium: _modDef10853, large: _modDef10854 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10856, large: _modDef10857 };
({ small: AssetRegistryDefault3, medium: _modDef10856, large: _modDef10857 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10859, large: _modDef10860 };
({ small: AssetRegistryDefault4, medium: _modDef10859, large: _modDef10860 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10862, large: _modDef10863 };
({ small: AssetRegistryDefault5, medium: _modDef10862, large: _modDef10863 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10865, large: _modDef10866 };
({ small: AssetRegistryDefault6, medium: _modDef10865, large: _modDef10866 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10868, large: _modDef10869 };
({ small: AssetRegistryDefault7, medium: _modDef10868, large: _modDef10869 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10871, large: _modDef10872 };
({ small: AssetRegistryDefault8, medium: _modDef10871, large: _modDef10872 });
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
