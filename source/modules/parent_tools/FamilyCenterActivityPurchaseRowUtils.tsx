// Module ID: 13682
// Function ID: 103561
// Name: getCollectibleTypeName
// Dependencies: []
// Exports: getAvatarDecorationPreviewUrl, getProfileEffectPreviewUrl, getPurchaseDisplayInfo, isGuildBoostSubscription

// Module 13682 (getCollectibleTypeName)
function getCollectibleTypeName(type) {
  if (require(dependencyMap[3]).CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = require(dependencyMap[4]).intl;
    return intl5.string(importDefault(dependencyMap[5]).obi47v);
  } else if (require(dependencyMap[3]).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl4 = require(dependencyMap[4]).intl;
    return intl4.string(importDefault(dependencyMap[5]).RX8BMR);
  } else if (require(dependencyMap[3]).CollectiblesItemType.NAMEPLATE === type) {
    const intl3 = require(dependencyMap[4]).intl;
    return intl3.string(importDefault(dependencyMap[5]).nNGEHk);
  } else if (require(dependencyMap[3]).CollectiblesItemType.BUNDLE === type) {
    const intl2 = require(dependencyMap[4]).intl;
    return intl2.string(importDefault(dependencyMap[5]).VS1fKo);
  } else if (require(dependencyMap[3]).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(importDefault(dependencyMap[5]).JiIY1l);
  } else {
    return "";
  }
}
const isAvatarDecorationRecord = require(dependencyMap[0]).isAvatarDecorationRecord;
const isProfileEffectRecord = require(dependencyMap[1]).isProfileEffectRecord;
const _module = require(dependencyMap[2]);
({ PremiumSubscriptionSKUs: closure_5, SubscriptionPlanInfo: closure_6 } = _module);
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityPurchaseRowUtils.tsx");

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
      let obj = require(dependencyMap[6]);
      obj = { minY: "Supercalifragilisticexpialidocious", vbWidth: true, vbHeight: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZl" };
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
    if (null != closure_6[subscriptionPlanId]) {
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
      if (null != closure_6[subscriptionPlanId]) {
        name = tmp4.name;
      }
    }
  }
  const obj = { displayName: name, typeName: tmp2, isSubscription: null != subscriptionPlanId };
  return obj;
};
