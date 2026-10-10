// Module ID: 8078
// Function ID: 8079
// Name: PremiumGroupUtils
// Dependencies: [1390, 4783, 4962, 1126, 3280, 2, 8079]
// Exports: getPremiumGroupInviteEmbedText, useCheckoutInstancePremiumGroupPurchaseEligibility, useIsEligibleForPremiumGroupMarketingMaterials, useIsEligibleForPremiumGroupNitroTabMarketingMaterials, useIsEligibleForPremiumGroupPurchase

// Module 8078 (PremiumGroupUtils)
import intl7 from "intl" /* 1126 */;
import _modDef3280 from "module_3280" /* 3280 */;
import UserUtils from "UserUtils" /* 4962 */;
import _mod8079 from "module_8079" /* 8079 */;
import UserStore from "UserStore" /* 1390 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4783 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: hasOwnProperty } = PremiumGroupConstants);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.native.tsx");
for (const key10025 in _mod8079) {
  exports[key10025] = _mod8079[key10025];
  continue;
}

export const getPremiumGroupInviteEmbedText = function getPremiumGroupInviteEmbedText(isSender) {
  let channel;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj3;
  let obj4;
  let obj6;
  let obj8;
  let sender;
  ({ sender, channel } = isSender);
  isSender = isSender.isSender;
  const tmp = React3();
  if (isSender) {
    let tmp8 = null;
    if (null != channel) {
      const recipients = channel.recipients;
      let found;
      if (recipients != null) {
        found = recipients.find((item) => item !== sender.id);
      }
      const user = UserStore.getUser(found);
      let nameFromUserResult = null;
      if (null != user) {
        const obj5 = UserUtils;
        nameFromUserResult = obj5.nameFromUser(user);
      }
      tmp8 = nameFromUserResult;
    }
    let tmp15 = null;
    if (null != tmp8) {
      const obj2 = { message: intl4.format(_modDef3280.MkcFjx, obj3), header: intl5.formatToPlainString(_modDef3280["5uwv8J"], obj4), body: intl6.formatToPlainString(_modDef3280["AmE0B/"], obj6) };
      intl4 = intl7.intl;
      obj3 = { receiverName: tmp8, premiumGroupProductName: tmp };
      intl5 = intl7.intl;
      obj4 = { premiumGroupProductName: tmp };
      intl6 = intl7.intl;
      tmp15 = obj2;
      obj6 = { receiverName: tmp8 };
    }
    return tmp15;
  } else {
    const obj = UserUtils;
    const nameFromUserResult1 = obj.nameFromUser(sender);
    const obj7 = { message: intl.format(_modDef3280["51Kv/4"], obj8), header: intl2.string(_modDef3280.ssge1y), body: intl3.formatToPlainString(_modDef3280.tej76V, obj9) };
    intl = intl7.intl;
    obj8 = { senderName: nameFromUserResult1, premiumGroupProductName: tmp, helpCenterLink: hasOwnProperty };
    intl2 = intl7.intl;
    intl3 = intl7.intl;
    return obj7;
  }
};
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
