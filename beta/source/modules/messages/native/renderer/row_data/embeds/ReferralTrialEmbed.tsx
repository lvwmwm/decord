// Module ID: 8362
// Function ID: 8363
// Name: ReferralTrialEmbed
// Dependencies: [2045, 1376, 4456, 7729, 7516, 1078, 1378, 4790, 580, 7519, 8241, 8363, 1119, 8364, 4635, 4450, 7728, 8351, 2112, 1613, 8347, 2]
// Exports: createReferralTrialEmbedRedeemable

// Module 8362 (ReferralTrialEmbed)
import nativeDefault from "native" /* 580 */;
import createStyles from "createStyles" /* 4790 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1376 */;
import SubscriptionStore from "SubscriptionStore" /* 4456 */;
import UserOfferStore from "UserOfferStore" /* 7729 */;
import IAPStore from "IAPStore" /* 7516 */;

require = fn;
const HelpdeskArticles = fn(1078).HelpdeskArticles;
let closure_9 = fn(1378).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx");

export const createReferralTrialEmbedRedeemable = function createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer) {
  if (null != message.author) {
    const obj2 = { headerTextColor: nativeDefault.colors.WHITE, titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, footerTextColor: nativeDefault.colors.TEXT_MUTED, subTextColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: nativeDefault.colors.WHITE };
    const tmp47 = createStyles.createNativeStyleProperties(obj2)(theme);
    ({ titleColor, bodyTextColor, backgroundColor } = tmp47);
    ({ headerTextColor, footerTextColor, subTextColor, acceptLabelColor } = tmp47);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        const obj = { backgroundColor, borderColor: backgroundColor, thumbnailCornerRadius: 3, headerLogoUrl: tmp44(8241).getAssetUriForEmbed(tmp46(8363)), headerText: null, headerColor: null, thumbnailUrl: null };
        const intl = tmp44(1119).intl;
        const tmp44Result = tmp44(8241);
        obj.headerText = intl.string(tmp44(1119).t.gtNqJQ).toLocaleLowerCase();
        obj.headerColor = headerTextColor;
        const stringResult = intl.string(tmp44(1119).t.gtNqJQ);
        obj.thumbnailUrl = tmp44(8241).getAssetUriForEmbed(tmp46(8364));
        let userId;
        if (relevantUserTrialOffer != null) {
          userId = relevantUserTrialOffer.userId;
        }
        const user = UserStore.getUser(userId);
        let referrerId;
        if (relevantUserTrialOffer != null) {
          referrerId = relevantUserTrialOffer.referrerId;
        }
        const user1 = UserStore.getUser(referrerId);
        if (null != user) {
          if (null != user1) {
            const name = tmp46(4635).getName(user1);
            const tmp46Result = tmp46(4635);
            const name1 = tmp46(4635).getName(user);
            const intl11 = tmp44(1119).intl;
            const obj3 = { senderUserName: name, recipientUserName: name1 };
            const formatToPlainStringResult = intl11.formatToPlainString(tmp44(1119).t.IiWKwg, obj3);
            if (null == relevantUserTrialOffer) {
              const obj4 = {};
              const merged = Object.assign(obj);
              obj4.titleText = formatToPlainStringResult;
              obj4.titleColor = titleColor;
              const intl9 = tmp44(1119).intl;
              obj4.bodyText = intl9.string(tmp44(1119).t.eEz1N5);
              obj4.bodyTextColor = bodyTextColor;
              obj4.canBeAccepted = false;
              return obj4;
            } else {
              const userTrialOffer = UserOfferStore.getUserTrialOffer(closure_9);
              IAPStore.getOfferIds();
              const _Object = Object;
              const values = Object.values(tmp44(7519).TrialIdToProductOfferId[closure_9]);
              id = undefined;
              if (userTrialOffer != null) {
                id = userTrialOffer.id;
              }
              const tmp7 = relevantUserTrialOffer.id === id && values.every((item) => set.has(item));
              const everyResult = values.every((item) => set.has(item));
              const isPremiumResult = tmp46(4450).isPremium(user);
              let tmp10 = isPremiumResult;
              if (!isPremiumResult) {
                tmp10 = isPremiumResult;
                if (user.id === id) {
                  tmp10 = null != SubscriptionStore.getPremiumTypeSubscription();
                }
              }
              const tmp46Result7 = tmp46(4450);
              const result = tmp44(7728).hasUserTrialOfferExpired(relevantUserTrialOffer);
              if (!tmp14) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const referralTrialOfferExpirationCopy = tmp44(8351).getReferralTrialOfferExpirationCopy(expiresAt.getTime());
                const intl2 = tmp44(1119).intl;
                const tmp44Result9 = tmp44(8351);
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const obj6 = { intervalType: interval, intervalCount: null };
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                let intervalCount;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj7 = { duration: null };
                obj6.intervalCount = intervalCount;
                obj7.duration = tmp44(4450).formatIntervalDuration(obj6);
                const tmp44Result10 = tmp44(4450);
                const replaced = intl2.formatToPlainString(tmp44(1119).t.uj94C5, obj7).replace(/\*/g, "");
                const str = intl2.formatToPlainString(tmp44(1119).t.uj94C5, obj7);
                const tmp16 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp20) {
                  if (!tmp13) {
                    const intl3 = tmp44(1119).intl;
                    const obj8 = { helpdeskArticle: null };
                    const obj9 = { action: "bindOpenUrl", url: tmp46(2112).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                    obj8.helpdeskArticle = obj9;
                    let formatToPartsResult = intl3.formatToParts(tmp44(1119).t.LwCwT9, obj8);
                    const tmp46Result8 = tmp46(2112);
                  }
                  let tmp29 = !result;
                  if (!result) {
                    tmp29 = !tmp10;
                  }
                  if (tmp29) {
                    tmp29 = tmp7;
                  }
                  if (tmp29) {
                    tmp29 = !tmp20;
                  }
                  const obj10 = {};
                  const merged1 = Object.assign(obj);
                  obj10.titleText = formatToPlainStringResult;
                  obj10.titleColor = titleColor;
                  obj10.bodyText = formatToPlainStringResult1;
                  obj10.structuredBodyText = formatToPartsResult;
                  obj10.bodyTextColor = bodyTextColor;
                  obj10.subText = tmp16;
                  obj10.subTextColor = subTextColor;
                  obj10.canBeAccepted = tmp29;
                  let tmp33 = obj10;
                  if (tmp29) {
                    const obj11 = {};
                    const merged2 = Object.assign(obj10);
                    obj11.footerText = replaced;
                    obj11.footerTextColor = footerTextColor;
                    obj11.canBeAccepted = tmp29;
                    const intl8 = tmp44(1119).intl;
                    obj11.acceptLabelText = intl8.string(tmp44(1119).t.bXTClc);
                    obj11.acceptLabelColor = acceptLabelColor;
                    obj11.acceptLabelIconUrl = tmp44(8241).getAssetUriForEmbed(tmp46(8347));
                    tmp33 = obj11;
                    const tmp44Result11 = tmp44(8241);
                  }
                  return tmp33;
                }
              }
              if (tmp10) {
                const intl7 = tmp44(1119).intl;
                const obj12 = { username: name1 };
                formatToPlainStringResult1 = intl7.formatToPlainString(tmp44(1119).t["Mptau/"], obj12);
              } else {
                if (result) {
                  if (!tmp13) {
                    const intl4 = tmp44(1119).intl;
                    formatToPlainStringResult1 = intl4.string(tmp44(1119).t["9SNdf4"]);
                  }
                }
                if (!tmp7) {
                  if (!tmp13) {
                    if (!tmp20) {
                      const intl5 = tmp44(1119).intl;
                      const tmp44Result12 = tmp44(1613);
                      const t = tmp44(1119).t;
                      const obj13 = { helpdeskArticle: null };
                      const obj14 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = tmp44(1613).isMetaQuest();
                      const tmp25 = tmp44(1613).isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj14.url = tmp46(2112).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj13.helpdeskArticle = obj14;
                      let formatToPartsResult1 = intl5.formatToParts(tmp25, obj13);
                      const tmp46Result9 = tmp46(2112);
                    }
                    formatToPartsResult = formatToPartsResult1;
                  }
                }
                const intl6 = tmp44(1119).intl;
                const obj15 = { helpdeskArticle: null, username: null };
                const obj16 = { action: "bindOpenUrl", url: tmp46(2112).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                obj15.helpdeskArticle = obj16;
                obj15.username = name;
                formatToPartsResult1 = intl6.formatToParts(tmp44(1119).t.mVzEG8, obj15);
                const tmp46Result10 = tmp46(2112);
              }
              tmp14 = null == relevantUserTrialOffer.expiresAt || result || tmp10 || null != relevantUserTrialOffer.redeemedAt;
              const tmp44Result8 = tmp44(7728);
            }
            const tmp46Result6 = tmp46(4635);
          }
        }
        const obj17 = {};
        const merged3 = Object.assign(obj);
        const intl10 = tmp44(1119).intl;
        obj17.bodyText = intl10.string(tmp44(1119).t.eEz1N5);
        obj17.bodyTextColor = bodyTextColor;
        obj17.canBeAccepted = false;
        return obj17;
      }
    }
  }
};
