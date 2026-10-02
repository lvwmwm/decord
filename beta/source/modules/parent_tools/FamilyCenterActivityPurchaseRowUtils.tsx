// Module ID: 14426
// Function ID: 14427
// Name: FamilyCenterActivityPurchaseRowUtils
// Dependencies: [6971, 6972, 1380, 1980, 1127, 2490, 1403, 2]
// Exports: getAvatarDecorationPreviewUrl, getProfileEffectPreviewUrl, getPurchaseDisplayInfo, isGuildBoostSubscription

// Module 14426 (FamilyCenterActivityPurchaseRowUtils)
import AvatarUtils from "AvatarUtils" /* 1403 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import _modDef2490 from "module_2490" /* 2490 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 6971 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 6972 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function getCollectibleTypeName(type) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = tmp(1127).intl;
    return intl5.string(_modDef2490.obi47v);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl4 = tmp(1127).intl;
    return intl4.string(_modDef2490.RX8BMR);
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    const intl3 = tmp(1127).intl;
    return intl3.string(_modDef2490.nNGEHk);
  } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
    const intl2 = tmp(1127).intl;
    return intl2.string(_modDef2490.VS1fKo);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = tmp(1127).intl;
    return intl.string(_modDef2490.JiIY1l);
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
  let obj3;
  if (0 === product.items.length) {
    return null;
  } else {
    const first = product.items[0];
    let avatarDecorationURL = null;
    if (isAvatarDecorationRecord(first)) {
      const obj2 = { avatarDecoration: obj3, size: 40, canAnimate: true };
      obj3 = { asset: first.asset };
      const obj = AvatarUtils;
      avatarDecorationURL = obj.getAvatarDecorationURL(obj2);
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
    if (metroRequire[subscriptionPlanId] != null) {
      skuId = tmp2.skuId;
    }
    return skuId === hasOwnProperty.GUILD;
  }
};
export const getPurchaseDisplayInfo = function getPurchaseDisplayInfo(name, subscriptionPlanId) {
  let displayName;
  let typeName;
  const isSubscription = null != subscriptionPlanId;
  if (null != name) {
    displayName = name.name;
    typeName = getCollectibleTypeName(name.type);
  } else if (isSubscription) {
    if (null != subscriptionPlanId) {
      let name1;
      if (metroRequire[subscriptionPlanId] != null) {
        name1 = tmp4.name;
      }
      displayName = name1;
    }
  }
  return { displayName, typeName, isSubscription };
};
