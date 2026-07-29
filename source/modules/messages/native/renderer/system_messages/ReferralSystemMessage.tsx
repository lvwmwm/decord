// Module ID: 7833
// Function ID: 7834
// Name: createReferralSystemMessage
// Dependencies: [6212, 1218, 4189, 712, 7834, 7746, 7729, 6628, 7843, 2]
// Exports: createReferralSystemMessage

// Module 7833 (createReferralSystemMessage)
import emitChanges from "emitChanges";
import fetchFingerprint from "fetchFingerprint";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { iconTintColor: require("Themes").colors.ICON_STRONG, iconDividerColor: require("Themes").colors.ICON_STRONG };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx");

export const createReferralSystemMessage = function createReferralSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  id = id.getId();
  const referralTrialOfferId = message.referralTrialOfferId;
  if (null == referralTrialOfferId) {
    return null;
  } else {
    relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(referralTrialOfferId);
    let referrer_id;
    if (relevantUserTrialOffer != null) {
      referrer_id = relevantUserTrialOffer.referrer_id;
    }
    if (referrer_id === id) {
      const obj3 = require(7843) /* createReferralTrialEmbedRedeemable */;
      const referralTrialEmbedRedeemable = obj3.createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedeemable) {
        return null;
      } else {
        let obj = {};
        const merged = Object.assign(importDefault(7746)(message));
        obj.referralTrialOfferInfo = referralTrialEmbedRedeemable;
        const tmp17 = createCacheKey(theme);
        obj.iconUrl = tmp8(7729).getAssetUriForEmbed(importDefault(6628));
        ({ iconTintColor: obj4.iconTintColor, iconDividerColor: obj4.iconDividerColor } = tmp17);
        return obj;
      }
      tmp8 = require;
    } else {
      const obj6 = require(7834) /* createReferralTrialEmbedRedesign */;
      const referralTrialEmbedRedesign = obj6.createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedesign) {
        return null;
      } else {
        obj = {};
        const merged1 = Object.assign(importDefault(7746)(message));
        obj.referralTrialOfferInfoRedesign = referralTrialEmbedRedesign;
        const tmp4 = createCacheKey(theme);
        obj.iconUrl = tmp23(7729).getAssetUriForEmbed(importDefault(6628));
        ({ iconTintColor: obj.iconTintColor, iconDividerColor: obj.iconDividerColor } = tmp4);
        obj.timestamp = undefined;
        return obj;
      }
      tmp23 = require;
    }
  }
};
