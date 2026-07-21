// Module ID: 7732
// Function ID: 61454
// Name: createReferralSystemMessage
// Dependencies: []
// Exports: createReferralSystemMessage

// Module 7732 (createReferralSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let obj = arg1(dependencyMap[2]);
obj = { iconTintColor: importDefault(dependencyMap[3]).colors.ICON_STRONG, iconDividerColor: importDefault(dependencyMap[3]).colors.ICON_STRONG };
let closure_5 = obj.createNativeStyleProperties(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx");

export const createReferralSystemMessage = function createReferralSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  const id = id.getId();
  const referralTrialOfferId = message.referralTrialOfferId;
  if (null == referralTrialOfferId) {
    return null;
  } else {
    const relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(referralTrialOfferId);
    let referrer_id;
    if (null != relevantUserTrialOffer) {
      referrer_id = relevantUserTrialOffer.referrer_id;
    }
    if (referrer_id === id) {
      let obj = arg1(dependencyMap[8]);
      const referralTrialEmbedRedeemable = obj.createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedeemable) {
        return null;
      } else {
        const tmp29 = callback(theme);
        obj = {};
        const merged = Object.assign(importDefault(dependencyMap[5])(message));
        obj["referralTrialOfferInfo"] = referralTrialEmbedRedeemable;
        obj["iconUrl"] = arg1(dependencyMap[6]).getAssetUriForEmbed(importDefault(dependencyMap[7]));
        obj["iconTintColor"] = tmp29.iconTintColor;
        obj["iconDividerColor"] = tmp29.iconDividerColor;
        return obj;
      }
    } else {
      const obj2 = arg1(dependencyMap[4]);
      const referralTrialEmbedRedesign = obj2.createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedesign) {
        return null;
      } else {
        const tmp22 = callback(theme);
        obj = {};
        const merged1 = Object.assign(importDefault(dependencyMap[5])(message));
        obj["referralTrialOfferInfoRedesign"] = referralTrialEmbedRedesign;
        obj["iconUrl"] = arg1(dependencyMap[6]).getAssetUriForEmbed(importDefault(dependencyMap[7]));
        obj["iconTintColor"] = tmp22.iconTintColor;
        obj["iconDividerColor"] = tmp22.iconDividerColor;
        obj["timestamp"] = undefined;
        return obj;
      }
    }
  }
};
