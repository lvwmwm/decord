// Module ID: 10949
// Function ID: 85138
// Name: GiftIntentType
// Dependencies: []
// Exports: getGiftIntentTypeForLocation, getPremiumGiftingIntentAnalyticsLocation, parseGiftIntentType

// Module 10949 (GiftIntentType)
const GiftIntentType = require(dependencyMap[0]).GiftIntentType;
const AnalyticsLocations = require(dependencyMap[1]).AnalyticsLocations;
const items = [AnalyticsLocations.FRIEND_ANNIVERSARIES_CHAT, GiftIntentType.FRIEND_ANNIVERSARY];
const items1 = [items, , ];
const items2 = [AnalyticsLocations.FRIEND_ANNIVERSARIES_ACTION_BUTTON, GiftIntentType.FRIEND_ANNIVERSARY];
items1[1] = items2;
const items3 = [AnalyticsLocations.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK, GiftIntentType.FRIEND_ANNIVERSARY];
items1[2] = items3;
const map = new Map(items1);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/premium/gifting/utils/PremiumGiftingIntentUtils.tsx");

export const getPremiumGiftingIntentAnalyticsLocation = function getPremiumGiftingIntentAnalyticsLocation(arg0) {
  if (arg0 === GiftIntentType.FRIEND_ANNIVERSARY) {
    let obj = {};
    ({ FRIEND_ANNIVERSARIES_CHAT: obj2.chat, FRIEND_ANNIVERSARIES_ACTION_BUTTON: obj2.actionButton, FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK: obj2.actionButtonCoachmark } = AnalyticsLocations);
  } else {
    obj = {};
  }
  return obj;
};
export const getGiftIntentTypeForLocation = function getGiftIntentTypeForLocation(arg0) {
  const value = map.get(arg0);
  let tmp2 = null;
  if (null != value) {
    tmp2 = value;
  }
  return tmp2;
};
export const parseGiftIntentType = function parseGiftIntentType(giftIntentType) {
  let tmp = null;
  if ("number" === typeof giftIntentType) {
    tmp = null;
    if (giftIntentType in GiftIntentType) {
      tmp = null;
      if (giftIntentType !== GiftIntentType.UNSPECIFIED) {
        tmp = giftIntentType;
      }
    }
  }
  return tmp;
};
