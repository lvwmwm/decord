// Module ID: 15179
// Function ID: 15180
// Name: FamilyCenterActivityPurchaseRowUtils
// Dependencies: [7826, 7827, 1378, 1977, 1119, 2486, 1401, 2]
// Exports: getAvatarDecorationPreviewUrl, getProfileEffectPreviewUrl, getPurchaseDisplayInfo, isGuildBoostSubscription

// Module 15179 (FamilyCenterActivityPurchaseRowUtils)
import AvatarUtils from "AvatarUtils" /* 1401 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1977 */;
import _modDef2486 from "module_2486" /* 2486 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7826 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7827 */;
import PremiumConstants from "PremiumConstants" /* 1378 */;
import size from "module_2" /* 2 */;

function getCollectibleTypeName(type) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = tmp(1119).intl;
    return intl5.string(_modDef2486.obi47v);
  } else if (tmp(1977).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl4 = tmp(1119).intl;
    return intl4.string(_modDef2486.RX8BMR);
  } else if (tmp(1977).CollectiblesItemType.NAMEPLATE === type) {
    const intl3 = tmp(1119).intl;
    return intl3.string(_modDef2486.nNGEHk);
  } else if (tmp(1977).CollectiblesItemType.BUNDLE === type) {
    const intl2 = tmp(1119).intl;
    return intl2.string(_modDef2486.VS1fKo);
  } else if (tmp(1977).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = tmp(1119).intl;
    return intl.string(_modDef2486.JiIY1l);
  } else {
    return "";
  }
}
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
({ PremiumSubscriptionSKUs: hasOwnProperty, SubscriptionPlanInfo: metroRequire } = PremiumConstants);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityPurchaseRowUtils.tsx");

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
      const obj2 = { avatarDecoration: null, size: 40, canAnimate: true };
      const obj3 = { asset: first.asset };
      obj2.avatarDecoration = obj3;
      avatarDecorationURL = AvatarUtils.getAvatarDecorationURL(obj2);
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
      let name1;
      if (dependencyMap[subscriptionPlanId] != null) {
        name1 = tmp4.name;
      }
      displayName = name1;
    }
  }
  return { displayName, typeName, isSubscription };
};
