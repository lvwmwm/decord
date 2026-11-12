// Module ID: 9225
// Function ID: 9226
// Name: ReferralSystemMessage
// Dependencies: [9226, 502, 5243, 575, 9230, 9125, 8588, 9224, 9251, 2]
// Exports: createReferralSystemMessage

// Module 9225 (ReferralSystemMessage)
import nativeDefault from "native" /* 575 */;
import createCommonMessageDefault from "createCommonMessage" /* 9125 */;
import AssetRegistryDefault from "AssetRegistry" /* 9224 */;
import ReferralTrialEmbedRedesign from "ReferralTrialEmbedRedesign" /* 9230 */;
import ReferralTrialEmbed from "ReferralTrialEmbed" /* 9251 */;
import ReferralTrialStore from "ReferralTrialStore" /* 9226 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let obj = { iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG };
let closure_5 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx");

export function createReferralSystemMessage(message) {
  let theme;
  let tmp23Result;
  let tmp8Result;
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
      const tmp8 = require;
      if (null == referralTrialEmbedRedeemable) {
        return null;
      } else {
        const obj2 = { referralTrialOfferInfo: referralTrialEmbedRedeemable, iconUrl: tmp8Result.getAssetUriForEmbed(AssetRegistryDefault) };
        const tmp17 = closure_5(theme);
        const merged = Object.assign(createCommonMessageDefault(message));
        ({ iconTintColor: obj4.iconTintColor, iconDividerColor: obj4.iconDividerColor } = tmp17);
        tmp8Result = tmp8(8588);
        return obj2;
      }
    } else {
      const obj6 = ReferralTrialEmbedRedesign;
      const referralTrialEmbedRedesign = obj6.createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer);
      const tmp23 = require;
      if (null == referralTrialEmbedRedesign) {
        return null;
      } else {
        const obj = { referralTrialOfferInfoRedesign: referralTrialEmbedRedesign, iconUrl: tmp23Result.getAssetUriForEmbed(AssetRegistryDefault), timestamp: undefined };
        const tmp4 = closure_5(theme);
        const merged1 = Object.assign(createCommonMessageDefault(message));
        ({ iconTintColor: obj.iconTintColor, iconDividerColor: obj.iconDividerColor } = tmp4);
        tmp23Result = tmp23(8588);
        return obj;
      }
    }
  }
}
