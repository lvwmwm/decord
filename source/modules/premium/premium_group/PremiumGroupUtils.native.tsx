// Module ID: 7825
// Function ID: 61787
// Name: getPremiumGroupInviteEmbedText
// Dependencies: [1849, 3790, 3969, 1212, 2780, 2, 7826]
// Exports: getPremiumGroupInviteEmbedText, shouldShowPrimaryReminderNagbar, useCheckoutInstancePremiumGroupPurchaseEligibility, useIsEligibleForPremiumGroupMarketingMaterials, useIsEligibleForPremiumGroupNitroTabMarketingMaterials, useIsEligibleForPremiumGroupPurchase

// Module 7825 (getPremiumGroupInviteEmbedText)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import TOTAL_PREMIUM_GROUP_MEMBER_SEATS from "TOTAL_PREMIUM_GROUP_MEMBER_SEATS";

let closure_4;
let closure_5;
const require = arg1;
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: closure_5 } = TOTAL_PREMIUM_GROUP_MEMBER_SEATS);
const result = require("conceal").fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.native.tsx");
for (const key10030 in require("getPriceString")) {
  let tmp4 = key10030;
  arg5[key10030] = require("getPriceString")[key10030];
  continue;
}

export const getPremiumGroupInviteEmbedText = function getPremiumGroupInviteEmbedText(sender) {
  let channel;
  let isSender;
  sender = sender.sender;
  ({ channel, isSender } = sender);
  const tmp = callback();
  if (isSender) {
    const tmp7 = (function getReceiverName(sender, channel) {
      let closure_0 = sender;
      if (null == channel) {
        return null;
      } else {
        const recipients = channel.recipients;
        let found;
        if (null != recipients) {
          found = recipients.find((arg0) => arg0 !== sender.id);
        }
        const user = outer1_3.getUser(found);
        let nameFromUserResult = null;
        if (null != user) {
          nameFromUserResult = outer1_0(outer1_2[2]).nameFromUser(user);
          const obj = outer1_0(outer1_2[2]);
        }
        return nameFromUserResult;
      }
    })(sender, channel);
    let tmp8 = null;
    if (null != tmp7) {
      let obj = {};
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj = { receiverName: tmp7, premiumGroupProductName: tmp };
      obj.message = intl4.format(importDefault(2780).MkcFjx, obj);
      const intl5 = require(1212) /* getSystemLocale */.intl;
      const obj1 = { premiumGroupProductName: tmp };
      obj.header = intl5.formatToPlainString(importDefault(2780)["5uwv8J"], obj1);
      const intl6 = require(1212) /* getSystemLocale */.intl;
      const obj2 = { receiverName: tmp7 };
      obj.body = intl6.formatToPlainString(importDefault(2780)["AmE0B/"], obj2);
      tmp8 = obj;
    }
    return tmp8;
  } else {
    obj = require(3969) /* conceal */;
    let nameFromUserResult = obj.nameFromUser(sender);
    const obj3 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj4 = { senderName: nameFromUserResult, premiumGroupProductName: tmp, helpCenterLink: closure_5 };
    obj3.message = intl.format(importDefault(2780)["51Kv/4"], obj4);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj3.header = intl2.string(importDefault(2780).ssge1y);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj5 = { senderName: nameFromUserResult, premiumGroupProductName: tmp };
    obj3.body = intl3.formatToPlainString(importDefault(2780).tej76V, obj5);
    return obj3;
  }
};
export function shouldShowPrimaryReminderNagbar() {
  return false;
}
export function useIsEligibleForPremiumGroupPurchase() {
  return false;
}
export const useCheckoutInstancePremiumGroupPurchaseEligibility = function useCheckoutInstancePremiumGroupPurchaseEligibility(arg0) {
  return false;
};
export function useIsEligibleForPremiumGroupMarketingMaterials() {
  return false;
}
export function useIsEligibleForPremiumGroupNitroTabMarketingMaterials() {
  return false;
}
