// Module ID: 8311
// Function ID: 8312
// Name: ReferralSystemMessage
// Dependencies: [7694, 502, 4756, 576, 8312, 8222, 8204, 8310, 8325, 2]
// Exports: createReferralSystemMessage

// Module 8311 (ReferralSystemMessage)
import nativeDefault from "native" /* 576 */;
import createCommonMessageDefault from "createCommonMessage" /* 8222 */;
import _modDef8310 from "module_8310" /* 8310 */;
import ReferralTrialEmbedRedesign from "ReferralTrialEmbedRedesign" /* 8312 */;
import ReferralTrialEmbed from "ReferralTrialEmbed" /* 8325 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7694 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const createStyles = fn(4756);
let closure_5 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx");

export const createReferralSystemMessage = function createReferralSystemMessage(message) {
  ({ message, theme } = message);
  const id = AuthenticationStore.getId();
  const referralTrialOfferId = message.referralTrialOfferId;
  if (null == referralTrialOfferId) {
    return null;
  } else {
    const relevantUserTrialOffer = ReferralTrialStore.getRelevantUserTrialOffer(referralTrialOfferId);
    let referrerId;
    if (relevantUserTrialOffer != null) {
      referrerId = relevantUserTrialOffer.referrerId;
    }
    if (referrerId === id) {
      const obj3 = ReferralTrialEmbed;
      const referralTrialEmbedRedeemable = obj3.createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedeemable) {
        return null;
      } else {
        const obj2 = {};
        const merged = Object.assign(createCommonMessageDefault(message));
        obj2.referralTrialOfferInfo = referralTrialEmbedRedeemable;
        const tmp17 = closure_5(theme);
        obj2.iconUrl = tmp8(8204).getAssetUriForEmbed(_modDef8310);
        ({ iconTintColor: obj4.iconTintColor, iconDividerColor: obj4.iconDividerColor } = tmp17);
        return obj2;
      }
      tmp8 = require;
    } else {
      const obj6 = ReferralTrialEmbedRedesign;
      const referralTrialEmbedRedesign = obj6.createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedesign) {
        return null;
      } else {
        const obj = {};
        const merged1 = Object.assign(createCommonMessageDefault(message));
        obj.referralTrialOfferInfoRedesign = referralTrialEmbedRedesign;
        const tmp4 = closure_5(theme);
        obj.iconUrl = tmp23(8204).getAssetUriForEmbed(_modDef8310);
        ({ iconTintColor: obj.iconTintColor, iconDividerColor: obj.iconDividerColor } = tmp4);
        obj.timestamp = undefined;
        return obj;
      }
      tmp23 = require;
    }
  }
};
