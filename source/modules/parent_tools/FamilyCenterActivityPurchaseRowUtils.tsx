// Module ID: 14259
// Function ID: 14260
// Name: getCollectibleTypeName
// Dependencies: [5306, 5307, 1924, 1949, 1236, 2335, 1435, 2]
// Exports: getAvatarDecorationPreviewUrl, getProfileEffectPreviewUrl, getPurchaseDisplayInfo, isGuildBoostSubscription

// Module 14259 (getCollectibleTypeName)
import { isAvatarDecorationRecord } from "fromServer";
import { isProfileEffectRecord } from "fromServer";
import GuildFeatures from "GuildFeatures";

let c5;
let closure_6;
function getCollectibleTypeName(type) {
  if (require(1949) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = tmp(1236).intl;
    return intl5.string(importDefault(2335).obi47v);
  } else if (tmp(1949).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl4 = tmp(1236).intl;
    return intl4.string(importDefault(2335).RX8BMR);
  } else if (tmp(1949).CollectiblesItemType.NAMEPLATE === type) {
    const intl3 = tmp(1236).intl;
    return intl3.string(importDefault(2335).nNGEHk);
  } else if (tmp(1949).CollectiblesItemType.BUNDLE === type) {
    const intl2 = tmp(1236).intl;
    return intl2.string(importDefault(2335).VS1fKo);
  } else if (tmp(1949).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = tmp(1236).intl;
    return intl.string(importDefault(2335).JiIY1l);
  } else {
    return "";
  }
}
({ PremiumSubscriptionSKUs: c5, SubscriptionPlanInfo: closure_6 } = GuildFeatures);
const result = require("GuildFeatures").fileFinishedImporting("modules/parent_tools/FamilyCenterActivityPurchaseRowUtils.tsx");

export const PREVIEW_SIZE = 40;
export const NAMEPLATE_ASPECT_RATIO = 5.333333333333333;
export { getCollectibleTypeName };
export const getAvatarDecorationPreviewUrl = function getAvatarDecorationPreviewUrl(product) {
  if (0 === product.items.length) {
    return null;
  } else {
    const first = product.items[0];
    let avatarDecorationURL = null;
    if (isAvatarDecorationRecord(first)) {
      let obj = require(1435) /* getAvatarURL */;
      obj = { avatarDecoration: null, size: 40, canAnimate: true };
      obj = { asset: null };
      obj[0] = first.asset;
      obj[0] = obj;
      avatarDecorationURL = obj.getAvatarDecorationURL(obj);
    }
    return avatarDecorationURL;
  }
};
export const getProfileEffectPreviewUrl = function getProfileEffectPreviewUrl(product) {
  if (0 === product.items.length) {
    return null;
  } else {
    const first = product.items[0];
    let thumbnailPreviewSrc = null;
    if (isProfileEffectRecord(first)) {
      thumbnailPreviewSrc = first.thumbnailPreviewSrc;
    }
    return thumbnailPreviewSrc;
  }
};
export const isGuildBoostSubscription = function isGuildBoostSubscription(subscriptionPlanId) {
  if (null == subscriptionPlanId) {
    return false;
  } else {
    let skuId;
    if (dependencyMap[subscriptionPlanId] != null) {
      skuId = tmp2.skuId;
    }
    return skuId === constants.GUILD;
  }
};
export const getPurchaseDisplayInfo = function getPurchaseDisplayInfo(name, subscriptionPlanId) {
  const isSubscription = null != subscriptionPlanId;
  if (null != name) {
    let displayName = name.name;
    const typeName = getCollectibleTypeName(name.type);
  } else if (isSubscription) {
    if (null != subscriptionPlanId) {
      name = undefined;
      if (dependencyMap[subscriptionPlanId] != null) {
        name = tmp4.name;
      }
      displayName = name;
    }
  }
  return { displayName, typeName, isSubscription };
};
