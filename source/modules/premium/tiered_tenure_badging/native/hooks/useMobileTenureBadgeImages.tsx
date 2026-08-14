// Module ID: 9547
// Function ID: 9548
// Name: useMobileTenureBadgeImages
// Dependencies: [1924, 9548, 9549, 9550, 9551, 9552, 9553, 9554, 9555, 9556, 9557, 9558, 9559, 9560, 9561, 9562, 9563, 9564, 9565, 9566, 9567, 9568, 9569, 9570, 9571, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 9547 (useMobileTenureBadgeImages)
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
