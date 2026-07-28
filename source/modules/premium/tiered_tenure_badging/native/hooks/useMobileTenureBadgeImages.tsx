// Module ID: 8374
// Function ID: 66979
// Name: getMobileTenureBadgeImages
// Dependencies: [1852, 8375, 8376, 8377, 8378, 8379, 8380, 8381, 8382, 8383, 8384, 8385, 8386, 8387, 8388, 8389, 8390, 8391, 8392, 8393, 8394, 8395, 8396, 8397, 8398, 2]
// Exports: useMobileTenureBadgeImages

// Module 8374 (getMobileTenureBadgeImages)
import { TieredTenureBadge } from "GuildFeatures";

function getMobileTenureBadgeImages(id) {
  return obj[id];
}
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
    tmp = getMobileTenureBadgeImages(id);
  }
  return tmp;
};
export { getMobileTenureBadgeImages };
