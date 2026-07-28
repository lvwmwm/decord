// Module ID: 7810
// Function ID: 61861
// Name: createReferralSystemMessage
// Dependencies: [6192, 1194, 4165, 689, 7811, 7723, 7706, 6607, 7820, 2]
// Exports: createReferralSystemMessage

// Module 7810 (createReferralSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { iconTintColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createNativeStyleProperties(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx");

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
    if (null != relevantUserTrialOffer) {
      referrer_id = relevantUserTrialOffer.referrer_id;
    }
    if (referrer_id === id) {
      let obj = require(7820) /* createReferralTrialEmbedRedeemable */;
      const referralTrialEmbedRedeemable = obj.createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedeemable) {
        return null;
      } else {
        const tmp29 = _createForOfIteratorHelperLoose(theme);
        obj = {};
        const merged = Object.assign(importDefault(7723)(message));
        obj["referralTrialOfferInfo"] = referralTrialEmbedRedeemable;
        obj["iconUrl"] = require(7706) /* frozen */.getAssetUriForEmbed(importDefault(6607));
        obj["iconTintColor"] = tmp29.iconTintColor;
        obj["iconDividerColor"] = tmp29.iconDividerColor;
        return obj;
      }
    } else {
      const obj2 = require(7811) /* createReferralTrialEmbedRedesign */;
      const referralTrialEmbedRedesign = obj2.createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedesign) {
        return null;
      } else {
        const tmp22 = _createForOfIteratorHelperLoose(theme);
        obj = {};
        const merged1 = Object.assign(importDefault(7723)(message));
        obj["referralTrialOfferInfoRedesign"] = referralTrialEmbedRedesign;
        obj["iconUrl"] = require(7706) /* frozen */.getAssetUriForEmbed(importDefault(6607));
        obj["iconTintColor"] = tmp22.iconTintColor;
        obj["iconDividerColor"] = tmp22.iconDividerColor;
        obj["timestamp"] = undefined;
        return obj;
      }
    }
  }
};
