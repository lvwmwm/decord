// Module ID: 11090
// Function ID: 11091
// Name: useMobileTenureBadgeImages
// Dependencies: [1923, 11091, 11092, 11093, 11094, 11095, 11096, 11097, 11098, 11099, 11100, 11101, 11102, 11103, 11104, 11105, 11106, 11107, 11108, 11109, 11110, 11111, 11112, 11113, 11114, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11090 (useMobileTenureBadgeImages)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;
import registerAssetDefault from "registerAsset" /* 11091 */;
import metadataDefault from "metadata" /* 11092 */;
import metadataDefault2 from "metadata" /* 11093 */;
import registerAssetDefault2 from "registerAsset" /* 11094 */;
import metadataDefault3 from "metadata" /* 11095 */;
import metadataDefault4 from "metadata" /* 11096 */;
import registerAssetDefault3 from "registerAsset" /* 11097 */;
import metadataDefault5 from "metadata" /* 11098 */;
import metadataDefault6 from "metadata" /* 11099 */;
import registerAssetDefault4 from "registerAsset" /* 11100 */;
import metadataDefault7 from "metadata" /* 11101 */;
import metadataDefault8 from "metadata" /* 11102 */;
import registerAssetDefault5 from "registerAsset" /* 11103 */;
import metadataDefault9 from "metadata" /* 11104 */;
import metadataDefault10 from "metadata" /* 11105 */;
import registerAssetDefault6 from "registerAsset" /* 11106 */;
import metadataDefault11 from "metadata" /* 11107 */;
import metadataDefault12 from "metadata" /* 11108 */;
import registerAssetDefault7 from "registerAsset" /* 11109 */;
import metadataDefault13 from "metadata" /* 11110 */;
import metadataDefault14 from "metadata" /* 11111 */;
import registerAssetDefault8 from "registerAsset" /* 11112 */;
import metadataDefault15 from "metadata" /* 11113 */;
import metadataDefault16 from "metadata" /* 11114 */;

const TieredTenureBadge = GuildFeatures.TieredTenureBadge;
let obj = {};
obj = { small: registerAssetDefault, medium: metadataDefault, large: metadataDefault2 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: registerAssetDefault2, medium: metadataDefault3, large: metadataDefault4 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: registerAssetDefault3, medium: metadataDefault5, large: metadataDefault6 };
const obj1 = { small: registerAssetDefault3, medium: metadataDefault5, large: metadataDefault6 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: registerAssetDefault4, medium: metadataDefault7, large: metadataDefault8 };
const obj2 = { small: registerAssetDefault4, medium: metadataDefault7, large: metadataDefault8 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: registerAssetDefault5, medium: metadataDefault9, large: metadataDefault10 };
const obj3 = { small: registerAssetDefault5, medium: metadataDefault9, large: metadataDefault10 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: registerAssetDefault6, medium: metadataDefault11, large: metadataDefault12 };
const obj4 = { small: registerAssetDefault6, medium: metadataDefault11, large: metadataDefault12 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: registerAssetDefault7, medium: metadataDefault13, large: metadataDefault14 };
const obj5 = { small: registerAssetDefault7, medium: metadataDefault13, large: metadataDefault14 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: registerAssetDefault8, medium: metadataDefault15, large: metadataDefault16 };
const obj6 = { small: registerAssetDefault8, medium: metadataDefault15, large: metadataDefault16 };
const result = set.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

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
