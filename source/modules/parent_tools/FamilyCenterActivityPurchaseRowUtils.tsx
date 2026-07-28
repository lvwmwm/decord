// Module ID: 13912
// Function ID: 106401
// Name: getCollectibleTypeName
// Dependencies: [5785, 5786, 1852, 1877, 1212, 2199, 1392, 2]
// Exports: getAvatarDecorationPreviewUrl, getProfileEffectPreviewUrl, getPurchaseDisplayInfo, isGuildBoostSubscription

// Module 13912 (getCollectibleTypeName)
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import { isProfileEffectRecord } from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

let closure_5;
let closure_6;
function getCollectibleTypeName(type) {
  if (require(1877) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(importDefault(2199).obi47v);
  } else if (require(1877) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(importDefault(2199).RX8BMR);
  } else if (require(1877) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(importDefault(2199).nNGEHk);
  } else if (require(1877) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(importDefault(2199).VS1fKo);
  } else if (require(1877) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2199).JiIY1l);
  } else {
    return "";
  }
}
({ PremiumSubscriptionSKUs: closure_5, SubscriptionPlanInfo: closure_6 } = GuildFeatures);
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
      let obj = require(1392) /* getAvatarURL */;
      obj = { avatarDecoration: null, size: 40, canAnimate: true };
      obj = { asset: first.asset };
      obj.avatarDecoration = obj;
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
    if (null != dependencyMap[subscriptionPlanId]) {
      skuId = tmp2.skuId;
    }
    return skuId === constants.GUILD;
  }
};
export const getPurchaseDisplayInfo = function getPurchaseDisplayInfo(name, subscriptionPlanId) {
  if (null != name) {
    name = name.name;
    const tmp2 = getCollectibleTypeName(name.type);
  } else if (tmp) {
    if (null != subscriptionPlanId) {
      name = undefined;
      if (null != dependencyMap[subscriptionPlanId]) {
        name = tmp4.name;
      }
    }
  }
  const obj = { displayName: name, typeName: tmp2, isSubscription: null != subscriptionPlanId };
  return obj;
};
