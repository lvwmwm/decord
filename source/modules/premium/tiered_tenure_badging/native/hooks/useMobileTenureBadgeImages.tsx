// Module ID: 9373
// Function ID: 9374
// Name: useMobileTenureBadgeImages
// Dependencies: [1876, 9374, 9375, 9376, 9377, 9378, 9379, 9380, 9381, 9382, 9383, 9384, 9385, 9386, 9387, 9388, 9389, 9390, 9391, 9392, 9393, 9394, 9395, 9396, 9397, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 9373 (useMobileTenureBadgeImages)
import { TieredTenureBadge } from "GuildFeatures";

let obj = {};
obj = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
const obj1 = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
const obj2 = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
const obj3 = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
const obj4 = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
const obj5 = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
const obj6 = { small: require("registerAsset"), medium: require("metadata"), large: require("metadata") };
const result = require("metadata").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

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
