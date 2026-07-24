// Module ID: 8576
// Function ID: 68214
// Name: getMobileTenureBadgeImages
// Dependencies: [1851, 8577, 8578, 8579, 8580, 8581, 8582, 8583, 8584, 8585, 8586, 8587, 8588, 8589, 8590, 8591, 8592, 8593, 8594, 8595, 8596, 8597, 8598, 8599, 8600, 2]
// Exports: useMobileTenureBadgeImages

// Module 8576 (getMobileTenureBadgeImages)
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
