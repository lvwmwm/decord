// Module ID: 17065
// Function ID: 17066
// Name: FamilyCenterActivityPurchaseRowUtils
// Dependencies: [7824, 7825, 1387, 2111, 1113, 2664, 1411, 2]
// Exports: getAvatarDecorationPreviewUrl, getProfileEffectPreviewUrl, getPurchaseDisplayInfo, isGuildBoostSubscription

// Module 17065 (FamilyCenterActivityPurchaseRowUtils)
import AvatarUtils from "AvatarUtils" /* 1411 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2111 */;
import _modDef2664 from "module_2664" /* 2664 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7824 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7825 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function getCollectibleTypeName(type) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = tmp(1113).intl;
    return intl5.string(_modDef2664.obi47v);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl4 = tmp(1113).intl;
    return intl4.string(_modDef2664.RX8BMR);
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    const intl3 = tmp(1113).intl;
    return intl3.string(_modDef2664.nNGEHk);
  } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
    const intl2 = tmp(1113).intl;
    return intl2.string(_modDef2664.VS1fKo);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = tmp(1113).intl;
    return intl.string(_modDef2664.JiIY1l);
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
export function getAvatarDecorationPreviewUrl(product) {
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
}
export function getProfileEffectPreviewUrl(product) {
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
}
export function isGuildBoostSubscription(subscriptionPlanId) {
  if (null == subscriptionPlanId) {
    return false;
  } else {
    let skuId;
    if (metroRequire[subscriptionPlanId] != null) {
      skuId = tmp2.skuId;
    }
    return skuId === hasOwnProperty.GUILD;
  }
}
export function getPurchaseDisplayInfo(name, subscriptionPlanId) {
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
}
