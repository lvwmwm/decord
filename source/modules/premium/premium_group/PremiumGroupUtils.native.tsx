// Module ID: 7729
// Function ID: 61442
// Name: getPremiumGroupInviteEmbedText
// Dependencies: []
// Exports: getPremiumGroupInviteEmbedText, shouldShowPrimaryReminderNagbar, useCheckoutInstancePremiumGroupPurchaseEligibility, useIsEligibleForPremiumGroupMarketingMaterials, useIsEligibleForPremiumGroupNitroTabMarketingMaterials, useIsEligibleForPremiumGroupPurchase

// Module 7729 (getPremiumGroupInviteEmbedText)
let closure_3 = importDefault(dependencyMap[0]);
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.native.tsx");
for (const key10030 in arg1(arg6[6])) {
  let tmp4 = key10030;
  arg5[key10030] = arg1(arg6[6])[key10030];
}

export const getPremiumGroupInviteEmbedText = function getPremiumGroupInviteEmbedText(sender) {
  let channel;
  let isSender;
  sender = sender.sender;
  ({ channel, isSender } = sender);
  const tmp = callback();
  if (isSender) {
    const tmp7 = function getReceiverName(sender, channel) {
      if (null == channel) {
        return null;
      } else {
        const recipients = channel.recipients;
        let found;
        if (null != recipients) {
          found = recipients.find((arg0) => arg0 !== arg0.id);
        }
        const user = user.getUser(found);
        let nameFromUserResult = null;
        if (null != user) {
          nameFromUserResult = sender(closure_2[2]).nameFromUser(user);
          const obj = sender(closure_2[2]);
        }
        return nameFromUserResult;
      }
    }(sender, channel);
    let tmp8 = null;
    if (null != tmp7) {
      let obj = {};
      const intl4 = arg1(dependencyMap[3]).intl;
      obj = { receiverName: tmp7, premiumGroupProductName: tmp };
      obj.message = intl4.format(importDefault(dependencyMap[4]).MkcFjx, obj);
      const intl5 = arg1(dependencyMap[3]).intl;
      const obj1 = { premiumGroupProductName: tmp };
      obj.header = intl5.formatToPlainString(importDefault(dependencyMap[4]).5uwv8J, obj1);
      const intl6 = arg1(dependencyMap[3]).intl;
      const obj2 = { receiverName: tmp7 };
      obj.body = intl6.formatToPlainString(importDefault(dependencyMap[4]).AmE0B/, obj2);
      tmp8 = obj;
    }
    return tmp8;
  } else {
    obj = arg1(dependencyMap[2]);
    const nameFromUserResult = obj.nameFromUser(sender);
    const obj3 = {};
    const intl = arg1(dependencyMap[3]).intl;
    const obj4 = { senderName: nameFromUserResult, premiumGroupProductName: tmp, helpCenterLink: closure_5 };
    obj3.message = intl.format(importDefault(dependencyMap[4]).51Kv/4, obj4);
    const intl2 = arg1(dependencyMap[3]).intl;
    obj3.header = intl2.string(importDefault(dependencyMap[4]).ssge1y);
    const intl3 = arg1(dependencyMap[3]).intl;
    const obj5 = { senderName: nameFromUserResult, premiumGroupProductName: tmp };
    obj3.body = intl3.formatToPlainString(importDefault(dependencyMap[4]).tej76V, obj5);
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
