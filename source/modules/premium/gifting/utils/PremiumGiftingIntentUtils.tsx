// Module ID: 10960
// Function ID: 85211
// Name: GiftIntentType
// Dependencies: [1851, 653, 2]
// Exports: getGiftIntentTypeForLocation, getPremiumGiftingIntentAnalyticsLocation, parseGiftIntentType

// Module 10960 (GiftIntentType)
import { GiftIntentType } from "GuildFeatures";
import { AnalyticsLocations } from "ME";

const items = [AnalyticsLocations.FRIEND_ANNIVERSARIES_CHAT, GiftIntentType.FRIEND_ANNIVERSARY];
const items1 = [items, , ];
const items2 = [AnalyticsLocations.FRIEND_ANNIVERSARIES_ACTION_BUTTON, GiftIntentType.FRIEND_ANNIVERSARY];
items1[1] = items2;
const items3 = [AnalyticsLocations.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK, GiftIntentType.FRIEND_ANNIVERSARY];
items1[2] = items3;
const map = new Map(items1);
const result = require("set").fileFinishedImporting("modules/premium/gifting/utils/PremiumGiftingIntentUtils.tsx");

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
